import React from 'react'
import './App.css';
import './Home/index'
import Home from './homee/home';
import GlobalFonts from './fonts/fonts';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin" exact component={Admin} />
        <Route component={NotFound} />
      </Switch>
      <GlobalFonts/>
    </BrowserRouter>
  );
}

export default App;
