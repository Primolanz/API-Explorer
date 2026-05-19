export async function buscarClima(cidade) {
  const buscaCidade = encodeURIComponent(cidade.trim());
  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${buscaCidade}&count=1&language=pt&format=json`;

  const respostaGeo = await fetch(geoUrl);

  if (!respostaGeo.ok) {
    throw new Error("Erro ao buscar cidade");
  }

  const dadosGeo = await respostaGeo.json();
  const local = dadosGeo.results?.[0];

  if (!local) {
    throw new Error("Cidade nao encontrada");
  }

  const climaUrl = new URL("https://api.open-meteo.com/v1/forecast");
  climaUrl.searchParams.set("latitude", local.latitude);
  climaUrl.searchParams.set("longitude", local.longitude);
  climaUrl.searchParams.set(
    "current",
    "temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code",
  );
  climaUrl.searchParams.set("timezone", "auto");

  const respostaClima = await fetch(climaUrl);

  if (!respostaClima.ok) {
    throw new Error("Erro ao buscar clima");
  }

  const dadosClima = await respostaClima.json();
  const atual = dadosClima.current;

  return {
    name: `${local.name}${local.admin1 ? ` - ${local.admin1}` : ""}`,
    main: {
      temp: Math.round(atual.temperature_2m),
      humidity: atual.relative_humidity_2m,
      feels_like: Math.round(atual.apparent_temperature),
    },
    wind: {
      speed: atual.wind_speed_10m,
    },
    weather: [
      {
        description: descreverClima(atual.weather_code),
      },
    ],
  };
}

function descreverClima(codigo) {
  const descricoes = {
    0: "ceu limpo",
    1: "principalmente limpo",
    2: "parcialmente nublado",
    3: "nublado",
    45: "neblina",
    48: "neblina com geada",
    51: "garoa leve",
    53: "garoa moderada",
    55: "garoa forte",
    61: "chuva leve",
    63: "chuva moderada",
    65: "chuva forte",
    80: "pancadas de chuva leves",
    81: "pancadas de chuva moderadas",
    82: "pancadas de chuva fortes",
    95: "trovoada",
  };

  return descricoes[codigo] || "condicao indisponivel";
}
