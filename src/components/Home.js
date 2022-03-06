import HeaderBar from '../components/HeaderBar';
import StatCard from '../components/StatCard';
import BarGraph from '../components/BarGraph';
import PieChart from '../components/PieChart';
import { ChartData } from '../components/ChartData'
import { useState } from 'react';

export default function Home() {

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

        <div className='flex flex-col w-full h-screen p-5 overflow-y-scroll'>
            <HeaderBar />
            <div className='flex flex-row ml-5 mt-5 mb-5  font-bold'><h1>Overview</h1></div>
            <div className='flex flex-row w-full flex-wrap justify-start'>
                <StatCard/>
                <StatCard />
                <StatCard />
            </div>
            <div className='flex flex-row ml-5 mt-5 font-bold ' >
                <h1>Sales vs Returns</h1></div>
            <div className='flex flex-row w-full'>
                <BarGraph chartData={chartData} />
                <PieChart chartData={chartData} />
            </div>
        </div>
    )
}