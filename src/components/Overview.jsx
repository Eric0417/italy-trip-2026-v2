import { motion } from 'framer-motion'
import { useItinerary } from '../hooks/useItinerary'

export default function Overview() {
  const itinerary = useItinerary()
  if (!itinerary || !itinerary.days) return <div className="page"><div className="container" style={{ padding: "60px 24px", textAlign: "center" }}><p>載入中...</p></div></div>
  const { days, cityStats, hotels, tripInfo, checklist } = itinerary
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>旅程總覽</h2>
            <p>Rome → Florence → Venice → Milan</p>
          </motion.div>

          <div className="overview-stats">
            {[
              { number: '16', label: '總天數' },
              { number: '4', label: '城市' },
              { number: '4', label: '酒店' },
              { number: '13', label: '主要景點' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <h3 style={{ fontSize: '1.3rem', marginBottom: 20, marginTop: 48 }}>🏙️ 城市概覽</h3>
          <div className="city-cards">
            {(tripInfo?.cities || []).map((city, i) => {
              const stats = cityStats?.[city]
              const colors = tripInfo?.cityColors?.[city] || {}
              const icons = { '羅馬': '🏛️', '佛羅倫斯': '🎨', '威尼斯': '🌊', '米蘭': '🛍️' }
              return (
                <motion.div
                  key={city}
                  className="city-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{ borderTop: `3px solid ${colors.accent}` }}
                >
                  <div className="city-card-icon">{icons[city]}</div>
                  <h3>{city}</h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 4 }}>
                    {tripInfo?.cityNames?.[city]}
                  </div>
                  <div className="nights">{(stats || {}).nights} 晚 · {(stats || {}).range}</div>
                  {(stats?.hotels || []).map(h => (
                    <div key={h} className="hotel">{h}</div>
                  ))}
                </motion.div>
              )
            })}
          </div>

          <h3 style={{ fontSize: '1.3rem', marginBottom: 20, marginTop: 48 }}>🏨 住宿詳情</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {hotels.map((hotel, i) => {
              const colors = tripInfo?.cityColors?.[hotel.city] || {}
              return (
                <motion.div
                  key={i}
                  className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{ textAlign: 'left', borderLeft: `3px solid ${colors.accent}` }}
                >
                  <div style={{ fontSize: '0.75rem', color: colors.accent, fontWeight: 600, marginBottom: 4 }}>
                    {hotel.city}
                  </div>
                  <h4 style={{ fontSize: '1rem', marginBottom: 8 }}>{hotel.name}</h4>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <div>📍 {hotel.address}</div>
                    {hotel.tel && <div>📞 {hotel.tel}</div>}
                    {hotel.email && <div>📧 {hotel.email}</div>}
                    <div style={{ marginTop: 6 }}>
                      <span style={{ background: colors.bg, color: colors.dark, padding: '2px 8px', borderRadius: 100, fontSize: '0.75rem' }}>
                        入住 {hotel.checkin}
                      </span>
                      {' '}
                      <span style={{ background: colors.bg, color: colors.dark, padding: '2px 8px', borderRadius: 100, fontSize: '0.75rem' }}>
                        退房 {hotel.checkout}
                      </span>
                    </div>
                    {hotel.note && <div style={{ marginTop: 6, color: '#DC2626', fontSize: '0.8rem' }}>⚠️ {hotel.note}</div>}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <h3 style={{ fontSize: '1.3rem', marginBottom: 20, marginTop: 48 }}>✅ 行前確認清單</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {checklist.map((cat, i) => (
              <motion.div
                key={i}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                style={{ textAlign: 'left' }}
              >
                <h4 style={{ fontSize: '1rem', marginBottom: 12, color: 'var(--accent)' }}>{cat.category}</h4>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {cat.items.map((item, j) => (
                    <li key={j} style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <span style={{ color: 'var(--text-muted)', flexShrink: 0 }}>☐</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
