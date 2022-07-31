import { ButtonHTMLAttributes } from "react";
import { GlassButtonStyle } from "./style";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: string;
  hoverColor?: string;
}

export const GlassButton: React.FC<Props> = ({
  label,
  color,
  hoverColor,
  ...rest
}) => (
  <GlassButtonStyle
    {...rest}
    color={color || "#39739d"}
    hoverColor={hoverColor || "#2c5777"}
  >
    {label}
  </GlassButtonStyle>
);
