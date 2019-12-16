 import React,{Component} from 'react'
import { Route, Redirect, withRouter,Switch} from 'react-router-dom'
import { RecommendWrap} from "./styledHome"
import Item from "./Item"
import Venue from "./Venue"

@withRouter
 class Recomend extends Component{
            state={
                show:'tj'
            }
        
            changeClick = (type)=>() => {
                this.props.history.push(`/index/home/${type}`)
                this.setState({
                    show : type
                },()=>{
                        
                })
              
            }
            handleMore= async ()=>{
                    
            }
            render(){
                // console.log(this.props)
             
                return (
                    <RecommendWrap>
                       <h3 className="title">
                            <span onClick={this.changeClick('tj')} className={this.state.show ==="tj"?'active':"" }>推荐</span>
                            <span onClick={this.changeClick('cg')} className={this.state.show === "cg" ? 'active' : ""}>场馆</span>
                       </h3>                     
                       <div className="inner-box">
                           {/* <ul className="tj"> */}
                                {/* {this.state.show === 'recomend' ? (<Item type="tj"></Item>) : (<Venue type="cg"></Venue>) }   */}
                                                            
                               
                               
                           {/* </ul> */}
                           {/* <ul className="cg"> */}
                                {/* <Item type="tj"></Item>
                                <Venue type="cg"></Venue> */}
                           {/* </ul> */}

                    
                        {/* <Switch> */}
                              
                                <Route
                                    path="/index/home/cg"
                                    children={
                                        (props) => {
                                            return (
                                                <Venue type="cg" {...props}></Venue>
                                            )
                                        }
                                    }
                                />
                            <Route
                                path="/index/home/tj"
                                children={

                                    (props) => {
                                        return (
                                            <Item type="tj" {...props}></Item>
                                        )
                                    }
                                }
                            />
                                <Redirect
                                    from="/index/home"
                                    to="/index/home/tj"
                                />
                        {/* </Switch> */}
                       
                            

                               

                       
                          
                       </div>
                        <div className="more" onClick={this.handleMore}> <span>查看更多</span> </div>
                    </RecommendWrap>
                )
            }
}
export default Recomend