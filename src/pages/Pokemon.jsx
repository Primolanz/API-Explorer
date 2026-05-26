import "./style.css";
import { useState } from "react";
import { buscarPokemon } from "../services/PokemonApi";

function Pokemon() {
  const [nome, setNome] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  async function consultarPokemon() {
    if (!nome.trim()) {
      setErro("Digite o nome de um pokemon.");
      setPokemon(null);
      return;
    }

    setErro(null);
    setCarregando(true);

    try {
      const dados = await buscarPokemon(nome);
      setPokemon(dados);
    } catch (error) {
      console.error(error);
      setErro("Pokemon nao encontrado.");
      setPokemon(null);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="container-clima">
      <header>
        <a href="/">Voltar para APIs</a>

        <button>API | Pokemon</button>
      </header>

      <main>
        <h1>Busque Pokemon</h1>
        <p>Digite o nome de um pokemon para ver seus detalhes.</p>

        <div className="pesquisa">
          <input
            type="text"
            placeholder="Digite um pokemon..."
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <button onClick={consultarPokemon}>Buscar</button>
        </div>

        {carregando && <p>Carregando...</p>}

        {erro && <p className="erro">{erro}</p>}

        {pokemon && (
          <div className="card-clima card-pokemon">
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
            />
            <h2>{pokemon.name}</h2>
            <p>Numero: #{pokemon.id}</p>
            <p>Altura: {pokemon.height / 10} m</p>
            <p>Peso: {pokemon.weight / 10} kg</p>
            <p>
              Tipo:{" "}
              {pokemon.types.map((tipo) => tipo.type.name).join(", ")}
            </p>
            <p>
              Habilidades:{" "}
              {pokemon.abilities
                .map((habilidade) => habilidade.ability.name)
                .join(", ")}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Pokemon;
