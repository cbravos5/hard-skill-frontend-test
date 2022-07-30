import LeadSoftLogo from "@/assets/leadsoft_logotipo.svg";
import { FixedNav } from "./style";
import { FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

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
      <main>
        <section className="people-tiles">
          <div>
            <h3>Nome completo</h3>
            <div className="column-1">
              <h4>idade</h4>
              <h4>altura</h4>
            </div>
            <div className="column-2">
              <h4>altura</h4>
              <h4>IMC</h4>
            </div>
            <div className="actions">
              <button type="button" className="edit">
                Alterar
              </button>
              <button type="button" className="delete">
                Excluir
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
