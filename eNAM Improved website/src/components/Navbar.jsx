const firstRow = [
  ['home', 'Home'], ['mandis', 'e-NAM Mandis'], ['districts', 'Aspirational Districts'], ['stakeholders', 'Stakeholders'],
  ['dashboard', 'Dashboard'], ['elearning', 'eLearning Videos'], ['resources', 'Resources'], ['events', 'Events Gallery'],
  ['logistics', 'e-NAM-Logistics'], ['contact', 'Contact Us'], ['kisan', 'Kisan Rath'], ['fpo', 'FPO'], ['cooperative', 'Co-operative'],
]

const secondRow = [
  ['weather', 'Weather Forecast'], ['blog', 'Blog'], ['pop', 'e-NAM Platform of Platforms'],
  ['demand', 'Advance Demand/Supply'], ['seeds', 'National Seeds Corporation (NSC)'], ['enwr', 'eNWR Trade'],
]

function Navbar({ activeScreen, onNavigate }) {
  const renderRow = (items) => items.map(([id, label]) => <button className={`official-nav-link ${activeScreen === id ? 'active' : ''}`} type="button" key={id} onClick={() => onNavigate(id)}>{label}{['stakeholders', 'dashboard', 'elearning', 'resources', 'contact', 'demand'].includes(id) && <span aria-hidden="true">⌄</span>}</button>)
  return <nav className="official-nav" aria-label="Main navigation"><div className="nav-inner"><button className="mobile-menu" type="button" aria-label="Open navigation">☰</button><div className="nav-row">{renderRow(firstRow)}</div><div className="nav-row">{renderRow(secondRow)}</div></div></nav>
}

export default Navbar
