import { useState, useEffect } from "react";
export default function FormularioUsuario({adicionarUsuario, usuarioEditando, salvarEdicao, usuario}) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    const [cidade, setCidade] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    useEffect(() =>{
        if(usuarioEditando) {
            setNome(usuarioEditando.nome);
            setEmail(usuarioEditando.email);
            setIdade(usuarioEditando.idade);
            setCidade(usuarioEditando.cidade);
        }
    }, [usuarioEditando])

    const validarFormulario = () => {
        if(!nome || !email || !idade || !cidade)
        {
            setMensagemErro('Por favor, preencha todos os campos.');
            return false;
        }
        else if(!email.includes('@'))
        {
            setMensagemErro('Por favor, insira um email válido.');
            return false;
        }
        else if(isNaN(idade) || idade <= 0)
        {
            setMensagemErro('Por favor, insira uma idade válida.');
            return false;
        }
        else if(usuario.some(u => u.email === email) && (!usuarioEditando || usuarioEditando.email !== email))
        {
            setMensagemErro('Este email já está em uso.');
            return false;
        }
        return true;
    }

    const handlerSubmit = (e) =>
    {
        e.preventDefault();
        if(validarFormulario())
        {
            const novoUsuario = {
                nome: nome,
                email: email,
                idade: idade,
                cidade: cidade
            };
            if(usuarioEditando) {
                salvarEdicao(usuarioEditando, novoUsuario);
            }
            else{
                adicionarUsuario(novoUsuario);
            }
            setNome('');
            setEmail('');
            setIdade('');
            setCidade('');
            setMensagemErro('');
        }
    }

    return(
      
        <div >
            <form onSubmit={handlerSubmit} className="formulario-usuario">
                <h1>Formulário de Usuário</h1>
                <label>Nome:</label>
                <input onChange={(e) => {setNome(e.target.value)}} value={nome} className="input" type="text" placeholder="Nome"></input>

                <label>Email:</label>
                <input onChange={(e) => {setEmail(e.target.value)}} value={email} className="input" type="email" placeholder="E-mail"></input>

                <label>Idade:</label>
                <input onChange={(e) => {setIdade(e.target.value)}} value={idade} className="input" type="number" placeholder="Idade"></input>

                <label>Cidade:</label>
                <input onChange={(e) => {setCidade(e.target.value)}} value={cidade} className="input" type="text" placeholder="Cidade"></input>

                <button className="botao-cadastro" type="submit">
                    {usuarioEditando ? "Salvar Edição" : "Cadastrar"}
                </button>
                {mensagemErro && <p className="mensagem-erro">{mensagemErro}</p>}
            </form>
        </div>
    )
}