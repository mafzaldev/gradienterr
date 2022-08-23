import Generator from "./pages/Generator";
import Grid from "./pages/Grid";
import Navbar from "./components/Navbar";
import Dots from "./assets/dots.png";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <img src={Dots} alt="Dots" className="fixed bottom-0 z-[-1] opacity-5" />
      <Routes>
        <Route path="/" exact element={<Generator />} />
        <Route path="/library" element={<Grid />} />
      </Routes>
    </div>
  );
}

export default App;
