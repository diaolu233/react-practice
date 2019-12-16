import styled from "styled-components"
import icon from "assets/images/icon.png"
import ellipsis from "@/styles/ellipsis"
export const iWrap = styled.i`
        
         
                position: absolute;
                right: 7%;
                top: .2rem;
                width: 0.15rem;
                height: .15rem;
                display: block;
                background:url(${icon}) no-repeat;
                background-size: 1.5rem;
                background-position: 0 -29.4rem;
               
        
` 


export const CatebarWrap = styled.div`
    height:.45rem;
    
    ul{
       display:flex;
       height:100%;
        li{
          flex:1;
          height:100%;
          text-align:center;
          line-height:.45rem;
          position: relative;
           color:#999ea3;
          i{
                position: absolute;
                right: 7%;
                top: .2rem;
                width: 0.15rem;
                height: .15rem;
                display: block;              
                background:url(${icon}) no-repeat;
                background-size: 1.5rem;
                background-position: 0 -29.4rem;
               
          }
            }
    }
    
`
export const BWrap = ellipsis(
    styled.b`
        color: #333;
        height: .4rem;
        line-height: .2rem;
    `
)
export const CatelistWrap = styled.div`
   width:3.35rem;
   height:1.29rem;
   display:flex;
   margin:auto;
   .img-box{
       width:.85rem;
       height:1.13rem;
       position: relative;
       img{
           width:100%;
           height:100%;
           border-radius: .1rem;
       }
       .status{
          
           display: block;
            height: .20rem;
            line-height: .20rem;
            color: #fff;
            font-style: normal;
            position: absolute;
            top: 0;
            font-size: .11rem;
            font-weight: bold;
            border-radius: .1rem 0;
            padding: 0 .05rem;
            left: 0;
            text-align: center;
}
.sale{
     background: linear-gradient(to right, #3dd9c1, #00a0c2);
}
.ticketing{
    background: linear-gradient(to right, #ff7e6f, #ff2959);
    box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
}

       

   }
   .info-box{
       width:2.35rem;
       height:1.12rem;
       margin-left: .15rem;
       span{
             display: block;
             color: #999ea3;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
           
       }
      .date{
         margin-top: 0.1rem;
      }
      .area{
              font-size: 0.12rem;
      }
      .price{
           margin-right: 0.05rem;
           font-size: 0.14rem;
           color: #ff3a56;
      }
   }

`
export const MoreWrap = styled.div`
     height: .27rem;
     margin-bottom:.2rem;
     span{
        display:block;
        width: 1rem;
        height: .27rem;
        line-height: .27rem;
        text-align: center;
        border-radius: 1rem;
        margin: auto;
        background: #fff;
        box-shadow: 0px 2px 6px 0px rgba(255, 58, 86, 0.2);
        color: rgba(255, 58, 86);
     }
`