import { useMemo, useState } from 'react'
import { commodities, mandis } from './demoData'
import './Member2.css'

const commodityDetails = {
  Wheat: { varieties: ['Lokwan', 'Sharbati', 'Other'], qualities: ['FAQ', 'Grade A'], moisture: true },
  Mustard: { varieties: ['Yellow', 'Black', 'Other'], qualities: ['FAQ', 'Grade A'], moisture: true },
  Bajra: { varieties: ['Desi', 'Hybrid', 'Other'], qualities: ['FAQ', 'Grade A'], moisture: true },
  Soybean: { varieties: ['JS 335', 'JS 9560', 'Other'], qualities: ['FAQ', 'Grade A'], moisture: true },
  Gram: { varieties: ['Kabuli', 'Desi', 'Other'], qualities: ['FAQ', 'Grade A'], moisture: false },
}

const defaultDetail = { varieties: ['Standard', 'Other'], qualities: ['FAQ', 'Grade A'], moisture: false }
const money = (value) => `₹${Math.round(value).toLocaleString('en-IN')}`
const normalize = (value) => value.trim().toLowerCase().replace(/\s+/g, ' ')

const matchesLocation = (item, state, district) => {
  const stateMatches = !normalize(state) || normalize(item.state || 'Rajasthan') === normalize(state)
  const districtMatches = !normalize(district) || normalize(item.district) === normalize(district)
  return stateMatches && districtMatches
}

