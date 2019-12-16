import React, { Component, createRef } from 'react'
import { SearchWrap } from "./styledSearch"
import Catetop from "@/head/Catetop"
import Pop from "pages/cate/Popover"
import { connect } from "react-redux"
import {get} from "utils/http";
import { GET_LIST } from "../cate/action-types"

import _ from "lodash"
const mapStateToProps = state => ({
    list: state.cate.list,
    showType: state.cate.showType
}
)
const mapDispatchToProps = dispatch => ({
    dataload(url) {
        dispatch({
            type: GET_LIST,
            url: `/api/server/search/s/${url}.json`
            // server/ category / search - yanchanghui.json
        })
    }
})

@connect(mapStateToProps, mapDispatchToProps)
class Search extends Component {
    constructor() {
        super()
        this.inputRef = createRef()
    }
    state={
        typeName : "",
        inputValue:''
    }
    handleKeyup = ()=>(e)=>{
        // if (e.keyCode === 13){
        //     let input = this.inputRef.current
        //     this.props.dataload(input.value)
        //     this.setState(
        //         {
        //             typeName: "search"    
        //         }
        //     )

            
        // }

        let input = this.inputRef.current
        this.props.dataload(input.value)
        this.setState(
            {
                typeName: "search"
            }
        )
        
    }
    render() {
        console.log(this.props.match)
        return (
            <SearchWrap>
                <Catetop title="搜索"></Catetop>
                <div className="search-box">
                    {/* <input type="text" onKeyUp={this.handleKeyup()} ref={this.inputRef} /> */}
                    <input type="text" onChange={_.debounce(this.handleKeyup(),500)} ref={this.inputRef} />
                    <i></i>
                    <span>取消</span>
                </div>
                <Pop typeName={this.state.typeName}></Pop>
            </SearchWrap>
        )
    }
}
export default Search