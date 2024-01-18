import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateRoutes = [
    "allInOne",
    "splitWithProps",
    "independent",
    "splitWithPropsWithMemo",
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h1>Home</h1>
      {navigateRoutes.map((route) => (
        <div key={route}>
          <button onClick={() => navigate(`/${route}`)}>
            {route.toLocaleUpperCase()}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
