import React, { Component } from 'react'
import CONFIG from './handler/config'
import Search from './module/search'
import List from './module/list'
import Tab from './module/tab'

class Movie extends Component {
  constructor (props) {
    super(props)
    this.state = {
      api: CONFIG[1].api,
      apiItem: CONFIG[1].apiItem,
      placeholder: CONFIG[1].placeholder,
      urlLink: CONFIG[1].urlLink,
      keyword: CONFIG[1].keyword
    }
  }
  onChange (value) {
    console.log('onChange (value)', value)
    this.setState({
      api: CONFIG[1].searchapi + value
    })
  }
  render () {
    let itemState = this.state
    return (
      <div>
        <Search item={itemState} onChange={this.onChange.bind(this)} />
        <List api={this.state.api} apiItem={this.state.apiItem} keyword={this.state.keyword} urlLink={this.state.urlLink} />
        <Tab />
      </div>
    )
  }
}

export default Movie
