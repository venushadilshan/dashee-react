import HeaderBar from '../HeaderBar';
import StatCard from '../StatCard';
import BarGraph from '../BarGraph';
import PieChart from '../PieChart';
import { ChartData } from '../ChartData'
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

        <div className='flex flex-col w-full h-screen lg:p-5 overflow-y-scroll'>
            <HeaderBar />
            <div className='flex flex-row ml-5 mt-5 mb-5  w-10 font-bold'><h1>Overview</h1></div>
            <div className='flex flex-row w-full flex-wrap justify-start'>
                <StatCard/>
                <StatCard />
                <StatCard />
            </div>
            <div className='flex flex-row ml-5 mt-5 font-bold ' >
                <h1>Sales vs Returns</h1></div>
            <div className='flex flex-row flex-wrap lg:flex-nowrap w-10/12 lg:w-full' >
                <BarGraph chartData={chartData} />
                <PieChart chartData={chartData} />
            </div>
        </div>
    )
}