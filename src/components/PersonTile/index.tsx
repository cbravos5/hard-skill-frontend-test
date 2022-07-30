import { PersonIMC } from "@/interfaces/PersonIMC";
import { confirmPopUp } from "@/utils/confirmPopUp";
import { FaEdit, FaTrash } from "react-icons/fa";
import { TileStyle } from "./style";

interface Props {
  personData: PersonIMC;
  deletePerson: (id: string) => void;
}

export const PersonTile: React.FC<Props> = ({ personData, deletePerson }) => {
  return (
    <TileStyle>
      <div className="full-name">
        <p>{personData.FullName}</p>
      </div>

      <div className="data-column">
        <p>
          Idade: <span>{personData.Age} anos</span>
        </p>
        <p>
          Altura: <span>{personData.Height}cm</span>
        </p>
      </div>
      <div className="data-column">
        <p>
          Peso: <span>{personData.Weigth}Kg</span>
        </p>
        <p>
          IMC: <span>{Number(personData.IMC).toFixed(2)}</span>
        </p>
      </div>
      <div className="actions">
        <button type="button" className="edit">
          <FaEdit /> <span>Alterar</span>
        </button>

        <button
          type="button"
          className="delete"
          onClick={() =>
            confirmPopUp(
              () => deletePerson(personData.Id),
              `Tem certeza que deseja excluir o cadastro de ${personData.FullName}?`
            )
          }
        >
          <FaTrash />
          <span>Excluir</span>
        </button>
      </div>
    </TileStyle>
  );
};
