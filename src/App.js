import React, { Component } from 'react';
import Navbar from './components/navbar';
import Mainto from './components/mainto';
import './App.css'

class App extends Component {
  state = {  } 
  render() { 
    return (
    <div>
      <Navbar />
      <Mainto />
    </div>
    );
  }
}
 
export default App;