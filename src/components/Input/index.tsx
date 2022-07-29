import { forwardRef, InputHTMLAttributes } from "react";
import { InputStyle } from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error: string | undefined;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, className, ...rest }, ref) => (
    <InputStyle className={className}>
      <input className={error ? "error" : ""} {...rest} ref={ref} />
      {error && <span>{error}</span>}
    </InputStyle>
  )
);
