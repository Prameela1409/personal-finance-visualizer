'use client';

import { useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import ExpenseChart from '../components/ExpenseChart';

export type Transaction = {
    amount: number;
    date: string;
    description: string;
};

export default function HomePage() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const addTransaction = (transaction: Transaction) => {
        setTransactions([transaction, ...transactions]);
    };

    const deleteTransaction = (index: number) => {
        const updatedTransactions = [...transactions];
        updatedTransactions.splice(index, 1);
        setTransactions(updatedTransactions);
    };

    return (
        <main className="p-4 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Personal Finance Visualizer</h1>
            <TransactionForm onAdd={addTransaction} />
            <ExpenseChart transactions={transactions} />
            <TransactionList transactions={transactions} onDelete={deleteTransaction} />
        </main>
    );
}
