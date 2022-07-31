import styled from "styled-components";

export const ContentContainer = styled.div`
  height: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .close {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    font-size: 2rem;
    background: transparent;
    border: none;
    border-radius: 2rem;
    transition: all 0.1s ease;

    &:hover {
      color: rgba(0, 0, 0, 0.85);
    }

    &:active {
      color: rgba(0, 0, 0, 0.65);
    }
  }

  .invisible {
    opacity: 0;
  }

  form {
    display: flex;
    justify-content: center;
    justify-items: center;
    flex-direction: column;
    gap: 1.3rem;

    padding: 0 25%;
    transition: opacity 0.3s;

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
    gap: 1.5em;

    div {
      flex: 1;
    }
  }

  .buttons {
    width: 100%;
    text-align: center;
    margin-top: 1em;
    button {
      width: 30%;
      margin: 0 0.875em;
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
