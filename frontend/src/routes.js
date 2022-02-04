import React from 'react'
import { Route, Routes} from 'react-router-dom'

import Login from './pages/1_login'
import CadastLogin from './pages/2_cadastlogin'
import Opcoes from './pages/3_opcoes'
import NovoItem from './pages/4_novoitem'
import Editaritem from './pages/5_editaritem'
import ExcluirItem from './pages/6_excluiritem'

export default function MyRoutes(){
    return(
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastLogin" element={<CadastLogin/>}/>
                <Route path="/opcoes" element = {<Opcoes/>}/>
                <Route path="/novoitem" element={<NovoItem/>}/>
                <Route path="/editaritem" element={<Editaritem/>}/>
                <Route path="/excluiritem" element={<ExcluirItem/>}/>
            </Routes>
    )
}