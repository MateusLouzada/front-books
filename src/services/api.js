import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-books-bllr.onrender.com",
});

export const createSession = async (email, password) => {
  try {
    return await api.post(
      "/auth/login",
      { email, password },
      {
        "Content-Type": "application/json",
      }
    );
  } catch (err) {
    if (err.response.data.message) {
      if (err.response.data.message[0] == "email") {
        return alert("Email inválido!");
      }
      if (err.response.data.message[0] == "password") {
        return alert("A senha deve conter no mínimo 4 caracteres");
      }
    }

    return alert("Email ou senha incorreto!");
  }
};

export const createUser = async (name, email, password, confirmPassword) => {
  try {
    return await api.post(
      "/auth/register",
      { name, email, password, confirmPassword },
      { "Content-Type": "application/json" }
    );
  } catch (err) {
    const error = err.response.data.message[0];
    if (error == "name") {
      alert("Inserir um nome válido!");
    }
    if (error == "email") {
      alert("Inserir um email válido!");
    }
    if (error == "password") {
      alert("Inserir uma senha com no mínimo 4 caracteres!");
    }
    return false;
  }
};

export const getBooks = async (idUser) => {
  try {
    return await api.get(`/books/books_user/${idUser}`);
  } catch (err) {
    alert(err.response.data.msg);
  }
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
  try {
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
  } catch (err) {
    alert(err.response.data.msg);
  }
};

export const deleteBook = async (name, idUser) => {
  try {
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
  } catch (err) {
    alert(err.response.data.msg);
  }
};

export const changeBook = async (
  idUser,
  name,
  newRead,
  newHaveBook,
  newReadingTime
) => {
  try {
    return await api.put(
      "/books/change_book",
      { idUser, name, newRead, newHaveBook, newReadingTime },
      { "Content-Type": "application/json" }
    );
  } catch (err) {
    alert(err.response.data.msg);
  }
};
