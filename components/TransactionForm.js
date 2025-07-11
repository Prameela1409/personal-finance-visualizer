'use client';
import { useState } from 'react';

export default function TransactionForm({ onAdd }) {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount || !description || !date) return alert('Please fill all fields');
        onAdd({ amount: parseFloat(amount), description, date });
        setAmount('');
        setDescription('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
            <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <input type="date" value={date} onChange={e => setDate(e.target.value)} />
            <button type="submit">Add Transaction</button>
        </form>
    );
}
