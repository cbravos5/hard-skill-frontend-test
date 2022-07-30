import { GridLoader } from "react-spinners";

interface Props {
  color: "light" | "dark";
  loading: boolean;
  size?: number;
}

export const Spinner: React.FC<Props> = ({ color, loading, size }) => (
  <div
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <GridLoader
      loading={loading}
      size={size || 50}
      color={color === "light" ? "#fff" : "#000"}
    />
  </div>
);
