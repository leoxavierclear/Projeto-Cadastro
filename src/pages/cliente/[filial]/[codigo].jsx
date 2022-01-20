import Layout from "../../../components/Layout";
import { useRouter } from "next/router"
import React from "react";

export default function ClientePorCodigo(){

    const router = useRouter()
    return(
            <Layout>
                <div>Código = {router.query.codigo}</div>
                <div>Filial = {router.query.filial}</div
            </Layout>
            
       
    )
}