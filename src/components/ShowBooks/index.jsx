import React from "react";
import { deleteBook } from "../../services/api";
import { Container, CardBook, DivDetails, DivImage, DivNotBook } from "./style";

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
    <CardBook key={key}>
      <DivImage onClick={openModalChange.bind(this, bookInside)}>
        <img src={bookInside.image} />
      </DivImage>
      <DivDetails onClick={openModalChange.bind(this, bookInside)}>
        <div>
          <h3>Livro </h3>
          <p>{bookInside.name}</p>
        </div>
        <div>
          <h3>Lido</h3>
          <p>{bookInside.read ? "Sim" : "Não"}</p>
        </div>
        <div>
          <h3>Livro obtido </h3>
          <p>{bookInside.haveBook ? "Sim" : "Não"}</p>
        </div>
        <div>
          <h3>Páginas </h3>
          <p>{bookInside.pages}</p>
        </div>
        <div>
          <h3>Concluido em</h3>
          <p>{bookInside.readingTime} Dias</p>
        </div>
      </DivDetails>
      <div>
        <button onClick={deleteBookButton.bind(this, bookInside)}>
          Apagar
        </button>
      </div>
    </CardBook>
  ));

  const bookEmpty = (
    <DivNotBook>
      <h2>Não possui livro cadastrado</h2>
    </DivNotBook>
  );

  if (books.length < 1) {
    return <Container>{bookEmpty}</Container>;
  }

  return <Container>{bookComp}</Container>;
}

export default ShowBooks;
