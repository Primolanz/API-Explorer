import Home from "./pages/Home";
import Clima from "./pages/Clima";

function App(){
  const rotas = {
    "/": <Home />,
    "/clima": <Clima />,
  };

  return(
    <div>
      {rotas[window.location.pathname] || <Home />}
    </div>
  )
}

export default App
