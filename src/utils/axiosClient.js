import axios from "axios"
import qs from "qs"

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  paramsSerializer: (params) => {
    return qs.stringify(params, { skipNulls: true })
  }
})



export default axiosClient