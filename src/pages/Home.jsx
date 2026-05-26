import './style.css'
function Home(){

    const cards =[
        {
            titulo: "Meteorologia",
            descricao: "Consuma API´s de clima e veja temperatura, vento e umidade.",
            imagem: "https://img.icons8.com/?size=100&id=9249&format=png&color=7950F2",
            rota: "/clima",
        },
        {
            titulo: "Músicas",
            descricao: "Pesquise artistas, músicas e álbuns usando API´s musicais.",
            imagem: "https://img.icons8.com/?size=100&id=XwRiANhEpSjF&format=png&color=7950F2",
            rota: "/musica",
        },
        {
            titulo: "Geolocalização",
            descricao: "Utilize localização do navegador em API´s de mapas.",
            imagem: "https://img.icons8.com/?size=100&id=YyEbAVyRYrMX&format=png&color=7950F2",
            rota: "/geolocalizacao",
        },
        {
            titulo: "Pokemon",
            descricao: "Busque pokemons e visualize tipos, habilidades e detalhes.",
            imagem: "https://img.icons8.com/?size=100&id=62087&format=png&color=7950F2",
            rota: "/pokemon",
        },
        {
            titulo: "Inteligência Artificial",
            descricao: "Faça perguntas para uma IA e receba respostas automáticas.",
            imagem: "https://img.icons8.com/?size=100&id=IuR8B5VlsFxh&format=png&color=7950F2",
            rota: "/ia",
        }

    ]
    return(
        <div className="home">
            <div className="header">
                <h1>Explore as nossas <strong>API´s</strong></h1>
                <p>Busque por endpoints, aprenda a usar e teste requisições em tempo real.</p>
            </div>

            <section className='content'>
                {cards.map((card, index) => (
                    <div className="cards" key={index}>
                        <img src={card.imagem} alt={card.titulo} />
                        <h1>{card.titulo}</h1>
                        <p>{card.descricao}</p>

                        <a href={card.rota} className="Btn-acesso">
                            Acessar API
                        </a>
                    </div>
                ))}
            </section>

            <div className="footer">
                <p></p>
                <p>&copy;Desenvolvido por <strong>Pedro Primolan</strong></p>
            </div>
        </div>
    )
}

export default Home
