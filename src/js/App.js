import '../App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import React, { useState, useEffect } from 'react';



export default function App() {
  const sendNotification = () => {
    electron
      .notificationApi
      .sendNotification('My custom message!');
  }

  // console.log('window.', window.location.href);
  // const urlSearchParams = new URLSearchParams(window.location.search);
  // const params = Object.fromEntries(urlSearchParams.entries());
  // console.log('myParam', params);
  console.log('window location', window.location.href);
  console.log('window location', window.location.pathname);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </>
  )
}

