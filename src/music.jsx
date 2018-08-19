import React, { Component } from 'react'
import CONFIG from './handler/config'
import Search from './module/search'
import List from './module/list'
import Tab from './module/tab'

class Music extends Component {
  constructor (props) {
    super(props)
    this.state = {
      api: CONFIG[2].api,
      apiItem: CONFIG[2].apiItem,
      placeholder: CONFIG[2].placeholder,
      urlLink: CONFIG[2].urlLink,
      keyword: CONFIG[2].keyword
    }
  }
  onChange (value) {
    console.log('onChange (value)', value)
    this.setState({
      api: CONFIG[2].searchapi + value
    })
    console.log('onChange (this.state.api)', this.state.api)
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

export default Music
