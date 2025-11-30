import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Generation from "./pages/Generation";
import NotFound from "./pages/NotFound";
import DigimonPage from "./pages/DigimonPage";


function App() {
  return (
    <Router>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/gen1"
            element={<Generation genKey="gen1" title="Primera Generación" />}
          />
          <Route
            path="/gen2"
            element={<Generation genKey="gen2" title="Segunda Generación" />}
          />
          <Route
            path="/gen3"
            element={<Generation genKey="gen3" title="Tercera Generación" />}
          />
          <Route path="/digimon" element={<DigimonPage />} />

          {/* Ruta 404: cualquier cosa que no coincida */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
