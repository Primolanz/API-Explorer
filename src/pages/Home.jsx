import './style.css'
function Home(){

    const cards =[
        {
            titulo: "Meteorologia",
            descricao: "Consuma API´s de clima e veja temperatura, vento e umidade.",
            imagem: "https://img.icons8.com/?size=100&id=52585&format=png&color=000000",
            rota: "/clima",
        },
        {
            titulo: "Músicas",
            descricao: "Pesquise artistas, músicas e álbuns usando API´s musicais.",
            imagem: "https://img.icons8.com/?size=100&id=48186&format=png&color=000000",
            rota: "/musica",
        },
        {
            titulo: "Geolocalização",
            descricao: "Utilize localização do navegador em API´s de mapas.",
            imagem: "https://img.icons8.com/?size=100&id=44008&format=png&color=000000",
            rota: "/geolocalizacao",
        },
        {
            titulo: "Marvel",
            descricao: "Busque heróis da Marvel e visualize seus detalhes",
            imagem: "https://img.icons8.com/?size=100&id=bPDnjFfpBByo&format=png&color=000000",
            rota: "/marvel",
        },
        {
            titulo: "Inteligência Artificial",
            descricao: "Faça perguntas para uma IA e receba respostas automáticas.",
            imagem: "https://img.icons8.com/?size=100&id=M1bt3ZHCANRW&format=png&color=000000",
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
