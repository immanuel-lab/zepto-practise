



import React from 'react'
// import Transition from './practise/Transition'
// import  Random from './practise/Random'
// import Search from './practise/Search'
// import Postion from './practise/Postion'
// import Worker from './practise/Worker'
// import AppRouter from './Lazy/Routes'
// import Navbar from './Lazy/Navbar'
import Home from './Lazy/Home'
// import About from './Lazy/About'
// import Store from './Lazy/Store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Lazy/Navbar';
import { lazy, Suspense } from 'react';

const About = lazy(() => import('./Lazy/About'));
const Store = lazy(() => import('./Lazy/Store'));
function App() {
  return (
    <>
      {/* <Transition/> */}
      {/* <Random/> */}
      {/* <Search/> */}
      {/* <Postion/> */}
      {/* <Worker/> */}
      {/* <AppRouter/> */}
     
      <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      </Suspense>
    </Router>
    </>
  )
}

export default App








// import Navbar from './practise/Navbar'
// import Navbar1 from './practise/Navbar1'
// import Scroll from './practise/Scroll'
// import Refs from './practise/Refs'
// import Transition from './practise/Transition'

    //  {/* <Navbar/> */}
    //  {/* <Navbar1/> */}
    //  {/* <Scroll/> */}
    //  {/* <Refs/> */}
    //  {/* <Transition/> */}


    // import React,{useState,createContext} from 'react'
// import One from './practise2/One'
// import Two from './practise2/Two'





// export const themeContext=createContext()

// function App() {


//   const[Theme,setTheme]=useState(false)


//   const toggleTheme=(e)=>{
//     setTheme(!Theme)
//   }

//   return (
//     <div className={`${Theme && "dark"}`}>
//     <div className="flex min-h-screen flex-col items-center space-y-6 mt-10  dark:bg-slate-700">
// <button className='p-2 bg-blue-500 rounded-md dark:bg-green-500' onClick={toggleTheme}>change theme</button>
//       <themeContext.Provider value={Theme}>
//         <One/>
//         <Two/>
    
//       </themeContext.Provider>
//       </div>
//       </div>

//   )
// }

// export default App