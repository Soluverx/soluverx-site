import './RouteFallback.css'

function RouteFallback() {
  return (
    <div
      className="route-fallback"
      role="status"
      aria-live="polite"
      aria-label="Carregando página"
    >
      <span className="route-fallback__indicator" aria-hidden="true" />
    </div>
  )
}

export default RouteFallback
