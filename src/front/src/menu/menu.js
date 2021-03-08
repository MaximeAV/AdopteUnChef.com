import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
	return (
		<header>
			<nav>
				<NavLink to="/register">Profil</NavLink>
			</nav>
		</header>
	);
}
