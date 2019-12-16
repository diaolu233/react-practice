import { put } from 'redux-saga/effects'
import {get} from "utils/http"
function  * loadData (action) {
   
    try {
       
        const result = yield get({
            url:action.url
        })

        yield put({
            type:"listdata",
            data: result.data.data,
            allList: result.data.data.typeas
        })

    } catch (error) {
        
    }
}
export  {
    loadData as action
}