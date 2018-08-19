import React, { Component } from 'react'
import CONFIG from '../../handler/config'
import Item from '../tabitem'
import '../../handler/iconfont'
import './index.css'

class Tab extends Component {
  render () {
    return (
      <div className='tab'>
        <ul className='tab-wrap'>
          {CONFIG.map((item, index) => {
            return (
              <Item item={item} key={index} index={index} />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Tab
