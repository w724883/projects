import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Index from './index';
render(
    <HashRouter>
    	<div>
    		<Route exact path="/"  component={ Index } />
    	</div>
    </HashRouter>,
    document.getElementById('app')
);
