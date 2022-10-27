import React, { Component } from 'react';
import ListType from './listType';
import { getAppareils } from '../appareils/fakeMovieService';
class Mainto extends Component {
    state = {  
        appareil: getAppareils()
    } 

    returnTitle(appareil){
        if (appareil.genre.type === "systhematique") return <td>{appareil.title}</td>
    }
    returnGenreName(appareil){
        if (appareil.genre.type === "systhematique") return <td>{appareil.genre.name}</td>
    }
    returnDateDernier(appareil){
        if (appareil.genre.type === "systhematique") return <td>{appareil.date_de_derniere}</td>
    }
    returnDateProchaine(appareil){
        if (appareil.genre.type === "systhematique") return <td>{appareil.date_de_prochaine}</td>
    }
    returnEtat(appareil){
        if(appareil.genre.type === "systhematique"){
            if (appareil.etat === true){
                return <td><span className='btn btn-warning p-0'>warn</span></td>
            }
            else{
                return <td>retard</td> 
            }
        }
    }
    render() { 
        return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <ul className='list-group'>
                        <li className='list-group-item'> Conditionel</li>
                        <li className='list-group-item'> Sythematique</li>
                    </ul>
                </div>

                <div className='col'>
                <React.Fragment>
                <table className="table">
                <caption>appareil de maintenace preventive</caption>
                <thead>
                    <tr>
                        <th scope="col">Appareil</th>
                        <th scope="col">Nature</th>
                        <th scope="col">Date dernier miantenance</th>
                        <th scope="col">Date prochaine miantenance</th>
                        <th scopr='col'>Etat</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.appareil.map(appareil => (
                        <tr>
                            {this.returnTitle(appareil)}
                            {this.returnGenreName(appareil)}
                            {this.returnDateDernier(appareil)} 
                            {this.returnDateProchaine(appareil)}
                            {this.returnEtat(appareil)}
                        </tr>
                    ) )}
                </tbody>
            </table>
        </React.Fragment>
                </div>
            </div>
        </div>

        );
    }
}
 
export default Mainto;