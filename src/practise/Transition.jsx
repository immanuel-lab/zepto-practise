import React,{useState,useTransition, Suspense} from 'react'
import BeatLoader from "react-spinners/BeatLoader";

function Transition() {

  const[input,setInput]=useState('')
  const[arr,setArr]=useState([])
  const[isPending,startTranstion]=useTransition()

  const handleChange=(e)=>{
   setInput(e.target.value)

   startTranstion(()=>{
     const l=[]
     for(let i=0;i<=20000;i++){
        l.push(e.target.value)
     }
     setArr(l)
    }

   )
  }

  return (
    <>
      <p className='text-center  text-green-600 text-2xl underline underline-offset-4'>use transition hook</p>
  
  <div className='flex flex-col items-center'>
   <input type='text' value={input} onChange={handleChange} className='border border-2 border-blue-500 mt-4 mb-5 focus:outline-none' />
   {isPending ? 
   <p className='text-xl text-cyan-600'>loading <span><BeatLoader

  color='#36d7b7'
  size='10'
   /></span></p>
   :arr.map((num,index)=>(
   <div key={index} >{num}</div>
   ))}

   </div>
   
    </>
  )
}

export default Transition


