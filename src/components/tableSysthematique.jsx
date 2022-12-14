import React, {Component} from 'react'
import { getAppareils } from '../appareils/fakeMovieService';
class TableSynthematique extends Component {
    state = { 
        appareil: getAppareils()
     } 
    returnTableHead(appareil){
        if (appareil.genre.type === "systhematique") return true;
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
                            <tr key={appareil._id}>
                                {this.returnTitle(appareil)}
                                {this.returnGenreName(appareil)}
                                {this.returnDateDernier(appareil)} 
                                {this.returnDateProchaine(appareil)}
                                {this.returnEtat(appareil)}
                            </tr>
                        ) )}
                    </tbody>
                </table>
                </div>
        );
    }
}
 
export default TableSynthematique;