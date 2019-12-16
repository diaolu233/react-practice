import React from "react";
import { TabBar } from 'antd-mobile';
import { Provider } from "react-redux"
import store from "../../redux/store"
import { Route, Switch, Redirect, NavLink} from "react-router-dom"
import {Home} from "./store"
import {Cate} from "pages/cate/store"
import { Setup} from "pages/profile/index"
import {Search} from "pages/search/index"
import {Map} from "pages/map/index"
import Pop from "../cate/Popover"
import { connect } from "react-redux"
import { GET_LIST } from "pages/cate/action-types"
// import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

const mapStateToProps = state => ({
    selectedtab: state.home.selectedTab,
    isShow:state.home.isShow
}
)
const mapDispatchToProps = dispatch => ({
    dataload() {
        dispatch({
            type: GET_LIST,
            url: `/api/server/category/default.json`

        })
    },
    changeType(type) {
     
        dispatch({
            type: "cates",
            payload: { type }
            // server/ category / search - yanchanghui.json
        })
    }
})
@connect(mapStateToProps, mapDispatchToProps)
class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "home",
            hidden: false,
            fullScreen: true,
            defaultTab:""
        };
    }
    static getDerivedStateFromProps(props,state){
        return{
            selectedTab: props.location.pathname.split("/")[2]
        }
    }
    componentDidMount(){
        this.props.history.listen(()=>{
            console.log(123)
        })
    }
    // componentDidMount(){
    //     console.log(1)
    // }
    // loadingToast() {
    //     Toast.loading('Loading...', 2, () => {

    //     });
    // }
    render() {
     
        let { match } = this.props
      
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="red"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    prerenderingSiblingsNumber =  {0}
                >
                  {

                   [ 
                    <TabBar.Item
                        title="首页"
                        key="Life"
                        icon={
                            <i className="iconfont" style={{color:'#666'}}>&#xe609;</i>
                        }
                        selectedIcon={
                            <i className="iconfont" style={{ color: 'red' }}>&#xe609;</i>
                        }
                        selected={this.state.selectedTab === 'home'}
                      
                        onPress={() => {
                            // this.props.changeType("home")
                            this.props.history.push({ pathname: '/index/home' })
                            // this.loadingToast()
                            this.setState({
                                selectedTab: "home"
                            });
                }}
                data-seed="logId"
            >
                       {/* <Route
                          path={match.url + "/home"}
                          component={Home}
                       /> */}
                        <Route
                            path={match.url + "/home"}
                            children={
                                (props) => {
                                    return (
                                   
                                        <Home defaultTab="home" {...props} ></Home>
                                     
                                    )
                                }
                            }
                        />
                       
                    </TabBar.Item>,

                   
                    <TabBar.Item
                        icon={
                            <i className="iconfont" style={{ color: '#666' }}>&#xe60b;</i>
                        }
                        selectedIcon={
                            <i className="iconfont" style={{ color: 'red' }}>&#xe60b;</i>
                        }
                        title="分类"
                        key="Koubei"
                       
                        selected={this.state.selectedTab === 'cate'}
                        onPress={() => {
                            // this.props.changeType("cate")
                            this.props.history.push({ pathname: '/index/cate' })
                            // this.loadingToast()
                            // console.log(this.props.selectedtab)
                            this.setState({
                                selectedTab: "cate"

                            });
                            this.props.dataload()
                        }}
                      
                    >
                        <Route
                            // path={match.url + "/cate"}
                            path="/index/cate"
                            // component={Cate}
                            children={
                                (props) => {
                                    return (
                                        <Cate defaultTab="cate" {...props} ></Cate>
                                    )
                                }
                            }
                        />
                      
                    </TabBar.Item>,
                  

                    <TabBar.Item
                        icon={
                            <i className="iconfont" style={{ color: '#666' }}>&#xe605;</i>
                        }
                        selectedIcon={
                            <i className="iconfont" style={{ color: 'red' }}>&#xe605;</i>
                        }
                        title="搜索"
                        key="Friend"
                      
                        selected={this.state.selectedTab === 'search'}
                        onPress={() => {
                            // this.props.changeType("search")
                            this.props.history.push({ pathname: '/index/search' })
                          
                            this.setState({
                                selectedTab: "search"
                            });
                        }}
                    >
                        <Route
                            // path={match.url + "/cate"}
                            path="/index/search"
                            // component={Cate}
                            render={
                                (props) => {
                                    return (
                                        <Search defaultTab="search"></Search>

                                    )
                                }
                            }
                        />
                       
                    </TabBar.Item>,
                    <TabBar.Item
                        icon={
                            <i className="iconfont" style={{ color: '#666' }}>&#xe6c8;</i>
                        }
                        selectedIcon={
                            <i className="iconfont" style={{ color: 'red' }}>&#xe6c8;</i>
                        }
                        title="地图"
                        key="map"

                        selected={this.state.selectedTab === 'map'}
                        onPress={() => {
                            // this.props.changeType("search")
                            this.props.history.push({ pathname: '/index/map' })

                            this.setState({
                                selectedTab: "map"
                            });
                        }}
                    >
                        <Route
                            // path={match.url + "/cate"}
                            path="/index/map"
                            // component={Cate}
                            render={
                                (props) => {
                                    return (
                                        <Map defaultTab="map"></Map>

                                    )
                                }
                            }
                        />

                    </TabBar.Item>,
                 <TabBar.Item
                        icon={
                            <i className="iconfont" style={{ color: '#666' }}>&#xe607;</i>
                        }
                        selectedIcon={
                            <i className="iconfont" style={{ color: 'red' }}>&#xe607;</i>
                        }
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'my'}
                        onPress={() => {
                            // this.props.changeType("my")
                            this.props.history.push({ pathname: '/index/my' })
                        
                            this.setState({
                                selectedTab: "my"
                            });
                        }}
                    >
                        {/* <Profile></Profile> */}
                        <Route
                            // path={match.url + "/cate"}
                            path="/index/my"
                            // component={Cate}
                            render={
                                (props) => {
                                    return (
                                        <Setup defaultTab="my"></Setup>

                                    )
                                }
                            }
                        />
                    </TabBar.Item>
                   ].filter((Item,index)=>{
                       return (index === 3 && this.props.isShow ) ||  (index !== 3)
                   })
                   }
                </TabBar>
                {/* <Redirect
                from="/index"
                to="/index/home"
                /> */}
            </div>
        );
    }
}
export default Layout
