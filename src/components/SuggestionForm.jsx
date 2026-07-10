import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useItinerary } from '../hooks/useItinerary'

export default function SuggestionForm() {
  const location = useLocation()
  const navigate = useNavigate()
  const itinerary = useItinerary()
  const days = itinerary.days || []

  const preselectedDay = location.state?.dayId || ''

  const [form, setForm] = useState({
    name: '',
    relation: '',
    day_id: preselectedDay,
    category: 'general',
    content: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.content.trim()) {
      setError('請填寫姓名和建議內容')
      return
    }
    setSubmitting(true)
    setError('')

    try {
      const res = await fetch('/api/suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          day_id: form.day_id ? parseInt(form.day_id) : null
        })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setSubmitted(true)
    } catch (err) {
      setError(err.message || '提交失敗，請稍後再試')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="page">
        <motion.div
          className="suggestion-page success-message"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="icon">💌</div>
          <h2>感謝您的建議！</h2>
          <p>我們會仔細閱讀每一位家人的建議，<br />並在討論後更新行程。</p>
          <button className="submit-btn" style={{ width: 'auto', padding: '12px 40px' }} onClick={() => navigate('/')}>
            返回行程
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="page">
      <motion.div
        className="suggestion-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1>💡 行程建議</h1>
        <p className="subtitle">
          家人們，如果你對行程有任何想法、想新增景點、調整餐廳或任何建議，請在下方填寫。
        </p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>你的名字 *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="例如：爸爸、媽媽、小明..."
            />
          </div>

          <div className="form-group">
            <label>關係</label>
            <input
              type="text"
              name="relation"
              value={form.relation}
              onChange={handleChange}
              placeholder="例如：父親、女兒、兒子..."
            />
          </div>

          <div className="form-group">
            <label>針對哪一天的行程？</label>
            <select name="day_id" value={form.day_id} onChange={handleChange}>
              <option value="">整體建議（不限特定日期）</option>
              {days.map(d => (
                <option key={d.day} value={d.day}>
                  Day {d.day} — {d.date} {d.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>建議類別</label>
            <select name="category" value={form.category} onChange={handleChange}>
              <option value="general">一般建議</option>
              <option value="restaurant">餐廳建議</option>
              <option value="attraction">景點建議</option>
              <option value="transport">交通建議</option>
              <option value="hotel">住宿建議</option>
              <option value="other">其他</option>
            </select>
          </div>

          <div className="form-group">
            <label>建議內容 *</label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              placeholder="請詳細描述你的建議..."
            />
          </div>

          <button type="submit" className="submit-btn" disabled={submitting}>
            {submitting ? '提交中...' : '提交建議'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}
