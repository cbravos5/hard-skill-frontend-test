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
    gap: 1.3em;

    padding: 0 25%;

    input {
      width: 100%;
    }

    input[type="date"]:focus::placeholder {
      color: transparent;
    }
  }

  .height-weight {
    display: flex;
    width: 100%;
    gap: 2em;

    div {
      flex: 1;
    }
  }

  @media screen and (max-width: 600px) {
    form {
      padding: 0 15%;
    }

    .height-weight {
      display: block;
      width: 100%;
      div:nth-of-type(1) {
        margin-bottom: 1em;
      }
    }
  }
`;
