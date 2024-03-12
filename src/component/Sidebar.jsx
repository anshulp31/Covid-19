import React from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { LuTestTube } from "react-icons/lu";
import { MdHome } from "react-icons/md";
const Sidebar = () => {
  return (
    <div className='w-20 flex flex-col justify-between items-center text-2xl text-gray-400 gap-y-4-5 absolute top-0 h-screen rounded-[200px] bg-blue-800'>
            <MdOutlineLightMode/>
            <div className='space-y-4'>
                <MdHome/>
                <LuTestTube/>
                <BsChatDots/>
                
            </div>
            <CiSettings/>
    </div>
  )
}

export default Sidebar