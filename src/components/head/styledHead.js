import styled from "styled-components"
import icon from "assets/images/icon.png"

export const CatetopWarp = styled.div`
        position: relative;
       h2{
           height:.40rem;
           line-height: 0.4rem;
           /* width: calc(100% - .8rem); */
           font-size: .17rem;
           padding: 0 .4rem;
           font-weight: normal;
           text-align:center;
       }
       .return{
          
           width: .18rem;
            height: .18rem;
            position: absolute;
            display: block;
            top: .11rem;
            left: .15rem;
            color: #323232;
            background:url(${icon}) no-repeat;
             background-size: .8rem;
           background-position: 0px -3.89rem;
       }
       .search{
            right: .15rem;
          
            width: .18rem;
            height: .18rem;
            position: absolute;
            display: block;
            top: .11rem;
            color: #323232;
            background:url(${icon}) no-repeat;
            background-size: .6rem;
            background-position: 0px -4.72rem;
       }
`