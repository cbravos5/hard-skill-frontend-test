import { AiFillCloseCircle } from "react-icons/ai";
import { Input } from "../Input";
import { useEffect, useState } from "react";
import { ContentContainer } from "./style";
import { GlassButton } from "../GlassButton";
import { useForm } from "react-hook-form";
import { CustomModal } from "../CustomModal";
import { AxiosInstance } from "@/configs/axiosConfig";
import { Person } from "@/interfaces/Person";
import { toast } from "react-toastify";
import { Spinner } from "../Spinner";

interface Props {
  closeModal: () => void;
  addNewPerson: (person: Person) => void;
  editPerson: (person: Person) => void;
  id?: string;
}

interface FormData {
  Name: string;
  Surname: string;
  DateOfBirth: Date;
  Weigth: number;
  Height: number;
}

export const EditModal: React.FC<Props> = ({
  closeModal,
  addNewPerson,
  editPerson,
  id,
}) => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    AxiosInstance.get(`/People/${id}`)
      .then((response) => {
        const date = new Date(response.data.DateOfBirth).toLocaleDateString();
        reset({
          ...response.data,
          DateOfBirth: date,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          `Erro ao buscar dados - ${
            error.response.status === 404 ? "Cadastro não encontrado" : ""
          }`
        );
      });
  }, []);

  const handleErrors = (errors: any) => {
    Object.keys(errors).forEach((field: any) =>
      setError(field, {
        type: "pattern",
        message: errors[field][0],
      })
    );
  };

  const submitEditHandler = handleSubmit(async (submitData) => {
    try {
      const response = await AxiosInstance.put(`/People/${id}`, {
        name: submitData.Name,
        surname: submitData.Surname,
        weigth: submitData.Weigth,
        height: submitData.Height,
        dateOfbirth: submitData.DateOfBirth.toISOString(),
      });

      if (response.status === 200) {
        editPerson(response.data);
        toast.success("Edição de cadastro realizada com sucesso");
        closeModal();
      }
    } catch (error: any) {
      console.log(error);
      if (error.response?.data.errors) handleErrors(error.response.data.errors);
    }
  });

  const submitAddHandler = handleSubmit(async (submitData) => {
    try {
      const response = await AxiosInstance.post("/People", {
        name: submitData.Name,
        surname: submitData.Surname,
        weigth: submitData.Weigth,
        height: submitData.Height,
        dateOfbirth: submitData.DateOfBirth.toISOString(),
      });

      if (response.status === 200) {
        addNewPerson(response.data);
        toast.success("Novo cadastro adicionado com sucesso");
        reset();
      }
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
        <form
          action="insert"
          onSubmit={id ? submitEditHandler : submitAddHandler}
        >
          <Spinner loading={loading} color="dark" />
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
