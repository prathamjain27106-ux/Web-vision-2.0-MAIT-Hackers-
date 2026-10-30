const items = [
  ['home', 'Home'], ['prices', 'Market Prices'], ['compare', 'Mandi Compare'], ['trades', 'My Trades'],
  ['payments', 'Payments'], ['buyers', 'Buyer Information'], ['auctions', 'Auction Status'], ['resources', 'Resources'],
]

function Navbar({ activeScreen, onNavigate }) {
  return <nav className="official-nav" aria-label="Main navigation"><div className="nav-inner"><button className="mobile-menu" type="button" aria-label="Open navigation">☰</button>{items.map(([id, label]) => <button className={`official-nav-link ${activeScreen === id ? 'active' : ''}`} type="button" key={id} onClick={() => onNavigate(id)}>{label}{['buyers', 'auctions', 'resources'].includes(id) && <span aria-hidden="true">⌄</span>}</button>)}</div></nav>
}

export default Navbar
