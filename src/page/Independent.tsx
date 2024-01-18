import IndependentInput from "../component/IndependentInput";

const Independent = () => {
  console.log("IndependentPage");

  return (
    <div>
      <h1>IndependentPage</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        <IndependentInput label="name" />
        <IndependentInput label="email" />
      </div>
    </div>
  );
};

export default Independent;
