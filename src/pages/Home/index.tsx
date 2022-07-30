import LeadSoftLogo from "@/assets/leadsoft_logotipo.svg";
import { FixedNav, HomeData } from "./style";
import { MdLogout } from "react-icons/md";
import { PersonTile } from "@/components/PersonTile";
import { useEffect, useState } from "react";
import { PersonIMC } from "@/interfaces/PersonIMC";
import { AxiosInstance } from "@/configs/axiosConfig";
import { EditModal } from "@/components/EditModal";
import { Person } from "@/interfaces/Person";
import { toast } from "react-toastify";
import { Spinner } from "@/components/Spinner";
import { useAuthContext } from "@/contexts/Auth";
import { confirmPopUp } from "@/utils/confirmPopUp";

export const Home = () => {
  const [peopleIMC, setPeopleIMC] = useState([] as PersonIMC[]);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [openPersonId, setOpenPersonId] = useState("");
  const { setAuth } = useAuthContext();

  const addNewPerson = (person: Person) => {
    AxiosInstance.get(`/People/${person.Id}/IMC`)
      .then((response) => {
        const newPeopleArray = [...peopleIMC, response.data];
        setPeopleIMC(newPeopleArray);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Erro ao buscar dados do servidor");
      });
  };

  const deletePerson = (id: string) => {
    AxiosInstance.delete(`/People/${id}`)
      .then((response) => {
        const newPeopleArray = peopleIMC.filter((person) => person.Id !== id);
        setPeopleIMC(newPeopleArray);
        toast.success("Cadastro excluído com sucesso");
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          `Erro ao excluir cadastro - ${
            error.response.status === 404 ? "Cadastro não encontrado" : ""
          }`
        );
      });
  };

  const editPerson = (person: Person) => {
    AxiosInstance.get(`/People/${person.Id}/IMC`)
      .then((response) => {
        const newPeopleArray = peopleIMC.filter(({ Id }) => Id !== person.Id);
        newPeopleArray.push(response.data);
        setPeopleIMC(newPeopleArray);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Erro ao buscar dados do servidor");
      });
  };

  const openEdit = (id: string) => {
    setOpenPersonId(id);
    setAddModalIsOpen(true);
  };

  const logout = () => {
    confirmPopUp({
      onYes: () => setAuth(false),
      msg: "Tem certeza que deseja se desconectar?",
      title: "Confirmar logout",
    });
  };

  useEffect(() => {
    AxiosInstance.get("/People/IMC")
      .then((response) => {
        setPeopleIMC(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Erro ao buscar dados do servidor");
      });
  }, []);

  return (
    <>
      <FixedNav>
        <div className="logo">
          <img src={LeadSoftLogo} alt="Logotipo LeadSoft" />
        </div>
        <div className="user-logout">
          <button type="button" onClick={logout}>
            <MdLogout />
          </button>
        </div>
      </FixedNav>

      <HomeData>
        <div className="add">
          <button type="button" onClick={() => setAddModalIsOpen(true)}>
            Incluir
          </button>
        </div>
        {loading ? (
          <Spinner loading={true} color="dark" />
        ) : (
          <section className="people-tiles">
            {peopleIMC.map((personData) => (
              <PersonTile
                personData={personData}
                key={personData.Id}
                deletePerson={deletePerson}
                openEdit={openEdit}
              />
            ))}
          </section>
        )}
      </HomeData>
      {addModalIsOpen && (
        <EditModal
          closeModal={() => {
            setAddModalIsOpen(false);
            setOpenPersonId("");
          }}
          addNewPerson={addNewPerson}
          editPerson={editPerson}
          id={openPersonId}
        />
      )}
    </>
  );
};
