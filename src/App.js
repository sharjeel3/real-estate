import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
    render() {
        return (
            <div>
                App
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
