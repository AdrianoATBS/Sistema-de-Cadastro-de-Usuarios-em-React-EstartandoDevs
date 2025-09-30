import { useState } from 'react'
import './App.css'
import FormularioUsuario from './components/FormularioUsuario'
import ListaUsuarios from './components/ListaUsuarios'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [usuarioEditando, setUsuarioEditando] = useState(null)

  function adicionarUsuario(usuario) {
    setUsuarios([...usuarios, usuario])
  }
  function excluirUsuario(usuario) {
    setUsuarios(usuarios.filter(u => u !== usuario))
  }
  function editarUsuario(usuarioAntigo, usuarioNovo) {
    setUsuarios(usuarios.map(u => u === usuarioAntigo ? usuarioNovo : u))
    setUsuarioEditando(null)
  }
  return (
    <>
      <FormularioUsuario adicionarUsuario={adicionarUsuario} 
      usuarioEditando={usuarioEditando} 
      salvarEdicao={editarUsuario} 
      usuario={usuarios} />
      <ListaUsuarios usuarios={usuarios} excluirUsuario={excluirUsuario} setUsuarioEditando={setUsuarioEditando} />
    </>
  )
}

export default App
