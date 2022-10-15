import React, { Component } from 'react';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                <a className="navbar-brand p-3" href="#"> <strong><i>Mainto</i>  </strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Accueil <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Formulaire</a>
                        <a className="nav-item nav-link" href="#">BD</a>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;