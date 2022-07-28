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

  form {
    .input {
      margin: 10px 0;
    }
  }

  input {
    font-size: 1.275rem;
    padding: 2px;

    &:focus {
      box-shadow: 0 0 3px 2px cornflowerblue;
    }
  }

  .input {
    width: 70%;
    * {
      display: block;
    }
    span {
      color: red;
      font-size: 0.675rem;
    }
  }

  .submit {
    display: block;
    margin: auto;
  }
`;
