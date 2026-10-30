
function Header({ user, onLogin, onLogout }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            <span>e</span>
            <span className="brand-leaf">🌿</span>
          </div>

          <div>
            <div className="brand-name">e-NAM</div>
            <div className="brand-subtitle">
              National Agriculture Market
            </div>
          </div>
        </div>

        <div className="header-actions">
          <div className="government-label">
            <span className="ashoka-wheel">✺</span>
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

          {user ? (
            <button
              className="profile-button"
              type="button"
              onClick={onLogout}
            >
              <span className="avatar">
                {user.name.charAt(0).toUpperCase()}
              </span>
              <span className="profile-copy">
                <strong>{user.name}</strong>
                <small>Logout</small>
              </span>
            </button>
          ) : (
            <button
              className="profile-button"
              type="button"
              onClick={onLogin}
            >
              <span className="avatar">R</span>
              <span className="profile-copy">
                <strong>Login / Sign Up</strong>
                <small>Farmer account</small>
              </span>
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header