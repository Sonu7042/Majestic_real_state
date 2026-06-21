// const defaultApiBaseUrl = "http://localhost:7000"
const defaultApiBaseUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:7000'
  : 'https://majestic-real-state-2gbk.vercel.app'

export const API_BASE_URL = (import.meta.env.VITE_API_URL || defaultApiBaseUrl).replace(/\/$/, '')

export const apiUrl = (path) => `${API_BASE_URL}${path}`

export const assetUrl = (path) => {
  if (!path) return ''
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  return `${API_BASE_URL}${path}`
}

