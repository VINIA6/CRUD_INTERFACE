import React,{useEffect, useState} from "react";

import { Link } from "react-router-dom"
import './style.css'
import logo from '../../assets/logo.png'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios"

function createData(id, id_user, preco, produto, quantidade) {
    return { id, id_user, preco, produto, quantidade };
}


// const rows = [
//     createData(1, 'Açucar', 1.89, 50, 1),
//     createData(2, 'Banana', 3.44, 2, 1),
// ];



export default function Opcoes() {
    const [rows,setRows]=useState([])

    useEffect(async () => {
        const api = axios.create({
            baseURL:"https://api-trabalho-web-deploy.herokuapp.com"
        })
        const response =  await api.get('list/16')

        console.log(response)

        setRows(response.data)
        

    },[setRows]);

    return (

        <div className="logon-container">

            <div className="formulario">
                <img className="logo" src={logo} alt="logo" width="320" height="205" />
                <h1>Lista</h1>
                <div>
                    <Link to={"/novoitem"}>
                        <button className="login" type="submit">Novo Item</button>
                    </Link>
                    <Link to={"/editaritem"}>
                        <button className="login" type="submit">Editar Item</button>
                    </Link>
                    <Link to={"/excluiritem"}>
                        <button className="login" type="submit">Excluir Item</button>
                    </Link>
                </div>
                <h3>Listagem dos produtos.</h3>

            </div>
            <div className="table" style={{ height: 400, width: '100%' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell align="right">Produto</TableCell>
                                <TableCell align="right">Preço</TableCell>
                                <TableCell align="right">Quantidade</TableCell>
                                <TableCell align="right">Id_usuário</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right">{row.id}</TableCell>
                                    <TableCell align="right">{row.product_name}</TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell align="right">{row.qtd}</TableCell>
                                    <TableCell align="right">{row.id_user}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>

    )
}
