import React from 'react'
import { useOutletContext } from 'react-router-dom'
import DataDano from './DataDano'
import Informacion from './Informacion'
import TablaInventario from './TablaInventario'
import TipoDano from './TipoDano'

const ContenidoInicio = () => {

  const [listado]=useOutletContext();
  return (
    <div className='w-full flex justify-center'>
      <div className='w-anchoOutlet bg-white'>
        <Informacion />
        <TipoDano />
        <TablaInventario />
        <DataDano listadoDano={listado} />
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <img src={require('../../img/evalpavRank.jpg')} />
          <div>
            <table style={{backgroundColor:'black', width:'200px'}} className='border border-black'>
              <tbody style={{textAlign:'center',backgroundColor:'white'}}>
                <tr className='border-b border-black'>
                  <td className='border-r border-black'>VRC</td>
                  <td >52.4</td>
                </tr>
                <tr className='border-b border-black'>
                  <td className='border-r border-black'>VRC</td>
                  <td>52.4</td>
                </tr>
                <tr >
                  <td colspan="2">REGULAR</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ContenidoInicio