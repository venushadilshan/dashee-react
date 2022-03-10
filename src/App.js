import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Sidebar from './components/Sidebar';

import { useState } from 'react';
import { ChartData } from '../src/components/ChartData'

import Page from '../src/components/Pages/Page';
import Home from '../src/components/Pages/Home';
import Statistics from './components/Pages/Statistics';
import Tables from './components/Pages/Tables';

function App() {
  

  return (

    <div className='flex flex-col w-screen h-full duration-500'>

      <div className='flex flex-row h-full w-full '>
        <div className='flex flex-col lg:w-1/5 lg:m-0 '>
          <Sidebar />
          
         
        </div>
        <div className='flex flex-col w-full lg:m-0 '>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/stats" element={<Statistics />} />
          <Route path="/tables" element={<Tables />} />
        </Routes>
        </div>
       


      </div>

    </div>

  );
}

export default App;
