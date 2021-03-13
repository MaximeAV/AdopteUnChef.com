import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from './signin/signin';
import Register from './register/register'
import Tags from './tags/tags';

const Navigator = () => (
    <BrowserRouter>
        <Switch>
		    <Route exact path="/">
			    <Signin />
		    </Route>
		    <Route exact path="/register">
			    <Register />
		    </Route>
			<Route exact path="/tags">
				<Tags />
			</Route>
	    </Switch>
    </BrowserRouter>
);
export default Navigator;
