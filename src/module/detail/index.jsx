import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import fetchJsonp from 'fetch-jsonp'
import dataFormat from '../../handler/dataformat'
import Rating from '../rating'

class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      api: `${this.props.location.api}/${this.props.location.id}`,
      keyword: this.props.location.keyword,
      data: {
        name: [],
        tags: []
      }
    }
    console.log('this.props.location', this.props.location)
    console.log('Detail keyword', this.state.keyword)
    console.log('Detail api', this.state.api)
  }
  // 渲染前首次拉取接口
  componentWillMount () {
    fetchJsonp(this.state.api)
      .then(response => {
        return response.json()
      }).then(data => {
        console.log('Detail keyword2', this.state.keyword)
        console.log('Detail api2', this.state.api)
        console.log('Detail parsed data', data)
        let item = dataFormat(this.state.keyword, data)
        console.log('Detail parsed item', item)
        this.setState({
          data: item
        })
      }).catch(ex => {
        console.log('Detail parsing failed', ex)
      })
  }
  render () {
    const data = this.state.data
    // console.log('this.props.params.id', this.props.params.id)
    return (
      <div>
        <div className='back'>
          <Link to={`/${this.props.location.urlLink}`} className='back-btn' />
          <span>{data.title}</span>
        </div>
        <div className='intro'>
          <div className='left'>
            <h1>{data.title}</h1>
            <p className='rating-text'>
              <Rating item={data.average} />{data.average}
              <span className='num-raters'>{data.numRaters}人评价</span>
            </p>
            <p className='meta'>
              {data.name.map((string) => {
                return (
                  <span>{string}</span>
                )
              })}
              {data.publisher} / {data.pubdate} / {data.binding} / {data.pages} / {data.price}</p>
            <p className='tag-name'>
              {data.tags.map((string) => {
                return (
                  <span>{string.name}</span>
                )
              })}
            </p>
            {/* <p>导演: 闫非 / 彭大魔</p>
            <p>主演: 沈腾 / 宋芸桦 / 张一鸣 / 张晨光 / 常远 / </p>
            <p>类型: 喜剧</p>
            <p>制片国家/地区: 中国大陆</p>
            <p>语言: 汉语普通话</p>
            <p>上映日期: 2018-07-27(中国大陆)</p>
            <p>片长: 118分钟</p> */}
          </div>
          <img src={data.image} className='cover' />
        </div>
        <div className='info'>
          <h2>简介</h2>
          <p>{data.summary}</p>
        </div>
      </div>
    )
  }
}

export default Detail
