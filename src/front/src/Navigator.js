import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from './signin/signin';
import Register from './register/register'

const Navigator = () => (
    <BrowserRouter>
        <Switch>
		    <Route exact path="/signin">
			    <Signin />
		    </Route>
		    <Route exact path="/register">
			    <Register />
		    </Route>
	    </Switch>
    </BrowserRouter>
);
export default Navigator;
