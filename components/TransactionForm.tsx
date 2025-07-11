'use client';

import React, { useState } from 'react';
import { Transaction } from '@/types/transaction';

type Props = {
    onAdd: (t: Transaction) => void;
};

const TransactionForm: React.FC<Props> = ({ onAdd }) => {
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!amount || !date || !description) {
            setError('All fields are required');
            return;
        }
        onAdd({ amount: +amount, date, description });
        setAmount('');
        setDate('');
        setDescription('');
        setError('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-2 mb-6">
            {error && <div className="text-red-500">{error}</div>}
            <input
                type="number"
                value={amount}
                placeholder="Amount"
                onChange={(e) => setAmount(e.target.value)}
                className="border p-2 w-full"
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border p-2 w-full"
                required
            />
            <input
                type="text"
                value={description}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 w-full"
                required
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Transaction
            </button>
        </form>
    );
};

export default TransactionForm;
