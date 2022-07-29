import styled from "styled-components";

export const InputStyle = styled.div`
  width: 70%;
  input {
    font-size: 1.125rem;
    padding: 2px;

    &:focus {
      box-shadow: 0 0 3px 2px cornflowerblue;
    }

    &.error {
      box-shadow: 0 0 1px 1px red;
    }
  }

  span {
    display: block;
    margin-top: 2px;
    color: red;
    font-size: 0.675rem;
  }
`;
