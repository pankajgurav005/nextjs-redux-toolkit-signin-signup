const baseURL = process.env.BASE_URL || 'http://localhost:4000';

export const postRequest = async (endpoint, data) => {
  try {
    alert(`${baseURL}/${endpoint}`)
    alert(JSON.stringify(data));
    const response = await fetch(`${baseURL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
};