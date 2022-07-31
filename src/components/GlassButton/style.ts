import styled from "styled-components";

interface Props {
  color: string;
  hoverColor: string;
}

export const GlassButtonStyle = styled.button<Props>`
  background-color: ${({ theme }) => theme.tertiary};
  border-radius: 3px;
  border: 1px solid ${({ theme, color }) => color || theme.primary};
  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
  color: ${({ color }) => color};
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
    background-color: ${({ hoverColor }) => `${hoverColor}26`};
    color: ${({ hoverColor }) => hoverColor};
  }

  &:focus {
    box-shadow: 0 0 0 4px ${({ hoverColor }) => `${hoverColor}26`};
  }

  &:active {
    background-color: ${({ hoverColor }) => `${hoverColor}33`};
    box-shadow: none;
    color: ${({ hoverColor }) => hoverColor};
  }
`;
