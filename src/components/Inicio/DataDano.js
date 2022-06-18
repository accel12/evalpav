import React, { useEffect, useState } from 'react'
import { ordenarDano } from '../../functions/evalFunctions'
import useGlobal from '../../hooks/useGlobal'
import usePci from '../../hooks/usePci'
import DataValorReducido from './DataValorReducido'

const DataDano = ({listadoDano}) => {
  const pci=usePci()
  const global=useGlobal()
  const [rows, setRows] = useState([])
  const calcularVR=(numeroDano,severidad,total)=>{
    const result=pci.filter(element=>element.NUMERO===numeroDano || element.NUMERO===total)
    console.log(result)
  }
  useEffect(() => {
    ordenarDano(listadoDano,setRows,global)
    calcularVR()
  }, [listadoDano])
    
  return (
    <div>
          <p style={{textAlign:'center', fontWeight:'bold',textAlign:'center'}}>CALCULO DEL VALOR REDUCIDO TOTAL</p>
          <table style={{width:'100%',textAlign:'center',fontSize:'13px'}} className='border border-black'>
            <thead style={{backgroundColor:'#C0C0C0'}}>
              <tr className='border-b border-black'>
                <th className='border-r border-black'>Daño</th>
                <th className='border-r border-black'>Severidad</th>
                <th className='border-r border-black'>1</th>
                <th className='border-r border-black'>2</th>
                <th className='border-r border-black'>3</th>
                <th className='border-r border-black'>4</th>
                <th className='border-r border-black'>5</th>
                <th className='border-r border-black'>6</th>
                <th className='border-r border-black'>7</th>
                <th className='border-r border-black'>TOTAL</th>
                <th className='border-r border-black'>Densidad</th>
                <th className='border-r border-black'>VR</th>
              </tr>
            </thead>
            <tbody  style={{backgroundColor:'white'}}>
              {rows.map((row)=>(
                <tr style={{backgroundColor:'white'}}>
                  <td className='border-r border-y border-black'>{row.dano}</td>
                  <td className='border-r border-y border-black'>{row.severidad}</td>
                  <td className='border-r border-y border-black'>{row.d1}</td>
                  <td className='border-r border-y border-black'>{row.d2}</td>
                  <td className='border-r border-y border-black'>{row.d3}</td>
                  <td className='border-r border-y border-black'>{row.d4}</td>
                  <td className='border-r border-y border-black'>{row.d5}</td>
                  <td className='border-r border-y border-black'>{row.d6}</td>
                  <td className='border-r border-y border-black'>{row.d7}</td>
                  <td className='border-r border-y border-black'>{row.TOTAL}</td>
                  <td className='border-r border-y border-black'>{row.Densidad}</td>
                  <td className='border-r border-y border-black'>{row.VR}</td>
                </tr>
              ))}
          </tbody>
          </table>
          <div style={{backgroundColor:'white', marginBottom:'10px', marginTop:'10px'}}>
              <DataValorReducido rows={rows} />
            </div>
      </div>
  )
}

export default DataDano