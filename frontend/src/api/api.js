const API_BASE_URL = 'http://localhost:8000/api'

// Portfolio Items
export const fetchPortfolioItems = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio/`)
    if (!response.ok) throw new Error('Failed to fetch portfolio')
    return await response.json()
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

// About Info
export const fetchAbout = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/about/`)
    if (!response.ok) throw new Error('Failed to fetch about')
    return await response.json()
  } catch (error) {
    console.error('Error:', error)
    return {}
  }
}

// Skills
export const fetchSkills = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/skills/`)
    if (!response.ok) throw new Error('Failed to fetch skills')
    return await response.json()
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}