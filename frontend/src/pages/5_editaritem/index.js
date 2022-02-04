import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom"
import './style.css'
import logo from '../../assets/logo.png'
import axios from "axios"

const handEditarItem = async (product_name,price,qtd,id,navigate)=>{
    if(product_name === ""||price === ""||qtd===""||id===""){
        alert("Campos vazios")
        return
    }

    const api = axios.create({
        baseURL:"https://api-trabalho-web-deploy.herokuapp.com/"
    })

    const response = await api.put('update',{
        id,
        product_name,
        price,
        qtd
    })
    console.log(response)
    if(response.statusText === "OK"){
        alert('Editado com sucesso!!!')
        navigate('/opcoes')
    }
    else{
        alert(response.data.message)
    }
}

export default function Editar() {

    const [nome,setNome] = useState('')
    const [preco,setPreco] = useState('')
    const [quantidade,setQuantidade] = useState('') 
    const [iditem,setIditem] =useState('')

    let navigate = useNavigate()

    return (
        <div className="logon-container">
            <div className="formulario">
                <div><img className="logo" src={logo} alt="logo" width="320" height="205" /></div>
                <div><h1>Editar Item</h1></div>
                <form>
                    <p> </p>
                    <input type="text" placeholder="Id item" onChange={e=>setIditem(e.target.value)}/>
                    <p> </p>
                    <input type="text" placeholder="Nome" onChange={e=>setNome(e.target.value)}/>
                    <p> </p>
                    <input type="text" placeholder="Preço" onChange={e=>setPreco(e.target.value)}/>
                    <p> </p>
                    <input type="text" placeholder="Quantidade" onChange={e=>setQuantidade(e.target.value)}/>

                </form>
                <div>
                    <Link to={"/opcoes"}>
                        <button type="submit">Voltar</button>
                    </Link>
                    <button type="submit" onClick={()=>handEditarItem(nome,preco,quantidade,iditem,navigate)}>Editar</button>
                </div>
            </div>

        </div>
    )
}
