import styled from "styled-components";

export const FixedNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  padding: 0 10px;

  background: ${({ theme }) => theme.secondary};
  border-bottom: 3px solid ${({ theme }) => theme.primary};

  .logo {
    width: 15%;
    margin-right: 0;
    margin-left: auto;
  }

  .add button {
    font-size: 1.275rem;
    border: none;
    border-radius: 0.8rem;

    background: black;

    color: white;

    padding: 0.5rem 1.4rem;
    cursor: pointer;
    user-select: none;
    text-align: center;
    text-decoration: none;
    transition-duration: 0.4s;

    &:hover {
      transition-duration: 0.1s;
      filter: brightness(120%);
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      border-radius: 0.8rem;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all 0.5s;
      box-shadow: 0 0 5px 20px white;
    }

    &:active:after {
      box-shadow: 0 0 0 0 white;
      position: absolute;
      border-radius: 0.8rem;
      left: 0;
      top: 0;
      opacity: 1;
      transition: 0s;
    }
  }

  .user-logout {
    text-align: center;
    margin-right: 0;
    margin-left: auto;
    padding: 0 5px 0 0;
  }

  .user-logout button {
    background: transparent;
    border: none;

    &:hover {
      transition: color 0.15s;
      color: ${({ theme }) => theme.primary};
    }

    &:active {
      transition: color 0.1s;
      color: black;
    }
  }

  div {
    margin: auto;
  }
`;
