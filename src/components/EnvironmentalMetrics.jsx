import './EnvironmentalMetrics.css'
import { Activity, Cloud, Zap, Timer } from 'lucide-react'

const EnvironmentalMetrics = ({ data, state }) => {
  return (
    <div className={`environmental-metrics environmental-metrics--${state}`}>
      <MetricCard
        label="Data Pulse"
        value={data.dataPulse}
        state={state}
        icon={Activity}
      />
      <MetricCard
        label="Outdoor AQI"
        value={`${data.outdoorAQI.value} – ${data.outdoorAQI.descriptor}`}
        state={state}
        icon={Cloud}
      />
      <MetricCard
        label="VLED Intensity"
        value={`${data.vledIntensity}%`}
        state={state}
        icon={Zap}
      />
      <MetricCard
        label="Uptime"
        value={`${data.uptime.days}d ${data.uptime.hours}h`}
        state={state}
        icon={Timer}
      />
    </div>
  )
}

function MetricCard({ label, value, state, icon: Icon }) {
  return (
    <div className={`metric-card metric-card--${state}`}>
      <div className="metric-card__label">
        {Icon && <Icon size={12} style={{ display: 'inline', marginRight: '6px', opacity: 0.8 }} />}
        {label}
      </div>
      <div className="metric-card__value">{value}</div>
    </div>
  )
}

export default EnvironmentalMetrics
