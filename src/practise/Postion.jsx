// import React from 'react'

// function Postion() {
//   return (
//     <>
//     <p className='text-center text-2xl text-violet-800'>positions</p>
//       <div className='flex flex-col items-center mt-5 space-y-3'>

//             <div className='flex space-x-5 w-full justify-center'>
//             <div className='w-1/2 h-20 bg-pink-600 text-center'>item 1 </div>
//         <div className='w-20 h-20 bg-blue-600 text-center'>item 6 </div> 
//         </div>
            
//             <div className='w-1/3 h-20 bg-purple-600 text-center'>item 2 </div>
//             <div className='w-1/3 h-20 bg-red-600 text-center'>item 3</div>
//             <div  className='w-1/3 h-20 bg-green-600 text-center'>item 4 </div>
//             <div className='w-1/3 h-20 bg-cyan-600 text-center'>item 5 </div>
//       </div>
//     </>
//   )
// }

// export default Postion



// import React from 'react'

// function Postion() {
//   return (
//     <>
//     <p className='text-center text-2xl text-violet-800'>positions</p>
//       <div className='flex flex-col items-center mt-5 space-y-3'>

//             <div className='flex justify-center w-1/2 relative'>
//             <div className='w-full h-20 bg-pink-600 text-center'>item 1 </div>
//         <div className='w-12 h-10 bg-blue-600 text-center absolute top-0 left-5'>item 6 </div> 
//         </div>
            
//             <div className='w-1/3 h-20 bg-purple-600 text-center'>item 2 </div>
//             <div className='w-1/3 h-20 bg-red-600 text-center'>item 3</div>
//             <div  className='w-1/3 h-20 bg-green-600 text-center sticky top-0'>item 4 </div>
//             <div className='w-1/3 h-20 bg-cyan-600 text-center'>item 5 </div>
//             <div className='w-1/3 h-20 bg-cyan-600 text-center'>item 5 </div>
//             <div className='w-1/3 h-20 bg-cyan-600 text-center'>item 5 </div>
//             <div className='w-1/3 h-20 bg-cyan-600 text-center'>item 5 </div>
//             <div className='w-1/3 h-20 bg-cyan-600 text-center'>item 5 </div>
//             <div className='w-1/3 h-20 bg-cyan-600 text-center'>item 5 </div>
//             <div className='w-1/3 h-20 bg-red-600 text-center'>item 3</div>
//             <div className='w-1/3 h-20 bg-red-600 text-center'>item 3</div>
//             <div className='w-1/3 h-20 bg-red-600 text-center'>item 3</div>
//             <div className='w-1/3 h-20 bg-red-600 text-center'>item 3</div>


//       </div>
//     </>
//   )
// }

// export default Postion


import React from 'react'
import a from '../images/a.jpeg'


function Postion() {
  return (
    <>
    <div className=' bg-green-300 container'>
      <img src={a} alt="images1" className='object-contain w-full h-72'/>
    </div>

    <div className=' bg-green-300 container mt-10 mb-10'>
      <img src={a} alt="images1" className='object-contain w-full h-72 object-left'/>
    </div>

    <div className=' bg-green-300 container mt-10 mb-10'>
      <img src={a} alt="images1" className='object-cover w-full h-72'/>
    </div>
</>
  )
}

export default Postion
