/**
 * Created by lmy on 17-8-10.
 */
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './public/js/reducers/hi';
import App from './public/js/containers/container';


let store = createStore(reducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)
