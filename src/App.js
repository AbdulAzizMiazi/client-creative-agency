import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/HomePage/HomePage/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">   
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </Router>
    {/* <Homepage />
    <Dashboard/> */}
    </div>
  );
}

export default App;
