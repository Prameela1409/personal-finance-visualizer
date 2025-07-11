'use client';

import React from 'react';

type Transaction = {
    amount: number;
    date: string;
    description: string;
};

type TransactionListProps = {
    transactions: Transaction[];
    onDelete: (index: number) => void;
};

export default function TransactionList({
    transactions,
    onDelete,
}: TransactionListProps) {
    return (
        <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Transaction List</h2>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index} className="mb-2">
                        ₹{transaction.amount} on {transaction.date} — {transaction.description}
                        <button
                            onClick={() => onDelete(index)}
                            className="ml-2 text-red-500"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
