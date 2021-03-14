import axios from 'axios'

import isProd from './isProd'


axios.defaults.headers.post['Accept'] = "*/*"
axios.defaults.headers.post['Content-Type'] = "json"
axios.defaults.withCredentials = true


const APIlink = () =>
  isProd() ?
    "130.193.35.61:3170"
    :
    "http://localhost:3170"

const post = async (path, data, config = {}) =>
  (await axios.post(
    APIlink() + path,
    data,
    config
  )).data


export {
  post,
}