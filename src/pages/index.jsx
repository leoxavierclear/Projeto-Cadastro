import Link from 'next/link'
import Navegador from '../components/Navegador'

export default function Init() {

    return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          height: '100vh'
        }}>
          <Navegador texto="Estiloso" destino="/estiloso"/>
          <Navegador texto="Exemplo" destino="/exemplo" cor="#8b008f"/>
          <Navegador texto="JSX" destino="/jsx" cor="#dc143c"/>
          <Navegador texto="Navegação #01" destino="/navegacao" cor="green" />
          <Navegador texto="Navegação #02" destino="/cliente/sp/341" cor="blue" />
        </div>
    )
}