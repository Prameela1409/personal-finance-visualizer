'use client';

import React from 'react';
import { Transaction } from '../app/page';

type Props = {
    transactions: Transaction[];
    onDelete: (index: number) => void;
};

export default function TransactionList({ transactions, onDelete }: Props) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">Transaction List</h2>
            <ul>
                {transactions.map((t, index) => (
                    <li key={index} className="mb-2">
                        ₹{t.amount} on {t.date} — {t.description}
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
