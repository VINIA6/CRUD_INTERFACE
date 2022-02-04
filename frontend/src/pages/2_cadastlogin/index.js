import React, { useState } from "react";
import { useNavigate} from "react-router-dom"
import './style.css'
import logo from '../../assets/logo.png'
import axios from "axios";

const handleLogon = async (name,email,password,navigate)=>{
    if(email === ''|| password==='' || name===''){
        alert("Campos vazios.")
        return
    }

    const api = axios.create({
        baseURL:'https://api-trabalho-web-deploy.herokuapp.com/'
    })

    const response = await api.post('logon',{
        name,
        email,
        password
    })

    console.log(response.data)
    if(response.data.status === 'ok'){
        alert(response.data.message)
        navigate('/')
    }
    else{
        alert('Não foi possivel cadastrar!!!')
    }
}

export default function CadastroLogin() {

    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')

    // console.log(nome,email,senha)    
    let navigate = useNavigate()

    return (
        <div className="logon-container">
            <div className="formulario">
                <div><img className="logo" src={logo} alt="logo" width="320" height="205" /></div>
                <div><h1>Faça sua conta!</h1></div>
                <form>
                    <p> </p>
                    <input type="text" value={nome} placeholder="Nome" onChange={e=>setNome(e.target.value)} />
                    <p> </p>
                    <input type="text" value={email} placeholder="Email" onChange={e=>setEmail(e.target.value)} />
                    <p> </p>
                    <input type="text" value={senha} placeholder="Senha" onChange={e=>setSenha(e.target.value)} />
                </form>
                
                <div>
                        <button className="login" type="submit"  onClick={()=>handleLogon(nome,email,senha,navigate)}>Cadastrar</button>
                </div>
            </div>

        </div>
    )
}
