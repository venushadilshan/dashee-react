import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar';
import HeaderBar from './components/HeaderBar';
import StartCard from './components/StatCard';
import BarGraph from './components/BarGraph';
import { useState } from 'react';
import { ChartData } from '../src/components/ChartData'
import PieChart from './components/PieChart';

function App() {

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
   
      <div className='flex flex-col w-auto h-full duration-500'>
        <div className='flex flex-row  h-full'>
          <div className='flex flex-col w-1/5'>
            <Sidebar /></div>

          <div className='flex flex-col w-full h-ful p-5 '>
            <HeaderBar />
            <div className='flex flex-row ml-5 mt-5 mb-5  font-bold'><h1>Overview</h1></div>
            <div className='flex flex-row w-full flex-wrap justify-start'>

              <StartCard type="1" />
              <StartCard />
              <StartCard />
            </div>
            <div className='flex flex-row ml-5 mt-5 font-bold ' >
              <h1>Sales vs Returns</h1></div>
            <div className='flex flex-row w-full'>  
             <BarGraph chartData={chartData} />
              <PieChart chartData={chartData} />
            </div>

          </div>

        </div>
      </div>
  
  );
}

export default App;
