'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function ExpenseChart({ transactions }) {
    const data = {};

    transactions.forEach(({ amount, date }) => {
        const month = new Date(date).toLocaleString('default', { month: 'short' });
        if (!data[month]) data[month] = 0;
        data[month] += amount;
    });

    const chartData = Object.keys(data).map((month) => ({
        month,
        amount: data[month],
    }));

    return (
        <div style={{ height: 300 }}>
            <h2>Monthly Expense Chart</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
