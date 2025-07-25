export const handleGetOperation = async (url) => {
  try {
    const result = await axios.get(`${BASE_URL}${url}`, {withCredentials: true});
    return result.data;
  }
  catch (error) {
    console.error("Error in GET operation:", error);
  }
}