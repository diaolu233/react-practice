import React from "react"
import { Popover, NavBar, Icon } from 'antd-mobile';
import Catebar from "./Catebar";
import Catelist from "./Catelist";
import { connect } from "react-redux"
import { GET_LIST } from "./action-types"
const Item = Popover.Item;
const mapStateToProps = state => ({
    list: state.cate.list,
    allList : state.cate.allList,
}
)
const mapDispatchToProps = dispatch => ({
    dataload(type) {
        dispatch({
            type: GET_LIST,
            url: `/api/server/category/search-${type}.json`
            // server/ category / search - yanchanghui.json
        })
    }
})
// const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class Pop extends React.Component {
    state = {
        visible: false,
       
        selected: '',
    };
   
    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
            visible: false,
            selected: opt.props.value
        });
    };
    changeType = (type)=>()=>{
        this.props.dataload(type)
        this.setState({
            visible: false
        });
    }
    handleVisibleChange = (visible) => {
        this.setState({
            visible
        });
    };
    render() { 
        
        return(
            this.props.typeName === "cate" || this.props.typeName === "search"
            ?(
                    <div>
                        <NavBar
                            mode="light"
                            leftContent={
                                <Popover mask
                                    overlayClassName="fortest"
                                    overlayStyle={{
                                        color: 'red',
                                        width: "100%",
                                        left: "0px!important",
                                        right: "0"
                                    }}
                                    // visible={this.state.visible}

                                    overlay={[
                                        (<Item key="4" value="scan" data-seed="logId">
                                            <ul style={{ width: '3.75rem', height: '', display: "flex", flexWrap: "wrap" }}>

                                                <li style={{ width: '33.33%', textAlign: "center", height: ".44rem", lineHeight: ".44rem" }}>全部时间</li>
                                                <li style={{ width: '33.33%', textAlign: "center", height: ".44rem", lineHeight: ".44rem" }}>今天</li>
                                                <li style={{ width: '33.33%', textAlign: "center", height: ".44rem", lineHeight: ".44rem" }}>明天</li>
                                                <li style={{ width: '33.33%', textAlign: "center", height: ".44rem", lineHeight: ".44rem" }}>本周内</li>
                                                <li style={{ width: '33.33%', textAlign: "center", height: ".44rem", lineHeight: ".44rem" }}>本周末</li>
                                                <li style={{ width: '33.33%', textAlign: "center", height: ".44rem", lineHeight: ".44rem" }}>下周</li>
                                                <li style={{ width: '33.33%', textAlign: "center", height: ".44rem", lineHeight: ".44rem" }}>本月</li>
                                            </ul>
                                        </Item>),
                                    ]}
                                    align={{
                                        overflow: { adjustY: 0, adjustX: 0 },
                                        offset: [-10, 0],
                                    }}
                                    // onVisibleChange={this.handleVisibleChange}
                                    onSelect={this.onSelect}
                                >
                                    <div style={{
                                        height: '100%',
                                        padding: '0 20px',
                                        marginRight: '-15px',
                                        display: 'flex',
                                        alignItems: 'center'

                                    }}
                                        className="barTop"
                                    >
                                        <Icon />
                                        全国
                                <i></i>
                                    </div>
                                </Popover>
                            }
                            rightContent={
                                <Popover mask
                                    overlayClassName="fortest"
                                    overlayStyle={{ color: 'red', width: "100%", left: "0px!important", right: "0" }}
                                    // visible={this.state.visible}
                                    overlay={[
                                        (<Item key="4" value="scan" data-seed="logId">
                                            <ul style={{ width: '3.75rem', height: '', display: "flex", flexWrap: "wrap" }}>

                                                <li style={{ width: '33.33%', textAlign: "center", height: ".44rem", lineHeight: ".44rem" }}>全部时间</li>
                                                <li style={{ width: '33.33%', textAlign: "center", height: ".44rem", lineHeight: ".44rem" }}>今天</li>
                                                <li style={{ width: '33.33%', textAlign: "center", height: ".44rem", lineHeight: ".44rem" }}>明天</li>
                                                <li style={{ width: '33.33%', textAlign: "center", height: ".44rem", lineHeight: ".44rem" }}>本周内</li>
                                                <li style={{ width: '33.33%', textAlign: "center", height: ".44rem", lineHeight: ".44rem" }}>本周末</li>
                                                <li style={{ width: '33.33%', textAlign: "center", height: ".44rem", lineHeight: ".44rem" }}>下周</li>
                                                <li style={{ width: '33.33%', textAlign: "center", height: ".44rem", lineHeight: ".44rem" }}>本月</li>
                                            </ul>
                                        </Item>),

                                    ]}
                                    align={{
                                        overflow: { adjustY: 0, adjustX: 0 },
                                        offset: [-10, 0]
                                    }}
                                    // onVisibleChange={this.handleVisibleChang/e}
                                    onSelect={this.onSelect}
                                >
                                    <div style={{
                                        height: '100%',
                                        padding: '0 20px',
                                        marginRight: '-15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                        className="barTop"
                                    >
                                        <Icon />
                                        全部时间
                              <i></i>
                                    </div>
                                </Popover>

                            }

                        >


                            {/* <Catebar></Catebar> */}
                            {/* <Catelist></Catelist> */}


                            <Popover mask
                                overlayClassName="fortest"
                                overlayStyle={{ color: 'red', width: "100%", left: "0px!important", right: "0" }}
                                visible={this.state.visible}

                                overlay={[
                                    (<Item key="4" value="scan" data-seed="logId">
                                        <ul style={{ width: '3.75rem', height: '', display: "flex", flexWrap: "wrap" }}>
                                            {
                                                this.props.allList &&

                                                this.props.allList.map((value) => {
                                                    return (
                                                        <li
                                                            key={value.PRODUCTTYPEAID}
                                                            style={{ width: '33.33%', textAlign: "center", height: ".44rem", lineHeight: ".44rem" }}
                                                            onClick={this.changeType(value.TYPEAJX, 'all')}
                                                        >
                                                            {value.NAME}
                                                        </li>
                                                    )
                                                })
                                            }


                                        </ul>
                                    </Item>)
                                ]}
                                align={{
                                    overflow: { adjustY: 0, adjustX: 0 },
                                    offset: [-10, 0],
                                }}
                                // onVisibleChange={this.handleVisibleChange}
                                onSelect={this.onSelect}
                            >
                                <div style={{
                                    height: '100%',
                                    padding: '0 20px',
                                    marginRight: '-15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                                    className="barTop"
                                >
                                    <Icon />
                                    全部分类
                        <i></i>
                                </div>
                            </Popover>
                        </NavBar>
                        {
                            this.props.typeName === "cate" && this.props.list.length !== 0 ? (<Catelist lists={this.props.list.pagerMemoryList}></Catelist>) : (this.props.list.length !== 0?<Catelist lists={this.props.list.pagerMemory.fistPage}></Catelist>:'')
                        }
                      
                    </div>
            )
            :''

        ) 
      
           
            
        
    
    
    
     
}
}

// ReactDOM.render(<Pop />, mountNode);
export default connect(mapStateToProps, mapDispatchToProps)(Pop)