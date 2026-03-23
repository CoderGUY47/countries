import React, { useState } from 'react'
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const navigation = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Portfolio", path: "/portfolio" },
  { id: 5, name: "Contact", path: "/contact" },
];


const Navbar = () => {
  const [open, setOpen] = useState(false); //by default false
  const links = navigation.map(item => (
                    <li key={item.id} className='border-b-2 border-gray-500'>
                        <a href={item.path}>{item.name}</a>
                    </li>
                ))
  return (
    <nav className='flex justify-between w-[90%] mx-auto pt-5 items-center'>  
      <span className='flex gap-2 items-center' onClick={()=> setOpen(!open)}>
        {open ? 
              <div className='text-xl font-bold md:hidden'><IoClose/></div> : 
              <div className='text-xl font-bold md:hidden'><HiMenuAlt1/></div>
        }
        <ul className = {
          `absolute left-10 w-30 p-4 rounded-lg text-gray-500
          bg-amber-50 gap-5 text-sm font-bold md:hidden duration-500
          ${open ? 'top-14' : '-top-40'}`
        }>
            {links} 
        </ul>
        <h3 className='text-xl font-bold'>Countries</h3>
      </span>
      <ul className='md:flex gap-5 text-sm font-bold hidden'>
        {links} 
      </ul>
        <button className='bg-violet-400 text-white text-sm font-bold px-5 py-2 rounded-lg'>Sign In</button>
        {/* <ul className='flex gap-5'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
        </ul>
        */}

    </nav>
  )
}

export default Navbar