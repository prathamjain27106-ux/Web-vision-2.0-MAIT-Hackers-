
import { useState } from 'react'

export default function Login({ onClose, onSuccess }) {
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [captcha, setCaptcha] = useState('')
  const [captchaAnswer, setCaptchaAnswer] = useState('8K4P2')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState(1)
  const [error, setError] = useState('')

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    let result = ''
    for (let i = 0; i < 5; i++) {
      result += chars[Math.floor(Math.random() * chars.length)]
    }
    setCaptchaAnswer(result)
    setCaptcha('')
  }

  const sendOtp = () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError('Enter a valid 10-digit Indian mobile number.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address.')
      return
    }

    if (captcha.trim().toUpperCase() !== captchaAnswer) {
      setError('Incorrect CAPTCHA. Please try again.')
      generateCaptcha()
      return
    }

    setError('')
    setStep(2)
  }

  const verifyOtp = () => {
    if (otp !== '123456') {
      setError('Incorrect demo OTP. Enter 123456.')
      return
    }

    onSuccess({
      name: 'Ramesh Kumar',
      mobile,
      email,
    })

    onClose()
  }

  const overlayStyle = {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    background: 'rgba(0,0,0,0.55)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '18px',
    overflowY: 'auto',
  }

  const cardStyle = {
    background: '#fff',
    width: '100%',
    maxWidth: '430px',
    padding: '28px',
    borderRadius: '16px',
    boxShadow: '0 15px 50px rgba(0,0,0,0.2)',
    margin: 'auto',
  }

  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid #d5e1d7',
    borderRadius: '8px',
    fontSize: '14px',
    marginTop: '7px',
    marginBottom: '15px',
    boxSizing: 'border-box',
  }

  const buttonStyle = {
    width: '100%',
    padding: '13px',
    marginTop: '12px',
    background: '#176638',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }

  return (
    <div style={overlayStyle} onClick={onClose}>
      <section
        style={cardStyle}
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        onClick={e => e.stopPropagation()}
      >
        <div style={{ textAlign: 'center', marginBottom: '22px' }}>
          <div style={{
            width: '52px',
            height: '52px',
            background: '#eaf3e9',
            color: '#176638',
            borderRadius: '50%',
            display: 'grid',
            placeItems: 'center',
            margin: '0 auto 12px',
            fontSize: '24px',
          }}>
            🌾
          </div>

          <h2 id="login-title" style={{ color: '#176638', margin: '0 0 7px' }}>
            Welcome to e-NAM
          </h2>

          <p style={{ color: '#718075', fontSize: '13px' }}>
            Secure farmer account access
          </p>
        </div>

        {step === 1 ? (
          <>
            <label htmlFor="mobile">Mobile number</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{
                ...inputStyle,
                width: '65px',
                display: 'grid',
                placeItems: 'center',
                background: '#f5f8f5',
              }}>
                +91
              </span>

              <input
                id="mobile"
                style={{ ...inputStyle, flex: 1, minWidth: 0 }}
                type="tel"
                inputMode="numeric"
                maxLength="10"
                placeholder="10-digit mobile number"
                value={mobile}
                onChange={e => {
                  setMobile(e.target.value.replace(/\D/g, ''))
                  setError('')
                }}
              />
            </div>

            <label htmlFor="email">Email ID</label>
            <input
              id="email"
              style={inputStyle}
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={e => {
                setEmail(e.target.value)
                setError('')
              }}
            />

            <label htmlFor="captcha">Security CAPTCHA</label>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '8px',
              marginBottom: '10px',
            }}>
              <div style={{
                flex: 1,
                background: '#edf4ed',
                border: '1px dashed #176638',
                borderRadius: '8px',
                padding: '13px',
                textAlign: 'center',
                letterSpacing: '5px',
                fontWeight: 'bold',
                fontSize: '20px',
                color: '#176638',
                fontFamily: 'monospace',
                userSelect: 'none',
                textDecoration: 'line-through',
              }}>
                {captchaAnswer}
              </div>

              <button
                type="button"
                onClick={generateCaptcha}
                aria-label="Refresh CAPTCHA"
                style={{
                  border: '1px solid #d5e1d7',
                  background: 'white',
                  padding: '12px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '18px',
                }}
              >
                ↻
              </button>
            </div>

            <input
              id="captcha"
              style={inputStyle}
              type="text"
              placeholder="Enter CAPTCHA shown above"
              value={captcha}
              onChange={e => {
                setCaptcha(e.target.value)
                setError('')
              }}
            />

            <button style={buttonStyle} onClick={sendOtp}>
              Continue
            </button>
          </>
        ) : (
          <>
            <p style={{ color: '#52675a', fontSize: '14px' }}>
              Enter the demo OTP for +91 {mobile}.
            </p>

            <label htmlFor="otp">6-digit OTP</label>
            <input
              id="otp"
              style={inputStyle}
              type="text"
              inputMode="numeric"
              maxLength="6"
              placeholder="Enter OTP"
              value={otp}
              onChange={e => {
                setOtp(e.target.value.replace(/\D/g, ''))
                setError('')
              }}
            />

            <button style={buttonStyle} onClick={verifyOtp}>
              Verify & Login
            </button>

            <button
              onClick={() => {
                setStep(1)
                setOtp('')
                setError('')
              }}
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '8px',
                background: 'transparent',
                border: 'none',
                color: '#176638',
                cursor: 'pointer',
              }}
            >
              Back to login
            </button>
          </>
        )}

        {error && (
          <p role="alert" style={{
            color: '#b42318',
            background: '#fff0ee',
            padding: '10px',
            borderRadius: '6px',
            fontSize: '13px',
          }}>
            {error}
          </p>
        )}

        <div style={{
          background: '#fff8e8',
          padding: '12px',
          borderRadius: '8px',
          marginTop: '15px',
          fontSize: '12px',
          color: '#795b20',
        }}>
          <strong>Hackathon demo:</strong> CAPTCHA is locally simulated.
          Demo OTP: <strong>123456</strong>. No actual SMS or email is sent.
        </div>

        <button
          onClick={onClose}
          style={{
            display: 'block',
            margin: '15px auto 0',
            background: 'transparent',
            border: 'none',
            color: '#718075',
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
      </section>
    </div>
  )
}