 import React,{Component} from 'react'
import { CatetopWarp } from "./styledHead"
import { withRouter } from "react-router-dom";
 class Catetop extends Component{
            handleReturn=(path)=>()=>{
                this.props.history.push("/index/home/tj")            
            }
            render(){
                return (
                    <CatetopWarp>
                        {this.props.title ? (<h2>{this.props.title}</h2>):''}
                      
                        <i className="return" onClick={this.handleReturn(this.props.path)}></i>
                        {
                            this.props.search ? (<i className="search"></i>):''
                        }
                      
                    </CatetopWarp>
                )
            }
}
export default withRouter(Catetop)