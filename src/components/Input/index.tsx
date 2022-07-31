import { forwardRef, InputHTMLAttributes } from "react";
import { InputStyle } from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error: string | undefined;
  label: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, className, label, ...rest }, ref) => (
    <InputStyle className={className}>
      <label className="input">
        <input
          className={`input__field ${error ? "error" : ""}`}
          {...rest}
          ref={ref}
          placeholder="  "
        />
        <span className="input__label">{label}</span>
      </label>
      {error && <span className="span-error">{error}</span>}
    </InputStyle>
  )
);
