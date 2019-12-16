 import React,{Component} from 'react'
import { CatelistWrap, BWrap}  from "./styledCate"
import { GET_LIST} from "./action-types"
import { connect } from "react-redux"
import { ActivityIndicator } from 'antd-mobile';
const mapStateToProps = state => ({
    list: state.cate.list,
    showType: state.cate.showType
}
)
const mapDispatchToProps = dispatch => ({
    dataload(url) {
        dispatch({
            type: GET_LIST,
            url:`/api/server/category/search-${url}.json`          
        })
    }
})
@connect(mapStateToProps, mapDispatchToProps)
 class Catelist extends Component{
     async  componentDidMount(){
        //  this.props.dataload(this.props.showType)      
       }
        render(){
            console.log(this.props.lists)
            let item = this.props.lists
                ? this.props.lists
                : []
            
            return (
               item.length !== 0
               ?(
                        item.map((value, index) => {

                            return (
                                <CatelistWrap key={value.productid}>
                                    <div className="img-box">
                                        <img src={"https://static.228.cn/" + value.pbigimg} alt="" />
                                        {value.status == 0 ? (<i className="status ticketing">售票中</i>) : (<i className="status sale">预售</i>)}

                                    </div>
                                    <div className="info-box">
                                        <BWrap
                                            width="2.35rem"
                                            lineClamp={2}
                                        >
                                            {value.name}
                                        </BWrap>
                                        <span className="date">
                                            {value.begindate}
                                        </span>
                                        <span className="area">
                                            {value.vname}
                                        </span>
                                        <span className="price">  {value.minprice}-{value.maxprice}元</span>
                                    </div>
                                </CatelistWrap>

                            )
                        })
               )
               : (<ActivityIndicator toast />)
             
            )
        }
}
export default Catelist