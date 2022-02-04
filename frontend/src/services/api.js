const axios = require('axios')
// require('dotenv').config({ path: '../.env' })
// const URL = process.env.URL_BACKEND
// console.log(URL)
const api = axios.create({
    baseURL: 'http://api-trabalho-web-deploy.herokuapp.com/'
}) 
export default api