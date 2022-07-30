import { confirmAlert } from "react-confirm-alert";
import styled from "styled-components";
import { defaultTheme as theme } from "@/GlobalStyle/theme";
import { GlassButton } from "@/components/GlassButton";

const ConfirmStyle = styled.div`
  background: ${theme.tertiary};
  padding: 2em;
  max-width: 30vw;
  border-radius: 10px;

  button {
    font-size: 1em;
  }
  .buttons {
    margin-top: 1em;
    text-align: center;

    button:nth-of-type(1) {
      margin-right: 1em;
    }
  }
`;

interface Props {
  onYes: () => void;
  msg: string;
  title: string;
}

export const confirmPopUp = ({ onYes, msg, title }: Props): void => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <ConfirmStyle>
          <h1>{title}</h1>
          <p>{msg}</p>
          <div className="buttons">
            <GlassButton type="button" label="Não" onClick={onClose} />
            <GlassButton
              type="button"
              label="Sim"
              onClick={() => {
                onYes();
                onClose();
              }}
            />
          </div>
        </ConfirmStyle>
      );
    },
  });
};
