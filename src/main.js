import variables from './result.json'

function getColorName (value) {
  let colorValue = value.toLowerCase()
  if (colorValue.length === 4) {
    colorValue += colorValue.slice(1)
  }

  return variables[colorValue] ? `${value}(${variables[colorValue]})` : value
}

export default function convertColorToVariable(str) {
  return str.split(' ').map(item => {
    if (item.startWith('#')) {
      return getColorName(item)
    }

    return item
  }).join(' ')
}
