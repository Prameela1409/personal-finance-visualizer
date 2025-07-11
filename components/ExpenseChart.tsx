'use client';

import React from 'react';
import { Transaction } from '../app/page';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
    transactions: Transaction[];
};

export default function ExpenseChart({ transactions }: Props) {
    const data = transactions.map((t) => ({
        name: t.description,
        amount: t.amount,
    }));

    return (
        <div className="h-64 mt-4">
            <h2 className="text-xl font-semibold mb-2">Expenses Chart</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#3b82f6" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
