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
import { FaEdit, FaPlusCircle } from "react-icons/fa";
import { PersonIMC } from "@/interfaces/PersonIMC";

interface Props {
  closeModal: () => void;
  addNewPerson: (person: Person) => void;
  editPerson: (person: Person) => void;
  person?: PersonIMC;
}

interface FormData {
  Name: string;
  Surname: string;
  DateOfBirth: Date;
  Weigth: number;
  Height: number;
}

export const PersonFormModal: React.FC<Props> = ({
  closeModal,
  addNewPerson,
  editPerson,
  person,
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
    if (!person) {
      setLoading(false);
      return;
    }
    AxiosInstance.get(`/People/${person.Id}`)
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
      const response = await AxiosInstance.put(`/People/${person?.Id}`, {
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
        <div className={`action-info ${loading ? "invisible" : ""}`}>
          <div className="icon">
            {person?.Id ? <FaEdit /> : <FaPlusCircle />}
          </div>
          <div className="description">
            <p>
              {person?.Id
                ? `Você está editando ${person?.FullName}`
                : "Você está cadastrando uma nova pessoa"}
            </p>
          </div>
        </div>
        <form
          action="insert"
          onSubmit={person?.Id ? submitEditHandler : submitAddHandler}
          className={loading ? "invisible" : ""}
        >
          <Spinner loading={loading} color="dark" />
          <Input
            label="Nome"
            type="text"
            placeholder="Nome"
            {...register("Name", {
              required: "Campo obrigatório",
            })}
            error={errors.Name?.message}
          />
          <Input
            label="Sobrenome"
            type="text"
            placeholder="Sobrenome"
            {...register("Surname", {
              required: "Campo obrigatório",
            })}
            error={errors.Surname?.message}
          />
          <Input
            label="Data de nascimento"
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
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
          />
          <div className="height-weight">
            <Input
              label="Altura em metros"
              placeholder="Altura em metros"
              {...register("Height", {
                required: "Campo obrigatório",
                validate: (Height) =>
                  Number(Height) ? true : "Apenas números são válidos",
              })}
              error={errors.Height?.message}
            />
            <Input
              label="Peso em kg"
              placeholder="Peso em kg"
              {...register("Weigth", {
                required: "Campo obrigatório",
                validate: (height) =>
                  Number(height) ? true : "Apenas números são válidos",
              })}
              error={errors.Weigth?.message}
            />
          </div>
          <div className="buttons">
            <GlassButton
              type="button"
              label="Cancelar"
              color="#fc4635"
              hoverColor="#e02312"
              onClick={closeModal}
            />
            <GlassButton
              type="submit"
              label="Salvar"
              color="#209403"
              hoverColor="#0c3801"
            />
          </div>
        </form>
      </ContentContainer>
    </CustomModal>
  );
};
