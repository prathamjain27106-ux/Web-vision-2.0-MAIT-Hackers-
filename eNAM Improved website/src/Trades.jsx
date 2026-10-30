import { useState } from "react";
import { trades } from "./demoData";
import "./Member2.css";

const money = n => "₹" + n.toLocaleString("en-IN");

export default function Trades() {
  const [filter, setFilter] = useState("All");

  const filtered = trades.filter(t =>
    filter === "All" || t.status === filter
  );

  const totalValue = trades.reduce(
    (sum, t) => sum + t.quantity * t.rate, 0
  );

  const totalQuantity = trades.reduce(
    (sum, t) => sum + t.quantity, 0
  );

  return (
    <main className="m2-page">
      <div className="m2-heading">
        <div>
          <span className="m2-eyebrow">TRANSACTION CENTRE</span>
          <h1>My Trades</h1>
          <p>Track your commodity sales and trade activity.</p>
        </div>
        <span className="m2-demo">DEMO DATA</span>
      </div>

      <div className="m2-stats">
        <div>
          <span>Total trades</span>
          <strong>{trades.length}</strong>
        </div>
        <div>
          <span>Total quantity sold</span>
          <strong>{totalQuantity} Qtl</strong>
        </div>
        <div>
          <span>Total trade value</span>
          <strong>{money(totalValue)}</strong>
        </div>
      </div>

      <section className="m2-panel">
        <div className="m2-section-title">
          <h2>Trade history</h2>

          <select
            className="m2-filter"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Completed</option>
            <option>In Progress</option>
            <option>Pending</option>
          </select>
        </div>

        <div className="m2-table-scroll">
          <table className="m2-table">
            <thead>
              <tr>
                <th>Trade ID</th>
                <th>Commodity</th>
                <th>Mandi</th>
                <th>Quantity</th>
                <th>Rate / Qtl</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map(t => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td><strong>{t.commodity}</strong></td>
                  <td>{t.mandi}</td>
                  <td>{t.quantity} Qtl</td>
                  <td>{money(t.rate)}</td>
                  <td>{t.date}</td>
                  <td>
                    <span className={
                      "m2-status " +
                      t.status.toLowerCase().replace(" ", "-")
                    }>
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan="7">No trades found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <p className="m2-disclaimer">
        All displayed trade records are simulated for demonstration.
      </p>
    </main>
  );
}