import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
export default function PieChart({ chartData }) {
    console.log(chartData)
    return (
        <div className='w-1/3 m-5 p-5 rounded-lg shadow-sm'
            style={{ background: "#ffff" }}>
                  <div className='flex flex-row justify-between '><h1>Sales Vs Returns </h1>
                <h1 className='text-gray-400 mb-3'>Last 7 Days</h1>
                </div>
            <Doughnut data={chartData} />
        </div>
    )
}