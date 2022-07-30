import styled from "styled-components";

export const ContentContainer = styled.div`
  height: 100%;

  .close {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    font-size: 1.5rem;
    background: transparent;
    border: none;
  }

  form {
    height: 100%;
    display: flex;
    justify-content: center;
    justify-items: center;
    flex-direction: column;
    gap: 1em;

    padding: 0 25%;

    input {
      width: 100%;
    }

    .height-weight {
      display: flex;
      width: 100%;
      gap: 2em;

      div {
        flex: 1;
      }
    }
  }
`;
