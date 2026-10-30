import { useState } from 'react'

function Login({ onNavigate }) {
  const [mode, setMode] = useState('password')
  const [showPassword, setShowPassword] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="login-layout">
      <section className="login-brand-panel">
        <div className="login-brand-lockup"><div className="login-monitor">e<span>NAM</span></div><strong>राष्ट्रीय कृषि बाजार</strong><b>NATIONAL AGRICULTURE MARKET</b></div>
        <div className="login-illustration" aria-hidden="true"><div className="login-globe"></div><div className="login-crop crop-one"></div><div className="login-crop crop-two"></div><div className="login-crop crop-three"></div></div>
        <button className="how-it-works" type="button" onClick={() => setHelpOpen(true)}><span>▷</span> How it works?</button>
        <div className="login-brand-footer"><div><button type="button" onClick={() => onNavigate('home')}>Home</button><i>|</i><button type="button" onClick={() => onNavigate('home')}>e-NAM Mandis</button><i>|</i><button type="button">What&apos;s New</button><i>|</i><button type="button">eLearnings</button></div><div><button type="button">Raise Ticket</button><i>|</i><button type="button">UIDAI Data Privacy and Security Policy</button><i>|</i><button type="button">eNAM</button></div></div>
        <div className="login-copyright">© Copyright 2026 National Agriculture Market. All rights reserved</div>
      </section>
      <section className="login-form-panel"><form className="login-form" onSubmit={handleSubmit}><h1>Login</h1><div className="login-mode"><button className={mode === 'password' ? 'selected' : ''} type="button" onClick={() => setMode('password')}><span></span>Login with Password</button><button className={mode === 'otp' ? 'selected' : ''} type="button" onClick={() => setMode('otp')}><span></span>Login with OTP</button></div><label>Registered Mobile Number / Email Id / Username *<input required placeholder="Enter Email or Mobile or Username" /></label>{mode === 'password' ? <><label>Password *<span className="password-input"><input required type={showPassword ? 'text' : 'password'} placeholder="Enter Password" /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password visibility">{showPassword ? '◉' : '◌'}</button></span></label><button className="forgot-link" type="button">Forgot/Set Password?</button></> : <label>One Time Password (OTP) *<input required inputMode="numeric" placeholder="Enter OTP" /></label>}<div className="captcha-row"><div className="captcha-preview">CAPTCHA<br /><small>Unavailable in demo</small><button type="button">Generate New</button></div><label>Enter the shown Captcha *<input required placeholder="Enter Captcha" /><small>Captcha letters are case sensitive</small></label></div>{submitted && <p className="login-notice">Authentication service is not connected in this frontend prototype. No credentials were submitted.</p>}<button className="login-submit" type="submit">Login</button><div className="signup-copy">Don&apos;t have an account?<button type="button" onClick={() => onNavigate('register')}>Sign Up Now</button></div></form></section>
      {helpOpen && <div className="help-modal" role="dialog" aria-modal="true"><div><button className="modal-close" type="button" onClick={() => setHelpOpen(false)}>×</button><h2>How e-NAM works</h2><p>Register, check market information, compare offers and use transparent online trading services.</p><button className="portal-button" type="button" onClick={() => setHelpOpen(false)}>Close</button></div></div>}
    </main>
  )
}

export default Login
