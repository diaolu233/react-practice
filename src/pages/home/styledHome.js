import styled from "styled-components"
import icon from "assets/images/icon.png"
import ellipsis from "@/styles/ellipsis"
export const HeaderWrap = styled.div`
    height:.48rem;
    background: linear-gradient(to right, #ff7e6f, #ff2959);
    box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
    padding: .04rem .15rem .04rem .1rem;
    .header-box{
        display:flex;
        align-items:center;
        .area-txt{
            width:.65rem;
            height:.40rem;
            color:#fff;
            font-size:.12rem;
            /* line-height:.40rem; */
            display:flex;
            justify-content:center;
            align-items:center;

        }
        .search{
            width:2.85rem;
            height:.34rem;
            display:flex;
            justify-content:center;
            align-items:center;
            border-radius: 1rem;
            background:#fff;
            font-size:.14rem;
            span{
                margin-left:.1rem;
            }
        }
    }
`


export const SlideWrap = styled.div`
  height: 0;
  font-size: 0;
  padding-bottom: 40%;
  border-bottom-right-radius:.1rem;
  border-bottom-left-radius:.1rem;
  img {
    width: 100%;
    border-bottom-right-radius:.1rem;
    border-bottom-left-radius:.1rem;
  }
 .am-wingblank.am-wingblank-lg{
     margin-left:0;
     margin-right:0;
 }
 .am-wingblank{
     margin-left:0;
     margin-right:0;
 }
`
export const CateWarp = styled.div`
   padding: .25rem .2rem;
   ul{
        width:100%;
        height:100%;
        
        p{
            width:100%;
            height:.55rem;
            display:flex;
            /* flex-wrap:wrap; */
            li{
                width:25%;
                height:.55rem;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;    
                color: rgb(123, 129, 135);
                i{
                    display:block;
                    width:.36rem;
                    height:.36rem;
                    background:url(${icon}) no-repeat;
                    background-size:.75rem;
                   
                }
            }
        }
        >p:last-child{
            margin-top:.25rem;
        }
   }
`
export const ActiveWrap = styled.div`
    width:3.35rem;
    height:1.52rem;
    /* border-radius: .1rem; */
    margin: .2rem;
    img{
        width:100%;
        height:100%;
        border-radius: .1rem;
    }
`
export const Bwrap = ellipsis(
    styled.b`
            font-size: .13rem;
            height: .34rem;
            line-height: .18rem;      
            margin-top: 0.05rem;
            font-weight: bold;        
    `
)
export const TjBox = styled.ul`
   
`
export const RecItem = styled.li`
     
                width:33.33%;
                height:2.08rem;
                margin-bottom: .12rem;
                padding:.15rem;
                img{
                    width:100%;
                    height:1.40rem;
                }           
                .date{
                    font-size: .11rem;
                    color: #999;
                    display: block
                }
                .price{
                    margin-top: .01rem;
                    color: #b5bbc1;
                    font-size: .1rem;
                    display: block;
                    b{
                        color:#ff3a56;
                        font-size: 0.13rem;
                        margin-right: 0.05rem;
                    }
                }
            
`
export const RecommendWrap = styled.div`
    width:100%;
    .title{
       color:#b5bbc1;
       height:.38rem;
       font-size: .22rem;
       margin-left: .2rem;
       margin-right: .2rem;
       margin-bottom: 0.15rem;
       span{
           margin-right:.1rem;
           &.active{
               color:#000;
           }
       }
    }
    .inner-box{
        /* width: calc(100% - .4rem); */
        /* margin: 0 .2rem; */
        position: relative;
        height:4rem;
        overflow:scroll;
      
        ul{
            width:100%;
            /* height:4rem; */
            display:flex;
            flex-wrap:wrap;
            position: absolute;
            top:0;
            left:0;
            background:#fff;
            /* justify-content:space-between; */
          
        }
        .tj{
           
        }
        .cg{
           
        }

    }
    .more{
        height:.3rem;
        background: #fff7f7;
        line-height: .3rem;
        text-align: center;
        margin-bottom: 0.1rem; 
      
    }
`
export const CgBox = styled.ul`
     
`
export const VenueWrap = styled.li`
     width:50%;
     padding:.15rem;
     margin-bottom: .12rem;
     img{
         width:100%;
         height: 1.40rem;
         border-radius: .1rem;
     }
     b{
        font-size: .13rem;
        margin-top: 0.05rem;
     }
     span{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: .11rem;
        color: #999;
        display: block;
     }

` 



