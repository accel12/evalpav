import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navegador/Navbar'
import useDataExcel from '../hooks/useDataExcel'
import useGlobal from '../hooks/useGlobal'
import usePci from '../hooks/usePci'

const Dashboard = () => {
  const navigate = useNavigate();
  const [indice, setIndice] = useState(0)
  const [rows, setRows] = useState([])
  const nuevaData=useDataExcel()
  const pci=usePci()
  const global=useGlobal()
  const dataActual=(ind)=>{
    setRows([])
    nuevaData[ind].forEach(element => {
      setRows(old=>[...old,element])
    });
  }


  useEffect(() => {
    navigate('Inicio')
    dataActual(indice)
    console.log(pci)
    console.log(global)
  }, [])
  useEffect(() => {
    dataActual(indice)
  }, [indice])
  return (
    <div className='bg-fondoDos h-screen'>
      <Navbar />
      <Outlet context={[rows,setIndice,indice]} />
    </div>
  )
}

export default Dashboard