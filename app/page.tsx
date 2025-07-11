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
    const newList = transactions.filter((_, i) => i !== index);
    setTransactions(newList);
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Personal Finance Visualizer</h1>
      <TransactionForm onAdd={addTransaction} />
      <ExpenseChart transactions={transactions} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
    </main>
  );
}
