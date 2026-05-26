import "./style.css";
import { useState } from "react";
import { perguntarIA } from "../services/IaApi";

function IA() {
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  async function consultarIA() {
    if (!pergunta.trim()) {
      setErro("Digite uma pergunta para a IA.");
      setResposta("");
      return;
    }

    setErro(null);
    setCarregando(true);

    try {
      const dados = await perguntarIA(pergunta);
      setResposta(dados);
    } catch (error) {
      console.error(error);
      setErro("Nao foi possivel consultar a IA.");
      setResposta("");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="container-clima">
      <header>
        <a href="/">Voltar para APIs</a>

        <button>API | Inteligencia Artificial</button>
      </header>

      <main>
        <h1>Pergunte para a IA</h1>
        <p>Digite uma pergunta e receba uma resposta automatica.</p>

        <div className="pesquisa">
          <input
            type="text"
            placeholder="Digite sua pergunta..."
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
          />
          <button onClick={consultarIA}>Enviar</button>
        </div>

        {carregando && <p>Carregando...</p>}

        {erro && <p className="erro">{erro}</p>}

        {resposta && (
          <div className="card-clima card-ia">
            <h2>Resposta</h2>
            <p>{resposta}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default IA;
