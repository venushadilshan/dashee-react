import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { HiHome, HiChartSquareBar , HiViewGrid,HiChartBar,HiCog} from "react-icons/hi";

export default function Sidebar() {
    return (
        <div className='flex flex-col w-full h-screen  bg-white' >
            <h1 className='text-2xl text-center mt-10 font-bold text-fuchsia-500'>Dashee</h1>
            <div className='flex  flex-col mt-14  w-full h-full'>
                <div className='flex flex-row justify-start  items-center w-full text-slate-900 mb-6 pl-10 p-2 hover:bg-fuchsia-200'> <HiHome className='text-2xl' /> <p className='text-md ml-6 mx-10 font-semibold'>
                    <Link to="/">Dashboard</Link></p></div>
                <div className='flex flex-row justify-start items-center w-full text-slate-900 mb-6 pl-10  p-2  hover:bg-fuchsia-200'> <HiChartSquareBar className='text-2xl' /> <p className='text-md ml-6 mx-10 '>
                    <Link to="/stats">Statistics</Link></p></div>
                <div className='flex flex-row justify-start items-center w-full text-slate-900 mb-6 pl-10  p-2  hover:bg-fuchsia-200'> <HiViewGrid className='text-2xl' /> <p className='text-md ml-6 mx-10 '>Components</p></div>
                <div className='flex flex-row justify-start items-center w-full text-slate-900 mb-6 pl-10  p-2  hover:bg-fuchsia-200'> <HiChartBar className='text-2xl' /> <p className='text-md ml-6 mx-10 '>Charts</p></div>
                <div className='flex flex-row justify-start items-center w-full text-slate-900 mb-6 pl-10  p-2  hover:bg-fuchsia-200'> <HiCog className='text-2xl' /> <p className='text-md ml-6 mx-10 '>Settings</p></div>




            </div>
        </div>
    )
}