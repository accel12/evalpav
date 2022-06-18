const XLSX = require("xlsx")
const suma=(a,b)=>{
    let sum=a+b
    return sum
}
const resta=(a,b)=>{
    let sum=a-b
    return sum
}
const obtenerDataBruta=async(e,setDataBruta,setCargaBrutaEstado,setDataFormulario,dataFormulario)=>{
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      setDataBruta(data)
      setDataFormulario({
        ...dataFormulario,
        'pini':data[0].ProgresivaInicial,
        'pfin':Math.round((data[data.length-1].ProgresivaFinal) * 100) / 100,
        'xyIni':`${data[0].InicioLatitud}, ${data[0].InicioLongitud}`,
        'xyFin':`${data[data.length-1].FinalLatitud}, ${data[data.length-1].FinalLongitud}`,
        'anchoCarril':data[0].AnchoDeCarril,
        'longitudTramo':Math.round((data[data.length-1].ProgresivaFinal-data[0].ProgresivaInicial) * 100) / 100,
      })
      setCargaBrutaEstado(true)
    }
}

const obtenerDataConvertida=async(data,distancia,setval)=>{
  const num=parseInt(distancia)
  const dataFinal=[]
  const dataArreglada=[]
  const dataOrdenada=[]
  const dataTotal=[]
  let min,max,i=0
  console.log(data)
  data.forEach(element => {
    let valorIni=element.ProgresivaInicial
    const nuevoValor={...element}
    while (valorIni<element.ProgresivaFinal && valorIni+num<element.ProgresivaFinal) {
      nuevoValor.ProgresivaInicial=valorIni
      nuevoValor.ProgresivaFinal=valorIni+num
      dataArreglada.push({...nuevoValor})
      valorIni=valorIni+num
    }
    nuevoValor.ProgresivaInicial=valorIni
    nuevoValor.ProgresivaFinal=element.ProgresivaFinal
    dataArreglada.push({...nuevoValor})
  })
  dataArreglada.sort((a, b) => (a.ProgresivaInicial > b.ProgresivaInicial) ? 1 : -1).forEach(element => {
    dataOrdenada.push(element)
  });
  min=dataOrdenada[0].ProgresivaInicial
  max=dataOrdenada[dataOrdenada.length-1].ProgresivaInicial
  do {
    const dataFil=dataOrdenada.filter(numero=>{
      if(numero.ProgresivaInicial>=min && numero.ProgresivaInicial<(min+num)){
        return true
      }else{
        return false
      }
    })
    min=min+num
    
    dataTotal.push(dataFil)
  } while (min<=max);
  //Aca filtra los vacios
  dataTotal.forEach(element => {
    if(element.length!=0){
      //props.valSel(old=>[...old,element])
      dataFinal.push(element)
    }
  });
  setval(dataFinal)
}


const sum=( obj )=> {
  var sum = 0;
  for( var el in obj ) {
    if( obj.hasOwnProperty( el ) ) {
      if(el!='id' && el!='dano' && el!='severidad'){
        sum += parseFloat( obj[el] );
      }

    }
  }
  return Math.round(sum*10)/10;
}
const calcularDensidad=()=>{

}

const ordenarDano=(listado,setRows,useGlobal)=>{
  const dataGlobal=useGlobal
  const listaOrdenada=[]
  const listadoFinal=[]
  var anterior=''
  var i=0;
  const list=[]
  const ind=[0,0,0,0,0,0,0,0,0,0]
  var pos=0
  listado.forEach(element => {
    list.push(Object.assign({id:element.Daño.toString()+element.Severidad.toString()},{element}))
  });
  list.sort((a, b) => (a.id > b.id) ? 1 : -1).forEach(element => {
    if(anterior==''){
      listaOrdenada.push({id:i,dano:element.element.Daño,severidad:element.element.Severidad,['d'+[ind[pos]+1]]:(Math.round(element.element.Area*10)/10)})
      ind[pos]=ind[pos]+1
      anterior=element.id.toString()
      i=i+1
    }else{
      if(anterior!=element.id){
        pos=pos+1
        listaOrdenada.push({id:i,dano:element.element.Daño,severidad:element.element.Severidad,['d'+[ind[pos]+1]]:(Math.round(element.element.Area*10)/10)})
        ind[pos]=ind[pos]+1
      }else{
        Object.assign(listaOrdenada[pos],{['d'+[ind[pos]+1]]:(Math.round(element.element.Area*10)/10)})
        ind[pos]=ind[pos]+1
      }
      anterior=element.id.toString()
      i=i+1
    }
  });
  listaOrdenada.forEach(e=>{
    console.log(e)
    console.log(dataGlobal)
    var summed=sum(e)
    var densidad=Math.round((summed/dataGlobal.areaMuestra)*100*100)/100
    listadoFinal.push(Object.assign(e,{'TOTAL':summed, 'Densidad':densidad}))

  })
  
  setRows(listadoFinal)
  i=0
  
}
module.exports={
    suma,
    resta,
    obtenerDataBruta,
    obtenerDataConvertida,
    ordenarDano
}