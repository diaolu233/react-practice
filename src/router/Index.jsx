import React,{Component} from 'react'
import { Route, Redirect, Switch, NavLink } from "react-router-dom";
import Layout from "../pages/home/Layout"
import City from "../pages/position/City"
// import { Provider } from "react-redux"
// import { connect } from "react-redux"
// const mapStateToProps = state => ({
//     city: state.city
// })
// const mapDispatchToProps = dispatch => ({
//     changeCity(py) {
//         dispatch({
//             type: "city",
//             payload: py
//         })
//     }
// })
// import store from "../redux/store"
 class Index extends Component{
        render(){
            return (
            <div>
               <Switch>
                   <Route
                    path="/index"
                    component={Layout}
                   />
                   {/* <Route
                    path="/position"
                    component={City}
                   /> */}
                   <Route
                    path="/position"
                    render={
                        (props) => {
                            return (
                                
                                    <City {...props}></City>
                              
                            )
                        }
                    }
                   />
                    <Redirect
                    from="/"
                    to="/index"
                    />
                     
               </Switch>
            </div>
            )
        }
}
// export default connect(mapStateToProps, mapDispatchToProps)(Index)
export default Index