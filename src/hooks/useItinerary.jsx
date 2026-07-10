import { createContext, useContext, useState, useEffect } from 'react'

const ItineraryContext = createContext(null)

export function ItineraryProvider({ children }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/itinerary')
      .then(r => r.json())
      .then(setData)
      .catch(() => {})
  }, [])

  return (
    <ItineraryContext.Provider value={data}>
      {children}
    </ItineraryContext.Provider>
  )
}

export function useItinerary() {
  const ctx = useContext(ItineraryContext)
  return ctx || {}
}
