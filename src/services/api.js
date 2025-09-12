import axios from 'axios';

// Create axios instance with default configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'https://sih-arogyam-backend.onrender.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle common errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Let the components handle 401 errors rather than doing a hard redirect
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  // Fallback implementation for status endpoint
  status: () => {
    return api.get('/api/auth/status')
      .catch(error => {
        // If status endpoint doesn't exist, return a default response
        if (error.response?.status === 404) {
          return Promise.resolve({
            data: {
              isAuthenticated: false,
              user: null
            }
          });
        }
        return Promise.reject(error);
      });
  },
  login: (credentials) => api.post('/api/auth/login', credentials),
  register: (userData) => api.post('/api/auth/register', userData),
  logout: () => api.post('/api/auth/logout'),
};

// User APIs
export const userAPI = {
  getProfile: () => api.get('/api/users/profile'),
  updateProfile: (data) => api.put('/api/users/profile', data),
};

// Consultant APIs
export const consultantAPI = {
  getAll: () => api.get('/api/consultants'),
  getById: (id) => api.get(`/api/consultants/${id}`),
};

// Appointment APIs
export const appointmentAPI = {
  getAll: () => api.get('/api/appointments'),
  getById: (id) => api.get(`/api/appointments/${id}`),
  create: (data) => api.post('/api/appointments', data),
  update: (id, data) => api.put(`/api/appointments/${id}`, data),
  delete: (id) => api.delete(`/api/appointments/${id}`),
};

// Session APIs
export const sessionAPI = {
  getAll: () => api.get('/api/sessions'),
  getById: (id) => api.get(`/api/sessions/${id}`),
  create: (data) => api.post('/api/sessions', data),
};

// Rating APIs
export const ratingAPI = {
  getAll: () => api.get('/api/ratings'),
  create: (data) => api.post('/api/ratings', data),
};

// Prescription APIs
export const prescriptionAPI = {
  getAll: () => api.get('/api/prescriptions'),
  getById: (id) => api.get(`/api/prescriptions/${id}`),
  create: (data) => api.post('/api/prescriptions', data),
};

// Calendar APIs
export const calendarAPI = {
  getEvents: () => api.get('/api/calendar/events'),
  createEvent: (data) => api.post('/api/calendar/events', data),
};

// Blog APIs
export const blogAPI = {
  getAll: () => api.get('/api/blog'),
  getById: (id) => api.get(`/api/blog/${id}`),
  create: (data) => api.post('/api/blog', data),
};

// Notification APIs
export const notificationAPI = {
  getAll: () => api.get('/api/notifications'),
  markAsRead: (id) => api.put(`/api/notifications/${id}/read`),
};

export default api;