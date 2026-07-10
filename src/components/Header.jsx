import { NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="header-logo">
          <span className="flag">🇮🇹</span>
          Italia 2026
        </NavLink>
        <nav className="header-nav">
          <NavLink to="/" end>行程</NavLink>
          <NavLink to="/timeline">時間線</NavLink>
          <NavLink to="/overview">總覽</NavLink>
          <NavLink to="/suggest">建議</NavLink>
          <NavLink to="/suggestions">建議牆</NavLink>
          {!isAdmin && (
            <NavLink to="/admin" className="admin-btn">管理</NavLink>
          )}
        </nav>
      </div>
    </header>
  )
}
