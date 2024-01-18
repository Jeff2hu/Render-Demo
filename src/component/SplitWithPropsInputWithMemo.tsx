import { memo } from "react";

interface Props {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SplitWithPropsInputWithMemo = ({ label, value, onChange }: Props) => {
  console.log("SplitWithPropsInputWithMemo", label);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <label>{label}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

export default memo(SplitWithPropsInputWithMemo);
