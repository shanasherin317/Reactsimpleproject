import { useState } from 'react'
import './App.css'
import Malayalam from './Malayalam'
import Kollywood from './Kollywood'
import Bollywood from './Bollywood'
import Hollywood from './Hollywood'

function App() {
  const [malylm, setMalaylm] = useState(false)
  const [tamil,setTamil]= useState(false)
  const[blwd,setBlwd]=useState(false)
  const[hlwd,sethlwd]=useState(false)
  const[head,heading]=useState(true)
  const[img,image]=useState(true)

 const handle1=()=>{
  setMalaylm(true)
  setTamil(false)
  heading(false)
  image(false)
 }
 const handle2=()=>{
  setMalaylm(false)
  setTamil(true)
 }
 const handle3=()=>{
  setMalaylm(false)
  setTamil(false)
  setBlwd(true)
  heading(false)
  image(false)
 }
 const handle4=()=>{
  setMalaylm(false)
  setTamil(false)
  setBlwd(false)
  sethlwd(true)
  heading(false)
  image(false)
 }
  return (
    <>
    <div className='frst'>
      <div className='div1'>
    {img && <img className='img' src="https://img.freepik.com/free-vector/retro-cinema-background_52683-1701.jpg" alt="" />}
     {head && <h1 className='head'>Movies are being made in almost all languages ​​of the world.</h1>}
     </div>
      <button className='button' onClick={handle1}>Mollywood</button>
      <button className='button' onClick={handle2}>Kollywood</button>
      <button className='button' onClick={handle3}>Bollywood</button>
      <button className='button' onClick={handle4}>Hollywood</button>
      {
       malylm && <Malayalam/>
      }
      {
       tamil && <Kollywood/>
      }
      {
        blwd && <Bollywood/>
      }
      {
        hlwd && <Hollywood/>     
     }
     </div>
    </>
  )
}

export default App
