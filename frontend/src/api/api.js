import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

export const defaultPersonalInfo = {
  name: 'GAURAV',
  title: 'Full Stack Developer',
  bio: 'AI & Data Science undergraduate at CGC University with hands-on experience building AI and full-stack applications using Python, Java, Flask, Spring Boot, and Django. Strong foundation in machine learning, computer vision, NLP, and backend development with 200+ DSA problems solved.',
  skills: 'Python, Java, JavaScript, C++, Flask, Spring Boot, React, Django, MySQL, PostgreSQL, Machine Learning, Computer Vision, NLP, REST APIs, Git, GitHub, NumPy, Pandas',
  email: 'gauravgtp614@gmail.com',
  phone: '+91-6284697513',
  location: 'Ludhiana, Punjab, India',
  resume: 'https://drive.google.com/file/d/1SclCKpfJOhgYpx94GtUtvwrxJ_STH3D7/view',
}

export const defaultProjects = [
  {
    id: 1,
    title: 'RapidAid - Emergency Ambulance Dispatch',
    description: 'Web-based ambulance dispatch platform enabling emergency assistance requests and live location sharing. Integrated Google Maps API for real-time tracking and nearest ambulance identification.',
    technologies: 'Python, Flask, SQLite, Google Maps API, HTML, CSS',
    github_link: 'https://github.com/Gaurav5791/RapidAid',
    link: 'https://github.com/Gaurav5791/RapidAid',
  },
  {
    id: 2,
    title: 'VidyaMitra - AI Career Recommendation Platform',
    description: 'AI-powered platform analyzing resumes and GitHub profiles. Implements NLP-based skill extraction, ATS scores, and personalized career recommendations.',
    technologies: 'Python, Flask, MySQL, Machine Learning, NLP, PDF Processing',
    github_link: 'https://github.com/Gaurav5791/VidyaMitra',
    link: 'https://github.com/Gaurav5791/VidyaMitra',
  },
  {
    id: 3,
    title: 'CourseReg - Course Management System',
    description: 'Full-stack course registration platform with JWT authentication, role-based access control, and approval workflows for students, admins, and registrars.',
    technologies: 'Java, Spring Boot, MySQL, Spring Security, JavaScript',
    github_link: 'https://github.com/Gaurav5791/CourseReg',
    link: 'https://github.com/Gaurav5791/CourseReg',
  },
]

// Portfolio data
export const fetchPortfolioData = async () => {
  try {
    const response = await api.get('/personal-info/')
    return response.data[0] || defaultPersonalInfo
  } catch {
    return defaultPersonalInfo
  }
}

export const fetchSkillCategories = async () => {
  try {
    const response = await api.get('/skill-categories/')
    return response.data
  } catch {
    return []
  }
}

export const fetchProjects = async () => {
  try {
    const response = await api.get('/projects/')
    return (Array.isArray(response.data) && response.data.length > 0) ? response.data : defaultProjects
  } catch {
    return defaultProjects
  }
}

export const fetchExperiences = async () => {
  try {
    const response = await api.get('/experiences/')
    return response.data
  } catch {
    return []
  }
}

export const fetchBlogPosts = async () => {
  try {
    const response = await api.get('/blog/')
    return response.data
  } catch {
    return []
  }
}

export const submitContactForm = async (data) => {
  try {
    const response = await api.post('/messages/', data)
    return response.data
  } catch (error) {
    console.error('Error submitting form:', error)
    return { success: true }
  }
}

export const fetchPortfolioItems = async () => {
  try {
    const response = await api.get('/projects/')
    return (Array.isArray(response.data) && response.data.length > 0) ? response.data : defaultProjects
  } catch {
    return defaultProjects
  }
}

export default api
