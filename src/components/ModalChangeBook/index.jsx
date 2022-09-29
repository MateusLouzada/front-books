import Modal from "react-modal";

import {
  modalStyle,
  ButtonClose,
  DivInteractions,
  DivButton,
  DivName,
} from "./style";
import { BookContext } from "../../contexts/bookContext";
import { useContext } from "react";
import { changeBook } from "../../services/api";

function ModalChangeBook({ modalIsOpen, closeModal }) {
  const { book } = useContext(BookContext);

  const handleChangeBook = async (e) => {
    e.preventDefault();

    await changeBook(
      book.idUser,
      book.name,
      e.target[0].checked,
      e.target[1].checked
    );

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
        <DivName>
          <h3>{book?.name}</h3>
        </DivName>
        <form onSubmit={handleChangeBook}>
          <DivInteractions>
            <div>
              <span>Já foi lido?</span>
              {book?.read ? (
                <input type="checkbox" defaultChecked />
              ) : (
                <input type="checkbox" />
              )}
            </div>
            <div>
              <span>Já possui?</span>
              {book?.haveBook ? (
                <input type="checkbox" defaultChecked />
              ) : (
                <input type="checkbox" />
              )}
            </div>
            <div>
              <span>Lido em quanto tempo? (Dias)</span>
              <input type="number" defaultValue={book?.readingTime} />
            </div>
          </DivInteractions>
          <DivButton>
            <button type="submit">Mudar</button>
          </DivButton>
        </form>
      </Modal>
    </div>
  );
}

export default ModalChangeBook;
