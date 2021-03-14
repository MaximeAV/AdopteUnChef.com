import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
	return (
		<header>
			<nav>
				<NavLink to="/signin">Se connecter</NavLink>
				<NavLink to="/register">S'inscrire</NavLink>
				<NavLink to="/">Accueil</NavLink>
			</nav>
		</header>
	);
}
