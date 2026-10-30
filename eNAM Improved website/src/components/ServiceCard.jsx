function ServiceCard({ icon, title, description, actionLabel, onClick, accent }) {
  return (
    <button className={`service-card ${accent ? 'service-card-accent' : ''}`} type="button" onClick={onClick}>
      <span className="service-icon" aria-hidden="true">{icon}</span>
      <span className="service-content">
        <strong>{title}</strong>
        <span>{description}</span>
        <span className="service-action">{actionLabel} <span aria-hidden="true">→</span></span>
      </span>
    </button>
  )
}

export default ServiceCard
