import React from 'react';
import './signin.css';
import '../register/register'
import Register from '../register/register';
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";


class Signin extends React.Component {
    state = {
        username : "",
        password : ""
    }

    render(){
        return(
            <form className="form">
                <h1 className="titre">Se connecter</h1>
                <label>
                    Nom d'utilisateur : 
                    <input type="text" name="userName" value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
                </label>
                <label>
                    Mot de passe : 
                    <input type="password" name="password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
                </label>
                <NavLink className="submit" to="/" className="navlink">Se connecter</NavLink>
                <label>Pas encore inscrit ?</label>
                <NavLink className="submit" to="/register" className="navlink">S'inscrire</NavLink>
            </form>
        )
    }
}

export default Signin;