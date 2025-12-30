import { fetchData } from "../apiroutes/https";
const TENOR_KEY = import.meta.env.VITE_TENOR_API_KEY;
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_API_KEY;

export const unSplashData = async (query) => {
  if (!query) return null;
  const response = await fetchData({
    url: `https://api.unsplash.com/search/photos?page=1&query=${query}`,
    method: "GET",
    headers: {
      Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
    },
  });
  return response;
};

export const pixelsVideos = async (query, per_page) => {
  if (!query) return null;

  const response = await fetchData({
    url: `https://api.pexels.com/videos/search?per_page=${per_page}&query=${query}`,
    headers: { Authorization: PEXELS_KEY },
  });

  return response;
};

export const tenorGifs = async (query) => {
  if (!query) return null;

  const response = await fetchData({
    url: `https://tenor.googleapis.com/v2/search?q=${query}&key=${TENOR_KEY}&limit=20`,
    headers: { Authorization: PEXELS_KEY },
  });

  return response;
};
