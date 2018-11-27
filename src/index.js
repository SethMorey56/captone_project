import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootswatch/dist/materia/bootstrap.min.css';

// import { Provider } from 'react-redux';
// import store from './redux/store';
// import { fetchCounselors } from './redux/actions/counselors_actions';

// newStore.dispatch(fetchCounselors())

ReactDOM.render(
    // <Provider store={newStore}>
        <Router>
            <App />
        </Router>
    // </Provider>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
