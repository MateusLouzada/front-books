import { Button } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import { deleteBook } from "../../services/api";
import { Container, DivNotBook } from "./style";

function ShowBooks({ books, openModalChange, setReloadBook, reloadBook }) {
  const deleteBookButton = async (book, _) => {
    await deleteBook(book.name, book.idUser);

    //Fazer reload da chamada de api de livros para ficar dinamico
    if (reloadBook) {
      setReloadBook(false);
    } else {
      setReloadBook(true);
    }
  };

  const bookComp = books.map((bookInside, key) => (
    <li key={key}>
      <div className="divBook" onClick={openModalChange.bind(this, bookInside)}>
        {bookInside.name}
      </div>
      <div className="divButtons">
        <Box sx={{ m: 1 }}>
          <Button
            color="primary"
            variant="contained"
            onClick={deleteBookButton.bind(this, bookInside)}
          >
            Apagar
          </Button>
        </Box>
        <Box sx={{ m: 1 }}>
          <Button
            color="primary"
            variant="contained"
            onClick={openModalChange.bind(this, bookInside)}
          >
            Mudar
          </Button>
        </Box>
      </div>
    </li>
  ));

  const bookEmpty = (
    <DivNotBook>
      <h2 style={{ color: "Black" }}>Não possui livro cadastrado</h2>
    </DivNotBook>
  );

  if (books.length < 1) {
    return <Container>{bookEmpty}</Container>;
  }

  return (
    <Container>
      <ul>{bookComp}</ul>
    </Container>
  );
}

export default ShowBooks;
