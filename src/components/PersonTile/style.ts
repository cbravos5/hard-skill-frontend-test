import styled from "styled-components";

export const TileStyle = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.tertiary};
  padding: 0.7em 1em;
  border-radius: 5px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .full-name {
    font-size: 1.5em;
    font-weight: 600;
    width: 100%;
    margin-bottom: 1.2em;

    p {
      overflow-wrap: break-word;
    }
  }

  .data-column {
    margin: auto;
    font-size: 1.25em;

    span {
      font-weight: 600;
    }

    p:last-of-type {
      margin-top: 1em;
    }
  }

  .edit,
  .delete {
    font-size: 1.2em;
    color: white;
    border: none;
    border-radius: 1em;
    padding: 0.3em 0.8em;
    display: block;
    width: 100%;
    cursor: pointer;

    &:active {
      transform: scale(0.97);
    }
  }

  .edit {
    background: #4287f5;

    &:hover {
      transition: background-color 0.15s;
      background: #0363ff;
    }
  }

  .delete {
    background: #fc4635;
    margin-top: 0.5em;

    &:hover {
      transition: background-color 0.15s;
      background: #e02312;
    }
  }

  .actions {
    margin: auto;

    button * {
      vertical-align: middle;
    }

    button svg {
      margin-right: 5px;
      font-size: 1.2em;
    }
  }

  @media screen and (max-width: 600px) {
    box-shadow: none;
    border-radius: 1em;

    .edit,
    .delete {
      display: inline;
    }

    .actions {
      margin-top: 1em;
    }
  }
`;
