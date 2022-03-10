import React, { useState } from "react";
import { Routes, Route, Link, useInRouterContext, useLocation } from "react-router-dom";

import { HiHome, HiChartSquareBar, HiViewGrid, HiChartBar, HiCog,HiMenu } from "react-icons/hi";



export default function Sidebar(props) {


    const active = "text-md ml-6 mx-10  font-semibold hidden lg:block ";
    const inactive = "text-md ml-6 mx-10  hidden lg:block";
   

    const currentRoute = useLocation();

  
    
    return (
        <div className='lg:flex flex-col lg:w-full h-screen w-10 bg-white'>
            <h1 className='text-2xl text-center mt-10 font-bold text-fuchsia-500 hidden lg:block'>Dashee</h1>
           
            <div className='flex  flex-col mt-14  w-full h-full'>
                <Link to="/"><div className='flex flex-row lg:justify-start justify-center  items-center w-full text-slate-900 mb-6 lg:pl-10 p-2 hover:bg-fuchsia-200'> <HiHome className='text-2xl' />
                    <p className={currentRoute.pathname == "/" ? active : inactive}  >
                        Dashboard</p></div></Link>
                <Link to="/stats"><div className='flex flex-row lg:justify-start justify-center items-center w-full text-slate-900 mb-6 lg:pl-10  p-2  hover:bg-fuchsia-200'> <HiChartSquareBar className='text-2xl' />
                    <p className={currentRoute.pathname == "/stats" ? active : inactive}  >
                        Statistics</p></div></Link>
                <Link to="/tables"> <div className='flex flex-row lg:justify-start justify-center items-center w-full text-slate-900 mb-6 lg:pl-10  p-2  hover:bg-fuchsia-200'> <HiViewGrid className='text-2xl' />
                    <p className={currentRoute.pathname == "/tables" ? active : inactive}  >
                        Tables</p></div></Link>





            </div>
        </div>
    )
}