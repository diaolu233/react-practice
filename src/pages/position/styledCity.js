import styled from "styled-components"
export const Position = styled.div`
     height:6.67rem;
     overflow:scroll;
     color: #999;
      h3{
            padding: .2rem .2rem 0;
            font-size: 0.13rem;
            font-weight:normal;
        }
    .currCity{
      
        font-size: 0.13rem;
        padding-left: 0.2rem;
        padding-top: 0.3rem;
        .city{
            color: #ff3a56;
            font-size: 0.14rem;
            margin-left: 0.1rem;
        }
    }
    .hotCity{
       
        ul{
            padding: .1rem .2rem;
            overflow: hidden;
            text-align: center;
            display:flex;
            flex-wrap:wrap;

            li{
            width:25%;
            height:.40rem;
            line-height:.40rem;
            }
        }
    }
`