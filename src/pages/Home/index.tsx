import LeadSoftLogo from "@/assets/leadsoft_logotipo.svg";
import { FixedNav, HomeData } from "./style";
import { MdLogout } from "react-icons/md";
import { PersonTile } from "@/components/PersonTile";
import { useEffect, useState } from "react";
import { PersonIMC } from "@/interfaces/PersonIMC";
import { AxiosInstance } from "@/configs/axiosConfig";
import { AddModal } from "@/components/AddModal";
import { Person } from "@/interfaces/Person";

export const Home = () => {
  const [peopleIMC, setPeopleIMC] = useState([] as PersonIMC[]);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const addNewPerson = (person: Person) => {
    console.log(person);

    AxiosInstance.get(`/People/${person.Id}/IMC`).then((response) => {
      const newPeopleArray = [...peopleIMC, response.data];
      setPeopleIMC(newPeopleArray);
    });
  };

  useEffect(() => {
    AxiosInstance.get("/People/IMC").then((response) => {
      setPeopleIMC(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <FixedNav>
        <div className="logo">
          <img src={LeadSoftLogo} alt="Logotipo LeadSoft" />
        </div>
        <div className="user-logout">
          <button type="button">
            <MdLogout />
          </button>
        </div>
      </FixedNav>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <HomeData>
          <div className="add">
            <button type="button" onClick={() => setAddModalIsOpen(true)}>
              Incluir
            </button>
          </div>
          <section className="people-tiles">
            {peopleIMC.map((personData) => (
              <PersonTile personData={personData} key={personData.Id} />
            ))}
          </section>
        </HomeData>
      )}
      {addModalIsOpen && (
        <AddModal
          closeModal={() => setAddModalIsOpen(false)}
          addNewPerson={addNewPerson}
        />
      )}
    </>
  );
};
