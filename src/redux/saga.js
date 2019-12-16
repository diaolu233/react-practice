import { takeEvery } from "redux-saga/effects"
import {saga as cateSaga} from "pages/cate/store"
import { GET_LIST} from "../pages/cate/action-types"
function * sagas () {
    yield takeEvery(GET_LIST, cateSaga.action)
}
export default sagas