import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import Property from './containers/Property/Property'

class App extends Component {
    render() {
        return (
            <div>
                <Property />
            </div>
        )
    }
}

const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default ReduxApp
