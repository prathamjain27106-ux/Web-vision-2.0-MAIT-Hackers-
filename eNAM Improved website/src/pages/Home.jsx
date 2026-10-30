import ServiceCard from '../components/ServiceCard'

const marketRows = [
  { commodity: 'Onion', market: 'Lasalgaon, Maharashtra', min: '₹1,850', max: '₹2,650', modal: '₹2,280', trend: '+4.2%' },
  { commodity: 'Wheat', market: 'Indore, Madhya Pradesh', min: '₹2,150', max: '₹2,450', modal: '₹2,320', trend: '+1.8%' },
  { commodity: 'Tomato', market: 'Kolar, Karnataka', min: '₹1,400', max: '₹2,300', modal: '₹1,920', trend: '-2.1%' },
  { commodity: 'Cotton', market: 'Rajkot, Gujarat', min: '₹6,800', max: '₹7,450', modal: '₹7,120', trend: '+3.5%' },
]

function HarvestIllustration() {
  return (
    <div className="harvest-art" aria-hidden="true">
      <div className="sun"></div>
      <div className="hill hill-back"></div>
      <div className="hill hill-front"></div>
      <div className="field-lines"></div>
      <div className="plant plant-one"><span></span><i></i><i></i></div>
      <div className="plant plant-two"><span></span><i></i><i></i></div>
      <div className="basket"><span></span><b></b><i></i></div>
    </div>
  )
}

function Home({ onNavigate }) {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow"><span className="status-dot"></span> Your farmer dashboard</span>
          <h1>Namaste, <em>Ramesh ji!</em></h1>
          <p>Make informed decisions.<br /><strong>Get better value for your harvest.</strong></p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={() => onNavigate('compare')}>
              <span aria-hidden="true">⇄</span> Compare Markets
            </button>
            <button className="text-button" type="button" onClick={() => onNavigate('prices')}>
              View today&apos;s prices <span aria-hidden="true">→</span>
            </button>
          </div>
          <p className="updated-note"><span aria-hidden="true">◷</span> Market data updated today, 10:30 AM</p>
        </div>
        <HarvestIllustration />
      </section>

      <section className="dashboard-section" aria-labelledby="snapshot-heading">
        <div className="section-heading">
          <div>
            <span className="eyebrow">At a glance</span>
            <h2 id="snapshot-heading">Your market snapshot</h2>
          </div>
          <span className="demo-label">Sample data for demo</span>
        </div>
        <div className="metric-grid">
          <article className="metric-card">
            <span className="metric-icon green-icon" aria-hidden="true">◒</span>
            <span className="metric-label">Active produce lots</span>
            <strong className="metric-value">03</strong>
            <span className="metric-detail positive">↑ 1 lot this week</span>
          </article>
          <article className="metric-card">
            <span className="metric-icon gold-icon" aria-hidden="true">₹</span>
            <span className="metric-label">Estimated sales</span>
            <strong className="metric-value">₹48,650</strong>
            <span className="metric-detail">Across 2 commodities</span>
          </article>
          <article className="metric-card">
            <span className="metric-icon blue-icon" aria-hidden="true">◷</span>
            <span className="metric-label">Pending payments</span>
            <strong className="metric-value">₹12,400</strong>
            <span className="metric-detail">Expected by 02 Nov</span>
          </article>
        </div>
      </section>

      <section className="services-section" aria-labelledby="services-heading">
        <div className="section-heading">
          <div>
            <span className="eyebrow">What would you like to do?</span>
            <h2 id="services-heading">Quick access</h2>
          </div>
        </div>
        <div className="service-grid">
          <ServiceCard icon="▥" title="Market Prices" description="Check latest prices across mandis." actionLabel="Explore prices" onClick={() => onNavigate('prices')} />
          <ServiceCard icon="⇄" title="Mandi Compare" description="Find where you can earn the most." actionLabel="Compare now" onClick={() => onNavigate('compare')} accent />
          <ServiceCard icon="◷" title="My Trades" description="Track your bids and completed sales." actionLabel="View trades" onClick={() => onNavigate('trades')} />
          <ServiceCard icon="₹" title="Payments" description="Check your payment status and history." actionLabel="View payments" onClick={() => onNavigate('payments')} />
        </div>
      </section>

      <section className="market-section" aria-labelledby="market-heading">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Live market overview</span>
            <h2 id="market-heading">Today&apos;s mandi prices</h2>
          </div>
          <button className="outline-button" type="button" onClick={() => onNavigate('prices')}>View all markets <span aria-hidden="true">→</span></button>
        </div>
        <div className="table-card">
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Commodity</th><th>Market</th><th>Min price</th><th>Max price</th><th>Modal price</th><th>Trend</th></tr>
              </thead>
              <tbody>
                {marketRows.map((row) => (
                  <tr key={row.commodity}>
                    <td><strong>{row.commodity}</strong></td><td>{row.market}</td><td>{row.min}</td><td>{row.max}</td><td><strong>{row.modal}</strong></td><td className={row.trend.startsWith('+') ? 'trend-up' : 'trend-down'}>{row.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="table-footnote"><span aria-hidden="true">ⓘ</span> Prices shown are indicative demo data and may vary by quality and quantity.</p>
        </div>
      </section>

      <section className="insight-card">
        <div className="insight-icon" aria-hidden="true">✦</div>
        <div className="insight-copy">
          <span className="eyebrow">Smart market insight</span>
          <h2>Don&apos;t just compare prices.<br /><em>Compare what you actually earn.</em></h2>
          <p>See your estimated net earnings after transportation and other expenses, so you can choose the right market with confidence.</p>
        </div>
        <button className="button button-light" type="button" onClick={() => onNavigate('compare')}>Try Mandi Compare <span aria-hidden="true">→</span></button>
      </section>
    </main>
  )
}

export default Home
