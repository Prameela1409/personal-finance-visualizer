'use client';

import React from 'react';
import { Transaction } from '@/types/transaction';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

type Props = { transactions: Transaction[] };

const ExpenseChart: React.FC<Props> = ({ transactions }) => {
    const monthly = transactions.reduce<Record<string, number>>((acc, t) => {
        const m = new Date(t.date).toLocaleString('default', { month: 'short' });
        acc[m] = (acc[m] || 0) + t.amount;
        return acc;
    }, {});

    const data = Object.entries(monthly).map(([month, amount]) => ({
        month,
        amount,
    }));

    if (data.length === 0) return null;

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
};

export default ExpenseChart;
