
import React, { Component } from 'react';
import { getAppareils } from '../appareils/fakeMovieService';

class Forms extends Component {
    state = {  
        appareil: getAppareils()
    }
    returnForE(appareil){
        if(appareil.genre.name === "electrique") return <div className='form-row'>
            <div className='col-2'>
                <label htmlFor='exampleInputForm' className='form-padding h5'>Courant(A)</label>
                <input type='text'className='form-control' placeholder='courant' />
            </div>
            <div className='col-2'>
                <label htmlFor='exampleInputForm' className='form-padding h5'>Tension(V)</label>
                <input type='text'className='form-control' placeholder='tension' />
            </div>
            
        </div>
    }
    render() { 
        return (
            <main className='container'>
                <form>
                    <div className='row'>
                        <div className='col'>
                            <div className='form-group mt-3'>
                                <label htmlFor='identification' className='form-padding h5'>Identification</label>
                                <input type="email" className='form-control w-100' style={{backgroundColor: '#eee'}} id='identification' aria-describedby='emailHelp' placeholder='Enter id' />
                                <small id='emailHelp' className='form-text text-muted'> ID</small>
                           </div>
                           <div className='form-group mt-3'>
                            <label htmlFor='machine' className='h5'>Nom de Machine</label>
                            <select className='form-control w-100' style={{backgroundColor: '#eee'}} id='machine' placeholder='Choisir une machine'> 
                                {this.state.appareil.map(appareil=> (
                                    <option key={appareil._id} > {appareil.title} </option>
                                ))}
                            </select>
                           </div>
                          <div className='form-group mt-3'>
                            <label htmlFor='Date' className='h5'>Date de miantenance</label>
                            <input type="date" className='form-control w-100' style={{backgroundColor: '#eee'}} id='Date' aria-describedby='emailHelp'  />
                          </div>
                        </div>
                        <div className='col'>
                            <div className='row'> 
                                <div className='col'>
                                    <div className='form-group mt-1'>
                                        <label htmlFor='courant' className='h5' > Courant </label>
                                        <input type='text' className='form-control w-100' id='courant' placeholder='courant' />
                                    </div>

                                </div>
                                <div className='col'>
                                    <div className='form-group mt-1'>
                                        <label htmlFor='tension' className='h5' > Tension </label>
                                        <input type='text' className='form-control w-100' id='tension' placeholder='Tension' />
                                    </div>

                                </div>
                            </div>
                            <div className='row'> 
                                <div className='col'>
                                    <div className='form-group mt-1'>
                                        <label htmlFor='pression' className='h5' > Pression </label>
                                        <input type='text' className='form-control w-100' id='pression' placeholder='pression' />
                                    </div>

                                </div>
                                <div className='col'>
                                    <div className='form-group mt-1'>
                                        <label htmlFor='vitesse' className='h5' > Vitesse </label>
                                        <input type='text' className='form-control w-100' id='vitesse' placeholder='Vitesse' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <button type='submit' className='btn btn-primary mt-3'>Soumettre</button>
                </form>
            </main>
            
        );
    }
}
 
export default Forms;