const links = [
  ['prices', '▤', 'Market Prices'], ['compare', '⇄', 'Mandi Compare'], ['trades', '▣', 'My Trades'],
  ['payments', '◉', 'Payments'], ['auctions', '◷', 'Auction Status'], ['buyers', '♙', 'Buyer Information'],
]

function PortalSidebar({ activeScreen, onNavigate }) {
  return <aside className="portal-sidebar"><div className="sidebar-title">Farmer Services</div>{links.map(([id, icon, label]) => <button className={activeScreen === id ? 'active' : ''} type="button" key={id} onClick={() => onNavigate(id)}><span aria-hidden="true">{icon}</span>{label}</button>)}<div className="sidebar-help"><strong>Need help?</strong><span>Call e-NAM helpline</span><b>1800 270 0224</b></div></aside>
}

export default PortalSidebar
