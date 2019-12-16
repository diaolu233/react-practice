import {combineReducers} from "redux"
import {reducer as city} from "pages/home/store"
import {reducer as cate} from "pages/cate/store"
export default combineReducers({
    home:city,
    cate:cate
})