import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './Hero'
import { useItinerary } from '../hooks/useItinerary'


export default function Home() {
  const [activeCity, setActiveCity] = useState('all')
  const navigate = useNavigate()

  const itinerary = useItinerary()
  const days = itinerary.days || []
  const tripInfo = itinerary.tripInfo || {}

  const filteredDays = activeCity === 'all'
    ? days
    : days.filter(d => d.city === activeCity)

  const allCities = ['all', ...tripInfo?.cities || []]

  return (
    <div>
      <Hero />

      <div className="city-nav">
        <div className="city-nav-inner">
          {allCities.map(city => {
            const colors = tripInfo?.cityColors?.[city] || {}
            return (
              <button
                key={city}
                className={`city-nav-btn ${activeCity === city ? 'active' : ''}`}
                onClick={() => setActiveCity(city)}
              >
                {city !== 'all' && colors && (
                  <span
                    className="dot"
                    style={{ background: colors.accent }}
                  />
                )}
                {city === 'all' ? '全部行程' : city}
              </button>
            )
          })}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <motion.div layout className="days-grid">
            <AnimatePresence mode="popLayout">
              {filteredDays.map(day => (
                <motion.div
                  key={day.day}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <DayCard
                    day={day}
                    onClick={() => navigate(`/day/${day.day}`)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function DayCard({ day, onClick }) {
  const colors = tripInfo?.cityColors?.[day.city] || tripInfo?.cityColors?.["羅馬"] || {}
  const previewEvents = day.events.slice(0, 3)

  return (
    <div className="day-card" onClick={onClick}>
      <div className="day-card-header">
        <div className="day-card-number">Day {day.day}</div>
        <div className="day-card-title">{day.icon} {day.title}</div>
        <div className="day-card-date">{day.date} ({day.weekday})</div>
        <span
          className="day-card-city"
          style={{
            background: colors.bg,
            color: colors.dark
          }}
        >
          {day.city}
        </span>
      </div>
      <div className="day-card-events">
        {previewEvents.map((evt, i) => (
          <div key={i} className="day-card-event">
            <span className="day-card-event-icon">{evt.type.split(' ')[0]}</span>
            <div className="day-card-event-content">
              <div className="day-card-event-title">{evt.title}</div>
              {evt.detail && (
                <div className="day-card-event-detail">{evt.detail}</div>
              )}
            </div>
          </div>
        ))}
        {day.events.length > 3 && (
          <div className="day-card-event">
            <span className="day-card-event-icon">···</span>
            <div className="day-card-event-content">
              <div className="day-card-event-title" style={{ color: 'var(--text-muted)' }}>
                還有 {day.events.length - 3} 項行程
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
