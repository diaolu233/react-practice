const defaultState = {
   list:[],
   allList:[],
    showType:'default'
}
export default (state = defaultState, action) => {
  
    switch (action.type) {

        case 'listdata':
           
            return {            
                list: action.data,
                allList:action.allList
            }
        case 'changeType'   :
            return {
                showType:action.showType
            } 
        default:
            return state;
    }
}
