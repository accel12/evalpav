import React from 'react'
import useGlobal from '../../hooks/useGlobal'

const Informacion = () => {
    const global = useGlobal()
    const datos={
        nombre:'Carlos Hernandez',
        pIni:global.pini,
        pFin:global.pfin,
        carril:'0',
        area:global.areaMuestra,
        fecha:'12/12/2022',
        anchoCarril:global.anchoCarril
    }
  return (
    <div className='flex'>
        <table className=' w-full text-center'>
            <tbody className='border border-black'>
                <tr className='border-b border-black'>
                    <td rowSpan={2} className='border-r border-black'>Evaluador</td>
                    <td rowSpan={2} className='border-r border-black'>{datos.nombre}</td>
                    <td className='border-r border-black'>Progresiva Inicial</td>
                    <td className='border-r border-black'>Progresiva Final</td>
                    <td className='border-r border-black'>Ancho carril</td>
                    <td className='border-r border-black'>Area</td>
                    <td className='border-r border-black'>Fecha</td>
                </tr>
                <tr>
                    <td className='border-r border-black'>{datos.pIni}</td>
                    <td className='border-r border-black'>{datos.pFin}</td>
                    <td className='border-r border-black'>{datos.anchoCarril}</td>
                    <td className='border-r border-black'>{datos.area}</td>
                    <td className='border-r border-black'>{datos.fecha}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Informacion