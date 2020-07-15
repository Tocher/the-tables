import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import {Table} from 'Table/Table';
import {UserList} from 'UserList/UserList';
import {configureStore} from 'redux/store';

const store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Table/>

            <UserList/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root'),
);
