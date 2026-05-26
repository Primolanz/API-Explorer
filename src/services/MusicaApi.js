const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const API_HOST = import.meta.env.VITE_RAPIDAPI_DEEZER_HOST || "deezerdevs-deezer.p.rapidapi.com";

export async function buscarMusicas(artista) {
  if (!API_KEY) {
    throw new Error("Chave da RapidAPI nao configurada");
  }

  const artistaFormatado = encodeURIComponent(artista.trim());
  const url = `https://${API_HOST}/search?q=${artistaFormatado}`;

  const resposta = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
    },
  });

  if (!resposta.ok) {
    throw new Error("Erro ao buscar musicas");
  }

  const dados = await resposta.json();
  return dados.data || [];
}
