import { useMemo, useState } from "react";
import { mandis, commodities } from "./demoData";
import "./Member2.css";

const money = value =>
  "₹" + Math.round(value).toLocaleString("en-IN");

export default function MarketCompare() {
  const [crop, setCrop] = useState("Wheat");
  const [quantity, setQuantity] = useState(10);
  const [selected, setSelected] = useState([1, 2, 3, 4]);

  const results = useMemo(() => {
    return mandis
      .filter(m =>
        m.commodity === crop && selected.includes(m.id)
      )
      .map(m => {
        const gross = m.modalPrice * quantity;
        const loading = m.loadingPerQtl * quantity;
        const commission = gross * m.commissionRate / 100;
        const expenses = m.transport + loading + commission;

        return {
          ...m,
          gross,
          loading,
          commission,
          expenses,
          net: gross - expenses
        };
      })
      .sort((a, b) => b.net - a.net);
  }, [crop, quantity, selected]);

  const best = results[0];

  const toggleMandi = id => {
    setSelected(previous =>
      previous.includes(id)
        ? previous.filter(item => item !== id)
        : [...previous, id]
    );
  };

  const changeCrop = value => {
    setCrop(value);
    setSelected(
      mandis
        .filter(m => m.commodity === value)
        .map(m => m.id)
    );
  };

  return (
    <main className="m2-page">

      <div className="m2-heading">
        <div>
          <span className="m2-eyebrow">
            SMART MARKET INTELLIGENCE
          </span>
          <h1>Mandi Compare</h1>
          <p>
            Find out which mandi gives you the highest
            estimated earnings after expenses.
          </p>
        </div>
        <span className="m2-demo">DEMO DATA</span>
      </div>

      <section className="m2-panel">
        <h2>Plan your sale</h2>

        <div className="m2-form-grid">
          <label>
            Select commodity
            <select
              value={crop}
              onChange={e => changeCrop(e.target.value)}
            >
              {commodities.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            Quantity (quintals)
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={e =>
                setQuantity(Math.max(1, Number(e.target.value)))
              }
            />
          </label>
        </div>

        <h3>Select mandis to compare</h3>

        <div className="m2-check-list">
          {mandis
            .filter(m => m.commodity === crop)
            .map(m => (
              <label className="m2-check" key={m.id}>
                <input
                  type="checkbox"
                  checked={selected.includes(m.id)}
                  onChange={() => toggleMandi(m.id)}
                />
                {m.name}
              </label>
            ))}
        </div>
      </section>

      {best && (
        <section className="m2-best">
          <div>
            <span>HIGHEST ESTIMATED NET RETURN</span>
            <h2>{best.name}</h2>
            <p>
              Best estimated option after deducting expenses.
            </p>
          </div>
          <strong>{money(best.net)}</strong>
        </section>
      )}

      <section className="m2-panel">
        <div className="m2-section-title">
          <h2>Compare mandi earnings</h2>
          <span>{results.length} mandis selected</span>
        </div>

        {results.length === 0 ? (
          <p>Select at least one mandi to compare.</p>
        ) : (
          <div className="m2-table-scroll">
            <table className="m2-table">
              <thead>
                <tr>
                  <th>Mandi</th>
                  <th>Modal price / Qtl</th>
                  <th>Gross value</th>
                  <th>Total expenses</th>
                  <th>Net earnings</th>
                </tr>
              </thead>

              <tbody>
                {results.map((m, index) => (
                  <tr key={m.id}>
                    <td>
                      <strong>{m.name}</strong>
                      {index === 0 && (
                        <span className="m2-winner"> BEST</span>
                      )}
                    </td>
                    <td>{money(m.modalPrice)}</td>
                    <td>{money(m.gross)}</td>
                    <td>{money(m.expenses)}</td>
                    <td className="m2-net">{money(m.net)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {best && (
        <section className="m2-panel">
          <h2>Net-return breakdown</h2>
          <p className="m2-muted">
            Estimated expenses for {quantity} quintals at {best.name}.
          </p>

          <div className="m2-calculator">
            <div>
              <span>Gross sale value</span>
              <strong>{money(best.gross)}</strong>
            </div>
            <div>
              <span>Transportation</span>
              <strong>{money(best.transport)}</strong>
            </div>
            <div>
              <span>Loading / unloading</span>
              <strong>{money(best.loading)}</strong>
            </div>
            <div>
              <span>Commission ({best.commissionRate}%)</span>
              <strong>{money(best.commission)}</strong>
            </div>
            <div className="m2-total">
              <span>Estimated net earnings</span>
              <strong>{money(best.net)}</strong>
            </div>
          </div>
        </section>
      )}

      <div className="m2-disclaimer">
        Demo prices and expenses are illustrative. Actual mandi
        prices, transport charges, deductions and applicable
        commissions may vary.
      </div>

    </main>
  );
}