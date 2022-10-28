import React, { Component } from 'react';
import TableSynthetique from './tableSysthematique';
import TableConditionelle from './tableConditionelle'
import { getAppareils } from '../appareils/fakeMovieService';
class Mainto extends Component {
    state = {  
        appareil: getAppareils(),
        type: true
    } 

    renderType = (type) =>{
        if(type == true) return <TableSynthetique />;
        if(type == false) return <TableConditionelle />;
    }

    setTOTrue = () => {
        this.setState({ type: true })
        console.log(this.state.type)
    }
    setTOFalse = () => {
        this.setState({ type: false })
        console.log(this.state.type)
    }
    
    render() { 
        return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <ul className='list-group'>
                        <li className='list-group-item' onClick={this.setTOTrue} style={{cursor: 'pointer'}} > Conditionel</li>
                        <li className='list-group-item' onClick={this.setTOFalse} style={{cursor: 'pointer'}} > Sythematique</li>
                    </ul>
                </div>

                <div className='col'>
                    {this.renderType(this.state.type)}          
                </div>
            </div>
        </div>

        );
    }
}
 
export default Mainto;

{/* <<table className="table">
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
            </table>> */}