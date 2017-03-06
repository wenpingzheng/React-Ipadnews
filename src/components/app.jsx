import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'

import '../assets/style/main';


class App extends Component {
  render() {
    return (
      <div className='global'>
        {this.props.children}
      </div>
    )
  }
}

export default App