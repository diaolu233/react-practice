 import React,{Component} from 'react'
 import Catetop from "@/head/Catetop";
 import {Position} from "./styledCity"
 import {get} from "utils/http"
 import {connect} from "react-redux"
const mapStateToProps = state =>({
        city:state.home.city,
        cityname:state.home.cityname
    }
)
const mapDispatchToProps = dispatch => ({
    changeCity(py, cityname,cityId) {  
        localStorage.setItem("cityname", cityname)
        localStorage.setItem("cityId", cityId)
        localStorage.setItem("city", py)
        dispatch({
            type: 'city',
            payload:{py,cityname,cityId}
        })
    }
})
  class City extends Component{
            constructor(){
                super()
                this.state = {
                    hotCitys:[],
                    fcitys:[]
                }
            }
            async componentDidMount(){
                let result = await get({
                    url:"/api/server/content/city/list.json"
                })
            
                this.setState({
                    hotCitys: result.data.data.hotCitys,
                    fcitys: result.data.data.fcitys
                })
            }
      changeCity = (py, cityname,cityId)=>()=>{
              
          this.props.changeCity(py, cityname, cityId)          
          this.props.history.push("/index/home")
                 
           }
            render(){
                console.log(this.props)
                return (
                    <Position>
                        <Catetop show={false} title="选择演出城市"  path="/index"></Catetop>
                        <div className="currCity">
                            <span>定位城市</span>
                            <span className="city">北京</span>
                        </div>
                        <div className="hotCity ">
                            <h3>热门城市</h3>
                            <ul>
                                {
                                    this.state.hotCitys.map((value)=>{
                                        return (
                                            <li key={value.FCONFIGID} 
                                                onClick={this.changeCity(value.CITYJX, value.CITYNAME,value.FCONFIGID)}>
                                                {value.JXNAME}
                                            </li>
                                        )
                                    })
                                }                               
                            </ul>
                        </div>
                        <div className="moreCity hotCity">
                            <h3>更多城市</h3>
                            <ul>
                                {
                                    this.state.fcitys.map((value) => {
                                        return (
                                            <li key={value.FCONFIGID}>{value.JXNAME}</li>
                                        )
                                    })
                                }  
                              
                            </ul>
                        </div>
                    </Position>
                )
            }
}
export default connect(mapStateToProps, mapDispatchToProps)(City)
// export default City