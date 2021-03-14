import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';
import Adopteunchef from '../adopteunchef.png';

export default function Menu() {
	return (
		<div className="menu__div">
			<img src={Adopteunchef} alt="logo" className="navbar--logo" />
				<NavLink className="menu__navlink" to="/">Accueil</NavLink>
				<NavLink className="menu__navlink" to="/signin">Se connecter</NavLink>
				<NavLink className="menu__navlink" to="/register">S'inscrire</NavLink>
				<NavLink className="menu__navlink" to="/imageupload">Ajouter une publication</NavLink>
		</div>
	);
}
