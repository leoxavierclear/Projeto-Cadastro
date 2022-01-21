import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})

    
    //async refere-se a um método assíncrono
    async function obterCliente() {
        //await indica espera para a execução da linha de comando 
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const dados = await resp.json()
        setCliente(dados)
    }
    //ORIGINAL É A ABAIXO
    // function obterCliente() {
    //     fetch(`http://localhost:3000/api/clientes/${codigo}`)
    //         .then(resp => resp.json())
    //         .then(dados => setCliente(dados))
    // }

    return(
        
        <Layout titulo="Integração com API">
            <div>
                <input type="number" value={codigo} 
                    onChange={e => setCodigo(e.target.value)} />
               <button onClick={obterCliente}>Obter CLiente</button>
            </div>
           
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>

    )
}