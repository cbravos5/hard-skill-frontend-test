import { PersonIMC } from "@/interfaces/PersonIMC";
import { FaEdit, FaPlusCircle } from "react-icons/fa";
import { ActionInfoContainer } from "./style";

interface ActionInfoProps {
  person?: PersonIMC;
  className?: string;
}

export const ActionInfo = ({ person, className }: ActionInfoProps) => (
  <ActionInfoContainer className={`action-info ${className}`}>
    <div className="icon">{person?.Id ? <FaEdit /> : <FaPlusCircle />}</div>
    <div className="description">
      <p>
        {person?.Id
          ? `Você está editando ${person?.FullName}`
          : "Você está cadastrando uma nova pessoa"}
      </p>
    </div>
  </ActionInfoContainer>
);
