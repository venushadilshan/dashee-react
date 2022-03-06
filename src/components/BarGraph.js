import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
export default function BarGraph({ chartData }) {
    console.log(chartData)
    return (
        <div className='w-2/3 mx-10 my-2 p-5 rounded-lg shadow-sm'
            style={{ background: "#ffff" }}>
            <Bar data={chartData} />
        </div>
    )
}