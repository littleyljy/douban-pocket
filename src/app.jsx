import React, { Component } from 'react'
import './style.css'
import { Switch, Route } from 'react-router-dom'
import Book from './book'
import Movie from './movie'
import Music from './music'
import Detail from './module/detail'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Book} />
          <Route path='/movie' component={Movie} />
          <Route path='/music' component={Music} />
          <Route path='/:id' component={Detail} />
        </Switch>
      </div>
    )
  }
}

export default App
