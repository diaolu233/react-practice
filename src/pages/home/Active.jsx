 import React,{Component} from 'react'
 import active from "assets/images/active.jpg"
import {ActiveWrap} from "./styledHome"
 class Active extends Component{
        render(){
            return (
                <ActiveWrap>
                    <img src={active} alt=""/>
                </ActiveWrap>
            )
        }
}
export default Active