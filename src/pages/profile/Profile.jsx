 import React,{Component} from 'react'
import { ProfieWrap} from "./styledProfile"
import { withRouter } from "react-router-dom";
// import Catetop from "@/head/Catetop"
 class Profile extends Component{
     state={
         staus: 'signin'
     }
     changeStaus = (staus) => ()=>{
           this.setState({
               staus
           })
     }
     handleReturn = ()=>{
         console.log(2)
        this.props.history.push("/index/home")
     }
     
        render(){
            return (
                <ProfieWrap>
                    <div className="loginBg">

                    </div>
                    <div className="outBox">
                        <div className="arrow">
                            <span className="return" onClick={this.handleReturn}></span>
                        </div>
                        {/* <Catetop></Catetop> */}
                        <div className="innerBox">
                            {
                                this.state.staus === 'signup' ? (<h3>会员注册</h3>) : (<h3>会员登录</h3>)
                            }
                           
                            <div className="content">
                                <div className="userName input-box">
                                  <input type="text" placeholder="手机号/邮箱地址"/>
                                  <span></span>
                                </div>
                                <div className="passWord input-box">
                                  <input type="text" name="" id="" placeholder="请输入密码"/>
                                  <span></span>
                                  <i className="eye"></i>
                                </div>
                                {
                                    this.state.staus === 'signup'
                                    ?(
                                            <div className="confirm input-box">
                                                <input type="text" name="" id="" placeholder="验证码" />
                                                <span></span>
                                                <i className="send"></i>
                                            </div>
                                    )
                                    :""
                                }
                                
                            </div>
                            <div className="tip">
                                <label htmlFor="">
                                    <input type="checkbox" name="" id=""/>
                                    <span>两周内免登录</span>
                                    <span>忘记密码</span>
                                </label>
                            </div>
                            {
                                this.state.staus === 'signup'? (<div className="submit">登录</div>) : (<div className="submit">注册</div>)
                            }
                          
                            <div className="other">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div className="bottom">
                                {
                                    this.state.staus === 'signup' 
                                    ? (<span onClick={this.changeStaus('signin')}>马上登录</span>)
                                     : (<span onClick={this.changeStaus('signup')}>马上注册</span>)
                                }
                                
                                <p>登录注册表示同意 <b>永乐票务用户服务协议</b></p>
                            </div>
                        </div>
                    </div>
                   
                </ProfieWrap>
            )
        }
}
export default withRouter(Profile)