// 保留两位小数向上取
export const keep2point = (number1) => {
  let number = number1.toString()
  if (number !== '' && number !== undefined && number !== null) {
    if (number.indexOf('.') !== -1) {
      if (number.length - number.indexOf('.') > 3) {
        return Math.ceil(number * 100) / 100
      } else {
        return number
      }
    } else {
      return number
    }
  }
}