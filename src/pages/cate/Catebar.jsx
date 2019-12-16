 import React,{Component} from 'react'
import {CatebarWrap} from "./styledCate"
import { Route, NavLink } from "react-router-dom";
 class Catebar extends Component{
        render(){
          
            return (
                <CatebarWrap>
                <ul>
                   
                    <li>
                        全国
                        <i></i>
                    </li>
                
                    <li>
                        全部分类
                         <i></i>
                    </li>
                    <li>
                        全部时间
                         <i></i>
                    </li>
                </ul>

                </CatebarWrap>
            )
        }
}
export default Catebar