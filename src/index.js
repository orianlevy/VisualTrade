import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect} from 'react-router'
import App from './App'


        
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="*" component={App}>

    </Route>
  </Router>
  ), document.getElementById('root')
)