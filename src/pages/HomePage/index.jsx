import React, { useContext, useState, useEffect } from "react";
import { Container, DivButton } from "./style";
import { getBooks } from "../../services/api";
import ShowBooks from "../../components/ShowBooks";
import ModalAddBook from "../../components/ModalAddBook";

import { AuthContext } from "../../contexts/auth";

function HomePage() {
  const { logout, user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    async function getBooksApi() {
      const response = await getBooks(user.id);
      const booksUser = response.data;
      setBooks(booksUser.books);
    }
    getBooksApi();
  }, []);

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
        <button onClick={openModal}>Adicionar um livro</button>
      </div>
      <ShowBooks books={books} />
      <ModalAddBook
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </Container>
  );
}

export default HomePage;
