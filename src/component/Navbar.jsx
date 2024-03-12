import React from 'react'
import icon from '../assets/react.svg'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='h-20 w-[1300px]  mx-auto flex justify-between items-center'>
        <div className=''> 
            <p className='text-purple-700 font-semibold text-lg'>Covid-19</p>
            <div>Live Tracker Dashboard</div>
        </div>
       <div className=''>
        <input type="text" 
                placeholder='Search...'
                
                className='p-3 rounded-full border-none outline-none appearance-none bg-gray-200'
            />  
       </div>
       <div className='flex  items-center gap-3 text-xl '>
            <img src={icon} className='rounded-full bg-black'></img>
            <RiArrowDropDownLine/>
            <IoNotificationsOutline/>
            <IoIosLogOut/>
       </div>
       <div>

       </div>
    </div>
  )
}

export default Navbar