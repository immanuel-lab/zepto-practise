import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi'
import amazon from './tea.jpg';

import {  useState } from 'react';

function Navbar() {
    const[show,setShow]=useState(false)
const[nav,setNav]=useState(false)
const handleclick=()=>{
      setShow(!show)
}

  return (
    <>
     <nav className= " p-3 bg-gray-600 ">
            <div className="flex justify-between items-center ">
                
             {/* logo  */}
                <div>
                    <img className="object-scale-down h-20 w-13  rounded-full" src={amazon} alt="image"/>
               </div>
            
    {/* nav items */}
    <ul className="hidden md:flex space-x-12 font-bold cursor-pointer ">

        <li className=" font-bold text-2xl hover:bg-gray-600 hover:text-white">
       LOGIN
          </li>
        <li className="font-bold text-2xl hover:bg-gray-600 hover:text-white">
        REISTER
          </li>
          <li className="font-bold text-2xl hover:bg-gray-600 hover:text-white">
          Todo
          </li>
          <li className="font-bold text-2xl hover:bg-gray-600 hover:text-white">
        Converter
          </li>
          <li className="font-bold text-3xl hover:bg-gray-600 hover:text-white">
        Converter
          </li>
        
        
         
     </ul>
     <div className="md:hidden" >
              {show ? <AiOutlineClose size={30}  onClick={handleclick} />: <GiHamburgerMenu size={20} onClick={handleclick} />  }
          </div>

</div>
  
    

  </nav>  
    
  
{show  ?  < ul onClick={handleclick} className="absolute bg-gray-300  items-center  w-full  h-screen px-8 ">

            <li   className=" font-bold text-3xl hover:bg-gray-600 hover:text-blue-500 border-b-2  border-gray-600  mb-3 w-full p-5 text-center">
              LOGIN
              </li>
            <li className="font-bold text-3xl hover:bg-gray-600 hover:text-blue-500 border-b-2 border-gray-600 mb-3 w-full p-5 text-center">
              REISTER
              </li>
              <li className="font-bold text-3xl hover:bg-gray-600 hover:text-blue-500  border-b-2 border-gray-600  mb-3 w-full p-5 text-center">
          Todo
              </li>
              <li className="font-bold text-3xl hover:bg-gray-600 hover:text-blue-500  border-b-2 border-gray-600 w-full p-5 text-center">
             Converter
              </li>

</ul> : null }
     

      
    </>
  )
}

export default Navbar
