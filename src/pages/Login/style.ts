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
    display: flex;
    flex-direction: column;
    gap: 0.675rem;
    align-items: center;
  }

  input {
    width: 70%;
    font-size: 1.275rem;
    padding: 2px;

    &:focus {
      box-shadow: 0 0 3px 2px cornflowerblue;
    }
  }

  button {
    background-color: ${({ theme }) => theme.tertiary};
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.primary};
    box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
    box-sizing: border-box;
    color: #39739d;
    cursor: pointer;
    padding: 8px 0.8em;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    white-space: nowrap;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.secondary};
      color: #2c5777;
    }

    &:focus {
      box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
    }

    &:active {
      background-color: #a0c7e4;
      box-shadow: none;
      color: #2c5777;
    }
  }
`;
