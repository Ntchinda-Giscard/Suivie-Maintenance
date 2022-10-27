import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navbar';
import Mainto from './components/mainto';
import Forms from './components/formulaire';
import './App.css'


class App extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <Navbar />
        {/* <Forms /> */}
        <main className="container">
          <Switch>
            <Route path="/forms" component={Forms}></Route>
            <Route path="/maint" component={Mainto}></Route>
            <Redirect from='/' exact to={Mainto}></Redirect>
          </Switch>      
       </main>
      </React.Fragment>    
    );
  }
}
 
export default App;