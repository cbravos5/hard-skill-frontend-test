import LeadSoftLogo from "@/assets/leadsoft_logotipo.svg";
import { FixedNav, HomeData } from "./style";
import { MdLogout } from "react-icons/md";
import { PersonTile } from "@/components/PersonTile";

export const Home = () => {
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
        <section className="people-tiles">
          <PersonTile
            personData={{
              Id: "a9f7402c-5cb6-488d-b613-2c8a2c84703f",
              FullName: "NomePessoa2222222 SobrenomePessoa222222",
              Age: 0,
              Weigth: 90,
              Height: 190,
              IMC: 0.011111111111111112,
            }}
          />
        </section>
      </HomeData>
    </>
  );
};
