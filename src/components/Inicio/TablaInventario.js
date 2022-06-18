import React from 'react'
import { useOutletContext } from 'react-router-dom';

const TablaInventario = () => {
  const [listado]=useOutletContext();
  return (
    <div style={{borderTop:'1px solid black'}}>
      <p style={{textAlign:'center', fontWeight:'bold',textAlign:'center'}}>INVENTARIO DE FALLAS EXISTENTES</p>
      <table   style={{width:'100%',textAlign:'center',fontSize:'13px',backgroundColor:'black'}} className='border border-black'>
        <thead style={{backgroundColor:'#C0C0C0'}} className='border-b border-black'>
          <tr>
              <th style={{width:'50px'}} className='border-r border-black'>Progresiva Inicial</th>
              <th style={{width:'50px'}} className='border-r border-black'>Progresiva Final</th>
              <th style={{width:'50px'}} className='border-r border-black'>Tipo de daño</th>
              <th style={{width:'50px'}} className='border-r border-black'>Severidad de daño</th>
              <th style={{width:'50px'}} className='border-r border-black'>Distancia en X</th>
              <th style={{width:'50px'}} className='border-r border-black'>Distancia en Y</th>
              <th style={{width:'50px'}} className='border-r border-black'>Ancho de daño</th>
              <th style={{width:'50px'}} className='border-r border-black'>Longitud de daño</th>
              <th style={{width:'50px'}} className='border-r border-black'>Area de daño</th>
              <th className='border-r border-black'>Carril</th>
              <th style={{width:'50px'}} className='border-r border-black'>Ancho de carril</th>
              <th>Inspeccionado</th>
          </tr>
        </thead>
          <tbody style={{backgroundColor:'white'}}>
            {listado.map((row)=>(
              <tr key={row.Item}>
                <td className='border-r border-y border-black'>{Math.round(row.ProgresivaInicial*100)/100}</td>
                <td className='border-r border-y border-black'>{Math.round(row.ProgresivaFinal*100)/100}</td>
                <td className='border-r border-y border-black'>{row.Daño}</td>
                <td className='border-r border-y border-black'>{row.Severidad}</td>
                <td className='border-r border-y border-black'>{row.Xfalla}</td>
                <td className='border-r border-y border-black'>{row.Yfalla}</td>
                <td className='border-r border-y border-black'>{row.Ancho}</td>
                <td className='border-r border-y border-black'>{row.Longitud}</td>
                <td className='border-r border-y border-black'>{Math.round(row.Area*100)/100}</td>
                <td className='border-r border-y border-black'>{row.Carril}</td>
                <td className='border-r border-y border-black'>{row.AnchoDeCarril}</td>
                <td className='border-r border-y border-black'>{row.Inspeccionado}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default TablaInventario