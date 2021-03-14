import React from 'react';
import './signin.css';
import '../index.css';
import '../register/register'
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import 'whatwg-fetch'
import App from '../App';
import imageSignin from '../images/imageSignin.jpg';

class Signin extends React.Component {
    constructor(props){
        super();
        console.log(this.props)
        this.handleSignin = this.handleSignin.bind(this)

        this.state = {
            username: '',
            password: '',
        }
    }

    render(){
        return(
            <div>
                <img src={imageSignin} alt="pic" className="back-image" />
                <form className="signin__form" >
                    <h1 className="titre">Se connecter</h1>
                    <label>
                        <input placeholder="Nom d'utilisateur" className="signin__input" type="text" name="username" value={this.state.username || ""} onChange={e => this.setState({username: e.target.value})} required/>
                    </label>
                    <label>
                        <input placeholder="Mot de passe" className="signin__input" type="password" name="password" value={this.state.password || ""} onChange={e => this.setState({password: e.target.value})} required/>
                    </label>
                    <NavLink className="navlink" to="/" onClick={this.handleSignin} className="navlink">Se connecter</NavLink>
                    <label>Pas encore inscrit ?</label>
                    <NavLink className="navlink" to="/register" className="navlink">S'inscrire</NavLink>
                </form>
            </div>
        )
    }

    handleSignin(event){
        event.preventDefault();
        console.log('Sign in user...')
        
        // POST request using fetch with error handling
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Basic ');
        headers.append('Origin','http://localhost:3000');

         let userJson = {
            username: this.state.username,
            password: this.state.password           
        }
        
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: headers,
            body: JSON.stringify(this.state)
        };
        fetch('http://localhost:4000/api/db/users/signin', requestOptions)
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

export default Signin;