
import { useState } from 'react'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './pages/Home'

import MarketCompare from './MarketCompare'
import Trades from './Trades'
import Payments from './Payments'

import './index.css'

const marketPrices = [
  { crop: 'Wheat', mandi: 'Kota Mandi', min: 2250, max: 2550, modal: 2450 },
  { crop: 'Mustard', mandi: 'Jaipur Mandi', min: 5500, max: 6100, modal: 5900 },
  { crop: 'Bajra', mandi: 'Ajmer Mandi', min: 1900, max: 2300, modal: 2200 },
  { crop: 'Soybean', mandi: 'Kota Mandi', min: 4200, max: 4800, modal: 4500 },
  { crop: 'Gram', mandi: 'Alwar Mandi', min: 4800, max: 5300, modal: 5100 },
]

function MarketPrices() {
  const [search, setSearch] = useState('')

  const filtered = marketPrices.filter(item =>
    `${item.crop} ${item.mandi}`.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="page-shell">
      <section className="placeholder-page">
        <h1>Market Prices</h1>
        <p>Explore illustrative commodity prices across selected mandis.</p>

        <input
          type="search"
          placeholder="Search commodity or mandi..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            padding: '12px',
            width: '100%',
            maxWidth: '400px',
            margin: '20px 0',
            border: '1px solid #dce5dc',
            borderRadius: '8px',
          }}
        />

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '550px' }}>
            <thead>
              <tr>
                {['Commodity', 'Mandi', 'Min Price', 'Max Price', 'Modal Price'].map(label => (
                  <th key={label} style={{ textAlign: 'left', padding: '14px', background: '#edf4ed' }}>
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, index) => (
                <tr key={index}>
                  <td style={{ padding: '14px', borderBottom: '1px solid #eee' }}>{item.crop}</td>
                  <td style={{ padding: '14px', borderBottom: '1px solid #eee' }}>{item.mandi}</td>
                  <td style={{ padding: '14px', borderBottom: '1px solid #eee' }}>₹{item.min}</td>
                  <td style={{ padding: '14px', borderBottom: '1px solid #eee' }}>₹{item.max}</td>
                  <td style={{ padding: '14px', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>₹{item.modal}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ padding: '20px' }}>No matching market prices found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: '12px', color: '#777', marginTop: '20px' }}>
          Illustrative demonstration data. Not live government market prices.
        </p>
      </section>
    </main>
  )
}

function App() {
  const [activeScreen, setActiveScreen] = useState('home')

  const navigate = screen => {
    setActiveScreen(screen)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Header />

      <Navbar
        activeScreen={activeScreen}
        onNavigate={navigate}
      />

      {activeScreen === 'home' && (
        <Home onNavigate={navigate} />
      )}

      {activeScreen === 'prices' && <MarketPrices />}

      {activeScreen === 'compare' && <MarketCompare />}

      {activeScreen === 'trades' && <Trades />}

      {activeScreen === 'payments' && <Payments />}
    </>
  )
}

export default App