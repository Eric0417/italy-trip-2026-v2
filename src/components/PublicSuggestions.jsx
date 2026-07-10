import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useItinerary } from '../hooks/useItinerary'

const statusLabels = { pending: '待審核', accepted: '已採納', declined: '已拒絕' }
const statusColors = {
  pending: { bg: '#FEF3C7', color: '#92400E', border: '#FCD34D' },
  accepted: { bg: '#D1FAE5', color: '#065F46', border: '#6EE7B7' },
  declined: { bg: '#FEE2E2', color: '#991B1B', border: '#FCA5A5' }
}
const categoryLabels = { general: '一般', restaurant: '餐廳', attraction: '景點', transport: '交通', hotel: '住宿', other: '其他' }
const categoryIcons = { general: '💡', restaurant: '🍝', attraction: '🏛️', transport: '🚄', hotel: '🏨', other: '📌' }

const itinerary = useItinerary()
  const days = itinerary.days || []

  function getDayLabel(dayId) {
  if (!dayId) return '整體建議'
  const day = days.find(d => d.day === dayId)
  return day ? `Day ${day.day} · ${day.date}` : `Day ${dayId}`
}

export default function PublicSuggestions() {
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetch('/api/public/suggestions')
      .then(r => r.json())
      .then(data => setSuggestions(data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const filtered = filter === 'all'
    ? suggestions
    : suggestions.filter(s => s.status === filter)

  const counts = {
    all: suggestions.length,
    pending: suggestions.filter(s => s.status === 'pending').length,
    accepted: suggestions.filter(s => s.status === 'accepted').length,
    declined: suggestions.filter(s => s.status === 'declined').length
  }

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
            <h2>💬 家人建議牆</h2>
            <p>大家的建議和審批進度都在這裡</p>
          </motion.div>

          {/* Filter tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 36, flexWrap: 'wrap' }}>
            {(['all', 'pending', 'accepted', 'declined']).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '8px 20px',
                  borderRadius: 100,
                  border: filter === f ? '2px solid var(--accent)' : '1px solid var(--border)',
                  background: filter === f ? 'var(--accent-light)' : 'var(--bg-card)',
                  color: filter === f ? 'var(--accent)' : 'var(--text-secondary)',
                  fontWeight: filter === f ? 600 : 400,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6
                }}
              >
                {f === 'all' ? '全部' : statusLabels[f]}
                <span style={{
                  background: filter === f ? 'var(--accent)' : 'var(--border-light)',
                  color: filter === f ? '#FFF' : 'var(--text-muted)',
                  borderRadius: 100,
                  padding: '1px 8px',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}>
                  {counts[f]}
                </span>
              </button>
            ))}
          </div>

          {loading ? (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 40 }}>載入中...</p>
          ) : filtered.length === 0 ? (
            <div className="empty-state">
              <div className="icon">📭</div>
              <p>{filter === 'all' ? '還沒有人提出建議' : `沒有${statusLabels[filter]}的建議`}</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16 }}>
              {filtered.map((s, i) => {
                const sc = statusColors[s.status]
                return (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    style={{
                      background: 'var(--bg-card)',
                      borderRadius: 'var(--radius)',
                      border: `1px solid ${sc.border}`,
                      borderLeft: `4px solid ${sc.color}`,
                      padding: 20,
                      transition: 'all 0.2s',
                    }}
                    whileHover={{ boxShadow: 'var(--shadow-md)', transform: 'translateY(-2px)' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: '1.2rem' }}>{categoryIcons[s.category] || '💡'}</span>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{s.name}</div>
                          {s.relation && (
                            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{s.relation}</div>
                          )}
                        </div>
                      </div>
                      <span style={{
                        padding: '3px 12px',
                        borderRadius: 100,
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        background: sc.bg,
                        color: sc.color
                      }}>
                        {statusLabels[s.status]}
                      </span>
                    </div>

                    <div style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      marginBottom: 10,
                      display: 'flex',
                      gap: 16,
                      flexWrap: 'wrap'
                    }}>
                      <span>📅 {getDayLabel(s.day_id)}</span>
                      <span>🏷️ {categoryLabels[s.category] || s.category}</span>
                      <span>🕐 {new Date(s.created_at).toLocaleDateString('zh-TW', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                    </div>

                    <div style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      color: 'var(--text)',
                      background: 'var(--border-light)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '12px 14px'
                    }}>
                      {s.content}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
