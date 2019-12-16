import styled from "styled-components"
import loginBg from "../../assets/images/loginBg.jpg"
import icon from "../../assets/images/icon.png"
export const ProfieWrap = styled.div`
 
   .loginBg{
        background:url(${loginBg}) no-repeat;
        background-size:100% 100%;
        position:absolute;
        width:100%;
        height:6.67rem;
        z-index:999;
   }
   .outBox{
       position:absolute;
       background:transparent;
       z-index:1000;
         width:100%;
        height:6.67rem;
        .arrow{
            height:.6rem;
            margin-bottom: .2rem;
            position: relative;
            .return{
                position:absolute;
                bottom:0;
                margin-left: .15rem;
                width: .3rem;
                height: .31rem;
                display: block;
                 background:url(${icon}) no-repeat;
                 background-size: 1.5rem;
                 background-position: 0 -34.54rem;
            }
        }
        .innerBox{
            margin: 0.3rem 0.5rem 0;
            h3{
                    color: #fff;
                    font-size: 0.32rem;
                    margin-bottom: 0.3rem;
                    font-weight: bold;
            }
            .content{
                width:100%;
                /* height:; */
                
                .userName{
                     background:url(${icon}) no-repeat;
                    background-size: 0.85rem;
                    background-position: 0.2rem -2.345rem;
                   
                }
                .passWord{
                     background:url(${icon}) no-repeat;
                    background-size: 0.85rem;
                    background-position: 0.2rem -2.67rem;
                    position: relative;
                    .eye{
                        display:block;
                        width: 0.3rem;
                        height: 0.3rem;
                        position:absolute;
                        background:url(${icon}) no-repeat;
                        background-size: 0.85rem;
                        background-position: 0 -1.17rem;
                        top: 0.075rem;
                        right: 0;
                    }
                }
                .confirm{
                       
                         background:url(${icon}) no-repeat;
                        background-size: 0.85rem;
                        background-position: 0.2rem -3rem;
                        position: relative;
                    .send{
                        display:block;
                        width: 0.3rem;
                        height: 0.3rem;
                        position:absolute;
                        background:url(${icon}) no-repeat;
                        background-size: 0.85rem;
                        background-position: 0 -1.17rem;
                        top: 0.075rem;
                        right: 0;
                    }
                }
                .input-box{
                    height:.46rem;
                    margin-bottom: 0.2rem;
                    font-size: 0.12rem;
                    border-radius:.23rem;
                    border: 0.01rem solid rgba(255, 255, 255, .6);
                    input{
                            border:0;
                            width: 100%;
                            height:100%;
                            background:transparent;
                            padding: 0 0.3rem 0 .2rem;
                            color: rgba(255, 255, 255, .9);
                            font-size: 0.16rem;
                            text-align: center;
                        /* background:transparent; */
                    }
                }
            }
        }
        .tip{
            color: rgba(255, 255, 255, 0.7);
            label{
                       display:block;
                        background:url(${icon}) no-repeat;
                        background-position: 0.03rem -1.25rem;
                        background-size: 0.6rem;
                        position: relative;
                 input{
                            opacity: 0;
                            width: 0.15rem;
                            height: 0.15rem;
                            margin-top: 0;
                            margin-left: 0.05rem;
                            caret-color: #ff3a56;
                            /* margin-right: 0.05rem; */
                            vertical-align: middle;
                     }
                     >span:first-child{
                         vertical-align: middle;
                         margin-left: 0.05rem;
                     }
                     >span:last-child{
                         position:absolute;
                         right: 0.05rem;
                         /* margin-left: 0.05rem; */
                     }
              }
            }
            .submit{
                height: 0.45rem;
                width: 100%;
                background: rgba(255, 255, 255, .7);
                color: #fff;
                border-radius: 1rem;
                opacity: 0.8;
                font-size: 0.16rem;
                line-height: 0.45rem;
                margin-top: 0.2rem;
                text-align: center;
                line-height:0.45rem;
            }
            .other{
                margin: 0.5rem 0.25rem 0;
                height:.25rem;
                ul{
                        height:.25rem;
                        display:flex;

                    li{
                         background:url(${icon}) no-repeat;
                         background-size: 0.7rem;
                         flex:1;
                         text-align:center;
                         line-height:.25rem;
                    }
                        >li:nth-child(1){                     
                           background-position: .25rem 0rem;
                        }
                        >li:nth-child(2){
                            background-position: .25rem -0.34rem;
                        }
                        >li:nth-child(3){
                            background-position: .25rem -0.66rem;
                        }
                }
               
                
            }
            .bottom{
                margin-top: 0.5rem;
                width: 100%;
                text-align: center;
                margin-bottom: 0.4rem;
                font-size: .14rem;
                span{
                    color: #ff3a56;
                    margin-bottom: 0.4rem;
                    display: block;
                }
                p{
                        color: rgba(255, 255, 255, 0.4);
                          font-size: .11rem;
                          b{
                                  color: rgba(255, 58, 86, 0.6);
                                  font-size: .11rem;
                          }
                }
            }
            
   }
 
`

export const CompleteWrap = styled.div`
    padding:.1rem;
    display:flex;
    justify-content:space-between;
`