import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import api from './api.json';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App data={api} />, document.getElementById('root'));
registerServiceWorker();
