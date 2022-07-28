import styled from "styled-components";

export const GlassButtonStyle = styled.button`
  background-color: ${({ theme }) => theme.tertiary};
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.primary};
  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
  color: #39739d;
  cursor: pointer;
  padding: 8px 0.8em;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.secondary};
    color: #2c5777;
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }

  &:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
  }
`;
