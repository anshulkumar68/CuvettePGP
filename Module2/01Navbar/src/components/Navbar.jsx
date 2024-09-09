import React from 'react'

const Navbar = ({setActive}) => {
  return (
    <>
        <div className='flex gap-10 bg-gray-200 p-5 font-bold text-lg'>
            <a onClick={()=> setActive('home')} className='hover:text-gray-500' href="#">Home</a>
            <a onClick={()=> setActive('exercises')} className='hover:text-gray-500' href="#">Exercises</a>
            <a onClick={()=> setActive('contact')} className='hover:text-gray-500' href="#">Contact</a>
        </div>
    </>
  )
}

export default Navbar