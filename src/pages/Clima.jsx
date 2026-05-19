import "./style.css";
import { useState } from "react";
import { buscarClima } from "../services/ClimaApi";

function Clima() {
  const [cidade, setCidade] = useState("");
  const [dadosClima, setDadosClima] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  async function consultarClima() {
    if (!cidade.trim()) {
      setErro("Digite uma cidade para pesquisar.");
      setDadosClima(null);
      return;
    }

    setErro(null);
    setCarregando(true);

    try {
      const dados = await buscarClima(cidade);
      setDadosClima(dados);
    } catch (error) {
      console.error(error);
      setErro("Cidade nao encontrada...");
      setDadosClima(null);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="container-clima">
      <header>
        <a href="/">Voltar para APIs</a>

        <button>API | Meteorologia</button>
      </header>

      <main>
        <h1>Consulte o Clima</h1>
        <p>Descubra as condições climáticas em sua região.</p>

        <div className="pesquisa">
          <input
            type="text"
            placeholder="Digite sua cidade..."
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
          <button onClick={consultarClima}>Buscar</button>
        </div>

        {carregando && <p>Carregando...</p>}

        {erro && <p className="erro">{erro}</p>}

        {dadosClima && (
          <div className="card-clima">
            <h2>{dadosClima.name}</h2>

            <p>🌡️Temperatura: {dadosClima.main.temp} graus C</p>

            <p>🍃Vento: {dadosClima.wind.speed} km/h</p>

            <p>💧Umidade: {dadosClima.main.humidity}%</p>

            <p>⛅Clima: {dadosClima.weather[0].description}</p>

            <p>👨🏼Sensação térmica: {dadosClima.main.feels_like} graus C°</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Clima;
