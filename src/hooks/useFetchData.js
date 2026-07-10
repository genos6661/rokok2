import { useState, useEffect } from 'react'

/**
 * useFetchData - fetches a static JSON file from /data/*.json
 * This is how React reads data written by the PHP admin panel,
 * without any REST API layer in between.
 */
export default function useFetchData(fileName) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true)
    fetch(`${import.meta.env.BASE_URL}data/${fileName}?t=${Date.now()}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${fileName}`)
        return res.json()
      })
      .then((json) => {
        if (active) setData(json)
      })
      .catch((err) => {
        if (active) setError(err.message)
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [fileName])

  return { data, loading, error }
}
