import React from 'react';
import './register.css';

class Register extends React.Component {
    state = {
        username : "",
        email : "",
        password : ""
    }

    render(){
        return(
            <form className="form">
                <h1 className="titre">Créer un compte</h1>
                <label>
                    Nom d'utilisateur : 
                    <input type="text" name="userName" value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
                </label>
                <label>
                    Email : 
                    <input type="email" name="email" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
                </label>
                <label>
                    Mot de passe : 
                    <input type="password" name="password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
                </label>
                <input type="submit" value="S'inscrire" className="submit"/>
            </form>
        )
    }
}

export default Register;