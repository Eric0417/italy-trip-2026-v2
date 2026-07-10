import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useItinerary } from '../hooks/useItinerary'

export default function TimelineView() {
  const itinerary = useItinerary()
  const days = itinerary.days || []
  const tripInfo = itinerary.tripInfo || {}
  const navigate = useNavigate()

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>行程時間線</h2>
            <p>16 天的義大利之旅，每一天都精彩</p>
          </div>
        </div>
      </section>

      <div className="timeline-view">
        <div className="timeline-line">
          {days.map((day, i) => {
            const colors = tripInfo?.cityColors?.[day.city] || tripInfo?.cityColors?.["羅馬"] || {}
            return (
              <motion.div
                key={day.day}
                className="timeline-item"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <div className="timeline-item-connector">
                  <div
                    className="timeline-item-dot"
                    style={{
                      borderColor: colors.accent,
                      color: colors.dark,
                      background: colors.bg
                    }}
                  >
                    {day.icon}
                  </div>
                </div>
                <motion.div
                  className="timeline-item-content"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => navigate(`/day/${day.day}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="day-num">Day {day.day} · {day.city}</div>
                  <h3>{day.title}</h3>
                  <div className="date">{day.date} ({day.weekday})</div>
                  <div className="events-preview">
                    {day.events.slice(0, 3).map((evt, j) => (
                      <span key={j}>{evt.type.split(' ')[0]} {evt.title.slice(0, 12)}{evt.title.length > 12 ? '...' : ''}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
