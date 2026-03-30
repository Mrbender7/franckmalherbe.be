import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Disclaimer from "./pages/Disclaimer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
    </Routes>
  );
}

export default App;
