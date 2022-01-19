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
        </div>
    )
}