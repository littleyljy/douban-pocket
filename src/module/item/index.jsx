import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Rating from '../rating'
import Detail from '../detail'

class Item extends Component {
  render () {
    const item = this.props.item
    const id = item.id
    const urlLink = this.props.urlLink
    // console.log('Item urlLink', urlLink)
    const keyword = this.props.keyword
    const detailapi = this.props.detailapi
    return (
      <li>
        <Link to={{
          pathname: `/${id}`,
          id: id,
          keyword: keyword,
          api: detailapi,
          urlLink: urlLink
        }} className='list-item' component={Detail}>
          <img src={item.image} alt={item.title} class='cover' />
          <div className='list-item-info'>
            <h2>{item.title}<span className='year'>（{item.pubdate}）</span></h2>
            <div className='rating'>
              <Rating item={item.average} />
              <span>{item.average}</span>
            </div>
            <div className='tags'>
              {item.tags.map((string) => {
                return (
                  <span>{string.name}</span>
                )
              })}
            </div>
            <div className='series'>
              <span>{item.name}</span>
            </div>
          </div>
        </Link>
      </li>
    )
  }
}

export default Item
