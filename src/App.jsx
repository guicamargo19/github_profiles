import { useState } from "react";
import Perfil from "./components/Perfil"; 
import ReposList from "./components/ReposList";
import Rodape from "./components/Rodape";
import Search from "./components/Search"

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  return (
    <>
      <Search nomeUsuario={e => setNomeUsuario(e.target.value)}/>
      {nomeUsuario.length > 4 && (
        <>
          {(
          <Perfil nomeUsuario={nomeUsuario} />
          )} 
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
      <Rodape />
    </>
  )
}
export default App
