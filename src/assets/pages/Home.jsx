import '../pages/style.css'
function Home(){
    return(
        <div className="home">
            <div className="header">
                <h1>Explore as nossas <strong>API´s</strong></h1>
                <p>Busque por endpoints, aprenda a usar e teste requisições em tempo real.</p>
            </div>

            <div className="content">
                <div className="cards">
                    <img src="https://img.icons8.com/?size=100&id=52585&format=png&color=000000" alt="meteorologia" />
                    <h1>Meteorologia</h1>
                    <p>Consuma API´s de clima e veja temperatura, vento e umidade.</p>
                    <button className="Btn-acesso">Acessar API</button>
                </div>

                <div className="cards">
                    <img src="https://img.icons8.com/?size=100&id=48186&format=png&color=000000" alt="musica" />
                    <h1>Músicas</h1>
                    <p>Pesquise artistas, músicas e álbuns usando API´s musicais.</p>
                    <button className="Btn-acesso">Acessar API</button>
                </div>

                <div className="cards">
                    <img src="https://img.icons8.com/?size=100&id=44008&format=png&color=000000" alt="geolocalizacao" />
                    <h1>Geolocalização</h1>
                    <p>Utilize localização do navegador em API´s de mapas.</p>
                    <button className="Btn-acesso">Acessar API</button>
                </div>

                <div className="cards">
                    <img src="https://img.icons8.com/?size=100&id=bPDnjFfpBByo&format=png&color=000000" alt="marvel" />
                    <h1>Marvel</h1>
                    <p>Busque heróis da Marvel e visualize seus detalhes</p>
                    <button className="Btn-acesso">Acessar API</button>
                </div>

                <div className="cards">
                    <img src="https://img.icons8.com/?size=100&id=M1bt3ZHCANRW&format=png&color=000000" alt="IA" />
                    <h1>Inteligencia Artificial</h1>
                    <p>Faça perguntas para uma IA e receba respostas automáticas.</p>
                    <button className="Btn-acesso">Acessar API</button>
                </div>
            </div>

            <div className="footer">
                <p></p>
                <p>&copy;Desenvolvido por <strong>Pedro Primolan</strong></p>
            </div>
        </div>
    )
}

export default Home