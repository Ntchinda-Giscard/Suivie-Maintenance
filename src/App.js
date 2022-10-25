import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navbar';
import Mainto from './components/mainto';
import Forms from './components/formulaire';
import './App.css'
import Test from './components/test';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <Navbar />
        {/* <Forms /> */}
        <main className="container">
          <Switch>
            <Route path='/maint' component={Mainto}></Route>
            <Route path='/forms' compenent={Forms}></Route>
            <Redirect from='/' exact to={Mainto} />
          </Switch>      
       </main>
      </React.Fragment>    
    );
  }
}
 
export default App;