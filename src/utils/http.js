const axios = require('axios');
let data = new FormData();
data.append('params', 'datestrEscape=all&datestr=all&type=1&tagstr=all&datestrSelected=all&typebjx=all&orderstype=all&filter=all&total=750&typeajx=all&cityjx=all&keyword=&pagenum=2')
export const get = (
    {
        url
    }
)=>{
  return axios(
      {
          url
      }
  )
  .then((result)=>{
      return result
  })
  .catch((err)=>{
     
     return err.message
  })
}


export const post = ({
  url

  
})=>{
       return axios(
        {
                    url,
                    data,
                    method:"post"
        }
        )
        .then((result) => {
            return result
        })
        .catch((err) => {   
            return err.message
        })
}


// export const post = ({url,data}) => {
//     return axios({
//         url,
//         method: 'POST',
//         data
//     })
//         .then(result => {
//             return result
//         })
//         .catch((err) => {
//             return err.message
//         })
// }
