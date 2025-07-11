'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function ExpenseChart({ transactions }) {
    // aggregate spend per month
    const dataMap = {};
    transactions.forEach(({ amount, date }) => {
        const month = new Date(date).toLocaleString('default', { month: 'short' });
        dataMap[month] = (dataMap[month] || 0) + amount;
    });

    const chartData = Object.keys(dataMap).map((m) => ({
        month: m,
        amount: dataMap[m],
    }));

    if (!chartData.length) return null;

    return (
        <div style={{ height: 300, marginTop: '1.5rem' }}>
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
