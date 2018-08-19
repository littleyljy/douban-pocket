import React, { Component } from 'react'
import CONFIG from './handler/config'
import Search from './module/search'
import List from './module/list'
import Tab from './module/tab'

class Book extends Component {
  constructor (props) {
    super(props)
    this.state = {
      api: CONFIG[0].api,
      apiItem: CONFIG[0].apiItem,
      placeholder: CONFIG[0].placeholder,
      urlLink: CONFIG[0].urlLink,
      keyword: CONFIG[0].keyword
    }
    console.log('Book api', this.state.api)
  }
  onChange (value) {
    console.log('onChange (value)', value)
    setTimeout(() => {
      this.setState({
        api: CONFIG[0].searchapi + value
      })
    }, 0)
    // console.log('onChange (this.state.api2)', this.state.api)
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

export default Book
