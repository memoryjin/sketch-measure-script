import variables from './result.json'

function getColorName (value) {
  let colorValue = value.toLowerCase()
  if (colorValue.length === 4) {
    colorValue += colorValue.slice(1)
  }

  return variables[colorValue] ? `${value}(${variables[colorValue]})` : value
}

export default function convertColorToVariable(str) {
  let rowList = str.split(';').filter(row => row)

  rowList = rowList.map((row) => {
    let [label, value] = row.split(':')
    value = value
      .split(' ')
      .map(item => {
        item = item.trim()
        return item.startsWith('#') ? getColorName(item) : item
      })
      .join(' ')

    return `${label}: ${value}`
  })

  return rowList.join(';')
}
