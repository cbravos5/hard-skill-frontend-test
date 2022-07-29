import styled from "styled-components";

export const LoginContainer = styled.main`
  margin: 0;
  padding: 1rem;
  min-width: 50vw;
  min-height: 50vh;

  display: grid;
  justify-items: center;
  align-items: center;

  background: ${({ theme }) => theme.tertiary};
  border-radius: 10px;
  box-shadow: 0 0 0 10px ${({ theme }) => theme.primary};

  img {
    width: 50%;
  }

  .input {
    margin: 10px 0;
  }

  .submit {
    display: block;
    margin: auto;
  }
`;
