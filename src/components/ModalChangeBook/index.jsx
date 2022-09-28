import Modal from "react-modal";

import { modalStyle, ButtonClose, DivInteractions, DivButton } from "./style";

function ModalChangeBook({ modalIsOpen, closeModal }) {
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
        <form>
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

export default ModalChangeBook;
