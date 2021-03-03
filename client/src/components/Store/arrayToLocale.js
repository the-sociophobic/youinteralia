import _ from 'lodash'


const arrayToLocale =  obj => {
  var result = {}

  result.rus = {}
  // result.fr = {}
  result.eng = {}

  _.transform(obj,
    (res, value, key) => {
      res.rus[key] = value[0]
      // res.fr[key] = value[1]
      res.eng[key] = value[1]
    }, result)

  return result
}


export default arrayToLocale