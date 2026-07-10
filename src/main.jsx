import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ItineraryProvider } from './hooks/useItinerary'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ItineraryProvider>
        <App />
      </ItineraryProvider>
    </BrowserRouter>
  </React.StrictMode>
)
