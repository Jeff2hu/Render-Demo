import { useCallback, useState } from "react";
import SplitWithPropsInputWithMemo from "../component/SplitWithPropsInputWithMemo";

const SplitWithPropsWithMemo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log("SplitWithPropsWithMemoPage");

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  return (
    <div>
      <h1>SplitWithPropsWithMemoPage</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        <SplitWithPropsInputWithMemo
          label="name"
          value={name}
          onChange={handleNameChange}
        />
        <SplitWithPropsInputWithMemo
          label="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
    </div>
  );
};

export default SplitWithPropsWithMemo;
