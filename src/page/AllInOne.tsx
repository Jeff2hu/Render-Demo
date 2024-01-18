import { useState } from "react";

const AllInOne = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log("AllInOnePage");

  return (
    <div>
      <h1>AllInOnePage</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <label>name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <label>email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
