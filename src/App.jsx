import Home from "./pages/Home";
import Clima from "./pages/Clima";
import Musicas from "./pages/Musicas";
import Pokemon from "./pages/Pokemon";
import IA from "./pages/IA";
import Geolocalizacao from "./pages/Geolocalizacao";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clima" element={<Clima />} />
        <Route path="/musica" element={<Musicas />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/ia" element={<IA />} />
        <Route path="/geolocalizacao" element={<Geolocalizacao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
