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
import { Button } from "@material-ui/core";

function ModalChangeBook({ modalIsOpen, closeModal, refresh, setRefresh }) {
  const { book } = useContext(BookContext);

  const handleChangeBook = async (e) => {
    e.preventDefault();

    await changeBook(
      book.idUser,
      book.name,
      e.target[0].checked,
      e.target[1].checked,
      e.target[2].value
    );

    if(refresh){
      setRefresh(false)
    }else{
      setRefresh(true)
    }

    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        ariaHideApp={false}
      >
        <ButtonClose>
          <Button
            size="medium"
            color="primary"
            variant="contained"
            onClick={closeModal}
          >
            Fechar
          </Button>
        </ButtonClose>
        <DivName>
          <h3>{book?.name}</h3>
          <div>
            <img src={book?.image} />
          </div>
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
            <Button
              size="medium"
              color="primary"
              variant="contained"
              type="submit"
            >
              Mudar
            </Button>
          </DivButton>
        </form>
      </Modal>
    </div>
  );
}

export default ModalChangeBook;
