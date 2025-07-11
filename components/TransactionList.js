'use client';
export default function TransactionList({ transactions }) {
    return (
        <div>
            <h2>Transaction List</h2>
            <ul>
                {transactions.map((txn, index) => (
                    <li key={index}>
                        ₹{txn.amount} – {txn.description} on {txn.date}
                    </li>
                ))}
            </ul>
        </div>
    );
}
