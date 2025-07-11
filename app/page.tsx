'use client';

import React, { useState } from 'react';
import TransactionForm from '@/components/TransactionForm';
import TransactionList from '@/components/TransactionList';
import ExpenseChart from '@/components/ExpenseChart';
import { Transaction } from '@/types/transaction';

export default function HomePage() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const handleAdd = (transaction: Transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const handleDelete = (index: number) => {
        const newTransactions = [...transactions];
        newTransactions.splice(index, 1);
        setTransactions(newTransactions);
    };

    return (
        <main className="p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Personal Finance Visualizer</h1>
            <TransactionForm onAdd={handleAdd} />
            <TransactionList transactions={transactions} onDelete={handleDelete} />
            <ExpenseChart transactions={transactions} />
        </main>
    );
}
