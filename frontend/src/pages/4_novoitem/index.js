import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom"
import './style.css'
import logo from '../../assets/logo.png'
import axios from "axios"

const handNovoItem = async (product_name,price,qtd,id_user,navigate)=>{
    if(product_name === ""||price === ""||qtd===""||id_user===""){
        alert("Campos vazios")
        return
    }

    const api = axios.create({
        baseURL:"https://api-trabalho-web-deploy.herokuapp.com/"
    })

    const response = await api.post('add',{
        product_name,
        price,
        qtd,
        id_user
    })
    console.log(response)
    if(response.data.status === "ok"){
        alert(response.data.message)
        navigate('/opcoes')
    }
    else{
        alert("Erro no cadastro !!!")
    }
}

export default function Logon() {

    const [nome,setNome] = useState('')
    const [preco,setPreco] = useState('')
    const [quantidade,setQuantidade] = useState('') 
    const id = 16
    
    let navigate = useNavigate()

    return (
        <div className="logon-container">
            <div className="formulario">
                <div><img className="logo" src={logo} alt="logo" width="320" height="205" /></div>
                <div><h1>Novo Item</h1></div>
                <h3>Cadastre um novo item em sua lista.</h3>
                <form>
                    <p> </p>
                    <input type="text" value={nome} placeholder="Nome do produto" onChange={e=>setNome(e.target.value)} />
                    <p> </p>
                    <input type="text" value={preco} placeholder="Preço" onChange={e=>setPreco(e.target.value)} />
                    <p> </p>
                    <input type="text" value={quantidade} placeholder="Quantidade" onChange={e=>setQuantidade(e.target.value)} />
                </form>
                <div>
                    <Link to={"/opcoes"}>
                        <button className="login" type="submit">Voltar</button>
                    </Link>
                    <button className="login" type="submit" onClick={()=>handNovoItem(nome,preco,quantidade,id,navigate)} >Cadastrar</button>
                </div>
            </div>

        </div>
    )
}