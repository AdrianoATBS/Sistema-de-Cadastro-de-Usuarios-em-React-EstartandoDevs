import { useState } from 'react'
import './App.css'
import FormularioUsuario from './components/FormularioUsuario'
import ListaUsuarios from './components/ListaUsuarios'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [usuarioEditando, setUsuarioEditando] = useState(null)
  const [filtro, setFiltro] = useState('');

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
      usuario={usuarios} 
      setFiltro={setFiltro}
      />
     <ListaUsuarios 
    usuarios={usuarios.filter(u => 
        u.nome.toLowerCase().includes(filtro.toLowerCase()) ||
        u.email.toLowerCase().includes(filtro.toLowerCase()) ||
        u.cidade.toLowerCase().includes(filtro.toLowerCase()) ||
        u.idade.toString().includes(filtro)
    )}
      excluirUsuario={excluirUsuario} 
      setUsuarioEditando={setUsuarioEditando} 
  />

    </>
  )
}

export default App
