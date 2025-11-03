import React, { useState } from 'react';
import { produce } from 'https://esm.sh/immer@10.1.1';
import { Category, TransactionType } from '../../types';

interface SettingsTabProps {
    incomeCategories: Category[];
    expenseCategories: Category[];
    onCategoryUpdate: (newCategories: Category[], type: TransactionType) => void;
    onResetData: () => void;
}

const CategoryManager: React.FC<{
    title: string;
    type: TransactionType;
    categories: Category[];
    onUpdate: (newCategories: Category[]) => void;
}> = ({ title, type, categories, onUpdate }) => {
    const [newCategoryName, setNewCategoryName] = useState('');

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (newCategoryName.trim() === '' || categories.some(c => c.name.toLowerCase() === newCategoryName.trim().toLowerCase())) {
            setNewCategoryName('');
            return;
        }
        const newCategory: Category = {
            id: new Date().toISOString(),
            name: newCategoryName.trim(),
            type,
        };
        onUpdate([...categories, newCategory]);
        setNewCategoryName('');
    };
    
    const handleDelete = (id: string) => {
        onUpdate(categories.filter(c => c.id !== id));
    };

    return (
        <div className="bg-brand-dark/40 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-brand-gold mb-4">{title}</h3>
            <ul className="space-y-2 mb-4">
                {categories.map(category => (
                    <li key={category.id} className="flex justify-between items-center bg-gray-700/50 p-2 rounded-md">
                        <span className="text-white">{category.name}</span>
                        <button onClick={() => handleDelete(category.id)} className="text-gray-400 hover:text-white font-bold text-lg">&times;</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAdd} className="flex gap-2">
                <input
                    type="text"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    placeholder="Add new category"
                    className="flex-grow rounded-md border-gray-600 bg-gray-700 py-2 px-3 text-white shadow-sm focus:border-brand-gold focus:ring-brand-gold"
                />
                <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors">Add</button>
            </form>
        </div>
    );
};

const SettingsTab: React.FC<SettingsTabProps> = ({ incomeCategories, expenseCategories, onCategoryUpdate, onResetData }) => {
    return (
        <div className="animate-fade-in">
            <h2 className="text-2xl font-serif font-bold text-brand-gold mb-6">Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <CategoryManager
                    title="Income Categories"
                    type="income"
                    categories={incomeCategories}
                    onUpdate={(newCats) => onCategoryUpdate(newCats, 'income')}
                />
                <CategoryManager
                    title="Expense Categories"
                    type="expense"
                    categories={expenseCategories}
                    onUpdate={(newCats) => onCategoryUpdate(newCats, 'expense')}
                />
            </div>

            <div className="bg-red-900/40 border border-red-500/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-300">Reset Data</h3>
                <p className="mt-2 text-gray-300">This will permanently delete all transactions and reset categories to their default state. This action cannot be undone.</p>
                <button 
                    onClick={onResetData}
                    className="mt-4 bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-500 transition-colors"
                >
                    Reset All Demo Data
                </button>
            </div>
        </div>
    );
};

export default SettingsTab;
