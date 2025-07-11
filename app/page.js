'use client';
import { useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import ExpenseChart from '../components/ExpenseChart';

export default function HomePage() {
    const [transactions, setTransactions] = useState([]);

    function addTransaction(txn) {
        setTransactions([txn, ...transactions]);
    }

    function deleteTransaction(index) {
        const updated = transactions.filter((_, i) => i !== index);
        setTransactions(updated);
    }

    return (
        <main style={{ padding: '2rem' }}>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
                Personal Finance Visualizer
            </h1>

            <TransactionForm onAdd={addTransaction} />

            <ExpenseChart transactions={transactions} />

            <TransactionList
                transactions={transactions}
                onDelete={deleteTransaction}
            />
        </main>
    );
}
