import axios from 'axios'
// create an axios instance
const service = axios.create({
  baseURL: 'http://api.love.anheqiaobei.com',
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000 // request timeout
})
// request interceptor
service.interceptors.request.use(
  config => {
    config.headers={'Accept':'application/json','Authorization':'Bearer'+sessionStorage.token}
    // config.headers['X-Token'] = '';
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(    
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    // if (res.code != 0) {
    //   alert(res.message);
    //   // Message({
    //   //   message: res.message || 'Error',
    //   //   type: 'error',
    //   //   duration: 5 * 1000
    //   // })
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
      return res
    // }
  },
  error => {
    Indicator.close();
    console.log('err' + error) // for debug
    alert(error.message);
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
