require('./index.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import Root from './root';

ReactDOM.render(<Root history={browserHistory} />, document.getElementById('root'));
