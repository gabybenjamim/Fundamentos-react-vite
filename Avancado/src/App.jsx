
import './App.css'

// 10 - Importando imagem do Assets
import ibirapuera from "./assets/Ibirapuera.jpg"

// 11 - Importando Hooks - useState
import Dados from './componentes/Dados';

function App() {
 

  return (
  <div className="AppAvancado">
    <h1>Próximos passos React JS</h1>

    {/*9 - INserindo imagens do public*/}
    <img src = "/SP.jpg" alt="Imagem de cima, São Paulo" />

    {/*Importando imagem do assets */}
    <img src={ibirapuera} alt="Foto do Parque Ibirapuera, perto da casa da Bia" />

    {/*importando Hooks */}
    <Dados />

  </div>
  )
}

export default App;
