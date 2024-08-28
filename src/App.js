import { useState } from "react";
import "./App.css";
//import About from "./components/About";
import Body from "./components/Body";
// import Body from "./components/Body";
import Navbar from "./components/Navbar";
import React from 'react'


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }   

  }

  return (
    <>     
  <Navbar title="Shield" mode={mode} toggleMode={toggleMode}/> 
  <Body heading="Enter the text to analyze" mode={mode} />
    </>

  );
}


export default App;
