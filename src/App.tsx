import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Disclaimer from "./pages/Disclaimer";
import Installation from "./pages/Installation";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/installation" element={<Installation />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
