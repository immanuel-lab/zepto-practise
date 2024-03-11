import React,{useContext} from 'react'
import { themeContext } from '../App'

function Two() {
    const {Theme}=useContext(themeContext)
  return (
    <div className={`w-1/2 h-44 border border-2 dark:bg-slate-700 ${Theme && "dark"}`}>
            <p className='text-center mt-10 dark:text-white/80'>function2 theme</p>
            <p className='dark:text-white/80'>However, it seems there is an issue with how you are accessing the context value in your components </p>
     
 
      </div>
  )
}

export default Two
