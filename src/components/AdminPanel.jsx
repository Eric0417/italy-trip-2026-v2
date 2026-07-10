import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useItinerary } from '../hooks/useItinerary'

export default function AdminPanel() {
  const navigate = useNavigate()
  const [suggestions, setSuggestions] = useState([])
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const checkRes = await fetch('/api/admin/check', { credentials: 'include' })
      const checkData = await checkRes.json()
      if (!checkData.isAdmin) {
        navigate('/admin')
        return
      }

      const [suggRes, statsRes] = await Promise.all([
        fetch('/api/admin/suggestions', { credentials: 'include' }),
        fetch('/api/admin/stats', { credentials: 'include' })
      ])

      if (!suggRes.ok) {
        const err = await suggRes.json()
        throw new Error(err.error)
      }

      const suggData = await suggRes.json()
      const statsData = await statsRes.json()
      setSuggestions(suggData)
      setStats(statsData)
    } catch (err) {
      setError(err.message || '載入失敗')
    } finally {
      setLoading(false)
    }
  }

  const handleStatus = async (id, status) => {
    try {
      const res = await fetch(`/api/admin/suggestions/${id}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      })
      if (!res.ok) throw new Error('更新失敗')
      setSuggestions(prev =>
        prev.map(s => s.id === id ? { ...s, status } : s)
      )
      loadData()
    } catch (err) {
      setError(err.message)
    }
  }


  const handleDelete = async (id) => {
    if (!confirm('確定要刪除這條建議嗎？此操作無法復原。')) return
    try {
      const res = await fetch(`/api/admin/suggestions/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      })
      if (!res.ok) throw new Error('刪除失敗')
      setSuggestions(prev => prev.filter(s => s.id !== id))
      loadData()
    } catch (err) {
      setError(err.message)
    }
  }

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST', credentials: 'include' })
    navigate('/')
  }

  const itinerary = useItinerary()
  const days = itinerary.days || []

  const getDayLabel = (dayId) => {
    const day = days.find(d => d.day === dayId)
    return day ? `Day ${day.day} · ${day.date} ${day.title}` : ''
  }

  const categoryLabels = {
    general: '一般', restaurant: '餐廳', attraction: '景點',
    transport: '交通', hotel: '住宿', other: '其他'
  }

  const statusLabels = {
    pending: '待審', accepted: '已採納', declined: '已拒絕'
  }

  if (loading) {
    return (
      <div className="page">
        <div className="container" style={{ padding: '60px 24px', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)' }}>載入中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <motion.div
        className="admin-dashboard"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="admin-header">
          <h1>📊 管理後台</h1>
          <button className="logout-btn" onClick={handleLogout}>登出</button>
        </div>

        {error && <div className="error-message">{error}</div>}

        {stats && (
          <div className="admin-stats">
            <div className="stat-card">
              <div className="stat-number">{stats.total}</div>
              <div className="stat-label">總建議數</div>
            </div>
            {stats.byStatus.map(s => (
              <div key={s.status} className="stat-card">
                <div className="stat-number">{s.count}</div>
                <div className="stat-label">{statusLabels[s.status] || s.status}</div>
              </div>
            ))}
          </div>
        )}

        {suggestions.length === 0 ? (
          <div className="empty-state">
            <div className="icon">📭</div>
            <p>目前還沒有任何建議</p>
          </div>
        ) : (
          <div className="suggestions-table">
            <div className="suggestions-table-header">
              <span>建議內容</span>
              <span>提出者</span>
              <span>日期 / 類別</span>
              <span>狀態</span>
              <span>操作</span>
            </div>
            {suggestions.map(s => (
              <div key={s.id} className="suggestions-table-row">
                <div className="suggestion-content">
                  {s.content}
                </div>
                <div>
                  <div style={{ fontWeight: 500 }}>{s.name}</div>
                  {s.relation && <div className="suggestion-meta">{s.relation}</div>}
                </div>
                <div>
                  {s.day_id && (
                    <div className="suggestion-meta" style={{ fontWeight: 500, marginBottom: 2 }}>
                      {getDayLabel(s.day_id)}
                    </div>
                  )}
                  <div className="suggestion-meta">
                    {categoryLabels[s.category] || s.category} · {new Date(s.created_at).toLocaleDateString('zh-TW')}
                  </div>
                </div>
                <div>
                  <span className={`suggestion-status status-${s.status}`}>
                    {statusLabels[s.status] || s.status}
                  </span>
                </div>
                <div className="status-actions">
                  {s.status !== 'accepted' && (
                    <button
                      className="status-btn accept"
                      onClick={() => handleStatus(s.id, 'accepted')}
                    >
                      採納
                    </button>
                  )}
                  {s.status !== 'declined' && (
                    <button
                      className="status-btn decline"
                      onClick={() => handleStatus(s.id, 'declined')}
                    >
                      拒絕
                    </button>
                  )}
                  {s.status !== 'pending' && (
                    <button
                      className="status-btn"
                      onClick={() => handleStatus(s.id, 'pending')}
                    >
                      還原
                    </button>
                  )}
                  <button
                    className="status-btn decline"
                    onClick={() => handleDelete(s.id)}
                    style={{ color: '#DC2626', borderColor: '#FECACA' }}
                  >
                    刪除
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}
