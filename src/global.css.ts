import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    &:focus {
      outline: 0;
    }
  }

  ul {
    list-style: none;
  }

  a:hover {
    color: #535bf2;
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    background: ${(props) => props.theme.background};
  }
`;
