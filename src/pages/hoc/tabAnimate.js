import React from "react"
import {CSSTransition}  from "react-transition-group"
import "assets/styles/animate.css"
export default (Comp)=>{
 
   const TabAnimate = props =>{
      
       return (
           <CSSTransition
               in={!!props.match}
               timeout={4000}
               classNames={{
                   enter: 'animated',
                   enterActive: props.type === 'tj' ? 'slideInLeft' : 'slideInRight',
                   exit: 'animated',
                   exitActive: props.type === 'cg' ? 'slideOutRight' : 'slideOutLeft',
               }}
               mountOnEnter
               unmountOnExit
           >
               <Comp {...props}></Comp>
           </CSSTransition>

       )
   }
    return TabAnimate

}