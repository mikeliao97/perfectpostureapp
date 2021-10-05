import '../App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import BreakApp from './pages/BreakApp';
import React, { useState, useEffect } from 'react';



export default function App() {
  const sendNotification = () => {
    electron
      .notificationApi
      .sendNotification('My custom message!');
  }

  const showNavBar = !window.location.hash.includes('break')

  return (
    <>
      <Router>
        {showNavBar ? <Navbar /> : null}
        <Switch>
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path='/break' component={BreakApp} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </>
  )
}

