import logo from './logo.svg';
import './App.css';

import Sidebar from './Sidebar';

function App() {
  return (
    <div className='container h-screen w-screen'>
      <div className='flex flex-col w-full h-full'>
        <div className='flex flex-row w-full h-full'>
          <Sidebar/>
        </div>
      </div>
    </div>
  );
}

export default App;
