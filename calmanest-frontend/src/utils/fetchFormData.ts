const API_BASE_URL = 'http://localhost:8000/api';
export async function fetchFormData(endpoint: string, options: RequestInit = {}) {
    const token = localStorage.getItem('token'); 
  
    const headers: HeadersInit = {
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    };
  
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
      body: options.body, // Directly use the FormData object
    });
  
    if (!response.ok) {
      const contentType = response.headers.get('content-type');
      let errorMessage = 'An error occurred';
      if (contentType && contentType.includes('application/json')) {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } else {
        const errorText = await response.text();
        console.error('Non-JSON error response:', errorText);
      }
      throw new Error(errorMessage);
    }
  
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    } else {
      return response.text(); // or handle other content types as needed
    }
  }