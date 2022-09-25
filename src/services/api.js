import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-book-ml.herokuapp.com",
});

export const createSession = async (email, password) => {
  return api.post(
    "/auth/login",
    { email, password },
    {
      "Content-Type": "application/json",
    }
  );
};

export const createUser = async (name, email, password, confirmPassword) => {
  return api.post(
    "/auth/register",
    { name, email, password, confirmPassword },
    { "Content-Type": "application/json" }
  );
};

export const getBooks = async (idUser) => {
  return await api.get(`/books/books_user/${idUser}`);
};

export const addBook = async (
  name,
  read,
  haveBook,
  pages,
  readingTime,
  idUser
) => {
  return api.post(
    "/books/add_book",
    {
      name,
      read,
      haveBook,
      pages,
      readingTime,
      idUser,
    },
    {
      "Content-Type": "application/json",
    }
  );
};

export const deleteBook = async (idUser, name) => {
  return api.delete(
    "/books/delete_book",
    { idUser, name },
    { "Content-Type": "application/json" }
  );
};

export const changeBook = async (idUser, name, newRead) => {
  return api.put(
    "/books/change_book",
    { idUser, name, newRead },
    { "Content-Type": "application/json" }
  );
};
