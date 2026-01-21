import { useEffect, useMemo, useState } from 'react'
import { Clock } from 'lucide-react'
import './SecureCloudSyncBar.css'

function formatTime(date) {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
}

function SecureCloudSyncBar({ state }) {
  const [now, setNow] = useState(() => new Date())
  const [cycleKey, setCycleKey] = useState(0)

  const timeText = useMemo(() => formatTime(now), [now])

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date())
      setCycleKey((k) => k + 1)
    }, 10_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className={`secure-sync secure-sync--${state}`} role="status" aria-label="Secure cloud sync pulse">
      <div className="secure-sync__left">
        <span className="secure-sync__label">Sync On</span>
      </div>

      <div className="secure-sync__rule" aria-hidden>
        <div key={cycleKey} className="secure-sync__progress">
          <div className="secure-sync__progress-fill" />
        </div>
      </div>

      <div className="secure-sync__right">
        <span className="secure-sync__time" aria-label={`Current time ${timeText}`} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {timeText}
          <Clock size={12} style={{ opacity: 0.7 }} />
        </span>
      </div>
    </div>
  )
}

export default SecureCloudSyncBar

