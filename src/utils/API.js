import axios from 'axios'

import isProd from './isProd'


axios.defaults.headers.post['Accept'] = "*/*"
axios.defaults.headers.post['Content-Type'] = "json"
axios.defaults.withCredentials = true


const APIlink = () =>
  isProd() ?
    "https://api.tochkadostupa.spb.ru"
    :
    "http://localhost:3070"

const post = async (path, data, config = {}) =>
  (await axios.post(
    APIlink() + path,
    data,
    config
  )).data


export {
  post,
}