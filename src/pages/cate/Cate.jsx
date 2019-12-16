import React,{Component} from 'react';
import  Catetop from "@/head/Catetop" ;
import More from "./More"
import Pop from "./Popover"

 class Cate extends Component{
            render(){
                console.log(this.props.match)
                return (
                    <>
                          <Catetop search={true} title="分类" path="/index/home"></Catetop>
                           
                           <Pop typeName='cate'></Pop>
                           <More></More>
                    </>
                )
            }
}
export default Cate