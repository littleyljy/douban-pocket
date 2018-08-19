import React, { Component } from 'react'
import './index.css'

class Search extends Component {
  constructor () {
    super()
    this.state = {
      keyword: ''
    }
  }
  handleKeyUp (event) {
    const value = event.target.value
    const keyCode = event.keyCode
    // 回车键
    if (keyCode === 13) {
      this.props.onChange && this.props.onChange(this.state.keyword)
    }
    this.setState({
      keyword: value
    })
  }
  handleClick () {
    console.log(this)
    this.props.onChange && this.props.onChange(this.state.keyword)
  }
  render () {
    const item = this.props.item
    return (
      <div className='search'>
        <input type='search' name='search-text' className='search-text' placeholder={item.placeholder} onKeyUp={this.handleKeyUp.bind(this)} />
        <a className='search-btn' onClick={this.handleClick.bind(this)}>搜索</a>
      </div>
    )
  }
}

export default Search
