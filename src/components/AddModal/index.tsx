import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";
import { Input } from "../Input";
import { useState } from "react";
import { ContentContainer } from "./style";
import { GlassButton } from "../GlassButton";

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
    width: "50%",
    height: "50%",
    borderRadius: "15px",
    background: "#F6F5F5",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.8)",
  },
};

export const AddModal: React.FC<Props> = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={modalStyles}
      ariaHideApp={false}
    >
      <ContentContainer>
        <button className="close" type="button">
          <AiFillCloseCircle size={25} />
        </button>
        <form action="insert">
          <Input className="name" type="text" placeholder="Nome" error="" />
          <Input
            className="surname"
            type="text"
            placeholder="Sobrenome"
            error=""
          />
          <Input
            className="birth"
            type="text"
            placeholder="Data de Nascimento"
            error=""
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "date")}
          />
          <div className="height-weight">
            <Input
              className="height"
              type="number"
              placeholder="Altura em cm"
              error=""
            />
            <Input
              className="weight"
              type="number"
              placeholder="Peso em kg"
              error=""
            />
          </div>
          <div>
            <GlassButton type="button" label="Cancelar" />
            <GlassButton type="submit" label="Salvar" />
          </div>
        </form>
      </ContentContainer>
    </Modal>
  );
};
