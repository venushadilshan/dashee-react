import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Sidebar from './components/Sidebar';

import { useState } from 'react';
import { ChartData } from '../src/components/ChartData'

import Page from './components/Page';
import Home from './components/Home';

function App() {

  return (

    <div className='flex flex-col w-auto h-full duration-500'>

      <div className='flex flex-row  h-full'>
        <div className='flex flex-col w-1/5'>
          <Sidebar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" element={<Page />} />
        </Routes>


      </div>

    </div>

  );
}

export default App;
