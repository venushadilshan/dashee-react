import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
export default function BarGraph({ chartData }) {
    console.log(chartData)
    return (
        <div className='w-2/3  m-5 p-5 rounded-lg shadow-sm'
            style={{ background: "#ffff" }}>
                <div className='flex flex-row justify-between '><h1>Sales Vs Returns </h1>
                <h1 className='text-gray-400'>Last 7 Days</h1>
                </div>
            <Bar data={chartData} />
        </div>
    )
}