import 'babel-register';
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../containers/app';
import Home from '../containers/home';
import Resume from '../containers/resume';

export default(
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="resume" component={Resume}/>
	</Route>
);