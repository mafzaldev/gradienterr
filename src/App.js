import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Generator from "./pages/Generator";
import Library from "./pages/Library";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Generator />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
