import styled from "styled-components";

export const TileStyle = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.tertiary};
  gap: 4em;
  padding: 0.7em 1em;
  border-radius: 5px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .full-name {
    font-size: 1.25em;
    font-weight: 600;
    overflow-wrap: word-wrap;
  }

  .data-column {
    font-size: 1.1em;

    span {
      font-weight: 600;
    }

    p:last-of-type {
      margin-top: 1em;
    }
  }

  .actions {
    margin: auto;
    .edit,
    .delete {
      font-size: 1em;
      color: white;
      border: none;
      border-radius: 1em;
      padding: 0.3em 0.8em;
      display: block;
      width: 100%;
    }

    .edit {
      background: #4287f5;

      &:hover {
        transition: background-color 0.15s;
        background: #0363ff;
      }

      &:active {
        transition: all 0s;
        background: #4287f5;
        outline: 1px solid #4287f5;
      }
    }

    .delete {
      background: #fc4635;
      margin-top: 0.5em;

      &:hover {
        transition: background-color 0.15s;
        background: #e02312;
      }

      &:active {
        transition: all 0s;
        background: #fc4635;
        outline: 1px solid #fc4635;
      }
    }

    button * {
      vertical-align: middle;
    }

    button svg {
      margin-right: 5px;
      font-size: 1.2em;
    }
  }
`;
