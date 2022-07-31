import LeadSoftLogo from "@/assets/leadsoft_logotipo.svg";
import { FixedNav, HomeData } from "./style";
import { MdLogout } from "react-icons/md";
import { PersonTile } from "@/components/PersonTile";
import { useEffect, useState } from "react";
import { PersonIMC } from "@/interfaces/PersonIMC";
import { AxiosInstance } from "@/configs/axiosConfig";
import { PersonFormModal } from "@/components/PersonFormModal";
import { Person } from "@/interfaces/Person";
import { toast } from "react-toastify";
import { Spinner } from "@/components/Spinner";
import { useAuthContext } from "@/contexts/Auth";
import { confirmPopUp } from "@/utils/confirmPopUp";
import { SearchBar } from "@/components/SearchBar";

const filterPeople = (searchString: string, peopleArray: PersonIMC[]) =>
  peopleArray.filter(({ FullName }) =>
    FullName.toLowerCase().includes(searchString.toLowerCase())
  );

export const Home = () => {
  const [peopleIMC, setPeopleIMC] = useState([] as PersonIMC[]);
  const [peopleIMCShow, setPeopleIMCShow] = useState([] as PersonIMC[]);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [openPerson, setOpenPerson] = useState<PersonIMC>();
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
    setLoading(true);
    AxiosInstance.delete(`/People/${id}`)
      .then((response) => {
        const newPeopleArray = peopleIMC.filter((person) => person.Id !== id);
        setPeopleIMC(newPeopleArray);
        setLoading(false);
        toast.success("Cadastro excluído com sucesso");
      })
      .catch((error) => {
        setLoading(false);
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

  const openEdit = (person: PersonIMC) => {
    setOpenPerson(person);
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

  useEffect(() => setPeopleIMCShow(peopleIMC), [peopleIMC]);

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
        <SearchBar
          filter={filterPeople}
          originalData={peopleIMC}
          setter={setPeopleIMCShow}
        />
        {loading ? (
          <Spinner loading={true} color="dark" />
        ) : (
          <section className="people-tiles">
            {peopleIMC.length > 0 ? (
              peopleIMCShow.map((personData) => (
                <PersonTile
                  personData={personData}
                  key={personData.Id}
                  deletePerson={deletePerson}
                  openEdit={openEdit}
                />
              ))
            ) : (
              <h2>Não existem pessoas cadastradas no momento</h2>
            )}
          </section>
        )}
      </HomeData>
      {addModalIsOpen && (
        <PersonFormModal
          closeModal={() => {
            setAddModalIsOpen(false);
            setOpenPerson(undefined);
          }}
          addNewPerson={addNewPerson}
          editPerson={editPerson}
          person={openPerson}
        />
      )}
    </>
  );
};
