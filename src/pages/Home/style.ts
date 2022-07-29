import styled from "styled-components";

export const FixedNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  padding: 10px;

  background: ${({ theme }) => theme.secondary};
  border-bottom: 3px solid ${({ theme }) => theme.primary};

  img {
    display: block;
    max-width: 10vw;
  }

  .add button {
    font-size: 1.275rem;
    border: none;
    border-radius: 0.8rem;

    background: ${({ theme }) => theme.primary};

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
    button {
      background: transparent;
      border: none;
    }
  }

  div {
    margin: auto;
  }
`;
