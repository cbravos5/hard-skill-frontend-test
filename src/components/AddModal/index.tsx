import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";
import { Input } from "../Input";
import { useState } from "react";

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
}

const modalStyles: Modal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    borderRadius: "15px",
    background: "#F6F5F5",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.7)",
  },
};

export const AddModal: React.FC<Props> = ({ modalIsOpen, closeModal }) => {
  const [startDate, setStartDate] = useState<Date>();

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={modalStyles}
      ariaHideApp={false}
    >
      <div>
        <button className="close" type="button">
          <AiFillCloseCircle size={20} />
        </button>
        <form action="insert">
          <Input type="text" placeholder="Nome" error="" />
          <Input type="text" placeholder="Sobrenome" error="" />
          <Input
            type="text"
            placeholder="Data de Nascimento"
            error=""
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "date")}
          />

          <div>
            <Input type="number" placeholder="Altura em cm" error="" />
            <Input type="number" placeholder="Peso em kg" error="" />
          </div>
        </form>
      </div>
    </Modal>
  );
};
