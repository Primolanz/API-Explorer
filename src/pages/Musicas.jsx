import "./style.css";
import { useState } from "react";
import { buscarMusicas } from "../services/MusicaApi";

function Musicas() {
  const [artista, setArtista] = useState("");
  const [musicas, setMusicas] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  async function consultarMusicas() {
    if (!artista.trim()) {
      setErro("Digite o nome de um artista.");
      setMusicas([]);
      return;
    }

    setErro(null);
    setCarregando(true);

    try {
      const dados = await buscarMusicas(artista);
      setMusicas(dados);
    } catch (error) {
      console.error(error);
      setErro("Nao foi possivel buscar as musicas.");
      setMusicas([]);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="container-clima">
      <header>
        <a href="/">Voltar para APIs</a>

        <button>API | Musicas</button>
      </header>

      <main>
        <h1>Pesquise Musicas</h1>
        <p>Digite o nome de um artista para buscar musicas.</p>

        <div className="pesquisa">
          <input
            type="text"
            placeholder="Digite um artista..."
            value={artista}
            onChange={(e) => setArtista(e.target.value)}
          />
          <button onClick={consultarMusicas}>Buscar</button>
        </div>

        {carregando && <p>Carregando...</p>}

        {erro && <p className="erro">{erro}</p>}

        <section className="resultados-musicas">
          {musicas.map((musica) => (
            <div className="card-musica" key={musica.id}>
              <img src={musica.album.cover_medium} alt={musica.album.title} />
              <h2>{musica.title}</h2>
              <p>Artista: {musica.artist.name}</p>
              <p>Album: {musica.album.title}</p>
              <audio controls src={musica.preview}>
                Seu navegador nao suporta audio.
              </audio>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Musicas;
