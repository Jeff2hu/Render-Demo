import { useState } from "react";

interface Props {
  label: string;
}

const IndependentInput = ({ label }: Props) => {
  const [value, setValue] = useState<string>("");
  console.log("IndependentInput", label);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <label>{label}</label>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default IndependentInput;
