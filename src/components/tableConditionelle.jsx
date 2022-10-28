import React, { Component } from 'react';
import { getAppareils } from '../appareils/fakeMovieService';

class TableConditionelle extends Component {
    state = { 
        appareil: getAppareils()
     } 

    returnTitle(appareil){
        if (appareil.genre.type === "conditionelle") return <td>{appareil.title}</td>
    }
    returnGenreName(appareil){
        if (appareil.genre.type === "conditionelle") return <td>{appareil.genre.name}</td>
    }
    returnCourant(appareil){
        if (appareil.genre.type === "conditionelle") return <td>{appareil.courant}</td>
    }
    returnTension(appareil){
        if (appareil.genre.type === "conditionelle") return <td>{appareil.tension}</td>
    }
    returnPression(appareil){
        if (appareil.genre.type === "conditionelle") return <td>{appareil.pression}</td>
    }
    returnVitesse(appareil){
        if (appareil.genre.type === "conditionelle") return <td>{appareil.vitesse}</td>
    }
    render() { 
        return (
            <div>
                <table className="table">
                    <caption>appareil de maintenace preventive</caption>
                    <thead>
                        <tr>
                            <th scope="col">Appareil</th>
                            <th scope="col">Nature</th>
                            <th scope="col">Courant(A)</th>
                            <th scope="col">Tension(V) </th>
                            <th scopr='col'>Pression(Ba) </th>
                            <th scopr='col'>Vitesse(Tr/min) </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.appareil.map(appareil => (
                            <tr>
                                {this.returnTitle(appareil)}
                                {this.returnGenreName(appareil)}
                                {this.returnCourant(appareil)} 
                                {this.returnTension(appareil)}
                                {this.returnPression(appareil)}
                                {this.returnVitesse(appareil)}
                            </tr>
                        ) )}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default TableConditionelle;