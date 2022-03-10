import { useState } from "react";
import BarGraph from "../BarGraph";
import { ChartData } from "../ChartData";
import HeaderBar from "../HeaderBar";


export default function Statistics() {
    const [chartData, setChartData] = useState({
        labels: ChartData.map((data) => data.month),
        datasets: [{
            label: "Sales",
            data: ChartData.map((data) => data.Sale),
            backgroundColor: ["#B476F5"]
        }, {
            label: "Returns",
            data: ChartData.map((data) => data.Return),
            backgroundColor: ["#8E11b1"]
        }]
    });
    return (
        <div className='flex flex-col w-full h-screen lg:p-5 overflow-y-scroll'>
            <HeaderBar />
            <div className='flex flex-row ml-5 mt-5 font-bold'><h1>Statistics</h1></div>
            <div className='lg:flex hidden flex-row m-5 w-auto flex-wrap justify-start bg-white rounded-lg shadow-sm max-h-72 p-3 items-center'>

                <div className="flex flex-col">
                    <div className="flex flex-row"><p className="text-gray-600 text-sm ml-5 m-1">Date range </p>
                    </div>
                    <div className="flex flex-row items-center mt-1 text-sm">
                        <p className="text-gray-600 text-sm ml-5 m-1">From: </p>
                        <input type="date" className=" w-auto bg-gray-100 rounded-lg h-8 mr-5 m-1 pl-5 outline-none focus:bg-gray-200 text-gray-500" />

                        <p className="text-gray-600 text-sm ml-5 m-1">To: </p>
                        <input type="date" className=" w-auto bg-gray-100 rounded-lg h-8 mr-5 m-1 pl-5 outline-none focus:bg-gray-200 text-gray-500" />

                    </div>

                </div>





            </div>

            <div className='flex flex-row w-10/12 lg:full'>

                <BarGraph chartData={chartData} />

            </div>
        </div>)
}