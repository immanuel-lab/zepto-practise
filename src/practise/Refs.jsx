import React ,{useEffect, useState,useRef} from 'react'

function Refs() {
    const[name,setName]=useState(' ')
    // const[renderCount,setRenderCount]=useState(0)

    const count=useRef(1)

function handleChange(e){
    setName(e.target.value)
}


useEffect(()=>{
   count.current= count.current+1
})

  return (
    <div className='flex flex-col items-center'>
      <input type='text'   value={name} onChange={handleChange} className='border border-2'/>
    <p>my name is {name}</p>
    <p>rendered {count.current} times</p>
    </div>
  )
}

export default Refs
