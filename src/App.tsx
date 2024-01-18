import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllInOne from "./page/AllInOne";
import Home from "./page/Home";
import Independent from "./page/Independent";
import SplitWithProps from "./page/SplitWithProps";
import SplitWithPropsWithMemo from "./page/SplitWithPropsWithMemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allInOne" element={<AllInOne />} />
        <Route path="/splitWithProps" element={<SplitWithProps />} />
        <Route path="/independent" element={<Independent />} />
        <Route
          path="/splitWithPropsWithMemo"
          element={<SplitWithPropsWithMemo />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
