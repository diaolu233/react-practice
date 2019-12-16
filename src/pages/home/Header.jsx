 import React,{Component} from 'react'
import { HeaderWrap} from "./styledHome"
import { Route, NavLink } from 'react-router-dom'
import { connect } from "react-redux"
const mapStateToProps = state => ({
    city: state.home.city,
    cityname: state.home.cityname
}
)
const mapDispatchToProps = dispatch => ({
    changeCity(py, cityname) {
        dispatch({
            type: 'city',
            payload: { py, cityname }
        })
    }
})
 class Header extends Component{
            changeCity=()=>{
                console.log(this.props)
            }
            
            render(){
                
                return (
                    <HeaderWrap>
                        <div className="header-box">
                            <NavLink to="/position">
                                <div className="area-txt" onClick={this.changeCity}>
                                    <span>{this.props.cityname}</span>
                                    <i className="iconfont">&#xe600;</i>
                                </div>
                            </NavLink>
                            <NavLink to="/index/search">
                            <div className="search">
                                <i className="iconfont" style={{ color: 'red',fontSize:".14rem"}}>&#xe605;</i>
                                <span>搜索</span>
                            </div>
                            </NavLink>
                        </div>
                    </HeaderWrap>
                )
            }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)