import Modal from "react-modal";

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
  return (
    <div className="modal-container">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        ariaHideApp={false}
      >
        <h1>Modal content</h1>
      </Modal>
    </div>
  );
};
