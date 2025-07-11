'use client';

import React, { useState } from 'react';
import TransactionForm from '@/components/TransactionForm';
import TransactionList from '@/components/TransactionList';
import ExpenseChart from '@/components/ExpenseChart';
import { Transaction } from '@/types/transaction';

export default function HomePage() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const addTransaction = (t: Transaction) => {
        setTransactions([...transactions, t]);
    };

    const deleteTransaction = (index: number) => {
        setTransactions(transactions.filter((_, i) => i !== index));
    };

    return (
        <main className="p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Personal Finance Tracker</h1>
            <TransactionForm onAdd={addTransaction} />
            <TransactionList transactions={transactions} onDelete={deleteTransaction} />
            <ExpenseChart transactions={transactions} />
        </main>
    );
}
