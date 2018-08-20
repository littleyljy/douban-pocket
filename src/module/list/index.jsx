import React, { Component } from 'react'
import ReactPullLoad, { STATS } from 'react-pullload/dist'
import '../../../node_modules/react-pullload/dist/ReactPullLoad.css'
import './index.css'
import dataFormat from '../../handler/dataformat'
import fetchJsonp from 'fetch-jsonp'
import Item from '../item'

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      api: this.props.api,
      apiArr: [],
      apiItem: this.props.apiItem,
      urlLink: this.props.urlLink,
      keyword: this.props.keyword,
      detailapi: `https://api.douban.com/v2/${this.props.keyword}`,
      hasMore: true,
      action: STATS.init,
      index: 20, // loading more test time limit
      start: 20 // 豆瓣 api 的翻页条目数
    }
    console.log('List api', this.state.api)
  }
  fetchData (api) {
    fetchJsonp(api)
      .then(response => {
        return response.json()
      }).then(data => {
        let item = dataFormat(this.state.apiItem, data)
        console.log('parsed data', data)
        console.log('parsed item', item)
        // 保留原接口数据，拼接新接口数据
        let apiArr = this.state.apiArr.concat(item)
        console.log('parsed apiArr.concat', apiArr)
        this.setState({
          apiArr: apiArr
        })
      }).catch(ex => {
        console.log('parsing failed', ex)
      })
  }
  // 渲染前首次拉取接口
  componentWillMount () {
    setTimeout(() => {
      // refreshing complete
      this.setState({
        apiArr: []
      })
    }, 0)
    this.fetchData(this.state.api)
  }
  // 非首次拉取接口，父组件 api 属性改变触发
  componentWillReceiveProps (nextProps) {
    setTimeout(() => {
      // 刷新清空 apiArr，防止下拉加载留存数据干扰
      this.setState({
        apiArr: [],
        index: 20,
        start: 20
      })
    }, 0)
    console.log('打印nextProps', nextProps)
    this.fetchData(nextProps.api)
  }
  // 上拉刷新，下拉加载更多
  handleAction (action) {
    console.info(action, this.state.action, action === this.state.action)
    // new action must do not equel to old action
    if (action === this.state.action) {
      return false
    }

    if (action === STATS.refreshing) { // 刷新
      this.handRefreshing()
    } else if (action === STATS.loading) { // 加载更多
      this.handLoadMore()
    } else {
      // DO NOT modify below code
      this.setState({
        action: action
      })
    }
  }
  // 刷新
  handRefreshing () {
    console.log('handRefreshing this.state.api', this.state.api)
    if (STATS.refreshing === this.state.action) {
      return false
    }
    setTimeout(() => {
      // 刷新清空 apiArr，防止下拉加载留存数据干扰
      this.setState({
        apiArr: []
      })
    }, 0)
    setTimeout(() => {
      // refreshing complete
      this.setState({
        hasMore: true,
        action: STATS.refreshed,
        index: 20,
        start: 20
      })
    }, 2000)

    this.setState({
      action: STATS.refreshing
    })
    this.fetchData(this.state.api)
  }
  // 加载更多
  handLoadMore () {
    if (STATS.loading === this.state.action) {
      return false
    }
    // 无更多内容则不执行后面逻辑
    if (!this.state.hasMore) {
      return
    }

    setTimeout(() => {
      if (this.state.index === 0) {
        this.setState({
          action: STATS.reset,
          hasMore: false
        })
      } else {
        console.log('handLoadMore this.state.api', this.state.api)
        // movie/top250 api 翻页与 book/music api 有区别，movie/top250 用 ?，book/music 及搜索列表全用 &
        let mark = ((this.state.keyword === 'movie') && (this.state.api.indexOf('search') === -1)) ? '?' : '&'
        this.fetchData(`${this.props.api}${mark}start=${this.state.start}`)
        this.setState({
          action: STATS.reset,
          index: this.state.index - 1,
          start: this.state.start + 20
        })
      }
    }, 2000)

    this.setState({
      action: STATS.loading
    })
  }

  render () {
    const apiArr = this.state.apiArr
    return (
      <div className='list'>
        <ReactPullLoad
          downEnough={150}
          action={this.state.action}
          handleAction={this.handleAction.bind(this)}
          hasMore={this.state.hasMore}
          distanceBottom={1000}>
          <ul>
            {apiArr.map((item, index) => {
              return (
                <Item item={item} key={index} index={index} urlLink={this.state.urlLink} keyword={this.state.keyword} detailapi={this.state.detailapi} />
              )
            })}
          </ul>
        </ReactPullLoad>
      </div>
    )
  }
}

export default List
