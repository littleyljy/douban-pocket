import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

class Item extends Component {
  render () {
    const item = this.props.item
    return (
      <li className='tab-item'>
        <NavLink exact activeClassName='active' to={'/' + item.urlLink}>
          <svg className='icon' aria-hidden='true'>
            {/* 引用的时候需要将 xlink:href 改写成 xlinkHref */}
            <use xlinkHref={item.icon} />
          </svg>
          <div className='tab-name'>{item.tabname}</div>
        </NavLink>
      </li>

    )
  }
}

export default Item
