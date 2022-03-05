import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar';
import HeaderBar from './components/HeaderBar';
import StartCard from './components/StatCard';

function App() {
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
      
            <StartCard type="1"/>
            <StartCard />
            <StartCard />   
            </div>
            <div className='flex flex-row ml-10 font-bold mt-5'><h1>Sales vs Returns</h1></div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
