import styled from "styled-components";

export const LoginContainer = styled.main`
  margin: 0;
  padding: 1em;
  min-width: 50vw;
  min-height: 50vh;

  display: grid;
  justify-items: center;
  align-items: center;

  background: ${({ theme }) => theme.tertiary};
  border-radius: 10px;
  box-shadow: 0 0 0 10px ${({ theme }) => theme.primary};

  img {
    width: 25em;
  }

  .input {
    margin: 1.275em 0;
  }

  button {
    font-size: 0.9em;
  }

  .submit {
    display: block;
    margin: auto;
  }

  @media screen and (max-width: 600px) {
    min-width: 10vw;
    max-width: 90vw;
    min-height: 60vh;

    img {
      width: 18em;
    }
  }
`;
