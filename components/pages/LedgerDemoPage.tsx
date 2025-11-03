import React, { useState, useEffect, useCallback } from 'react';
import { produce } from 'https://esm.sh/immer@10.1.1';
import { Page, LedgerTab, IncomeTransaction, ExpenseTransaction, Category, TransactionType, AnyTransaction } from '../../types';
import DashboardTab from '../ledger/DashboardTab';
import TransactionsTab from '../ledger/TransactionsTab';
import ReportsTab from '../ledger/ReportsTab';
import SettingsTab from '../ledger/SettingsTab';

const defaultIncomeCategories: Category[] = [
    { id: 'inc-1', name: 'Client Payment', type: 'income' },
    { id: 'inc-2', name: 'Sales', type: 'income' },
    { id: 'inc-3', name: 'Reimbursement', type: 'income' },
];

const defaultExpenseCategories: Category[] = [
    { id: 'exp-1', name: 'Office Supplies', type: 'expense' },
    { id: 'exp-2', name: 'Marketing', type: 'expense' },
    { id: 'exp-3', name: 'Software', type: 'expense' },
    { id: 'exp-4', name: 'Travel', type: 'expense' },
];

const useLedgerState = <T,>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [state, setState] = useState<T>(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : defaultValue;
        } catch (error) {
            console.error(`Error parsing localStorage key "${key}":`, error);
            return defaultValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    }, [key, state]);

    return [state, setState];
};

const LedgerDemoPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<LedgerTab>('dashboard');
    const [incomeTransactions, setIncomeTransactions] = useLedgerState<IncomeTransaction[]>('ledgerIncomeTransactions', []);
    const [expenseTransactions, setExpenseTransactions] = useLedgerState<ExpenseTransaction[]>('ledgerExpenseTransactions', []);
    const [incomeCategories, setIncomeCategories] = useLedgerState<Category[]>('ledgerIncomeCategories', defaultIncomeCategories);
    const [expenseCategories, setExpenseCategories] = useLedgerState<Category[]>('ledgerExpenseCategories', defaultExpenseCategories);
    
    const handleAddOrUpdateTransaction = useCallback((transaction: AnyTransaction, type: TransactionType) => {
        const isUpdate = 'id' in transaction && transaction.id;
        const newTransaction = isUpdate ? transaction : { ...transaction, id: new Date().toISOString() };

        if (type === 'income') {
            setIncomeTransactions(produce(draft => {
                const index = draft.findIndex(t => t.id === newTransaction.id);
                if (index !== -1) {
                    draft[index] = newTransaction as IncomeTransaction;
                } else {
                    draft.unshift(newTransaction as IncomeTransaction);
                }
            }));
        } else {
            setExpenseTransactions(produce(draft => {
                const index = draft.findIndex(t => t.id === newTransaction.id);
                if (index !== -1) {
                    draft[index] = newTransaction as ExpenseTransaction;
                } else {
                    draft.unshift(newTransaction as ExpenseTransaction);
                }
            }));
        }
    }, [setIncomeTransactions, setExpenseTransactions]);
    
    const handleDeleteTransaction = useCallback((id: string, type: TransactionType) => {
        if (type === 'income') {
            setIncomeTransactions(prev => prev.filter(t => t.id !== id));
        } else {
            setExpenseTransactions(prev => prev.filter(t => t.id !== id));
        }
    }, [setIncomeTransactions, setExpenseTransactions]);

    const handleCategoryUpdate = (newCategories: Category[], type: TransactionType) => {
        if (type === 'income') {
            setIncomeCategories(newCategories);
        } else {
            setExpenseCategories(newCategories);
        }
    };
    
    const handleResetData = () => {
        if (window.confirm("Are you sure you want to reset all demo data? This action cannot be undone.")) {
            setIncomeTransactions([]);
            setExpenseTransactions([]);
            setIncomeCategories(defaultIncomeCategories);
            setExpenseCategories(defaultExpenseCategories);
            setActiveTab('dashboard');
        }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return <DashboardTab income={incomeTransactions} expenses={expenseTransactions} />;
            case 'income':
                return <TransactionsTab 
                            type="income" 
                            transactions={incomeTransactions} 
                            categories={incomeCategories}
                            onSave={handleAddOrUpdateTransaction}
                            onDelete={handleDeleteTransaction}
                        />;
            case 'expenses':
                return <TransactionsTab 
                            type="expense" 
                            transactions={expenseTransactions} 
                            categories={expenseCategories} 
                            onSave={handleAddOrUpdateTransaction}
                            onDelete={handleDeleteTransaction}
                        />;
            case 'reports':
                return <ReportsTab income={incomeTransactions} expenses={expenseTransactions} />;
            case 'settings':
                return <SettingsTab 
                            incomeCategories={incomeCategories} 
                            expenseCategories={expenseCategories} 
                            onCategoryUpdate={handleCategoryUpdate}
                            onResetData={handleResetData}
                        />;
            default:
                return null;
        }
    };

    const TabButton: React.FC<{ tab: LedgerTab; label: string }> = ({ tab, label }) => (
        <button
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                activeTab === tab ? 'bg-brand-gold text-brand-dark' : 'text-gray-300 hover:bg-gray-700'
            }`}
        >
            {label}
        </button>
    );

    return (
        <div 
            className="relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
        >
            <div className="absolute inset-0 bg-brand-dark/60"></div>
            
            <div className="relative z-10 py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-base font-semibold leading-7 text-brand-gold">Live Demo</h2>
                        <p className="mt-2 text-4xl md:text-5xl font-serif font-bold tracking-tight text-white">
                            Keystone Ledger
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                           Experience our complimentary bookkeeping tool. This is a full-featured demo where you can manage transactions, view reports, and more. Your data is saved locally in your browser.
                        </p>
                    </div>

                    <div className="mt-12 max-w-7xl mx-auto">
                        <div className="mb-6">
                             <div className="flex flex-wrap items-center gap-2 p-2 rounded-lg bg-gray-900/40 border border-gray-700">
                                <TabButton tab="dashboard" label="Dashboard" />
                                <TabButton tab="income" label="Income" />
                                <TabButton tab="expenses" label="Expenses" />
                                <TabButton tab="reports" label="Reports" />
                                <TabButton tab="settings" label="Settings" />
                            </div>
                        </div>
                        <div className="bg-gray-900/40 p-4 sm:p-8 rounded-xl border border-gray-700 min-h-[60vh]">
                            {renderTabContent()}
                        </div>
                    </div>
                    
                    {/* Videos Section */}
                    <div className="mt-24 max-w-7xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-white">
                                Learn More About The Keystone Ledger
                            </h2>
                        </div>
                         <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h3 className="text-xl font-serif font-bold text-brand-gold">Ledger Promotion</h3>
                                <div className="aspect-w-16 aspect-h-9 bg-gray-900/40 rounded-xl border border-gray-700 overflow-hidden shadow-2xl">
                                    <iframe 
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/wswkrEFEVV8" 
                                        title="Keystone Ledger Promotion" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowFullScreen
                                        style={{aspectRatio: "16/9"}}
                                    ></iframe>
                                </div>
                            </div>
                            <div className="space-y-4">
                                 <h3 className="text-xl font-serif font-bold text-brand-gold">Tutorial Walkthrough</h3>
                                <div className="aspect-w-16 aspect-h-9 bg-gray-900/40 rounded-xl border border-gray-700 overflow-hidden shadow-2xl">
                                    <iframe 
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/qDI22EpGLYE" 
                                        title="Keystone Ledger Tutorial" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowFullScreen
                                        style={{aspectRatio: "16/9"}}
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LedgerDemoPage;