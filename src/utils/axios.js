import axios from 'client/src/utils/axios'

const instance =  axios.create({
    baseURL : process.env.REACT_APP_URL
})

export default instance
