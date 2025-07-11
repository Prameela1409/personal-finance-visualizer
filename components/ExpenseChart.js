'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Transaction } from '../app/page';

type Props = {
    transactions: Transaction[];
};

export default function ExpenseChart({ transactions }: Props) {
    const data = transactions.reduce((acc, t) => {
        const month = new Date(t.date).toLocaleString('default', { month: 'short' });
        const found = acc.find((item) => item.month === month);
        if (found) {
            found.amount += t.amount;
        } else {
            acc.push({ month, amount: t.amount });
        }
        return acc;
    }, [] as { month: string; amount: number }[]);

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Monthly Expenses</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#3b82f6" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
