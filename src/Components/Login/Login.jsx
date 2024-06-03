import React, { useState } from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import "./Login.css"

const Login = ()=>{
	// Usuário e senha:
	const [ username, setUsername ] = useState("");
	const [ password, setPassword ] = useState("");

	const handleSubmit = (event)=>{
		// Evento responsável para a página não recarregar após o "submit".
		event.preventDefault();
		alert(`Enviando os dados: ${username} - ${password}`)
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<h1>Acesse o sistema</h1>
				
				<div className="input-field">
					<input type="email" placeholder="E-mail" onChange={(event)=>setUsername(event.target.value)} required/>
					<FaUser className='icon' />
				</div>

				<div className="input-field">
					<input type="password" placeholder="Senha" onChange={(event)=>setPassword(event.target.value)} required />
					<FaLock className='icon' />
				</div>
				
				<div className="recall-forget">
					<label>
						<input type="checkbox" />
						Lembre de mim
					</label>
					<a href="#">Esqueceu a senha</a>
				</div>

				<button>Entrar</button>
				<div className="signup-link">
					<p>Não tem uma conta? <a href="#">Registrar</a></p>
				</div>
			</form>
		</div>
	)
}

export default Login