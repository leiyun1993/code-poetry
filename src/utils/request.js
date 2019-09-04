import axios from 'axios'

// create an axios instance
const service = axios.create({
    baseURL: "/api", // api 的 base_url
    timeout: 5000 // request timeout
})

// response interceptor
service.interceptors.response.use(
    response => {
        if(response.status===200){
            return Promise.resolve(response.data);
        }else{
            return Promise.reject(response);
        }
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service