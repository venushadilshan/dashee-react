import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar';
import HeaderBar from './components/HeaderBar';

function App() {
  return (
    <div className='container'>
      <div className='flex flex-col w-screen h-screen'>
        <div className='flex flex-row  h-full'>
          <div className='flex flex-col w-1/5'>
            <Sidebar/></div>
          
          <div className='flex flex-col w-4/5 '> 
          <HeaderBar/>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default App;
