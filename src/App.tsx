import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Disclaimer from "./pages/Disclaimer";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
