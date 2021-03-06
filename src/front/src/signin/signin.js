import React from 'react';
import './signin.css';

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
                <input type="submit" value="Se connecter" className="submit"/>
                <label>Pas encore inscrit ?</label>
                <input type="submit" value="S'inscrire" className="submit" />
            </form>
        )
    }

}

export default Signin;