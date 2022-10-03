import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-book-ml.herokuapp.com",
});

export const createSession = async (email, password) => {
  return await api.post(
    "/auth/login",
    { email, password },
    {
      "Content-Type": "application/json",
    }
  );
};

export const createUser = async (name, email, password, confirmPassword) => {
  try {
    return await api.post(
      "/auth/register",
      { name, email, password, confirmPassword },
      { "Content-Type": "application/json" }
    );
  } catch (err) {
    alert(err.response.data.msg);
    return false;
  }
};

export const getBooks = async (idUser) => {
  return await api.get(`/books/books_user/${idUser}`);
};

export const addBook = async ({
  name,
  image,
  read,
  haveBook,
  pages,
  readingTime,
  idUser,
}) => {
  return await api.post(
    "/books/add_book",
    {
      name,
      image,
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

export const deleteBook = async (name, idUser) => {
  //console.log(name, idUser);
  return await api.delete(
    "/books/delete_book",
    {
      data: {
        idUser: idUser,
        name: name,
      },
    },
    { "Content-Type": "application/json" }
  );
};

export const changeBook = async (
  idUser,
  name,
  newRead,
  newHaveBook,
  newReadingTime
) => {
  return await api.put(
    "/books/change_book",
    { idUser, name, newRead, newHaveBook, newReadingTime },
    { "Content-Type": "application/json" }
  );
};
