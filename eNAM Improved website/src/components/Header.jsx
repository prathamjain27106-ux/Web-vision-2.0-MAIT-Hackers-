function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            <span>e</span>
            <span className="brand-leaf">⌁</span>
          </div>
          <div>
            <div className="brand-name">e-NAM</div>
            <div className="brand-subtitle">National Agriculture Market</div>
          </div>
        </div>
        <div className="header-actions">
          <div className="government-label">
            <span className="ashoka-wheel" aria-hidden="true">✺</span>
            <span>Government of India</span>
          </div>
          <label className="language-select">
            <span className="sr-only">Select language</span>
            <select defaultValue="English" aria-label="Select language">
              <option>English</option>
              <option>हिन्दी</option>
              <option>मराठी</option>
            </select>
          </label>
          <button className="profile-button" type="button" aria-label="Open Ramesh profile">
            <span className="avatar">R</span>
            <span className="profile-copy">
              <strong>Ramesh Kumar</strong>
              <small>Farmer account</small>
            </span>
            <span aria-hidden="true">⌄</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
