import React, { Component } from 'react'
import './index.css'

class Rating extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // 接到页面传过来的值
      // 因为当前页面显示五颗星，而分数是十分所以要取平均值
      num: Math.round(this.props.item / 2),
      // 根据页面当中的星星的数量来设置默认值
      arr: [0, 1, 2, 3, 4]
    }
    // console.log('Rating this.state.average', this.props.item)
  }
  // 更新 state
  componentWillReceiveProps (nextProps) {
    // console.log('打印nextProps', nextProps)
    this.setState({ num: Math.round(nextProps.item / 2) })
  }
  render () {
    let item = this.props.item
    return (
      <span className='rating-stars' data-rating={item}>
        {
          this.state.arr.map((ele, index) => {
            return (
              <span className={'rating-star' + (ele >= this.state.num ? ' star-gray' : ' star-full')} key={index} />
            )
          })
        }
      </span>
    )
  }
}

export default Rating
