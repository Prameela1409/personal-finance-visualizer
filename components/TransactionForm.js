'use client';
import { useState } from 'react';

export default function TransactionForm({ onAdd }) {
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!amount || !date || !description) {
            alert('Please fill all fields');
            return;
        }
        onAdd({ amount: Number(amount), date, description });
        setAmount('');
        setDate('');
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Transaction</button>
        </form>
    );
}
