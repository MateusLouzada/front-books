import React, { useContext, useState, useEffect } from "react";
import { Container, DivButton } from "./style";
import { getBooks } from "../../services/api";
import ShowBooks from "../../components/ShowBooks";
import ModalAddBook from "../../components/ModalAddBook";

import { AuthContext } from "../../contexts/auth";
import ModalChangeBook from "../../components/ModalChangeBook";

function HomePage() {
  const { logout, user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [modalIsOpenAdd, setModalIsOpenAdd] = useState(false);
  const [modalIsOpenChange, setModalIsOpenChange] = useState(false);

  const openModalAdd = () => setModalIsOpenAdd(true);
  const openModalChange = () => setModalIsOpenChange(true);

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
      <div>
        <button onClick={openModalAdd}>Adicionar um livro</button>
      </div>
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
