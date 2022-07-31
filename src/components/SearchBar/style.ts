import styled from "styled-components";

export const SearchBarContainer = styled.div`
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
    transition: all 0.2s;
  }

  input {
    font-size: 1em;
    border-radius: 0 1em 1em 0;

    &:focus {
      box-shadow: 0 0 2px 2px rgba(255, 255, 255, 0.5);
    }
  }

  div {
    border-radius: 1em 0 0 1em;
    display: grid;
    place-items: center;
  }
`;
