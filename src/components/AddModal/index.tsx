import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";
import { Input } from "../Input";
import { useState } from "react";
import { ContentContainer } from "./style";
import { GlassButton } from "../GlassButton";
import { useForm } from "react-hook-form";

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
}

interface FormData {
  name: string;
  surname: string;
  birth: string;
  weight: number;
  height: number;
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const submitHandler = handleSubmit(async (submitData) => {
    console.log(submitData);
  });

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
        <form action="insert" onSubmit={submitHandler}>
          <Input
            className="name"
            type="text"
            placeholder="Nome"
            {...register("name", {
              required: "Campo obrigatório",
            })}
            error={errors.name?.message}
          />
          <Input
            className="surname"
            type="text"
            placeholder="Sobrenome"
            {...register("surname", {
              required: "Campo obrigatório",
            })}
            error={errors.surname?.message}
          />
          <Input
            className="birth"
            type="text"
            placeholder="Data de Nascimento"
            {...register("birth", {
              required: "Campo obrigatório",
              valueAsDate: true,
            })}
            error={errors.birth?.message}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "date")}
          />
          <div className="height-weight">
            <Input
              className="height"
              placeholder="Altura em cm"
              {...register("height", {
                required: "Campo obrigatório",
                validate: (height) =>
                  Number(height) ? true : "Apenas números são válidos",
              })}
              error={errors.height?.message}
            />
            <Input
              className="weight"
              type="number"
              placeholder="Peso em kg"
              {...register("weight", {
                required: "Campo obrigatório",
                validate: (height) =>
                  Number(height) ? true : "Apenas números são válidos",
              })}
              error={errors.weight?.message}
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
