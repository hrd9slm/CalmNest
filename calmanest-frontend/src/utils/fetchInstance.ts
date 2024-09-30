const API_BASE_URL = 'http://localhost:8000/api';

export async function fetchInstance(endpoint: string, options: RequestInit = {}) {
  const token = localStorage.getItem('token'); 
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'An error occurred');
  }

  return response.json();
}


