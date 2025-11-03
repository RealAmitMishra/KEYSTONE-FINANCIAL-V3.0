import React, { useState, useMemo } from 'react';
import { IncomeTransaction, ExpenseTransaction } from '../../types';

interface ReportsTabProps {
    income: IncomeTransaction[];
    expenses: ExpenseTransaction[];
}

const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
const getISODate = (date: Date) => date.toISOString().split('T')[0];

const ReportsTab: React.FC<ReportsTabProps> = ({ income, expenses }) => {
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    const [startDate, setStartDate] = useState(getISODate(firstDayOfMonth));
    const [endDate, setEndDate] = useState(getISODate(today));

    const {
        filteredIncome,
        filteredExpenses,
        totalIncome,
        totalExpenses,
        netProfit,
        incomeByCategory,
        expensesByCategory
    } = useMemo(() => {
        const start = new Date(startDate).getTime();
        const end = new Date(endDate).getTime() + (24 * 60 * 60 * 1000 - 1); // include the entire end day

        const filteredIncome = income.filter(t => {
            const tDate = new Date(t.date).getTime();
            return tDate >= start && tDate <= end;
        });

        const filteredExpenses = expenses.filter(t => {
            const tDate = new Date(t.date).getTime();
            return tDate >= start && tDate <= end;
        });
        
        const groupByCategory = (transactions: (IncomeTransaction | ExpenseTransaction)[]) => {
             return transactions.reduce((acc, t) => {
                acc[t.category] = (acc[t.category] || 0) + t.amount;
                return acc;
            }, {} as Record<string, number>);
        };
        
        const incomeByCategory = groupByCategory(filteredIncome);
        const expensesByCategory = groupByCategory(filteredExpenses);

        const totalIncome = filteredIncome.reduce((sum, t) => sum + t.amount, 0);
        const totalExpenses = filteredExpenses.reduce((sum, t) => sum + t.amount, 0);
        const netProfit = totalIncome - totalExpenses;

        return { filteredIncome, filteredExpenses, totalIncome, totalExpenses, netProfit, incomeByCategory, expensesByCategory };

    }, [startDate, endDate, income, expenses]);

    return (
        <div className="animate-fade-in">
            <h2 className="text-2xl font-serif font-bold text-brand-gold mb-6">Profit & Loss Statement</h2>

            {/* Date Filters */}
            <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-brand-dark/40 rounded-lg">
                <div>
                    <label htmlFor="start-date" className="block text-sm font-medium text-gray-300">Start Date</label>
                    <input
                        type="date"
                        id="start-date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="mt-1 block rounded-md border-gray-600 bg-gray-700 py-2 px-3 text-white shadow-sm focus:border-brand-gold focus:ring-brand-gold"
                    />
                </div>
                 <div>
                    <label htmlFor="end-date" className="block text-sm font-medium text-gray-300">End Date</label>
                    <input
                        type="date"
                        id="end-date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="mt-1 block rounded-md border-gray-600 bg-gray-700 py-2 px-3 text-white shadow-sm focus:border-brand-gold focus:ring-brand-gold"
                    />
                </div>
            </div>

            {/* Report */}
            <div className="bg-brand-dark/40 p-6 rounded-lg">
                 <div className="space-y-6">
                    {/* Income Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-green-400 border-b-2 border-green-400/50 pb-2 mb-3">Revenue</h3>
                        {Object.entries(incomeByCategory).map(([category, amount]) => (
                            <div key={category} className="flex justify-between py-1 text-gray-300">
                                <span>{category}</span>
                                {/* Fix: Cast amount to number as it is inferred as unknown. */}
                                <span>{formatCurrency(amount as number)}</span>
                            </div>
                        ))}
                         <div className="flex justify-between font-bold text-white border-t border-gray-600 mt-2 pt-2">
                            <span>Total Revenue</span>
                            <span>{formatCurrency(totalIncome)}</span>
                        </div>
                    </div>
                     {/* Expenses Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-red-400 border-b-2 border-red-400/50 pb-2 mb-3">Expenses</h3>
                        {Object.entries(expensesByCategory).map(([category, amount]) => (
                            <div key={category} className="flex justify-between py-1 text-gray-300">
                                <span>{category}</span>
                                {/* Fix: Cast amount to number as it is inferred as unknown. */}
                                <span>{formatCurrency(amount as number)}</span>
                            </div>
                        ))}
                         <div className="flex justify-between font-bold text-white border-t border-gray-600 mt-2 pt-2">
                            <span>Total Expenses</span>
                            <span>{formatCurrency(totalExpenses)}</span>
                        </div>
                    </div>
                     {/* Net Profit */}
                    <div className="border-t-2 border-brand-gold pt-4">
                        <div className={`flex justify-between text-xl font-bold ${netProfit >= 0 ? 'text-white' : 'text-red-400'}`}>
                            <span>Net Profit</span>
                            <span>{formatCurrency(netProfit)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportsTab;