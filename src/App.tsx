import { useState } from 'react'
import './App.css'
import FormularioUsuario from './components/FormularioUsuario'
import ListaUsuarios from './components/ListaUsuarios'

function App() {
  const [usuarios, setUsuarios] = useState([])

  function adicionarUsuario(usuario) {
    setUsuarios([...usuarios, usuario])
  }
  return (
    <>
      <FormularioUsuario adicionarUsuario={adicionarUsuario} />
      <ListaUsuarios usuarios={usuarios} />
    </>
  )
}

export default App
