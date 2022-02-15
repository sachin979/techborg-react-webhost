import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
/**
 * ?  =====Import Components=====
 */
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login'
function App() { 
  return (
    <div>
      <Router>

        <Route exact path='/'>
         <Home />
         </Route>
         <Route  path='/Signup'>
         <Signup/>         
         </Route>
         <Route  path='/login'>
          <Login/>
         </Route>
         
           
      </Router>
      
    </div>
  );
}

export default App;