function MarketCompare() {
  const [crop, setCrop] = useState('Wheat')
  const [variety, setVariety] = useState('Lokwan')
  const [quality, setQuality] = useState('FAQ')
  const [production, setProduction] = useState('Conventional')
  const [quantity, setQuantity] = useState(10)
  const [moisture, setMoisture] = useState('')
  const [state, setState] = useState('')
  const [district, setDistrict] = useState('')
  const [place, setPlace] = useState('')
  const [location, setLocation] = useState(null)
  const [locationStatus, setLocationStatus] = useState('')
  const [selected, setSelected] = useState(() => mandis.filter((item) => item.commodity === 'Wheat').map((item) => item.id))
  const [vehicle, setVehicle] = useState('Small truck')
  const [rate, setRate] = useState(18)
  const [transportQuotation, setTransportQuotation] = useState('')
  const [loading, setLoading] = useState(10)
  const [unloading, setUnloading] = useState(5)
  const [commissionRate, setCommissionRate] = useState(1)
  const [other, setOther] = useState(0)
  const [sortBy, setSortBy] = useState('net')

  const details = commodityDetails[crop] || defaultDetail
  const cropMandis = mandis.filter((item) => item.commodity === crop)
  const availableMandis = cropMandis.filter((item) => matchesLocation(item, state, district))

  const useLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus('Location is unavailable in this browser. You can enter it manually.')
      return
    }
    setLocationStatus('Requesting your location…')
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocation({ latitude: coords.latitude, longitude: coords.longitude })
        setLocationStatus('Location detected. Road distance is not available in this demo.')
      },
      () => setLocationStatus('Location permission was denied or unavailable. You can enter it manually.'),
      { enableHighAccuracy: true, timeout: 10000 },
    )
  }

  const changeCrop = (value) => {
    const nextDetails = commodityDetails[value] || defaultDetail
    setCrop(value)
    setVariety(nextDetails.varieties[0])
    setQuality(nextDetails.qualities[0])
    setMoisture('')
    setSelected(mandis
      .filter((item) => item.commodity === value && matchesLocation(item, state, district))
      .map((item) => item.id))
  }

  const toggleMandi = (id) => {
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  }

  const results = useMemo(() => availableMandis
    .filter((item) => selected.includes(item.id))
    .map((item) => {
      const gross = item.modalPrice * quantity
      const transport = transportQuotation === '' ? item.transport : Number(transportQuotation)
      const loadingCost = loading * quantity
      const unloadingCost = unloading * quantity
      const commission = (gross * commissionRate) / 100
      const expenses = transport + loadingCost + unloadingCost + commission + other
      const availableCapacity = typeof item.storageCapacity === 'number' && typeof item.committedQuantity === 'number'
        ? Math.max(0, item.storageCapacity - item.committedQuantity)
        : null
      return {
        ...item,
        gross,
        transport,
        loadingCost,
        unloadingCost,
        commission,
        expenses,
        net: gross - expenses,
        availableCapacity,
        canAccept: availableCapacity === null || availableCapacity >= quantity,
      }
    })
    .sort((a, b) => {
      if (a.canAccept !== b.canAccept) return a.canAccept ? -1 : 1
      return sortBy === 'distance' ? a.transport - b.transport : sortBy === 'price' ? b.modalPrice - a.modalPrice : b.net - a.net
    }),
  [availableMandis, selected, quantity, transportQuotation, loading, unloading, commissionRate, other, sortBy])

  const best = results.find((item) => item.canAccept)

  return (
    <main className="m2-page">
      <div className="m2-heading">
        <div>
          <span className="m2-eyebrow">SMART MARKET INTELLIGENCE</span>
          <h1>Mandi Compare</h1>
          <p>Find which mandi may give you the highest estimated net earnings after expenses.</p>
        </div>
        <span className="m2-demo">DEMO DATA</span>
      </div>

      <section className="m2-panel">
        <h2>1. Your location</h2>
        <div className="m2-location-actions">
          <button type="button" className="m2-primary-button" onClick={useLocation}>Use my current location</button>
          <span className="m2-location-status">{locationStatus || 'GPS is optional; manual location works without permission.'}{location && ` Coordinates: ${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)}`}</span>
        </div>
        <div className="m2-form-grid">
          <label>State<input value={state} onChange={(event) => setState(event.target.value)} placeholder="e.g. Rajasthan" /></label>
          <label>District<input value={district} onChange={(event) => setDistrict(event.target.value)} placeholder="e.g. Kota" /></label>
          <label>Village, town or PIN<input value={place} onChange={(event) => setPlace(event.target.value)} placeholder="Enter your location" /></label>
          <label>Vehicle type<select value={vehicle} onChange={(event) => setVehicle(event.target.value)}><option>Small truck</option><option>Tractor trolley</option><option>Mini truck</option><option>Other</option></select></label>
        </div>
      </section>

      <section className="m2-panel">
        <h2>2. Plan your sale</h2>
        <div className="m2-form-grid">
          <label>Commodity<select value={crop} onChange={(event) => changeCrop(event.target.value)}>{commodities.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label>Quantity (quintals)<input type="number" min="0.1" step="0.1" value={quantity} onChange={(event) => setQuantity(Math.max(0.1, Number(event.target.value) || 0.1))} /></label>
          <label>Variety<select value={variety} onChange={(event) => setVariety(event.target.value)}>{details.varieties.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label>Production<select value={production} onChange={(event) => setProduction(event.target.value)}><option>Conventional</option><option>Organic</option></select></label>
          <label>Quality / grade<select value={quality} onChange={(event) => setQuality(event.target.value)}>{details.qualities.map((item) => <option key={item}>{item}</option>)}</select></label>
          {details.moisture && <label>Moisture (%)<input type="number" min="0" max="100" step="0.1" value={moisture} onChange={(event) => setMoisture(event.target.value)} placeholder="Optional" /></label>}
        </div>
        <p className="m2-muted">Variety and quality fields are indicative user-entered details; the demo prices are not quality-adjusted.</p>
      </section>

      <section className="m2-panel">
        <h2>3. Transport and expenses</h2>
        <div className="m2-form-grid">
          <label>Transport rate (₹ / km)<input type="number" min="0" value={rate} onChange={(event) => setRate(Math.max(0, Number(event.target.value) || 0))} /></label>
          <label>Total transport quotation (₹)<input type="number" min="0" value={transportQuotation} onChange={(event) => setTransportQuotation(event.target.value)} placeholder="Optional" /></label>
          <label>Loading (₹ / quintal)<input type="number" min="0" value={loading} onChange={(event) => setLoading(Math.max(0, Number(event.target.value) || 0))} /></label>
          <label>Unloading (₹ / quintal)<input type="number" min="0" value={unloading} onChange={(event) => setUnloading(Math.max(0, Number(event.target.value) || 0))} /></label>
          <label>Commission (%)<input type="number" min="0" value={commissionRate} onChange={(event) => setCommissionRate(Math.max(0, Number(event.target.value) || 0))} /></label>
          <label>Other expenses (₹ total)<input type="number" min="0" value={other} onChange={(event) => setOther(Math.max(0, Number(event.target.value) || 0))} /></label>
        </div>
        <p className="m2-muted">The demo dataset contains approximate transport amounts, not road distances. The rate is recorded for planning; enter a total quotation to override the demo estimate. No road distance is invented here.</p>
      </section>

      <section className="m2-panel">
        <div className="m2-section-title">
          <div><h2>4. Choose mandis to compare</h2><span>{crop} • {quantity} quintals • {production}</span></div>
          <label className="m2-sort">Sort by<select value={sortBy} onChange={(event) => setSortBy(event.target.value)}><option value="net">Highest net return</option><option value="price">Highest modal price</option><option value="distance">Lowest transport estimate</option></select></label>
        </div>
        {state || district
          ? <p className="m2-filter-note">{availableMandis.length ? `Showing demo mandis matching ${[district, state].filter(Boolean).join(', ')}.` : `No demo mandis are available for ${[district, state].filter(Boolean).join(', ')}. Rajasthan demo mandis are hidden.`}</p>
          : <p className="m2-filter-note">Enter a state or district above to filter the available mandis.</p>}
        <div className="m2-check-list">{availableMandis.map((item) => <label className="m2-check" key={item.id}><input type="checkbox" checked={selected.includes(item.id)} onChange={() => toggleMandi(item.id)} />{item.name}</label>)}</div>
        <p className="m2-muted">Capacity is shown from the demo intake snapshot. A mandi is eligible only when its estimated available space is at least your lot size.</p>
      </section>

      {best && <section className="m2-best"><div><span>HIGHEST ELIGIBLE NET RETURN</span><h2>{best.name}</h2><p>{best.district} • {best.availableCapacity} qtl estimated space available • Demo data</p></div><strong>{money(best.net)}</strong></section>}
      {!best && results.length > 0 && <section className="m2-capacity-warning">None of the selected mandis currently shows enough demo capacity for {quantity} quintals. Reduce the lot size or select another mandi.</section>}

      <section className="m2-panel">
        <div className="m2-section-title"><h2>Compare mandi earnings</h2><span>{results.length} selected</span></div>
        {results.length === 0 ? <p>Select at least one mandi to compare.</p> : <div className="m2-table-scroll"><table className="m2-table"><thead><tr><th>Mandi</th><th>Modal / qtl</th><th>Available space</th><th>Transport</th><th>Expenses</th><th>Net return</th></tr></thead><tbody>{results.map((item) => <tr key={item.id}><td><strong>{item.name}</strong><small>{item.district} • DEMO DATA</small>{item === best && <span className="m2-winner"> BEST</span>}</td><td>{money(item.modalPrice)}</td><td><span className={`m2-capacity-status ${item.canAccept ? 'available' : 'unavailable'}`}>{item.availableCapacity === null ? 'Unknown' : `${item.availableCapacity} qtl`}</span><small>{item.canAccept ? 'Can accept this lot' : 'Not enough space'}</small></td><td>{money(item.transport)}</td><td>{money(item.expenses)}</td><td className="m2-net">{money(item.net)}</td></tr>)}</tbody></table></div>}
      </section>

      {best && <section className="m2-panel"><h2>Net-return breakdown</h2><p className="m2-muted">Estimated for {quantity} quintals at {best.name}. Gross value = modal price × quantity.</p><div className="m2-calculator"><div><span>Gross sale value</span><strong>{money(best.gross)}</strong></div><div><span>Transportation ({vehicle})</span><strong>{money(best.transport)}</strong></div><div><span>Loading</span><strong>{money(best.loadingCost)}</strong></div><div><span>Unloading</span><strong>{money(best.unloadingCost)}</strong></div><div><span>Commission ({commissionRate}%)</span><strong>{money(best.commission)}</strong></div><div><span>Other expenses</span><strong>{money(other)}</strong></div><div className="m2-total"><span>Estimated net earnings</span><strong>{money(best.net)}</strong></div></div></section>}

      <div className="m2-disclaimer">Demo prices, mandi locations and transport estimates are illustrative. No live government API or road-distance service is connected in this build. Verify current prices, charges, quality deductions and commissions before selling.</div>
    </main>
  )
}

export default MarketCompare
