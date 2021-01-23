import axios from 'axios'

// ip

const api = axios.create({
    // baseURL: 'https://api-proffy-dev.herokuapp.com/'
    baseURL: 'http://192.168.15.13:3000/'
})

export default api
