import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi'
import amazon from './tea.jpg';

function Navbar1() {
    const[show,setShow]=useState(false)
    const handleMouseEnter=()=>{
        setShow(!show)
  }

//   const ulElement = (
//     <ul  onClick={handleclick} className="absolute bg-gray-300 items-center w-full h-screen px-8">
//       <li className="font-bold text-3xl hover:bg-gray-600 hover:text-blue-500 border-b-2 border-gray-600 mb-3 w-full p-5 text-center">
//         LOGIN
//       </li>
//       <li className="font-bold text-3xl hover:bg-gray-600 hover:text-blue-500 border-b-2 border-gray-600 mb-3 w-full p-5 text-center">
//         REGISTER
//       </li>
//       <li className="font-bold text-3xl hover:bg-gray-600 hover:text-blue-500 border-b-2 border-gray-600 mb-3 w-full p-5 text-center">
//         Todo
//       </li>
//       <li className="font-bold text-3xl hover:bg-gray-600 hover:text-blue-500 border-b-2 border-gray-600 w-full p-5 text-center">
//         Converter
//       </li>
//     </ul>
//   );


  return (
<>
      <nav className='bg-gray-500 w-full h-20'>


      <div className='flex justify-between items-center px-4'>
        <div className=' h-20 w-20 rounded-full overflow-hidden'>
            <img className='h-full w-full object-cover' src={amazon} alt="images"/>
        </div>

    
        <ul className='sm:hidden md:hidden lg:flex justify-around items-center text-xl space-x-12 capitalize'>
            <li className='hover:underline cursor-pointer underline-offset-8 decoration-2 decoration-blue-800'>home</li>
            <li className="transform transition hover:scale-125 duration-500 cursor-pointer">about</li>
            <li className="transform transition hover:scale-125 duration-500 cursor-pointer">contact</li>
            <li>services</li>
            </ul>
       
            <div className="lg:hidden" >
              {show ? <AiOutlineClose size={30}  onMouseEnter={handleMouseEnter} />: <GiHamburgerMenu size={30} onMouseEnter={handleMouseEnter} />  }
          </div> 


{/* {show ? ulElement:null} */}

            </div>

</nav>
    </>
  )
}

export default Navbar1


