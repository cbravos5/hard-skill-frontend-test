import LeadSoftLogo from "@/assets/leadsoft_logotipo.svg";
import { FixedNav } from "./style";

export const Home = () => {
  return (
    <>
      <FixedNav>
        <img src={LeadSoftLogo} alt="Logotipo LeadSoft" />
        <div className="add">
          <button type="button">incluir</button>
        </div>
        <div className="user-logout">
          <button type="button">ICON HERE</button>
          <button type="button">logout</button>
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
