import React, { useState, useEffect } from 'react';
import { produce } from 'https://esm.sh/immer@10.1.1';
import { AnyTransaction, Category, IncomeTransaction, TransactionType, TransactionStatus, PaymentMethod } from '../../types';

interface TransactionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (transaction: AnyTransaction) => void;
    transactionToEdit: AnyTransaction | null;
    type: TransactionType;
    categories: Category[];
}

const getISODate = (date: Date) => date.toISOString().split('T')[0];

const TransactionModal: React.FC<TransactionModalProps> = ({ isOpen, onClose, onSave, transactionToEdit, type, categories }) => {
    const isEditing = !!transactionToEdit;
    const initialFormState = {
        date: getISODate(new Date()),
        description: '',
        amount: 0,
        category: categories.length > 0 ? categories[0].name : '',
        paymentMethod: 'Other' as PaymentMethod,
        status: 'Paid' as TransactionStatus,
        client: '',
        vendor: '',
        ...transactionToEdit,
    };
    
    const [formState, setFormState] = useState(initialFormState);

    useEffect(() => {
        setFormState({
            date: getISODate(new Date()),
            description: '',
            amount: 0,
            category: categories.length > 0 ? categories[0].name : '',
            paymentMethod: 'Other' as PaymentMethod,
            status: 'Paid' as TransactionStatus,
            client: '',
            vendor: '',
            ...transactionToEdit
        });
    }, [transactionToEdit, categories]);

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState(produce(draft => {
            if (name === 'amount') {
                draft[name] = parseFloat(value);
            } else {
                draft[name] = value;
            }
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const transactionData = { ...formState };
        if (type === 'income') {
            delete transactionData.vendor;
        } else {
            delete transactionData.client;
        }
        onSave(transactionData);
    };

    const paymentMethods: PaymentMethod[] = ['Credit Card', 'Bank Transfer', 'Cash', 'Check', 'Other'];
    const statuses: TransactionStatus[] = ['Paid', 'Unpaid', 'Pending'];

    const InputField: React.FC<{ name: string, label: string, type?: string, required?: boolean, children?: React.ReactNode }> = ({ name, label, type = "text", required = true, children }) => (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-300">{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                value={formState[name as keyof typeof formState] || ''}
                onChange={handleChange}
                required={required}
                className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 py-2 px-3 text-white shadow-sm focus:border-brand-gold focus:ring-brand-gold"
                step={type === 'number' ? '0.01' : undefined}
            />
        </div>
    );
    
     const SelectField: React.FC<{ name: string, label: string, options: string[] }> = ({ name, label, options }) => (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-300">{label}</label>
            <select
                name={name}
                id={name}
                value={formState[name as keyof typeof formState]}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 py-2 px-3 text-white shadow-sm focus:border-brand-gold focus:ring-brand-gold"
            >
                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
        </div>
    );

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="relative bg-brand-dark border border-brand-gold/50 rounded-lg shadow-xl max-w-lg w-full p-8 animate-fade-scale-in" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-serif font-bold text-brand-gold mb-6">{isEditing ? 'Edit' : 'Add'} {type} Transaction</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField name="date" label="Date" type="date" />
                        <InputField name={type === 'income' ? 'client' : 'vendor'} label={type === 'income' ? 'Client' : 'Vendor'} />
                        <SelectField name="category" label="Category" options={categories.map(c => c.name)} />
                        <InputField name="amount" label="Amount" type="number" />
                        <SelectField name="paymentMethod" label="Payment Method" options={paymentMethods} />
                        <SelectField name="status" label="Status" options={statuses} />
                    </div>
                    <div className="sm:col-span-2">
                        <InputField name="description" label="Description" />
                    </div>
                    <div className="pt-4 flex justify-end gap-4">
                        <button type="button" onClick={onClose} className="bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-500 transition-colors">Cancel</button>
                        <button type="submit" className="bg-brand-gold text-brand-dark font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors">Save Transaction</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TransactionModal;
