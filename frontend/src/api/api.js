import axios from 'axios'

const API_URL = 'http://localhost:8000/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Portfolio data
export const fetchPortfolioData = async () => {
  try {
    const response = await api.get('/personal-info/')
    return response.data[0] || {}
  } catch (error) {
    console.error('Error fetching portfolio data:', error)
    return {}
  }
}

export const fetchSkillCategories = async () => {
  try {
    const response = await api.get('/skill-categories/')
    return response.data
  } catch (error) {
    console.error('Error fetching skills:', error)
    return []
  }
}

export const fetchProjects = async () => {
  try {
    const response = await api.get('/projects/')
    return response.data
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export const fetchExperiences = async () => {
  try {
    const response = await api.get('/experiences/')
    return response.data
  } catch (error) {
    console.error('Error fetching experiences:', error)
    return []
  }
}

export const fetchBlogPosts = async () => {
  try {
    const response = await api.get('/blog/')
    return response.data
  } catch (error) {
    console.error('Error fetching blog:', error)
    return []
  }
}

export const submitContactForm = async (data) => {
  try {
    const response = await api.post('/messages/', data)
    return response.data
  } catch (error) {
    console.error('Error submitting form:', error)
    throw error
  }
}

export const fetchPortfolioItems = async () => {
  try {
    const response = await api.get('/projects/')
    return response.data
  } catch (error) {
    console.error('Error fetching portfolio items:', error)
    return []
  }
}

export default api