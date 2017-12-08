import React, {Component} from 'react';
import './index.less'
import HomeHeader from "./HomeHeader/index";
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
import Slider from "./Slider/index";
import Lessons from "./Lessons/index";
import {upMore,downRefresh} from '../../utils'
class Home extends Component {
  componentDidMount(){
    if(this.props.sliders.length==0){
      this.props.getSliders();//获取轮播图
      this.props.getLessons();//获取课程列表
    }
    //上拉加载更多
    upMore(this.refs.content,this.props.getLessons);
    downRefresh(this.refs.content,this.props.refresh);
  }
  render() {
    return (
      <div className="home">
        <HomeHeader
          setType={this.props.setType}
          type={this.props.type}/>
        <div ref="content" className="main-content">
          <div className="reload"></div>
          <Slider sliders={this.props.sliders}/>
          <Lessons
            getLessons = {this.props.getLessons}
            lessons = {this.props.lessons}/>
        </div>
      </div>
    )
  }
}
//actions是action的创建器
export default connect(
  state => state.home,//{type:'',sliders:[],lessons}
  actions
)(Home)