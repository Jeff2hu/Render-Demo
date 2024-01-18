import { useState } from "react";
import SplitWithPropsInput from "../component/SplitWithPropsInput";

const SplitWithProps = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log("SplitWithPropsPage");

  return (
    <div>
      <h1>SplitWithPropsPage</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        <SplitWithPropsInput
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <SplitWithPropsInput
          label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SplitWithProps;
