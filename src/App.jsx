import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import DayDetail from './components/DayDetail'
import SuggestionForm from './components/SuggestionForm'
import AdminLogin from './components/AdminLogin'
import AdminPanel from './components/AdminPanel'
import Overview from './components/Overview'
import TimelineView from './components/TimelineView'
import PublicSuggestions from './components/PublicSuggestions'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day/:dayId" element={<DayDetail />} />
        <Route path="/timeline" element={<TimelineView />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/suggest" element={<SuggestionForm />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/suggestions" element={<PublicSuggestions />} />
        <Route path="/admin/panel" element={<AdminPanel />} />
      </Routes>
      <Footer />
    </>
  )
}
