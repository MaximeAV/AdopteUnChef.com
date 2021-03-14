import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from './signin/signin';
import Register from './register/register'
import Tags from './tags/tags';
import App from './App';
import Menu from './menu/menu';

const Navigator = () => (
    <BrowserRouter>
        <Switch>
		    <Route exact path="/signin">
				<Menu />
			    <Signin />
		    </Route>
		    <Route exact path="/register">
				<Menu />
			    <Register />
		    </Route>
			<Route exact path="/tags">
				<Menu />
				<Tags />
			</Route>
			<Route exact path="/">
				<Menu />
				<App />
			</Route>
	    </Switch>
    </BrowserRouter>
);
export default Navigator;
