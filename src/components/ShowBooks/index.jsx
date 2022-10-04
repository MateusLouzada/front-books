import React, { useRef, useEffect } from "react";
import { deleteBook } from "../../services/api";
import { Container, DivNotBook } from "./style";
import autoAnimate from "@formkit/auto-animate";

function ShowBooks({ books, openModalChange, setReloadBook, reloadBook }) {
  const parentRef = useRef();

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

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
        <button onClick={deleteBookButton.bind(this, bookInside)}>
          Apagar
        </button>
        <button onClick={openModalChange.bind(this, bookInside)}>Mudar</button>
      </div>
    </li>
  ));

  const bookEmpty = (
    <DivNotBook>
      <h2>Não possui livro cadastrado</h2>
    </DivNotBook>
  );

  if (books.length < 1) {
    return <Container>{bookEmpty}</Container>;
  }

  return (
    <Container>
      <ul ref={parentRef}>{bookComp}</ul>
    </Container>
  );
}

export default ShowBooks;
