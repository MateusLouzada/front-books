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
  const [reloadBook, setReloadBook] = useState(false);
  const [modalIsOpenAdd, setModalIsOpenAdd] = useState(false);
  const [modalIsOpenChange, setModalIsOpenChange] = useState(false);
  const [defaultBooks, setDefaultBooks] = useState(false);

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
      const booksUser = response.data.books;
      setBooks(booksUser);
    }
    getBooksApi();
  }, [modalIsOpenAdd, modalIsOpenChange, reloadBook, defaultBooks]);

  const handleLogout = () => {
    logout();
  };

  const handleSortBooks = () => {
    setBooks(
      [...books].sort((a, b) => {
        if (a.name > b.name) return 1;

        if (a.name < b.name) return -1;

        return 0;
      })
    );
  };

  const handleHaveBook = () => {
    setBooks(
      books.filter((book) => {
        if (book.haveBook) return book;
      })
    );
  };

  const handleReadBook = () => {
    setBooks(
      books.filter((book) => {
        if (book.read) return book;
      })
    );
  };

  const handleDefaultBooks = () => {
    if (defaultBooks) {
      return setDefaultBooks(false);
    }
    return setDefaultBooks(true);
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
        <button onClick={handleSortBooks}>Ordem alfabética</button>
        <button onClick={handleHaveBook}>Obtido</button>
        <button onClick={handleReadBook}>Lido</button>
        <button onClick={handleDefaultBooks}>Ordem padrão</button>
      </DivAddBook>
      <ShowBooks
        books={books}
        openModalChange={openModalChange}
        setReloadBook={setReloadBook}
        reloadBook={reloadBook}
      />
      <ModalAddBook modalIsOpen={modalIsOpenAdd} closeModal={closeModalAdd} />
      <ModalChangeBook
        modalIsOpen={modalIsOpenChange}
        closeModal={closeModalChange}
      />
    </Container>
  );
}

export default HomePage;
