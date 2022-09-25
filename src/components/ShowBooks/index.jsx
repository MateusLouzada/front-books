import React from "react";
import { Container, CardBook } from "./style";

function ShowBooks({ books }) {
  const bookComp = books.map((book, key) => (
    <CardBook key={key}>
      <div>
        <p>Livro </p>
        <p>{book.name}</p>
      </div>
      <div>
        <p>Lido</p>
        <p>{book.read ? "Sim" : "Não"}</p>
      </div>
      <div>
        <p>Livro já obitido </p>
        <p>{book.haveBook ? "Sim" : "Não"}</p>
      </div>
      <div>
        <p>Páginas </p>
        <p>{book.pages}</p>
      </div>
      <div>
        <p>Tempo em que o livro foi lido </p>
        <p>{book.readingTime}</p>
      </div>
    </CardBook>
  ));

  const bookEmpty = <h2>Não possui livro cadastrado</h2>;

  if (books.length < 1) {
    return <Container>{bookEmpty}</Container>;
  }

  return <Container>{bookComp}</Container>;
}

export default ShowBooks;
