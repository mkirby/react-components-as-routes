import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home'
import About from './Components/About'
import Login from './Components/Login'
import NavBar from './Components/NavBar'
import {BrowserRouter as Router, Route} from "react-router-dom"

ReactDOM.render((
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
