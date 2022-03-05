import React from "react";
import profile_icon from "../assets/img/profile.svg";

export default function HeaderBar() {
    return(<div className="w-auto m-10 rounded-lg shadow-sm flex flex-row items-center justify-start pl-3 py-3 " style={{ background: "#ffff" }}>
        <div className="flex flex-row items-center  w-full justify-between">
           <div className="flex flex-row items-center"> <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-14 h-14 object-cover rounded-full "/>
            <h1 className="text-lg ml-5">Welcome back <span className="font-semibold text-slate-900"> Venusha! </span></h1></div>
            
            <input type="text" className="ml-5 w-2/4 bg-gray-100 rounded-lg h-8 mr-5 pl-5 outline-none focus:bg-gray-200" placeholder="Search..."/>
            
            </div>

        </div>)
}