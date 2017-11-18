import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/home';
import api from '../api.json';

ReactDOM.render(<Home data={api} />, document.getElementById('root'));
