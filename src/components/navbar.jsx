import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
<nav className = "navbar navbar-expand-lg navbar-light bg-light">
  <Link className = "navbar-brand" to="/"> <b>PSMaint</b> </Link>
  <button className = "navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className = "navbar-toggler-icon"></span>
  </button>
  <div className = "collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className='navbar-nav'>
      <NavLink className = "nav-item nav-link" to="/maint"> Appareil <span className = "sr-only danger"></span></NavLink>
      <NavLink className = "nav-item nav-link" to="/forms"> Formulaire </NavLink>
    </div>
  </div>
</nav>
        );
    }
}
 
export default Navbar;