import styled from "styled-components"
import icon from "assets/images/icon.png"
export const SearchWrap = styled.div`
    .search-box{
        height:.34rem;
        margin: .1rem .2rem 0;
        position: relative;
        display:flex;
        input{
            /* height:.34rem;
            display:block;
            width:100%;
            border:0; */
            font-size: .13rem;
            padding: 0 .3rem;
            width: 100%;
            height: .34rem;
            border: none;
            background: #f3f4f5;
            border-radius: 1rem;
           
        }
        i{
            position: absolute;
            top: .1rem;
            left: .1rem;
            width: .14rem;
            height: .14rem;     
            background:url(${icon}) no-repeat;
            background-size: 1.5rem;
            background-position: 0 -28.76rem;
        }
        span{
            width: .45rem;
            height: .34rem;
            line-height: .34rem;
            text-align: center;
            display: block;
            color: #5f646a;
            font-weight: normal;
            /* position:absolute; */
        }
    }
`