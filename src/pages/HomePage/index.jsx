import React, { useContext, useState, useEffect } from "react";
import { Container, DivButton } from "./style";
import { getBooks } from "../../services/api";
import ShowBooks from "../../components/ShowBooks";
import ModalAddBook from "../../components/ModalAddBook";

import "./dropDownStyle.css";

import { AuthContext } from "../../contexts/auth";
import ModalChangeBook from "../../components/ModalChangeBook";
import { BookContext } from "../../contexts/bookContext";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

function HomePage() {
  const { setBook } = useContext(BookContext);
  const { logout, user } = useContext(AuthContext);

  const [books, setBooks] = useState([]);
  const [reloadBook, setReloadBook] = useState(false);
  const [modalIsOpenAdd, setModalIsOpenAdd] = useState(false);
  const [modalIsOpenChange, setModalIsOpenChange] = useState(false);
  const [defaultBooks, setDefaultBooks] = useState(false);
  const [filter, setFilter] = useState("Ordem Padrão");
  const [refresh, setRefresh] = useState(false)

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
      console.log(booksUser);
      setBooks(booksUser);
    }
    getBooksApi();
  }, [refresh, reloadBook, defaultBooks]);

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
      [...books].filter((book) => {
        if (book.haveBook) return book;
      })
    );
  };

  const handleReadBook = () => {
    const temp = books.filter((book) => {
      if (book.read) return book;
    });
    console.log(temp);
    setBooks(temp);
  };

  const handleDefaultBooks = () => {
    if (defaultBooks) {
      return setDefaultBooks(false);
    }
    return setDefaultBooks(true);
  };

  const handleChange = (event) => {
    setFilter(event.target.value);
    switch (event.target.value) {
      case "Ordem alfabética":
        handleSortBooks();
        break;
      case "Obtido":
        handleHaveBook();
        break;
      case "Lido":
        handleReadBook();
        break;
      case "Ordem Padrão":
        handleDefaultBooks();
        break;

      default:
        break;
    }
  };

  const options = ["Ordem Padrão", "Ordem alfabética", "Obtido", "Lido"];

  if (!books) {
    return <h2 style={{ color: "Black" }}>Carregando...</h2>;
  }

  return (
    <Container>
      <DivButton>
        <div>
          <FormControl color="primary" sx={{ m: 1, width: 250 }}>
            <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter}
              label="Filtro"
              onChange={handleChange}
              autoWidth
            >
              <MenuItem value={options[0]}>{options[0]}</MenuItem>
              <MenuItem value={options[1]}>{options[1]}</MenuItem>
              <MenuItem value={options[2]}>{options[2]}</MenuItem>
              <MenuItem value={options[3]}>{options[3]}</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <Button
            size="medium"
            color="primary"
            variant="contained"
            onClick={openModalAdd}
          >
            Adicionar um livro
          </Button>
        </div>
        <div>
          <Button color="primary" variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </DivButton>
      {/* <DivAddBook>
        <button onClick={handleSortBooks}>Ordem alfabética</button>
        <button onClick={handleHaveBook}>Obtido</button>
        <button onClick={handleReadBook}>Lido</button>
        <button onClick={handleDefaultBooks}>Ordem padrão</button>
      </DivAddBook> */}
      <ShowBooks
        books={books}
        openModalChange={openModalChange}
        setReloadBook={setReloadBook}
        reloadBook={reloadBook}
      />
      <ModalAddBook
        modalIsOpen={modalIsOpenAdd}
        closeModal={closeModalAdd}
        refresh={refresh}
        setRefresh={setRefresh}
      />
      <ModalChangeBook
        modalIsOpen={modalIsOpenChange}
        closeModal={closeModalChange}
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </Container>
  );
}

export default HomePage;
