'use client';

import { useState } from 'react';
import TransactionForm from '@/components/TransactionForm';
import TransactionList from '@/components/TransactionList';
import ExpenseChart from '@/components/ExpenseChart';
import { Transaction } from '@/types/transaction';

export default function HomePage() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const addTransaction = (t: Transaction) =>
        setTransactions([t, ...transactions]);

    const deleteTransaction = (index: number) =>
        setTransactions(transactions.filter((_, i) => i !== index));

    return (
        <main className="p-4 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Personal Finance Visualizer</h1>
            <TransactionForm onAdd={addTransaction} />
            <ExpenseChart transactions={transactions} />
            <TransactionList
                transactions={transactions}
                onDelete={deleteTransaction}
            />
        </main>
    );
}
