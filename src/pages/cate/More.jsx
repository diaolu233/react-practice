 import React,{Component} from 'react'
 import {MoreWrap} from "./styledCate"
 import {post} from "utils/http"
import { GET_LIST } from "./action-types"
import { connect } from "react-redux"


const mapStateToProps = state => ({
    list: state.cate.list
}
)
const mapDispatchToProps = dispatch => ({
    dataload(url) {
        dispatch({
            type: GET_LIST,
            url
            // server/ category / search - yanchanghui.json
        })
    }
})
@connect(mapStateToProps, mapDispatchToProps)
 class More extends Component{
        //  constructor(){
        //      super()
        //      this.state={
        //          listMore:[]
        //      }
        //  }
       async loadMore(){
               let listMore = await post({
                   url:"/api/server/search/moreSearch.json",
                //    data:"datestrEscape=all&datestr=all&type=1&tagstr=all&datestrSelected=all&typebjx=all&orderstype=all&filter=all&total=750&typeajx=all&cityjx=all&keyword=&pagenum=2"
                
                })
               console.log(listMore)
            }
        render(){
            return (
                <MoreWrap>
                    <span onClick={this.loadMore}>查看更多</span>
                </MoreWrap>
            )
        }
}
export default More