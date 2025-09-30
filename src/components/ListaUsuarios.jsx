export default function ListaUsuarios({usuarios}) {
   const excluirUsuario = (usuario) =>{
        const novosUsuarios = [...usuarios];
        novosUsuarios.splice(novosUsuarios.indexOf(usuario), 1);
   }
   
    return(
        <div className="lista-usuarios">
            <h2>Lista de Usuários</h2>
            {usuarios.length === 0 ? (
                <p>Nenhum usuário cadastrado.</p>
            ) : (
                <ul>
                {usuarios.map((usuario, index) => (
                    <li key={index}>
                        {`Nome: ${usuario.nome} - Email: ${usuario.email} - 
                        Idade: ${usuario.idade} anos - 
                        Cidade: ${usuario.cidade}`}
                        <button onClick={() => excluirUsuario(index)}>Excluir</button>
                    </li>
                ))}
                </ul>
            )}
        </div>
    )
}