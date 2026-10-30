import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import PortalSidebar from './components/PortalSidebar'
import Home from './pages/Home'
import MarketCompare from './MarketCompare'
import Login from './pages/Login'
import Trades from './Trades'
import Payments from './Payments'
import './index.css'

const pageDetails = {
  prices: ['Market Prices', 'View indicative prices reported by connected mandis.'],
  buyers: ['Buyer Information', 'Find buyer information and participation guidance.'],
  auctions: ['Auction Status', 'Follow auction activity and status updates.'],
  resources: ['Resources', 'Access farmer guides, policies and e-NAM information.'],
}

const marketRows = [
  ['Onion', 'Lasalgaon, Maharashtra', '₹1,850', '₹2,650', '₹2,280', '+4.2%'],
  ['Wheat', 'Indore, Madhya Pradesh', '₹2,150', '₹2,450', '₹2,320', '+1.8%'],
  ['Tomato', 'Kolar, Karnataka', '₹1,400', '₹2,300', '₹1,920', '-2.1%'],
  ['Cotton', 'Rajkot, Gujarat', '₹6,800', '₹7,450', '₹7,120', '+3.5%'],
]

function PortalPage({ page, onNavigate }) {
  const [title, description] = pageDetails[page]

  return (
    <main className="portal-layout page-shell">
      <PortalSidebar activeScreen={page} onNavigate={onNavigate} />
      <section className="portal-main">
        <div className="breadcrumb"><button type="button" onClick={() => onNavigate('home')}>Home</button><span> / </span>{title}</div>
        <div className="portal-titlebar">
          <div><span className="section-kicker">e-NAM 2.0</span><h1>{title}</h1><p>{description}</p></div>
          <span className="demo-label">Demo data</span>
        </div>
        {page === 'prices' ? (
          <section className="portal-panel">
            <div className="panel-heading"><h2>Commodity price details</h2><label className="search-field"><span aria-hidden="true">⌕</span><input placeholder="Search commodity or market" /></label></div>
            <div className="table-scroll"><table className="portal-table"><thead><tr><th>Commodity</th><th>Market</th><th>Min price</th><th>Max price</th><th>Modal price</th><th>Trend</th></tr></thead><tbody>{marketRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td className={index === 5 ? (cell.startsWith('+') ? 'trend-up' : 'trend-down') : ''} key={`${row[0]}-${index}`}>{index === 0 || index === 4 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div>
            <p className="data-disclaimer">Prices shown are indicative demo data. Actual prices may vary by quality, quantity and market conditions.</p>
          </section>
        ) : (
          <section className="portal-panel empty-panel">
            <div className="empty-icon" aria-hidden="true">▦</div>
            <h2>{title} workspace</h2>
            <p>This application area is ready for the connected {title.toLowerCase()} component.</p>
            <button className="portal-button" type="button" onClick={() => onNavigate('home')}>Return to dashboard</button>
          </section>
        )}
      </section>
      <aside className="news-sidebar"><div className="news-heading">What&apos;s New</div><article><strong>e-NAM 2.0 farmer dashboard</strong><p>Compare estimated net returns before choosing a market.</p></article><article><strong>Important notice</strong><p>This prototype uses clearly marked demo data, not live government information.</p></article><button type="button" onClick={() => onNavigate('resources')}>View all resources »</button></aside>
    </main>
  )
}

function App() {
  const [activeScreen, setActiveScreen] = useState('home')
  const navigate = (screen) => setActiveScreen(screen)
  const isAuthScreen = activeScreen === 'login' || activeScreen === 'register'

  return (
    <div className="app">
      {isAuthScreen ? <Login onNavigate={navigate} /> : (
        <>
          <Header onNavigate={navigate} />
          <Navbar activeScreen={activeScreen} onNavigate={navigate} />
          {activeScreen === 'home' && <Home onNavigate={navigate} />}
          {activeScreen === 'compare' && <MarketCompare />}
          {activeScreen === 'trades' && <Trades />}
          {activeScreen === 'payments' && <Payments />}
          {pageDetails[activeScreen] && <PortalPage page={activeScreen} onNavigate={navigate} />}
          <footer className="site-footer"><div><strong>e-NAM 2.0</strong><span>Farmer-first digital agriculture marketplace</span></div><span>Prototype • Demo data only</span></footer>
        </>
      )}
    </div>
  )
}

export default App
