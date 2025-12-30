import axios from "axios";

export const fetchData = async ({
  url,
  method = "GET",
  headers = {},
  body = null,
}) => {
  try {
    const response = await axios(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    });
    return response?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
