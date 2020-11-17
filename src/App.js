import React from 'react'
import './App.css';
import Header from './Component/Header'
import Home from './Component/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CheckOut from './Component/CheckOut';

function App() {
  return (
    <Router>
    <div className="app">
    <Header />

      <Switch>
        <Route strict exact path="/">
        <Home />
        </Route>
        <Route exact path="/checkout">
          <CheckOut />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
