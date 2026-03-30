import { HashRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import LanguageSelector from "./components/LanguageSelector";
import Index from "./pages/Index";
import Disclaimer from "./pages/Disclaimer";
import Installation from "./pages/Installation";

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/installation" element={<Installation />} />
        </Routes>
        <LanguageSelector />
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
