import React from "react";
import { HiCurrencyDollar } from "react-icons/hi"

export default function StartCard() {
    return (
        <div className="flex flex-col items-center w-1/4 mx-10 rounded-lg shadow-sm  p-5" style={{ background: "#ffff" }}>
            <div className="flex flex-row items-center w-full justify-between">

                <div className="flex flex-row items-center text-fuchsia-500">    
                <HiCurrencyDollar className="text-4xl"/><h1 className="font-semibold text-lg ml-2">Revenue</h1> </div>
                <h1 className="text-gray-500  text-sm"> Last 7 Days</h1></div>
                <div className="flex flex-row items-center justify-start w-full m-3 font-bold"><h1 className="text-4xl">$65466.65</h1></div>
                
        </div>)
}