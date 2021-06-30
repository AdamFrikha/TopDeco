import React from 'react'
import './App.css';
import './Home/index'
import { HomeWindow } from './Home/index';
import GlobalFonts from './fonts/fonts';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import Client from './pages/Client';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeWindow} />
        <Route path="/admin" exact component={Admin} />
        <Route component={NotFound} />
      </Switch>
      <GlobalFonts/>
    </BrowserRouter>
  );
}

export default App;
