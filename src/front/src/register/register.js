import React from 'react';
import './register.css';
import '../index.css'
import 'whatwg-fetch'

class Register extends React.Component {
    constructor(props){
        super();
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            username: '',
            email: '',
            password: '',
        }
    }

    render(){
        return(
            <form className="register__form" onSubmit={this.handleSubmit}>
                <h1 className="titre">Créer un compte</h1>
                <label>
                    <input placeholder="Nom d'utilisateur" className="register__input" type="text" name="username" value={this.state.username || ""} onChange={e => this.setState({username: e.target.value})} required/>
                </label>
                <label>
                    <input placeholder="Email" className="register__input" type="email" name="email" value={this.state.email || ""} onChange={e => this.setState({email: e.target.value})} required/>
                </label>
                <label>
                    <input placeholder="Mot de passe" className="register__input" type="password" name="password" value={this.state.password || ""} onChange={e => this.setState({password: e.target.value})} required/>
                </label>
                <input type="submit" value="S'inscrire" className="navlink"/>
            </form>
        )
    }
   
    handleSubmit(event){
        event.preventDefault();
        console.log('Register user...')
        
        // POST request using fetch with error handling
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Basic ');
        headers.append('Origin','http://localhost:3000');

        let userJson = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: headers,
            body: JSON.stringify(userJson)
        };
        fetch('http://localhost:4000/api/db/users/register', requestOptions)
            .then(async res => {
                const data = await res.json();
                // check for error response
                if (!res.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || res.status;
                    return Promise.reject(error);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }
}

export default Register;
