import './App.css';
import MainContents from './Components/MainContents/MainContents';
import Sidebar from './Components/Sidebar/Sidebar';
import { useState } from 'react'

function App() {

  // if true, sidebar is open, if false is closed
  const [sidebarStatus, setSidebarStatus] = useState(true)
  const [sidebarClass, setSidebarClass] = useState('sidebar')

  const changeValues = () => {
    sidebarStatus ? setSidebarClass('sidebar') : setSidebarClass('sidebarDos')
    setSidebarStatus(!sidebarStatus)
  }

  return (
    <div className="mainAppContainer">
      <Sidebar /> 
      <div className='mainContent'>
        <MainContents />
      </div>
    </div>
  );
}

export default App;
