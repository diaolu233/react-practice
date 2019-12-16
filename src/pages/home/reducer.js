let cityname = localStorage.getItem("cityname")
let cityId = localStorage.getItem("cityId")
let city = localStorage.getItem("city")
let isShow = JSON.parse(localStorage.getItem("show")) 

const defaultState = {
    city: city || "index",
    cityname: cityname || "全国",
    cityId: cityId || "-1",
    selectedTab:"home",
    isShow: typeof (isShow) === "object" ? true : isShow
}
export default (state = defaultState, action) => {
   
    switch (action.type) {
        case 'city':
            return {
                city: action.payload.py,
                cityname: action.payload.cityname,
                cityId: action.payload.cityId
            };
        case "cates":           
            return{
                ...state,
                selectedTab: action.payload.type
            }
        case "show":
           
             return{
                 ...state,
                 isShow: action.payload
             }

        default:
            return state;
    }
}
