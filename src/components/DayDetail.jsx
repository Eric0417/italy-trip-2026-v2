import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useItinerary } from '../hooks/useItinerary'

export default function DayDetail() {
  const { dayId } = useParams()
  const navigate = useNavigate()
  const itinerary = useItinerary()
  const days = itinerary.days || []
  const tripInfo = itinerary.tripInfo || {}

  const day = days.find(d => d.day === parseInt(dayId))

  if (!day) {
    return (
      <div className="page">
        <div className="container" style={{ padding: '60px 24px', textAlign: 'center' }}>
          <h2>找不到這一天的行程</h2>
          <button className="submit-btn" style={{ marginTop: 20, width: 'auto', padding: '10px 32px' }} onClick={() => navigate('/')}>
            返回首頁
          </button>
        </div>
      </div>
    )
  }

  const colors = tripInfo?.cityColors?.[day.city] || tripInfo?.cityColors?.["羅馬"] || {}

  return (
    <div className="page">
      <motion.div
        className="day-detail"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <button className="day-detail-back" onClick={() => navigate('/')}>
          ← 返回行程
        </button>

        <div className="day-detail-header">
          <h1>{day.icon} Day {day.day} — {day.title}</h1>
          <div className="meta">
            <span>{day.date} ({day.weekday})</span>
            <span
              className="badge"
              style={{ background: colors.bg, color: colors.dark }}
            >
              {day.city}
            </span>
          </div>
        </div>

        <div className="day-detail-timeline">
          {day.events.map((evt, i) => (
            <motion.div
              key={i}
              className="day-detail-event"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <div
                className="day-detail-event-dot"
                style={{ borderColor: colors.accent, background: colors.bg }}
              />
              <div className="day-detail-event-time">{evt.time}</div>
              <div className="day-detail-event-title">{evt.title}</div>
              {evt.detail && (
                <div className="day-detail-event-desc">{evt.detail}</div>
              )}
              {evt.budget && (
                <span
                  className="day-detail-event-budget"
                  style={{ background: colors.bg, color: colors.dark }}
                >
                  {evt.budget}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <button
            className="submit-btn"
            style={{ width: 'auto', padding: '12px 40px' }}
            onClick={() => navigate('/suggest', { state: { dayId: day.day, dayTitle: day.title } })}
          >
            對此日行程提出建議
          </button>
        </div>
      </motion.div>
    </div>
  )
}
