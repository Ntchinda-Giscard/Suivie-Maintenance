
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
                                <label htmlFor='exampleInputForm' className='form-padding h5'>Addres</label>
                                <input type="email" className='form-control w-100' style={{backgroundColor: '#eee'}} id='exampleInputForm' aria-describedby='emailHelp' placeholder='Enter email' />
                                <small id='emailHelp' className='form-text text-muted'> I will share your address</small>
                           </div>
                           <div className='form-group mt-3'>
                            <label htmlFor='' className='h5'>Nom de Machine</label>
                            <select type='date' className='form-control w-100' style={{backgroundColor: '#eee'}} placeholder='Choisir une machine'> 
                                {this.state.appareil.map(appareil=> (
                                    <option> {appareil.title} </option>
                                ))}
                            </select>
                           </div>
                          <div className='form-group mt-3'>
                            <label htmlFor='' className='h5'>Date de miantenance</label>
                            <input type="date" className='form-control w-100' style={{backgroundColor: '#eee'}} id='' aria-describedby='emailHelp'  />
                          </div>
                        </div>
                        <div className='col'>
                            <div className='row'> 
                                <div className='col'>
                                    <div className='form-group mt-1'>
                                        <label htmlFor='' className='h5' > Courant </label>
                                        <input type='text' className='form-control w-100' id='' placeholder='courant' />
                                    </div>

                                </div>
                                <div className='col'>
                                    <div className='form-group mt-1'>
                                        <label htmlFor='' className='h5' > Tension </label>
                                        <input type='text' className='form-control w-100' id='' placeholder='Tension' />
                                    </div>

                                </div>
                            </div>
                            <div className='row'> 
                                <div className='col'>
                                    <div className='form-group mt-1'>
                                        <label htmlFor='' className='h5' > Pression </label>
                                        <input type='text' className='form-control w-100' id='' placeholder='pression' />
                                    </div>

                                </div>
                                <div className='col'>
                                    <div className='form-group mt-1'>
                                        <label htmlFor='' className='h5' > Debit </label>
                                        <input type='text' className='form-control w-100' id='' placeholder='debit' />
                                    </div>

                                </div>
                            </div>
                            <div className='form-group mt-1'>
                                    <label htmlFor='' className='h5' > Debit </label>
                                    <input type='text' className='form-control w-100' id='' placeholder='debit' />
                            </div>
                        </div>
                    
                    </div>
                    <button type='submit' className='btn btn-primary mt-3'>Soumettre</button>
                </form>
            </main>
            
        );
    }
}

{/* <label htmlFor=''>Nom de Machine</label>
                        <select type='date' className='form-control'> 
                            {this.state.appareil.map(appareil=> (
                                <option> {appareil.title} </option>
                            ))}
                        </select> */}
 
export default Forms;