import styled from "styled-components";

export const Modal = styled.div`
  z-index: 2;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  position: fixed;
  border-radius: 15px;
  background: ${({ theme }) => theme.tertiary};

  top: 50%;
  left: 50%;
  right: "auto";
  bottom: "auto";
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;

  color: rgba(0, 0, 139, 0.7);
`;
