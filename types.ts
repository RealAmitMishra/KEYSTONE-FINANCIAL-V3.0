// Fix: Import ReactNode to provide the correct type for the icon property.
import type { ReactNode } from 'react';

export enum Page {
  Home,
  About,
  Services,
  Contact,
  Resources,
  FAQ,
  LedgerDemo,
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  details: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

// Ledger Demo Types
export type TransactionType = 'income' | 'expense';
export type TransactionStatus = 'Paid' | 'Unpaid' | 'Pending';
export type PaymentMethod = 'Credit Card' | 'Bank Transfer' | 'Cash' | 'Check' | 'Other';
export type LedgerTab = 'dashboard' | 'income' | 'expenses' | 'reports' | 'settings';

export interface BaseTransaction {
  id: string;
  date: string; // YYYY-MM-DD
  description: string;
  amount: number;
  category: string;
  paymentMethod: PaymentMethod;
  status: TransactionStatus;
}

export interface IncomeTransaction extends BaseTransaction {
  client: string;
}

export interface ExpenseTransaction extends BaseTransaction {
  vendor: string;
}

export type AnyTransaction = IncomeTransaction | ExpenseTransaction;

export interface Category {
  id: string;
  name: string;
  type: TransactionType;
}
