// src/api.ts
import axios from 'axios';

const API_URL = 'https://backend.wurdle.eu:3000/';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchData = async () => {
  try {
    const response = await apiClient.get('api');
    // Assuming the response contains the necessary text for the first button
    return {
      firstUpgradeText: response.data.firstUpgradeText, // Update with actual field from API response
    };
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};
