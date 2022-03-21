import { Routes, Route } from "react-router";
import "./App.css";
import Firstpage from "./pages/Firstpage";
import Secondpage from "./pages/Secondpage";
import Thirdpage from "./pages/Thirdpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="Viz-2" element={<Secondpage />} />
        <Route path="Viz-3" element={<Thirdpage />} />
      </Routes>
    </div>
  );
}

export default App;
