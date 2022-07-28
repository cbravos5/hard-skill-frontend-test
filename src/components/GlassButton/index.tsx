import { GlassButtonStyle } from "./style";

interface Props {
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  label: string;
}

export const GlassButton: React.FC<Props> = ({
  type,
  onClick,
  label,
  className,
}) => (
  <GlassButtonStyle type={type} onClick={onClick} className={className}>
    {label}
  </GlassButtonStyle>
);
