import React from 'react';
import { IncomeTransaction, ExpenseTransaction, AnyTransaction } from '../../types';

interface DashboardTabProps {
    income: IncomeTransaction[];
    expenses: ExpenseTransaction[];
}

const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

const CategoryBarChart: React.FC<{ data: { name: string, amount: number }[], color: string }> = ({ data, color }) => {
    const total = data.reduce((sum, item) => sum + item.amount, 0);
    if (total === 0) return <div className="text-gray-500 text-center py-4">No data to display.</div>;

    return (
        <div className="space-y-3">
            {data.map(item => (
                <div key={item.name} className="space-y-1">
                    <div className="flex justify-between text-sm text-gray-300">
                        <span>{item.name}</span>
                        <span>{formatCurrency(item.amount)}</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2.5">
                        <div className={`${color} h-2.5 rounded-full`} style={{ width: `${(item.amount / total) * 100}%` }}></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const DashboardTab: React.FC<DashboardTabProps> = ({ income, expenses }) => {
    const totalIncome = income.reduce((sum, t) => sum + t.amount, 0);
    const totalExpenses = expenses.reduce((sum, t) => sum + t.amount, 0);
    const netProfit = totalIncome - totalExpenses;

    const groupByCategory = (transactions: AnyTransaction[]) => {
        const grouped = transactions.reduce((acc, t) => {
            acc[t.category] = (acc[t.category] || 0) + t.amount;
            return acc;
        }, {} as Record<string, number>);
        return Object.entries(grouped).map(([name, amount]) => ({ name, amount })).sort((a, b) => b.amount - a.amount);
    };

    const incomeByCategory = groupByCategory(income);
    const expensesByCategory = groupByCategory(expenses);

    const recentTransactions = [...income, ...expenses]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5);
        
    const maxVal = Math.max(totalIncome, totalExpenses, 1);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
            {/* Left Column - Metrics & Chart */}
            <div className="lg:col-span-2 space-y-6">
                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-brand-dark/40 p-4 rounded-lg">
                        <h3 className="text-sm font-medium text-gray-400">Total Income</h3>
                        <p className="mt-1 text-2xl font-semibold text-green-400">{formatCurrency(totalIncome)}</p>
                    </div>
                    <div className="bg-brand-dark/40 p-4 rounded-lg">
                        <h3 className="text-sm font-medium text-gray-400">Total Expenses</h3>
                        <p className="mt-1 text-2xl font-semibold text-red-400">{formatCurrency(totalExpenses)}</p>
                    </div>
                    <div className="bg-brand-dark/40 p-4 rounded-lg">
                        <h3 className="text-sm font-medium text-gray-400">Net Profit</h3>
                        <p className={`mt-1 text-2xl font-semibold ${netProfit >= 0 ? 'text-white' : 'text-red-400'}`}>{formatCurrency(netProfit)}</p>
                    </div>
                </div>

                {/* Income vs Expense Chart */}
                <div className="bg-brand-dark/40 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-brand-gold mb-4">Income vs. Expenses</h3>
                    <div className="space-y-4">
                        <div>
                            <span className="text-sm text-green-400">Income</span>
                            <div className="w-full bg-gray-600 rounded-full h-6 mt-1">
                                <div className="bg-green-500 h-6 rounded-full flex items-center justify-end pr-2 text-sm text-white font-bold" style={{ width: `${(totalIncome / maxVal) * 100}%` }}>
                                    {formatCurrency(totalIncome)}
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="text-sm text-red-400">Expenses</span>
                             <div className="w-full bg-gray-600 rounded-full h-6 mt-1">
                                <div className="bg-red-500 h-6 rounded-full flex items-center justify-end pr-2 text-sm text-white font-bold" style={{ width: `${(totalExpenses / maxVal) * 100}%` }}>
                                    {formatCurrency(totalExpenses)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category Breakdowns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-brand-dark/40 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-brand-gold mb-4">Income by Category</h3>
                        <CategoryBarChart data={incomeByCategory} color="bg-green-500" />
                    </div>
                    <div className="bg-brand-dark/40 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-brand-gold mb-4">Expenses by Category</h3>
                        <CategoryBarChart data={expensesByCategory} color="bg-red-500" />
                    </div>
                </div>
            </div>

            {/* Right Column - Recent Transactions */}
            <div className="lg:col-span-1 bg-brand-dark/40 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-brand-gold mb-4">Recent Transactions</h3>
                <ul className="space-y-3">
                    {recentTransactions.length > 0 ? recentTransactions.map(t => {
                        const isIncome = 'client' in t;
                        return (
                            <li key={t.id} className="flex justify-between items-center text-sm p-2 bg-gray-700/50 rounded-md">
                                <div>
                                    <p className="font-medium text-white">{t.description}</p>
                                    <p className="text-xs text-gray-400">{new Date(t.date).toLocaleDateString()}</p>
                                </div>
                                <span className={`font-semibold ${isIncome ? 'text-green-400' : 'text-red-400'}`}>
                                    {isIncome ? '+' : '-'}{formatCurrency(t.amount)}
                                </span>
                            </li>
                        );
                    }) : <p className="text-gray-500 text-center pt-8">No recent transactions.</p>}
                </ul>
            </div>
        </div>
    );
};

export default DashboardTab;
