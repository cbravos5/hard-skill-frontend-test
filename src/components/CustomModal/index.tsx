import { Container, Modal } from "./styles";

interface Props {
  children: React.ReactNode;
}

export const CustomModal: React.FC<Props> = ({ children }) => (
  <Modal>
    <Container>{children}</Container>
  </Modal>
);
