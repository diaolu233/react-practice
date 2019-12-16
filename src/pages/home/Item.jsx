import React,{Component} from 'react'
import {  Bwrap } from "./styledHome"
import { RecItem, TjBox} from "./styledHome"
import {get} from "utils/http"
import { connect } from "react-redux"
import { ActivityIndicator} from 'antd-mobile';
import tabAnimate from "pages/hoc/tabAnimate"

const mapStateToProps = state => ({
        city: state.home.city,
       cityname: state.home.cityname
    }
)


const mapDispatchToProps = dispatch => ({
    
    changeCity() {
       
        dispatch({
            type: "city"
        })
    }
})
@tabAnimate
 class Item extends Component{
        state={
            list:[]
        }
     
        async  componentDidMount(){
            
            if (this.props.city === 'index'){

                let result = await get({
                    url:`/api/server/content/${this.props.city}.json`
                })
                this.setState({
                    list: result.data.data.recommendPage.list
                })
            }else{
                
                let otherCity = await get({
                    url: `/api/server/content/city/${this.props.city}.json`
                })
                this.setState({
                    list: otherCity.data.data.recommendPage.list
                })
            }
            // console.log(this.props.city)
            // server / content / city / sh.json
           
        //  this.state.list =  
           
        }
        render(){
            console.log('tj')
            return (
                this.state.list.length !== 0
                ?(
                        <TjBox>
                            {
                                this.state.list.map((value, index) => {

                                    return (
                                        <RecItem key={value.ROW_ID}>

                                            <img alt="" src={"https://static.228.cn/" + value.PBIGIMG} />

                                            <Bwrap
                                                className="info-title"
                                                width="1.05rem"
                                                lineClamp={2}
                                            >{value.NAME}</Bwrap>
                                            <span className="date">{value.BEGINDATE.split(" ")[0]}</span>
                                            <span className="price"><b>¥ {value.MINPRICE}</b>起</span>
                                        </RecItem>
                                    )
                                })
                            }
                        </TjBox>
                            
                               
                            
                     
                 
                     
                )
                : (<ActivityIndicator toast />)
                      
                
                
               
                 
            )

        }
}
export default connect(mapStateToProps, mapDispatchToProps)(Item)