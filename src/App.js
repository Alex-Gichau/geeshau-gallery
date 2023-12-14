import React from 'react'
import './App.css';
import { Sidebar } from "./components/sidebar/Sidebar";
import { magicnav } from './components/magicNav/Magicnav';

const App = () => {
  return (
    <>
      <Sidebar/>
      <magicnav/>

    </>
  );
}

export default App;
