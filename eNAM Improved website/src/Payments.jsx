import { useState } from "react";
import { payments } from "./demoData";
import "./Member2.css";

const money = n => "₹" + n.toLocaleString("en-IN");

export default function Payments() {
  const [filter, setFilter] = useState("All");

  const filtered = payments.filter(p =>
    filter === "All" || p.status === filter
  );

  const paid = payments
    .filter(p => p.status === "Paid")
    .reduce((sum, p) => sum + p.amount, 0);

  const outstanding = payments
    .filter(p => p.status !== "Paid")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <main className="m2-page">
      <div className="m2-heading">
        <div>
          <span className="m2-eyebrow">PAYMENT MANAGEMENT</span>
          <h1>My Payments</h1>
          <p>Track payments against your agricultural trades.</p>
        </div>
        <span className="m2-demo">DEMO DATA</span>
      </div>

      <div className="m2-stats">
        <div>
          <span>Payments received</span>
          <strong className="m2-green">{money(paid)}</strong>
        </div>

        <div>
          <span>Awaiting payment</span>
          <strong>{money(outstanding)}</strong>
        </div>

        <div>
          <span>Transactions</span>
          <strong>{payments.length}</strong>
        </div>
      </div>

      <section className="m2-panel">
        <div className="m2-section-title">
          <h2>Payment history</h2>

          <select
            className="m2-filter"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Paid</option>
            <option>Processing</option>
            <option>Pending</option>
          </select>
        </div>

        <div className="m2-table-scroll">
          <table className="m2-table">
            <thead>
              <tr>
                <th>Payment ID</th>
                <th>Trade ID</th>
                <th>Commodity</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.tradeId}</td>
                  <td><strong>{p.commodity}</strong></td>
                  <td>{money(p.amount)}</td>
                  <td>{p.date}</td>
                  <td>
                    <span className={
                      "m2-status " + p.status.toLowerCase()
                    }>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan="6">No payments found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <div className="m2-payment-note">
        <strong>Payment transparency</strong>
        <p>
          Payment information is displayed for demonstration.
          This prototype does not connect to bank accounts or
          process actual payments.
        </p>
      </div>
    </main>
  );
}