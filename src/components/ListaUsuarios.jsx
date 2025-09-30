export default function ListaUsuarios({usuarios, excluirUsuario, setUsuarioEditando}) {

   
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
                        <button className="botao-excluir" onClick={() => excluirUsuario(usuario)}>Excluir</button>
                        <button className="botao-editar" onClick={() => setUsuarioEditando(usuario)}>Editar</button>
                    </li>
                ))}
                </ul>
            )}
        </div>
    )
}