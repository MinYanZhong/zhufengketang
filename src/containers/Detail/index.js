/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React,{Component} from 'react';
import './index.less'
export default class Detail extends Component{
    componentWillMount(){
      if(!this.props.location.state){
        this.props.history.push('/');
      }
    }
    render(){
      let {url,title, price,video,poster} = this.props.location.state||{};
        return (
            <div className="lesson-detail">
              <p>{title}</p>
              <p><video controls="controls"  src={video} poster={poster}></video></p>
              <p>{price}</p>
            </div>
        )
    }
}