import React from 'react';
import { Router, Route } from 'react-router';
import createHistory from 'history/createHashHistory';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Root from './Root';

import Select from '../src/component/Select';
import Sales from '../src/component/Sales';
import InvAdj from '../src/component/InvAdj';
import Vendor from '../src/component/Vendor';
import Receipts from '../src/component/Receipts';

const customHistory = createHistory();


ReactDOM.render(
	<Router history={customHistory}>

   		<Route path='/' component={App}>

    </Route>
</Router>, document.getElementById('root'))





