import { AiFillCloseCircle } from "react-icons/ai";
import { Input } from "../Input";
import { useState } from "react";
import { ContentContainer } from "./style";
import { GlassButton } from "../GlassButton";
import { useForm } from "react-hook-form";
import { CustomModal } from "../CustomModal";
import { AxiosInstance } from "@/configs/axiosConfig";

interface Props {
  closeModal: () => void;
}

interface FormData {
  Name: string;
  Surname: string;
  DateOfBirth: Date;
  Weigth: number;
  Height: number;
}

export const AddModal: React.FC<Props> = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();

  const handleErrors = (errors: any) => {
    Object.keys(errors).forEach((field: any) =>
      setError(field, {
        type: "pattern",
        message: errors[field][0],
      })
    );
  };

  const submitHandler = handleSubmit(async (submitData) => {
    try {
      const response = await AxiosInstance.post("/People", {
        name: submitData.Name,
        surname: submitData.Surname,
        weigth: submitData.Weigth,
        height: submitData.Height,
        dateOfbirth: submitData.DateOfBirth.toISOString(),
      });
      console.log(response);
    } catch (error: any) {
      console.log(error);
      if (error.response?.data.errors) handleErrors(error.response.data.errors);
    }
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
            {...register("Name", {
              required: "Campo obrigatório",
            })}
            error={errors.Name?.message}
          />
          <Input
            type="text"
            placeholder="Sobrenome"
            {...register("Surname", {
              required: "Campo obrigatório",
            })}
            error={errors.Surname?.message}
          />
          <Input
            type="text"
            placeholder="Data de Nascimento"
            {...register("DateOfBirth", {
              required: "Campo obrigatório",
              valueAsDate: true,
              validate: (date) =>
                date instanceof Date && !isNaN(Number(date))
                  ? true
                  : "Deve ser uma data válida",
            })}
            error={errors.DateOfBirth?.message}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "date")}
          />
          <div className="height-weight">
            <Input
              placeholder="Altura em cm"
              {...register("Height", {
                required: "Campo obrigatório",
                validate: (Height) =>
                  Number(Height) ? true : "Apenas números são válidos",
              })}
              error={errors.Height?.message}
            />
            <Input
              placeholder="Peso em kg"
              {...register("Weigth", {
                required: "Campo obrigatório",
                validate: (height) =>
                  Number(height) ? true : "Apenas números são válidos",
              })}
              error={errors.Weigth?.message}
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
