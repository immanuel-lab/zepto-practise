// import React, { useState } from 'react'

// function Worker() {

//     const[sum,setSum]=useState(0)
    
//     const colour='w-full h-screen bg-gray-500/50'
//     const[bg,setBg]=useState(colour)

//     const worker = new Worker('./countWorker.js');

//     const changeBackground=()=>{
//         const colourChange='w-full h-screen bg-green-500/50'
//         setBg(colourChange)
//         if(bg===colourChange){
//             setBg(colour)
//         }
//     }

    
//     const countSum = () => {
//       worker.postMessage('start');
//   }

//   worker.onmessage = function(e) {
//       setSum(e.data);
//   }


//     // function Count(){
//     //    let count=0
//     //     for(let i=0;i<994343400;i++){
//     //         count+=i
//     //     }
//     //     return setSum(count)
//     // }




//   return (
//     <div className={`${bg}`}>
//     <div className='flex justify-center space-x-2'>
//     <button onClick={Count} className='p-2 bg-green-600'>calculate sum</button>
//     <button onClick={changeBackground} className='p-2 bg-cyan-600'>change background</button>
//     <button onClick={()=>{setSum(0)}} className='p-2 bg-purple-500'>reset</button>
//   </div>
//    <div className='text-center mt-5'>
//     {sum}
//     </div>
//     </div>
    
    
//   )
// }

// export default Worker



// Worker.jsx
import React, { useState } from 'react';
 import CountWorker from './countWorker';

function Worker() {
    const [sum, setSum] = useState(0);
    const [bg, setBg] = useState('w-full h-screen bg-gray-500/50');

    const worker = new Worker('countWorker.js');

    const changeBackground = () => {
        const colourChange = 'w-full h-screen bg-green-500/50';
        setBg(colourChange);
        if (bg === colourChange) {
            setBg('w-full h-screen bg-gray-500/50');
        }
    }

    const countSum = () => {
        worker.postMessage('start');
    }

    worker.onmessage = function(e) {
        setSum(e.data);
    }

    return (
        <div className={`${bg}`}>
            <div className='flex justify-center space-x-2'>
                <button onClick={countSum} className='p-2 bg-green-600'>Calculate Sum</button>
                <button onClick={changeBackground} className='p-2 bg-cyan-600'>Change Background</button>
                <button onClick={() => { setSum(0) }} className='p-2 bg-purple-500'>Reset</button>
            </div>
            <div className='text-center mt-5'>
                {sum}
            </div>
        </div>
    );
}

export default Worker;
