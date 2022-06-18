import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DataExcelContext from './context/DataExcelContext';
import GlobalContext from './context/GlobalContext';
import PciContext from './context/PciContext';
import Dashboard from './pages/Dashboard';
import DatosEvaluacion from './pages/DatosEvaluacion';
import Inicio from './pages/Inicio';
import Vista from './pages/Vista';

function App() {
  const [val, setval] = useState([])
  const [pci, setPci] = useState([])
  const [global, setGlobal] = useState({})
  const getDataEvalpav=async()=>{
    const data= await fetch('https://raw.githubusercontent.com/accel12/data/main/dataEvalpav.json')
    const dataJson=await data.json()
    setPci(dataJson)
  }
  useEffect(() => {
    getDataEvalpav()
  }, [])
  
  return (
    <div>
      <GlobalContext.Provider value={global}>
        <PciContext.Provider value={pci}>
          <DataExcelContext.Provider value={val}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<DatosEvaluacion setval={setval} setGlobal={setGlobal} />} />
                <Route path='/Dashboard/*' element={<Dashboard />} >
                  <Route path='Inicio' element={<Inicio />} />
                  <Route path='Vista' element={<Vista />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </DataExcelContext.Provider>
        </PciContext.Provider>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
