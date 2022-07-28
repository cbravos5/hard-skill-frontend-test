import { ButtonHTMLAttributes } from "react";
import { GlassButtonStyle } from "./style";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const GlassButton: React.FC<Props> = ({ label, ...rest }) => (
  <GlassButtonStyle {...rest}>{label}</GlassButtonStyle>
);
