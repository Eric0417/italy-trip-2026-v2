import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ItineraryProvider } from './hooks/useItinerary'
import App from './App'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  render() {
    if (this.state.hasError) {
      return React.createElement('div', { style: { padding: '40px', fontFamily: 'sans-serif', color: '#B91C1C', textAlign: 'center' } },
        React.createElement('h2', null, '❌ Runtime Error'),
        React.createElement('pre', { style: { whiteSpace: 'pre-wrap', fontSize: '14px', textAlign: 'left', maxWidth: '700px', margin: '20px auto', background: '#FEE2E2', padding: '16px', borderRadius: '8px' } }, this.state.error?.stack || this.state.error?.message || String(this.state.error))
      )
    }
    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ItineraryProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ItineraryProvider>
    </BrowserRouter>
  </React.StrictMode>
)
