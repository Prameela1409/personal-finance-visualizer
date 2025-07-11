'use client';

import React from 'react';
import { Transaction } from '@/types/transaction';

type Props = {
    transactions: Transaction[];
    onDelete: (index: number) => void;
};

const TransactionList: React.FC<Props> = ({ transactions, onDelete }) => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">Transaction List</h2>
            <ul>
                {transactions.map((t, index) => (
                    <li key={t.date + t.amount} className="mb-2 flex items-center justify-between">
                        <span>
                            ₹{t.amount} on {t.date} — {t.description}
                        </span>
                        <button
                            onClick={() => {
                                if (window.confirm("Are you sure you want to delete this transaction?")) {
                                    onDelete(index);
                                }
                            }}
                            className="ml-2 text-red-500"
                            aria-label={`Delete transaction for ₹${t.amount} on ${t.date}`}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
