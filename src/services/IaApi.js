const API_KEY = import.meta.env.VITE_IA_API_KEY;
const MODEL = "openrouter/free";

export async function perguntarIA(pergunta) {
  if (!API_KEY) {
    throw new Error("Chave da OpenRouter nao configurada");
  }

  const resposta = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        {
          role: "system",
          content: "Voce e um assistente util e responde em portugues.",
        },
        {
          role: "user",
          content: pergunta,
        },
      ],
    }),
  });

  if (!resposta.ok) {
    throw new Error("Erro ao consultar a IA");
  }

  const dados = await resposta.json();
  return dados.choices[0].message.content;
}
