import React from 'react'
import './App.css';
import './Home/index'
import { HomeWindow } from './Home/index';
import GlobalFonts from './fonts/fonts';
//import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <HomeWindow>
      <GlobalFonts/>
    </HomeWindow>
  );
}

export default App;
