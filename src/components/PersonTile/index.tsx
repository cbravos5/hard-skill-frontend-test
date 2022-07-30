import { PersonIMC } from "@/interfaces/PersonIMC";
import { FaEdit, FaTrash } from "react-icons/fa";
import { TileStyle } from "./style";

interface Props {
  personData: PersonIMC;
}

export const PersonTile: React.FC<Props> = ({ personData }) => {
  return (
    <TileStyle>
      <span className="full-name">{personData.FullName}</span>
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
        <button type="button" className="delete">
          <FaTrash />
          <span>Excluir</span>
        </button>
      </div>
    </TileStyle>
  );
};
