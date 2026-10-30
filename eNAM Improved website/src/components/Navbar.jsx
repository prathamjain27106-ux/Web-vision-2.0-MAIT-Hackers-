const navigationItems = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'prices', label: 'Market Prices', icon: '▥' },
  { id: 'compare', label: 'Mandi Compare', icon: '⇄', highlight: true },
  { id: 'trades', label: 'My Trades', icon: '◷' },
  { id: 'payments', label: 'Payments', icon: '₹' },
]

function Navbar({ activeScreen, onNavigate }) {
  return (
    <nav className="main-nav" aria-label="Main navigation">
      <div className="nav-inner">
        <div className="nav-links">
          {navigationItems.map((item) => (
            <button
              className={`nav-link ${item.highlight ? 'nav-link-highlight' : ''} ${activeScreen === item.id ? 'active' : ''}`}
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              aria-current={activeScreen === item.id ? 'page' : undefined}
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
        <span className="demo-badge"><span aria-hidden="true">●</span> Demo environment</span>
      </div>
    </nav>
  )
}

export default Navbar
