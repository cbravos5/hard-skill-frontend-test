import { AiFillCloseCircle } from "react-icons/ai";
import { Input } from "../Input";
import { useState } from "react";
import { ContentContainer } from "./style";
import { GlassButton } from "../GlassButton";
import { useForm } from "react-hook-form";
import { CustomModal } from "../CustomModal";

interface Props {
  closeModal: () => void;
}

interface FormData {
  name: string;
  surname: string;
  birth: string;
  weight: number;
  height: number;
}

export const AddModal: React.FC<Props> = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const submitHandler = handleSubmit(async (submitData) => {
    console.log(submitData);
  });

  return (
    <CustomModal>
      <ContentContainer>
        <button className="close" type="button" onClick={closeModal}>
          <AiFillCloseCircle size={25} />
        </button>
        <form action="insert" onSubmit={submitHandler}>
          <Input
            type="text"
            placeholder="Nome"
            {...register("name", {
              required: "Campo obrigatório",
            })}
            error={errors.name?.message}
          />
          <Input
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
    </CustomModal>
  );
};
