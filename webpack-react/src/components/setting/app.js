import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Setting from './setting';
import Account from './account';
import Help from './help';
import Binding from './binding';
render(
    <HashRouter>
    	<div>
    		<Route exact path="/"  component={ Setting } />
    		<Route path="/account"  component={ Account } />
    		<Route path="/help"  component={ Help } />
    		<Route path="/binding"  component={ Binding } />
    	</div>
    </HashRouter>,
    document.getElementById('app')
);
