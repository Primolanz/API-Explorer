import "./style.css";
import { useState } from "react";
import { buscarLocalizacaoAtual } from "../services/GeoAPI";

function Geolocalizacao() {
  const [localizacao, setLocalizacao] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  async function consultarLocalizacao() {
    setErro(null);
    setCarregando(true);

    try {
      const dados = await buscarLocalizacaoAtual();
      setLocalizacao(dados);
    } catch (error) {
      console.error(error);
      setErro("Nao foi possivel acessar sua localizacao.");
      setLocalizacao(null);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="container-clima">
      <header>
        <a href="/">Voltar para APIs</a>

        <button>API | Geolocalizacao</button>
      </header>

      <main>
        <h1>Consulte sua Localizacao</h1>
        <p>Use a localizacao do navegador para ver latitude e longitude.</p>

        <div className="pesquisa">
          <button onClick={consultarLocalizacao}>Buscar localizacao</button>
        </div>

        {carregando && <p>Carregando...</p>}

        {erro && <p className="erro">{erro}</p>}

        {localizacao && (
          <div className="card-clima card-geo">
            <h2>Sua localizacao</h2>
            <p>Latitude: {localizacao.latitude}</p>
            <p>Longitude: {localizacao.longitude}</p>
            <p>Precisao: {Math.round(localizacao.precisao)} metros</p>

            <a
              href={`https://www.google.com/maps?q=${localizacao.latitude},${localizacao.longitude}`}
              target="_blank"
              rel="noreferrer"
            >
              Abrir no mapa
            </a>
          </div>
        )}
      </main>
    </div>
  );
}

export default Geolocalizacao;
