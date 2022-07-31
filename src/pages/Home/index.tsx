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
import { useDebounce } from "@/hooks/useDebounce";
import { FaSearch } from "react-icons/fa";

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
  const [searchTerm, setSearchTerm] = useState("");
  const { setAuth } = useAuthContext();
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

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
        setPeopleIMCShow(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Erro ao buscar dados do servidor");
      });
  }, []);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        const filteredPeople = filterPeople(searchTerm, peopleIMC);
        setPeopleIMCShow(filteredPeople);
      } else {
        setPeopleIMCShow(peopleIMC);
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

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
        <div className="search-bar">
          <div>
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Filtrar por nome"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {loading ? (
          <Spinner loading={true} color="dark" />
        ) : (
          <section className="people-tiles">
            {peopleIMCShow.map((personData) => (
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
