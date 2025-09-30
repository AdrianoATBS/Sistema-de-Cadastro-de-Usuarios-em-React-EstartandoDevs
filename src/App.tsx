import { useState, useEffect, use } from 'react'
import './App.css'
import FormularioUsuario from './components/FormularioUsuario'
import ListaUsuarios from './components/ListaUsuarios'

type Usuario = {
  nome: string;
  email: string;
  idade: number;
  cidade: string;
}

function App() {
  const [usuarios, setUsuarios] = useState(() =>{
    const usuariosSalvos = localStorage.getItem('usuarios')
    return usuariosSalvos ? JSON.parse(usuariosSalvos) : []
  })
  const [usuarioEditando, setUsuarioEditando] = useState(null)
  const [filtro, setFiltro] = useState('');

  function adicionarUsuario(usuario: Usuario) {
    setUsuarios([...usuarios, usuario])
  }
  function excluirUsuario(usuario: Usuario) {
    setUsuarios(usuarios.filter((u: Usuario) => u !== usuario))
  }
  function editarUsuario(usuarioAntigo :Usuario, usuarioNovo :Usuario) {
    setUsuarios(usuarios.map((u: Usuario) => u === usuarioAntigo ? usuarioNovo : u))
    setUsuarioEditando(null)
  }
  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
  }, [usuarios])

  return (
    
    <>
    
      <FormularioUsuario adicionarUsuario={adicionarUsuario} 
      usuarioEditando={usuarioEditando} 
      salvarEdicao={editarUsuario} 
      usuario={usuarios} 
      setFiltro={setFiltro}
      />
     <ListaUsuarios 
    usuarios={usuarios.filter((u: Usuario) => 
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
