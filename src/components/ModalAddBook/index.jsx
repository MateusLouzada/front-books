import React, { useState, useEffect, useContext } from "react";
import {
  DivSearchBox,
  modalStyle,
  ButtonClose,
  DivContent,
  DetailsBook,
  DivButton,
  DivInteractions,
} from "./style";
import Modal from "react-modal";
import { getBook } from "../../services/apiGoogleBooks";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { AuthContext } from "../../contexts/auth";
import { addBook } from "../../services/api";

function ModalAddBook({ modalIsOpen, closeModal }) {
  const { user } = useContext(AuthContext);

  const [booksSearchBox, setBooksSearchBox] = useState([]);
  const [bookName, setBookName] = useState();
  const [books, setBooks] = useState([]);
  const [bookSelected, setBookSelected] = useState();

  const getNamesBooks = async (e) => {
    const response = await getBook(e.target.value);
    const data = response.data.items;
    const namesBooks = [];

    data.forEach((book) => {
      namesBooks.push(book.volumeInfo.title);
    });
    setBooksSearchBox(namesBooks);
    setBooks(data);
  };

  useEffect(() => {
    const temp = books.find((book) => {
      return book.volumeInfo.title === bookName;
    });
    setBookSelected(temp);
  }, [bookName]);

  const showBook = () => {
    const temp = books.find((book) => {
      return book.volumeInfo.title === bookName;
    });
    if (temp) {
      return (
        <div className="container-details">
          <div className="div-inside-details">
            {temp.volumeInfo.imageLinks?.thumbnail ? (
              <img src={temp.volumeInfo.imageLinks.thumbnail} alt="" />
            ) : (
              <>Não disponível</>
            )}
          </div>
          <div className="div-inside-details">
            <div>Nome: {temp.volumeInfo.title}</div>
            <div>Páginas: {temp.volumeInfo.pageCount}</div>
            <div>Data da publicação: {temp.volumeInfo.publishedDate}</div>
          </div>
        </div>
      );
    }
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    //console.log(bookSelected?.volumeInfo.imageLinks);
    const bookDetails = {
      name: bookSelected?.volumeInfo.title,
      image: bookSelected?.volumeInfo.imageLinks.thumbnail,
      read: e.target[0].checked,
      haveBook: e.target[1].checked,
      pages: bookSelected?.volumeInfo.pageCount,
      readingTime: e.target[2].value ? e.target[2].value : 0,
      idUser: user.id,
    };

    if (!bookDetails.name && !bookDetails.pages) {
      console.log("Não foi possível cadastrar o livro!");
      return;
    }

    await addBook(bookDetails);

    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
      >
        <ButtonClose>
          <button onClick={closeModal}>close</button>
        </ButtonClose>
        <DivContent>
          <DivSearchBox>
            <Autocomplete
              style={{ width: 300 }}
              onChange={(e, newBook) => setBookName(newBook)}
              freeSolo
              autoComplete
              autoHighlight
              options={booksSearchBox}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={getNamesBooks}
                  variant="outlined"
                  label="Search Box"
                />
              )}
            />
          </DivSearchBox>
          <DetailsBook>{showBook()}</DetailsBook>
        </DivContent>
        <form onSubmit={handleAddBook}>
          <DivInteractions>
            <div>
              <span>Já foi lido?</span>
              <input type="checkbox" />
            </div>
            <div>
              <span>Já possui?</span>
              <input type="checkbox" />
            </div>
            <div>
              <span>Lido em quanto tempo? (Dias)</span>
              <input type="number" />
            </div>
          </DivInteractions>
          <DivButton>
            <button type="submit">AddBook</button>
          </DivButton>
        </form>
      </Modal>
    </div>
  );
}

export default ModalAddBook;
