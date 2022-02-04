import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import './style.css'
import logo from '../../assets/logo.png'
// import api from '../../services/api'
import axios from "axios";

export default function Login() {

    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')

    let navigate = useNavigate()

    const handleLogin = async (email,password,navigate)=>{
        if(email === ''|| password===''){
            alert("Campos vazios.")
            return
        }
        
        const api = axios.create({
            baseURL:'https://api-trabalho-web-deploy.herokuapp.com/'
        })

        const response = await api.post('login',{
            email,
            password
        })
        
        console.log('-->',response.data)
        if(response.data.auth === true){
            navigate('/opcoes')
        }
        else{
            alert(response.data.message)
        }

    }
    
    return (
        <div className="logon-container">
            <div className="formulario">
                <img className="logo_login" src={logo} alt="logo" width="320" height="205" />
                <form >
                    <p> </p>
                    <input type="text" value={email} placeholder="Login" onChange={e => setEmail(e.target.value)}/>
                    <p> </p>
                    <input type="text" value={senha} placeholder="Senha" onChange={e => setSenha(e.target.value)}/>
                </form>
                <div>
                   <p>Não tem uma conta ?<Link to='/cadastLogin'> Crie uma!!!</Link></p> 
                </div>
                <div>
                    <button className="login" type="submit" onClick={()=>handleLogin(email,senha,navigate)} >Login</button>
                </div>
            </div>

        </div>
    )
}
