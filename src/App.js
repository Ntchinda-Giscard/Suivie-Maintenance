import React, { Component } from 'react';
import Navbar from './components/navbar';
import Mainto from './components/mainto';
import './App.css'

class App extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Mainto />
       </main>
      </React.Fragment>    
    );
  }
}
 
export default App;