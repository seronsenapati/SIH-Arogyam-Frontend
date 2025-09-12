// API utility functions
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://sih-arogyam-backend.onrender.com' 
  : '';

export const apiClient = {
  post: async (endpoint, data) => {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    
    // Add credentials for CORS requests if needed
    // Only uncomment this if your backend expects cookies/auth tokens
    // options.credentials = 'include';
    
    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  },
  
  get: async (endpoint) => {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    // Add credentials for CORS requests if needed
    // Only uncomment this if your backend expects cookies/auth tokens
    // options.credentials = 'include';
    
    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }
};

export default apiClient;