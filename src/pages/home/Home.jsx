 import React,{Component} from 'react'
 import Header from "./Header"
 import Slide from "./Slide"
import Cate from "./Cate";
import Active from "./Active"
import Recomend from "./Recomend"

 class Home extends Component{
        render(){
          
            return (
                <>
                <Header></Header>
                <Slide></Slide>
                <Cate></Cate>
                <Active></Active>
                <Recomend></Recomend>
                </>
            )
        }
}
export default Home