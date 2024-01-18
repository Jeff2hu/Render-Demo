interface Props {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SplitWithPropsInput = ({ label, value, onChange }: Props) => {
  console.log("SplitWithPropsInput", label);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <label>{label}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

export default SplitWithPropsInput;
