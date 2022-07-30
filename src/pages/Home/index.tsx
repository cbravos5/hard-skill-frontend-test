import LeadSoftLogo from "@/assets/leadsoft_logotipo.svg";
import { FixedNav, HomeData } from "./style";
import { MdLogout } from "react-icons/md";
import { PersonTile } from "@/components/PersonTile";
import { useEffect, useState } from "react";
import { PersonIMC } from "@/interfaces/PersonIMC";
import { AxiosInstance } from "@/configs/axiosConfig";
import { AddModal } from "@/components/AddModal";

export const Home = () => {
  const [peopleIMC, setPersonIMC] = useState([] as PersonIMC[]);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);

  useEffect(() => {
    AxiosInstance.get("/People/IMC").then((response) =>
      setPersonIMC(response.data)
    );
  }, []);

  return (
    <>
      <FixedNav>
        <div className="logo">
          <img src={LeadSoftLogo} alt="Logotipo LeadSoft" />
        </div>
        <div className="user-logout">
          <button type="button">
            <MdLogout size={25} />
          </button>
        </div>
      </FixedNav>
      <HomeData>
        <div className="add">
          <button type="button" onClick={() => setAddModalIsOpen(true)}>
            Incluir
          </button>
        </div>
        <section className="people-tiles">
          {/* {peopleIMC.map((personData) => (
            <PersonTile personData={personData} key={personData.Id} />
          ))} */}
        </section>
      </HomeData>
      <AddModal
        modalIsOpen={addModalIsOpen}
        closeModal={() => setAddModalIsOpen(false)}
      />
    </>
  );
};
