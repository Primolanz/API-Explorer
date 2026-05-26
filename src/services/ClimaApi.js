const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function buscarClima(cidade) {
  if (!API_KEY) {
    throw new Error("Chave da OpenWeather nao configurada");
  }

  const cidadeFormatada = encodeURIComponent(cidade.trim());
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidadeFormatada}&appid=${API_KEY}&units=metric&lang=pt_br`;

  const resposta = await fetch(url);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar o clima");
  }

  const dados = await resposta.json();
  return dados;
}
