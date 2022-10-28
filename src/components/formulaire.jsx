
import React, { Component } from 'react';
import { getAppareils } from '../appareils/fakeMovieService';

class Forms extends Component {
    courant = React.createRef();
    state = {  
        appareil: getAppareils(),
        data: {courant: '', pression: '', tension:'', vitesse: '', date: '', name: '', identification:''}
    }
    validate= ()=>{
        const error = {}
        const {data} = this.state;
        if (data.identification.trim() === "") return true
        else return false
    }
    handleSubmit = (event)=> {
        event.preventDefault();
        const error = this.validate()
        console.log(error)
        console.log(this.state.data.date)
        this.setState({ error })
    }
    handleChange = ({currentTarget: input})=>{
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data});
    }

    render() { 
        return (
            <main className='container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='row'>
                        <div className='col'>
                          <div className='form-group mt-3'>
                            <label htmlFor='identification' className='h5'>identification</label>
                            <input autoFocus name='identification' onChange={this.handleChange} value={this.state.data.identification} type="texte" className='form-control w-100 ' style={{backgroundColor: '#eee'}} id='identification'  />
                            { this.validate() === true? <div className='alert alert-danger p-1'>identification requise</div> : null}
                          </div>
                           <div className='form-group mt-3'>
                            <label htmlFor='machine' className='h5'>Nom de Machine</label>
                            <select name='name' onChange={this.handleChange} value={this.state.data.name}  className='form-control w-100' style={{backgroundColor: '#eee'}} id='machine' placeholder='Choisir une machine'> 
                                {this.state.appareil.map(appareil=> (
                                    <option key={appareil._id} > {appareil.title} </option>
                                ))}
                            </select>
                           </div>
                          <div className='form-group mt-3'>
                            <label htmlFor='date' className='h5'>Date de miantenance</label>
                            <input name='date' onChange={this.handleChange} value={this.state.data.date} type="date" className='form-control w-100' style={{backgroundColor: '#eee'}} id='Date' aria-describedby='emailHelp'  />
                          </div>
                        </div>
                        <div className='col'>
                            <div className='row'> 
                                <div className='col'>
                                    <div className='form-group mt-1'>
                                        <label htmlFor='courant' className='h5' > Courant </label>
                                        <input name='courant' onChange={this.handleChange} type='text' value={this.state.data.courant} className='form-control w-100' id='courant' placeholder='courant' />
                                    </div>

                                </div>
                                <div className='col'>
                                    <div className='form-group mt-1'>
                                        <label htmlFor='tension' className='h5' > Tension </label>
                                        <input name='tension' type='text' onChange={this.handleChange} value={this.state.data.tension} className='form-control w-100' id='tension' placeholder='Tension' />
                                    </div>

                                </div>
                            </div>
                            <div className='row'> 
                                <div className='col'>
                                    <div className='form-group mt-1'>
                                        <label htmlFor='pression' className='h5' > Pression </label>
                                        <input name='pression' onChange={this.handleChange} value={this.state.data.pression} type='text' className='form-control w-100' id='pression' placeholder='pression' />
                                    </div>

                                </div>
                                <div className='col'>
                                    <div className='form-group mt-1'>
                                        <label htmlFor='vitesse' className='h5' > Vitesse </label>
                                        <input name='vitesse' onChange={this.handleChange} value={this.state.data.vitesse} type='text' className='form-control w-100' id='vitesse' placeholder='Vitesse' />
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

// returnForE(appareil){
//     if(appareil.genre.name === "electrique") return <div className='form-row'>
//         <div className='col-2'>
//             <label htmlFor='exampleInputForm' className='form-padding h5'>Courant(A)</label>
//             <input type='text'className='form-control' placeholder='courant' />
//         </div>
//         <div className='col-2'>
//             <label htmlFor='exampleInputForm' className='form-padding h5'>Tension(V)</label>
//             <input type='text'className='form-control' placeholder='tension' />
//         </div>
        
//     </div>
// }