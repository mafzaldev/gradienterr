import Generator from "./pages/Generator";
import Grid from "./pages/Grid";
import Navbar from "./components/Navbar";
import "./index.css";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Generator />} />
        <Route path="/library" element={<Grid />} />
      </Routes>
    </div>
  );
}

export default App;
