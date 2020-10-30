import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/HomePage/HomePage/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import LoginPage from './components/LoginPage/LoginPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext } from 'react';

export const userContext = createContext();

function App() {
  const [userInfo,  setUserInfo] = useState({isAuthorizedUser: false});
  return (
    <div className="App">
    <userContext.Provider value={[userInfo,  setUserInfo]}>   
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={LoginPage} /> 
        <PrivateRoute exact path="/dashboard"> 
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard/:title"> 
          <Dashboard />
        </PrivateRoute>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
    </userContext.Provider>
    </div>
  );
}

export default App;
