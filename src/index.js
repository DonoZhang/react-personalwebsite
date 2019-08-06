import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import PersonalWebsite from './containers/PersonalWebsite'
import responsiveReducer from './reducers/responsive'
import './index.scss'

const store = createStore(responsiveReducer)

ReactDOM.render(<Provider store={store}><PersonalWebsite/></Provider>, document.getElementById('root'))

