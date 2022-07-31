import styled from "styled-components";

export const FixedNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  padding: 0 10px;
  height: 5em;

  background: ${({ theme }) => theme.secondary};
  border-bottom: 3px solid ${({ theme }) => theme.primary};

  .logo {
    width: 12em;
    margin-right: auto;
    margin-left: auto;
  }

  .user-logout {
    text-align: center;
    margin-right: 1em;
    margin-left: -2em;
    padding: 0 5px 0 0;

    * {
      font-size: 1.5em;
    }
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
  margin-top: 6em;
  width: 100vw;
  height: calc(100vh - 6em);
  padding: 1em 2em;
  text-align: center;

  .people-tiles {
    overflow-y: scroll;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    row-gap: 1em;
    padding: 0 4em 4em 4em;
    margin-top: 1.5em;
  }

  .add button {
    font-size: 1.275rem;
    border: none;
    border-radius: 0.8rem;

    background: #209403;

    color: white;

    padding: 0.5rem 1.4rem;
    cursor: pointer;
    user-select: none;
    text-align: center;
    text-decoration: none;
    transition-duration: 0.1s;

    &:hover {
      background: #1f7a09;
    }

    &:active {
      transform: scale(0.97);
    }
  }

  .search-bar {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 1.5em;
    margin-top: 1.5em;

    input,
    div {
      height: 100%;
      padding: 2px 12px;
      border: none;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.5);
    }

    input {
      font-size: 1em;
      border-radius: 0 1em 1em 0;

      &:focus {
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);
      }
    }

    div {
      border-radius: 1em 0 0 1em;
      display: grid;
      place-items: center;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0;
    .people-tiles {
      overflow-x: hidden;
      padding: 0 0.5em;
    }
  }
`;
