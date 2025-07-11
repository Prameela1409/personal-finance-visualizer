'use client';

export default function TransactionList({ transactions, onDelete }) {
    return (
        <div style={{ marginTop: '1.5rem' }}>
            <h2>Transaction List</h2>
            <ul>
                {transactions.map((t, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>
                        ₹{t.amount} on {t.date} — {t.description}
                        <button
                            style={{ marginLeft: '0.5rem', color: 'red' }}
                            onClick={() => onDelete(idx)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
