import React, { useState } from "react";
import profile_icon from "../assets/img/profile.svg";
import {HiBell, HiMenu} from "react-icons/hi"
export default function HeaderBar() {
    const [MenuStatus, setMenuStatus] = useState("")
    return(<div className="w-auto h-full lg:m-5 m-2  rounded-lg shadow-sm lg:max-h-20 h-14 flex flex-row items-center justify-start lg:pl-3 lg:py-3 p-2  bg-white" >
        <div className="flex flex-row items-center w-full justify-between">
           <div className="flex flex-row items-center"> 
         
           <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
           className="lg:w-14 lg:h-14 w-10 h-10 object-cover rounded-full "/>
            <h1 className="lg:text-lg text-sm ml-5">Welcome back <span className="font-semibold text-slate-900"> Venusha! 👋</span></h1></div>
            <div className="lg:flex flex-row items-center hidden ">
                <input type="text" className="ml-5 lg:w-72 w-full bg-gray-100 rounded-lg h-8 mr-5 pl-5 outline-none focus:bg-gray-200" placeholder="Search..."/>
            <HiBell className="text-2xl mr-5"/>
            </div>
            
            
            </div>

        </div>)
}