import React,{Component} from 'react'
import { VenueWrap, Bwrap, CgBox} from "./styledHome"
import { get } from "utils/http"
import { connect } from "react-redux"
import { ActivityIndicator } from 'antd-mobile';
import tabAnimate from "pages/hoc/tabAnimate"
const mapStateToProps = state => ({
    city: state.home.city,
    cityname: state.home.cityname,
    cityId:state.home.cityId
}
)
const mapDispatchToProps = dispatch => ({
    changeCity(py, cityname) {
        dispatch({
            type: 'city',
            payload: { py, cityname }
        })
    }
})
@tabAnimate
 class Venue extends Component{
            state = {
                list: []              
            }
            async  componentDidMount() { 
                 
                let result = await get({
                    url: `/api/server/content/moreProductPlay.json?fcity=${this.props.cityId}&pageNum=1&type=1`
                })
               
                this.setState({
                    list: result.data.data.venuePage.list
                })
            }
            render(){       
                console.log("cg")      
                return (                                                                                                                                                                                                                                
                this.state.list.length !== 0
                ?(
                            <CgBox>
                                {
                                    this.state.list.map((value, index) => {

                                        return (
                                            <VenueWrap key={value.ROW_ID}>
                                                <img src={'https://static.228.cn/' + value.IMG} alt="" />
                                                <Bwrap>{value.VNAME}</Bwrap>
                                                <span>{value.ADDRESS}</span>
                                            </VenueWrap>
                                        )
                                    }) 
                                }
                            </CgBox>
                                  
                               
                           
                              
                )
                :(
                  <ActivityIndicator toast />
                )                    
            )
            }
}
export default connect(mapStateToProps, mapDispatchToProps)(Venue)

