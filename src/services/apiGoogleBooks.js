import axios from "axios";

export const apiGoogle = axios.create({
  baseURL: "https://www.googleapis.com",
});

export const getBook = async (nameBook) => {
  return await apiGoogle.get(
    `books/v1/volumes?q=${nameBook}&key=${import.meta.env.VITE_API_GOOGLE}`
  );
};
