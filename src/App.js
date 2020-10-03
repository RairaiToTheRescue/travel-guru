import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { ThemeProvider, Button } from '@material-ui/core';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Schedule from './components/Schedule/Schedule';
import Sreemangal from './components/Sreemangal/Sreemangal';
import Sajek from './components/Sajek/Sajek';
import Shundarban from './components/Shundarban/Shundarban';
import Home1 from './components/Home1/Home1';
import Home2 from './components/Home2/Home2';
import Home3 from './components/Home3/Home3';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name: {loggedInUser.name}</p> */}
      <Router>
          <Header/>
          <Switch>
          <Route path="/schedule">
              <Schedule></Schedule>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/home1">
              <Home1/>
            </Route>
            <Route path="/home2">
              <Home2/>
            </Route>
            <Route path="/home3">
              <Home3/>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/sreemangal">
              <Sreemangal/>
            </Route>
            <Route path="/sajek">
              <Sajek />
            </Route>
            <Route path="/shundarban">
              <Shundarban/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;