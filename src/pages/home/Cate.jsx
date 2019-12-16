 import React,{Component} from 'react'
import { CateWarp} from "./styledHome";
import { Route, NavLink } from 'react-router-dom'
import Nav from "./Nav"


 class Cate extends Component{
        render(){
            return (
                <CateWarp>
                    <Nav></Nav> 
                </CateWarp>
            )
        }
}
export default Cate