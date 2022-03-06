import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar';
import HeaderBar from './components/HeaderBar';
import StartCard from './components/StatCard';
import BarGraph from './components/BarGraph';
import { useState } from 'react';
import { ChartData } from '../src/components/ChartData'

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
    <div className='container'>
      <div className='flex flex-col w-screen h-screen'>
        <div className='flex flex-row  h-full'>
          <div className='flex flex-col w-1/5'>
            <Sidebar /></div>

          <div className='flex flex-col w-4/5 '>
            <HeaderBar />
            <div className='flex flex-row ml-10 font-bold mb-2'><h1>Overview</h1></div>
            <div className='flex flex-row w-full flex-wrap justify-start'>

              <StartCard type="1" />
              <StartCard />
              <StartCard />
            </div>
            <div className='flex flex-row ml-10 font-bold mt-5'><h1>Sales vs Returns</h1></div>
            <BarGraph chartData={chartData} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
