
import React, { useState } from 'react';
// Fix: Import ExpenseTransaction to correctly cast the transaction type.
import { AnyTransaction, Category, IncomeTransaction, TransactionType, ExpenseTransaction } from '../../types';
import TransactionModal from './TransactionModal';

interface TransactionsTabProps {
    type: TransactionType;
    transactions: AnyTransaction[];
    categories: Category[];
    onSave: (transaction: AnyTransaction, type: TransactionType) => void;
    onDelete: (id: string, type: TransactionType) => void;
}

const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

const TransactionsTab: React.FC<TransactionsTabProps> = ({ type, transactions, categories, onSave, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [transactionToEdit, setTransactionToEdit] = useState<AnyTransaction | null>(null);

    const title = type === 'income' ? 'Income' : 'Expenses';
    const headers = type === 'income' 
        ? ['Date', 'Client', 'Category', 'Description', 'Payment Method', 'Status', 'Amount']
        : ['Date', 'Vendor', 'Category', 'Description', 'Payment Method', 'Status', 'Amount'];
    
    const handleAddNew = () => {
        setTransactionToEdit(null);
        setIsModalOpen(true);
    };

    const handleEdit = (transaction: AnyTransaction) => {
        setTransactionToEdit(transaction);
        setIsModalOpen(true);
    };

    return (
        <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif font-bold text-brand-gold">{title} Transactions</h2>
                <button 
                    onClick={handleAddNew}
                    className="bg-brand-gold text-brand-dark font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105"
                >
                    Add New {title}
                </button>
            </div>
            
            <div className="overflow-x-auto bg-brand-dark/40 rounded-lg">
                <table className="min-w-full text-sm text-left text-gray-300">
                    <thead className="text-xs text-brand-gold uppercase bg-gray-700/50">
                        <tr>
                            {headers.map(header => <th key={header} className="px-6 py-3 whitespace-nowrap">{header}</th>)}
                            <th className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.length > 0 ? transactions.map(t => (
                            <tr key={t.id} className="border-b border-gray-700 hover:bg-gray-800/50">
                                <td className="px-6 py-4 whitespace-nowrap">{new Date(t.date).toLocaleDateString()}</td>
                                {/* Fix: Cast transaction to the correct type to access 'client' or 'vendor' properties. */}
                                <td className="px-6 py-4 whitespace-nowrap">{type === 'income' ? (t as IncomeTransaction).client : (t as ExpenseTransaction).vendor}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{t.category}</td>
                                <td className="px-6 py-4 max-w-xs truncate" title={t.description}>{t.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{t.paymentMethod}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{t.status}</td>
                                <td className={`px-6 py-4 font-semibold whitespace-nowrap ${type === 'income' ? 'text-green-400' : 'text-red-400'}`}>{formatCurrency(t.amount)}</td>
                                <td className="px-6 py-4 text-right whitespace-nowrap">
                                    <button onClick={() => handleEdit(t)} className="font-medium text-blue-400 hover:underline mr-4">Edit</button>
                                    <button onClick={() => onDelete(t.id, type)} className="font-medium text-red-400 hover:underline">Delete</button>
                                </td>
                            </tr>
                        )) : (
                           <tr>
                                <td colSpan={headers.length + 1} className="text-center py-12 text-gray-500">No {type} transactions yet.</td>
                           </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <TransactionModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSave={(transaction) => {
                        onSave(transaction, type);
                        setIsModalOpen(false);
                    }}
                    transactionToEdit={transactionToEdit}
                    type={type}
                    categories={categories}
                />
            )}
        </div>
    );
};

export default TransactionsTab;
