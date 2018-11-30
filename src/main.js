import variables from './result.json'

export default function getColorName (value) {
  value = (value.split(' ')[0] || '').toLowerCase()
  // 将#333 -> #333333
  if (value.length === 4) {
      value = value + value.slice(1)
  }
  return variables[value] || value
}
