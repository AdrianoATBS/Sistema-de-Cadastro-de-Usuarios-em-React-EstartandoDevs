export default function FormularioUsuario() {
    return(
        <div className="formulario-usuario">

                <h1>Formulário de Usuário</h1>
                <label>Nome:</label>
                <input className="input" type="text" placeholder="Nome"></input>

                <label>Email:</label>
                <input className="input" type="email" placeholder="E-mail"></input>

                <label>Idade:</label>
                <input className="input" type="number" placeholder="Idade"></input>

                <label>Cidade:</label>
                <input className="input" type="text" placeholder="Cidade"></input>
                
                <button className="botao-cadastro" type="submit">Cadastro</button>
        </div>
    )
}