import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Detail from './detail';
import Buy from './buy';
import Separation from './separation';
render(
    <HashRouter>
    	<div>
	    	<Route exact path="/"  component={ Detail } />
	    	<Route path="/buy"  component={ Buy } />
	    	<Route path="/separation"  component={ Separation } />
	    </div>
    </HashRouter>,
    document.getElementById('app')
);
