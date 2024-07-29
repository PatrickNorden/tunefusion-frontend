import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Update with your backend URL

export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/songs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching songs:', error);
    throw error;
  }
};