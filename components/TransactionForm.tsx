'use client';

import React, { useState } from 'react';
import { Transaction } from '../app/page';

type Props = {
    onAdd: (transaction: Transaction) => void;
};

export default function TransactionForm({ onAdd }: Props) {
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!amount || !date || !description) return;

        const newTransaction: Transaction = {
            amount: parseFloat(amount),
            date,
            description,
        };

        onAdd(newTransaction);
        setAmount('');
        setDate('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-2 mb-6">
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border p-2 w-full"
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border p-2 w-full"
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 w-full"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Transaction
            </button>
        </form>
    );
}
