 import React,{Component} from 'react'
import { Switch } from 'antd-mobile';
import { CompleteWrap}  from "./styledProfile"
import {connect} from "react-redux"
@connect(state=>({
   isShow:state.home.isShow
}), dispatch=>({
    changeshow(type){
        localStorage.setItem("show",type)
        dispatch({
            type:"show",
            payload:type
        })
    }
})
)
 class Complete extends Component{
    
        render(){
            return (
                <CompleteWrap>
                    <span>地图</span>
                    <Switch
                        checked={this.props.isShow}
                        onChange={checked => {                                    
                            this.props.changeshow(checked)
                            console.log(this.props.isShow, checked)       
                        }}
                    />
                </CompleteWrap>
            )
        }
}
export default Complete