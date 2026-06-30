export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export async function apiFetch(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`)
  if (!res.ok) throw new Error(`API error ${res.status}`)
  return res.json()
}
