import styled from "styled-components";

export const ActionInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1em;
  border: none;
  background: ${({ theme }) => `${theme.secondary}`};
  color: black;
  font-weight: 200;
  font-size: 0.875rem;
  padding: 5px 1em;
  margin-bottom: 2em;
  transition: opacity 0.3s;
  text-align: center;
  max-width: 80%;

  * {
    vertical-align: middle;
  }

  .icon {
    font-size: 1rem;
    margin-right: 0.5em;
  }
`;
