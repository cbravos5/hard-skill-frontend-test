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

  .user-logout {
    text-align: center;
    margin-right: 0;
    margin-left: auto;
    padding: 0 5px 0 0;
  }

  .user-logout button {
    background: transparent;
    border: none;
    cursor: pointer;

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

export const HomeData = styled.main`
  width: 100vw;
  padding: 2em;
  text-align: center;
  .people-tiles {
    display: grid;
    justify-content: center;
    row-gap: 1em;
    padding: 4em;
  }

  .add button {
    font-size: 1.275rem;
    border: none;
    border-radius: 0.8rem;

    background: #6cd982;

    color: white;

    padding: 0.5rem 1.4rem;
    cursor: pointer;
    user-select: none;
    text-align: center;
    text-decoration: none;
    transition-duration: 0.4s;
  }
`;
