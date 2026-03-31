import { HashRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import LanguageSelector from "./components/LanguageSelector";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Disclaimer from "./pages/Disclaimer";
import Installation from "./pages/Installation";
import InsudoseDetail from "./pages/InsudoseDetail";

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/insudose" element={<InsudoseDetail />} />
        </Routes>
        <LanguageSelector />
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
