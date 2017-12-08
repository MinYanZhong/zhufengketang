import React, {Component} from 'react';
import './index.less'
import Loading from "../../../components/Loading/index";
import {Link} from 'react-router-dom';
export default class Lessons extends Component {
  render() {
    return (
      <div className="lesson-list">
        <div className="lesson-title">
          <i className="iconfont icon-book"></i>
          <span>全部课程</span>
        </div>
        {
          this.props.lessons.list.map((item, index) => (
            <Link key={index} to={{pathname:'/detail',state:item}}>
              <div className="lesson" >
                <img src={item.url}/>
                <p>{item.title}</p>
                <p className="price">{item.price}</p>
              </div>
            </Link>
          ))
        }
        {
          this.props.lessons.loading ?
            <Loading/> : this.props.lessons.hasMore ? null : <div
            className="load-status">
            后面已经没有了
          </div>
        }
      </div>
    )
  }
}