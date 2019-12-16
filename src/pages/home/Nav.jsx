import React, { Component} from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"
import { GET_LIST } from "pages/cate/action-types"
const mapStateToProps = state => ({
    list: state.cate.list,
    showType: state.cate.showType,
    city:state.home.city
}
)
const mapDispatchToProps = dispatch => ({
    dataload(type,city) {
        let url = city === "index" ? `/api/server/category/search-${type}.json`:`/api/server/category/search-${city}-${type}.json`
        console.log(url)
        dispatch({
            type: GET_LIST,
            url
        })
    },
    chengeShow(type){
        dispatch({
            type: "changeType",
            showType:type
        })
    }
})
@connect(mapStateToProps, mapDispatchToProps)
class Nav extends Component {
    handleClick = (type) => () => {
        // this.props.chengeShow(type)
        console.log(this.props.city)
            this.props.dataload(type,this.props.city)
      
            this.props.history.push({ pathname: '/index/cate' })
       
       
    }
    render(){
        return (
            <ul>
                <p>
                    <li onClick={this.handleClick("yanchanghui")}>
                        <i style={{ backgroundPosition: ' 0 -6.9325rem' }}></i>
                        <span>演唱会</span>
                    </li>
                    <li onClick={this.handleClick("huajuwutaiju")}>
                        <i style={{ backgroundPosition: '0 -7.3773rem' }}></i>
                        <span>话剧舞台剧</span>
                    </li>
                    <li onClick={this.handleClick("tiyusaishi")}>
                        <i style={{ backgroundPosition: '0 -7.83rem' }}></i>
                        <span>体育赛事</span>
                    </li>
                    <li onClick={this.handleClick("ertongqinzi")}>
                        <i style={{ backgroundPosition: '0 -8.265rem' }}></i>
                        <span>儿童亲子</span>
                    </li>
                </p>
                <p>
                    <li onClick={this.handleClick("default")}>
                        <i style={{ backgroundPosition: ' 0 -8.7125rem' }}></i>
                        <span>全部分类</span>
                    </li>
                    <li onClick={this.handleClick()}>
                        <i style={{ backgroundPosition: ' 0 -9.155rem' }}></i>
                        <span>活动</span>
                    </li>
                    <li onClick={this.handleClick()}>
                        <i style={{ backgroundPosition: '0 -9.6rem' }}></i>
                        <span>永乐说</span>
                    </li>
                    <li onClick={this.handleClick()}>
                        <i style={{ backgroundPosition: '0 -10.0475rem' }}></i>
                        <span>我的</span>
                    </li>
                </p>
            </ul>
        )
    }
}
export default withRouter(Nav)