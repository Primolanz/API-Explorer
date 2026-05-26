export async function buscarPokemon(nome) {
  const nomeFormatado = encodeURIComponent(nome.trim().toLowerCase());
  const url = `https://pokeapi.co/api/v2/pokemon/${nomeFormatado}`;

  const resposta = await fetch(url);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar pokemon");
  }

  const dados = await resposta.json();
  return dados;
}
