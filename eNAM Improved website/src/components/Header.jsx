function Header() {
  return (
    <header className="official-header">
      <div className="official-header-inner">
        <div className="goi-brand"><div className="goi-wordmark"><strong>भारत सरकार</strong><span>GOVERNMENT<br />OF INDIA</span></div></div>
        <div className="ministry-brand"><strong>Small Farmers&apos; Agribusiness Consortium</strong><span>Department of Agriculture &amp; Farmers&apos; Welfare</span><span>Ministry of Agriculture and Farmers&apos; Welfare, Government of India</span></div>
        <div className="enam-brand"><div className="enam-logo"><span>e</span>NAM</div><div><strong>राष्ट्रीय कृषि बाजार</strong><b>NATIONAL AGRICULTURE MARKET</b></div></div>
        <div className="header-right">
          <strong>Call us 1800 270 0224</strong>
          <label><span>Languages</span><select defaultValue="English" aria-label="Select language"><option>English</option><option>हिन्दी</option><option>मराठी</option></select></label>
          <div className="header-links"><button type="button">▣ Registration</button><button type="button">♙ Login Here</button><span className="color-swatches"><i></i><i></i><i></i><i></i></span></div>
        </div>
      </div>
    </header>
  )
}

export default Header
