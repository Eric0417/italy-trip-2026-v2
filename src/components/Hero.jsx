import { motion } from 'framer-motion'
import { useItinerary } from '../hooks/useItinerary'

const stars = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 3}s`,
  size: Math.random() * 2 + 1
}))

export default function Hero() {
  const { tripInfo = { title: "義大利之旅", cities: ["羅馬", "佛羅倫斯", "威尼斯", "米蘭"], cityColors: {} } } = useItinerary()
  return (
    <section className="hero">
      <div className="hero-stars">
        {stars.map(s => (
          <div
            key={s.id}
            className="hero-star"
            style={{
              left: s.left,
              top: s.top,
              animationDelay: s.delay,
              width: s.size,
              height: s.size
            }}
          />
        ))}
      </div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="hero-badge">Family Trip</div>
        <h1>{tripInfo.title}</h1>
        <h2>Rome · Florence · Venice · Milan</h2>
        <div className="hero-dates">
          <span>2026.7.25</span>
          <div className="divider" />
          <span>2026.8.9</span>
        </div>
        <div className="hero-cities">
          {(tripInfo?.cities || []).map(city => (
            <motion.span
              key={city}
              className="hero-city-tag"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {city}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
