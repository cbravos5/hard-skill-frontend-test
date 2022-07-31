import styled from "styled-components";

export const InputStyle = styled.div`
  input {
    font-size: 1em;
    padding: 2px 12px;
    border-radius: 1em;
    border: none;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);

    &:focus {
      box-shadow: 0 0 3px 2px cornflowerblue;
    }

    &.error {
      box-shadow: 0 0 1px 1px red;
    }
  }

  .input {
    position: relative;

    &__label {
      color: #00000088;
      position: absolute;
      left: 0;
      top: 0;
      padding: 0 12px;
      background: transparent;
      white-space: nowrap;
      transform: translate(0, 0);
      transform-origin: 0 0;
      transition: transform 120ms ease-in;
      line-height: 1.2;
      cursor: text;
    }
    &__field {
      &:focus,
      &:not(:placeholder-shown) {
        & + .input__label {
          transform: translate(0, -100%) scale(0.8);
          color: ${({ theme }) => theme.primary};
        }
      }
    }
  }

  .span-error {
    display: block;
    margin-top: 2px;
    color: red;
    font-size: 0.675rem;
  }
`;
