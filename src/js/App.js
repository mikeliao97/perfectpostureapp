import '../App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SelectWorkout from './pages/SelectWorkout';
import Explore from './pages/Explore';
import BreakApp from './pages/BreakApp';
import React, { useState, useEffect } from 'react';



export default function App() {
  const showNavBar = !window.location.hash.includes('break')

  return (
    <>
      <Router>
        {showNavBar ? <Navbar /> : null}
        <Switch>
          <Route path='/selectWorkout' component={SelectWorkout} />
          <Route path='/explore' component={Explore} />
          <Route path='/break' component={BreakApp} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </>
  )
}

