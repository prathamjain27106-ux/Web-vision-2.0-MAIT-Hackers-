import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './index.css'

const screens = {
  prices: {
    title: 'Market Prices',
    description: 'Demo commodity prices from selected e-NAM markets.',
  },
  compare: {
    title: 'Mandi Compare',
    description: 'Member 2 will connect the net-return comparison tool here.',
  },
  trades: {
    title: 'My Trades',
    description: 'Your trade history and live order updates will appear here.',
  },
  payments: {
    title: 'Payments',
    description: 'Payment status and settlement details will appear here.',
  },
}

function PlaceholderScreen({ screen, onNavigate }) {
  const content = screens[screen]

  return (
    <main className="page-shell placeholder-page">
      <button className="back-link" type="button" onClick={() => onNavigate('home')}>
        <span aria-hidden="true">←</span> Back to dashboard
      </button>
      <section className="placeholder-card">
        <span className="eyebrow">e-NAM 2.0 workspace</span>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <div className="integration-note">
          <span className="note-icon" aria-hidden="true">✦</span>
          <div>
            <strong>Integration point ready</strong>
            <span>This screen is ready for the Member 2 component.</span>
          </div>
        </div>
        <button className="button button-primary" type="button" onClick={() => onNavigate('home')}>
          Return to home
        </button>
      </section>
    </main>
  )
}

function App() {
  const [activeScreen, setActiveScreen] = useState('home')

  const navigate = (screen) => setActiveScreen(screen)

  return (
    <div className="app">
      <Header />
      <Navbar activeScreen={activeScreen} onNavigate={navigate} />
      {activeScreen === 'home' ? (
        <Home onNavigate={navigate} />
      ) : (
        <PlaceholderScreen screen={activeScreen} onNavigate={navigate} />
      )}
      <footer className="site-footer">
        <div>
          <strong>e-NAM 2.0</strong>
          <span>A farmer-first digital agriculture marketplace</span>
        </div>
        <span>Prototype • Demo data only</span>
      </footer>
    </div>
  )
}

export default App
