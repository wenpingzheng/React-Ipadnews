import React, { Component } from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute, IndexRedirect } from 'react-router'

import App from '../components/app'
import List from '../components/list'




class Routers extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={List} />
          <IndexRedirect to="/news" />
          <Route path="/:listId" component={List} />
        </Route>
      </Router>
    )
  }
}

export default Routers