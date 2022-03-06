import React, { useState } from "react";
import { Routes, Route, Link, useInRouterContext,useLocation } from "react-router-dom";

import { HiHome, HiChartSquareBar , HiViewGrid,HiChartBar,HiCog} from "react-icons/hi";



export default function Sidebar() {

  
    const active = "text-md ml-6 mx-10 font-semibold";
    const inactive = "text-md ml-6 mx-10";

    const currentRoute = useLocation();
    
    console.log(currentRoute.pathname)
    return (
        <div className='flex flex-col w-full h-screen  bg-white' >
            <h1 className='text-2xl text-center mt-10 font-bold text-fuchsia-500'>Dashee</h1>
            <div className='flex  flex-col mt-14  w-full h-full'>
                <div className='flex flex-row justify-start  items-center w-full text-slate-900 mb-6 pl-10 p-2 hover:bg-fuchsia-200'> <HiHome className='text-2xl' /> 
                <p className={currentRoute.pathname=="/" ? active : inactive}  >
                    <Link to="/">Dashboard</Link></p></div>
                <div className='flex flex-row justify-start items-center w-full text-slate-900 mb-6 pl-10  p-2  hover:bg-fuchsia-200'> <HiChartSquareBar className='text-2xl' /> 
                <p className={currentRoute.pathname=="/stats" ? active : inactive}  >
                    <Link to="/stats">Statistics</Link></p></div>
                <div className='flex flex-row justify-start items-center w-full text-slate-900 mb-6 pl-10  p-2  hover:bg-fuchsia-200'> <HiViewGrid className='text-2xl' /> <p className='text-md ml-6 mx-10 '>Components</p></div>
                <div className='flex flex-row justify-start items-center w-full text-slate-900 mb-6 pl-10  p-2  hover:bg-fuchsia-200'> <HiChartBar className='text-2xl' /> <p className='text-md ml-6 mx-10 '>Charts</p></div>
                <div className='flex flex-row justify-start items-center w-full text-slate-900 mb-6 pl-10  p-2  hover:bg-fuchsia-200'> <HiCog className='text-2xl' /> <p className='text-md ml-6 mx-10 '>Settings</p></div>




            </div>
        </div>
    )
}