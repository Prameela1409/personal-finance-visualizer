'use client';

import React, { useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import ExpenseChart from '../components/ExpenseChart';

type Transaction = {
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
        const updated = [...transactions];
        updated.splice(index, 1);
        setTransactions(updated);
    };

    return (
        <main className="p-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Personal Finance Visualizer</h1>
            <TransactionForm onAdd={addTransaction} />
            <TransactionList transactions={transactions} onDelete={deleteTransaction} />
            <ExpenseChart transactions={transactions} />
        </main>
    );
}
