require('./index.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import HashHistory from 'react-router/lib/hashHistory';
import Root from './root';

const history = new HashHistory();

ReactDOM.render(<Root history={history} />, document.getElementById('root'));
