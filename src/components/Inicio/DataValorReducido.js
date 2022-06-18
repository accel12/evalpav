import React, { useEffect } from 'react'

const DataValorReducido = ({rows}) => {
  const orden=()=>{
    const arreglo=[]
    for(let i=rows.length;i>0;i--){
      console.log(i)
    }
  }
  useEffect(() => {
    orden()
  }, [rows])
  
  return (
    <div>
        <table style={{width:'100%',textAlign:'center',fontSize:'13px',backgroundColor:'black'}} className='border border-black'>
          <thead style={{backgroundColor:'#C0C0C0'}}>
            <tr>
              <th colSpan="9">CALCULO DEL VALOR REDUCIDO CORREGIDO</th>
              <th>TOTAL</th>
              <th>q</th>
              <th>VRC</th>
            </tr>
          </thead>
          <tbody  style={{backgroundColor:'white'}}>
              <tr>
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
                  <td>81,3</td>
                  <td>3</td>
                  <td>52</td>
              </tr>
        </tbody>
        </table>
          
      </div>
  )
}

export default DataValorReducido