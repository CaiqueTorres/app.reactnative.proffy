import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-proffy-dev.herokuapp.com/'
})

export default api
