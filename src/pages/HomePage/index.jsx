import React, { useContext, useState, useEffect } from "react";
import { Container, DivButton, DivAddBook } from "./style";
import { getBooks } from "../../services/api";
import ShowBooks from "../../components/ShowBooks";
import ModalAddBook from "../../components/ModalAddBook";

import { AuthContext } from "../../contexts/auth";
import ModalChangeBook from "../../components/ModalChangeBook";
import { BookContext } from "../../contexts/bookContext";

function HomePage() {
  const { setBook } = useContext(BookContext);
  const { logout, user } = useContext(AuthContext);

  const [books, setBooks] = useState([]);
  const [modalIsOpenAdd, setModalIsOpenAdd] = useState(false);
  const [modalIsOpenChange, setModalIsOpenChange] = useState(false);

  const openModalAdd = () => setModalIsOpenAdd(true);
  const openModalChange = (book, _) => {
    setBook(book);
    setModalIsOpenChange(true);
  };

  const closeModalAdd = () => setModalIsOpenAdd(false);
  const closeModalChange = () => setModalIsOpenChange(false);

  useEffect(() => {
    async function getBooksApi() {
      const response = await getBooks(user.id);
      const booksUser = response.data;
      setBooks(booksUser.books);
    }
    getBooksApi();
  }, [modalIsOpenAdd, modalIsOpenChange]);

  const handleLogout = () => {
    logout();
  };

  if (!books) {
    return <h2>Carregando...</h2>;
  }

  return (
    <Container>
      <DivButton>
        <button onClick={handleLogout}>Logout</button>
      </DivButton>
      <DivAddBook>
        <button onClick={openModalAdd}>Adicionar um livro</button>
      </DivAddBook>
      <ShowBooks books={books} openModalChange={openModalChange} />
      <ModalAddBook modalIsOpen={modalIsOpenAdd} closeModal={closeModalAdd} />
      <ModalChangeBook
        modalIsOpen={modalIsOpenChange}
        closeModal={closeModalChange}
      />
    </Container>
  );
}

export default HomePage;
