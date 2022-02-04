import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import './style.css'
import logo from '../../assets/logo.png'
import axios from "axios";

const handExcluir = async (id_items, navigate) => {
    // if(id_items ===''){
    //     alert('Campo vazio')
    //     return
    // }
    // const api = axios.create({
    //     baseURL: 'https://api-trabalho-web-deploy.herokuapp.com/'
    // })
    // const body = {
    //     "id_items": ["9", "10"]
    // }
    // const headers ={
    //     "Content-Type": "application/json"
    // }
    // const response = await api.delete('delete',body,{headers})

    const api = axios.create({
        baseURL:'https://api-trabalho-web-deploy.herokuapp.com/'
    })

    const response = await api.delete(`delete/${id_items}`)

    console.log(response)

    if (response.statusText === "OK") {
        alert('Itens excluidos com sucesso!!!')
        navigate('/opcoes')
    }
    else {
        alert('Erro ao deletar produto!!!')
    }
}

export default function Excluir() {

    const [iditem, setIditem] = useState('')
    // const arrid = iditem.split(",")
    // console.log(arrid)

    let navigate = useNavigate()
    return (

        <div className="logon-container">
            <div className="formulario">
                <div><img className="logo" src={logo} alt="logo" width="320" height="205" /></div>
                <div><h1>Exluir Item</h1></div>
                <form>
                    <p> </p>
                    <input type="arra" placeholder="Id lista - (escreva mais de um id)" onChange={e => setIditem(e.target.value)} />
                </form>
                <div>
                    <Link to={"/opcoes"}>
                        <button type="submit">Voltar</button>
                    </Link>
                    <button type="submit" onClick={() => handExcluir(iditem, navigate)}>Excluir</button>
                </div>
            </div>

        </div>
    )
}
