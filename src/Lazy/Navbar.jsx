import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>

      <div className='flex justify-between items-center bg-blue-500 w-full h-20'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
      </div>
    </>
  )
}

export default Navbar;
