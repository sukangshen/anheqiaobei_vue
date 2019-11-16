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
    const res = response.data;
    if (res.code != 200) {
        alert('不等于200');
      alert(res.message);
      return res;
    } else {
        alert('等于200');
      return res
    }
  },
  error => {
      alert('错误一个');
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
