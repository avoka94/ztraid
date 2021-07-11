import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import configureStore from './store/reducers/index';
import Root from './Root/Root';
import './index.css';
const store = createStore(configureStore)

render(<Root store={store} />, document.getElementById('root'))