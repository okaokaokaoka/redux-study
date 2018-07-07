import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todo from './reducers'
import { addTodo, toggleTodo } from './actions';
import App from './components/App'
import { setVisibilityFilter } from './actions'

let store = createStore(todo)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)