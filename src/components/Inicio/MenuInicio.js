import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import useDataExcel from '../../hooks/useDataExcel'

const MenuInicio = () => {
  const data=useDataExcel()
  const [rows,setIndice,indice]=useOutletContext()
  const aumento=()=>{
    console.log(indice)
    if(indice==data.length-1){
      setIndice(0)
    }else{
      setIndice(indice+1)
    }
  }
  const disminucion=()=>{
    console.log(data)
    console.log(indice)
      if(indice==0){
        setIndice(data.length-1)
      }else{
        setIndice(indice-1)
      }
      
  }
  useEffect(() => {
    console.log(indice)
  }, [])
  
  return (
    <div className='h-12 bg-fondoNavbar flex place-content-between items-center  text-white'>
      <div className='flex'>
        <div className='flex ml-3'>
          <label>DEPARTAMENTO</label>
          <p>.................</p>
        </div>
        <div className='flex ml-3'>
          <label>DISTRITO</label>
          <p>.................</p>
        </div>
        <div className='flex ml-3'>
          <label>TRAMO</label>
          <p>.................</p>
        </div>
        <div className='flex ml-3'>
          <label>EVALUADOR</label>
          <p>...................................</p>
        </div>
        <div className='flex ml-3'>
          <label>MUESTRA:</label>
          <p>..../....</p>
        </div>
      </div>
      <div className='flex justify-end'>
        <div className='flex'>
          <button className='mr-3 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300' onClick={disminucion}>ATRAS</button>
          <button className='mr-3 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300' onClick={aumento}>SIGUIENTE</button>
        </div>
        <div className='flex items-center'>
          <input className='text-black  p-2.5 font-medium' placeholder='Progresiva' />
          <button className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
        </div>
      </div>
    </div>
  )
}

export default MenuInicio