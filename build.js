const fs = require('fs')
const sassExtract = require('sass-extract')
const rollup = require('rollup')
const json = require('rollup-plugin-json')

const inputOptions = {
  input: './src/main.js',
  plugins: [ json() ]
}

const outputOptions = {
  file: 'index.js',
  format: 'iife',
  name: 'getColorName'
}

async function build () {
  const result = await sassExtract.render({
    file: './src/variables.scss'
  })

  const { global } = result.vars
  const output = Object.keys(global).reduce((colorMap, curColorName) => {
    const curColorValue = global[curColorName].value.hex
    colorMap[curColorValue] = curColorName
    return colorMap
  }, {})
  fs.writeFileSync('./src/result.json', JSON.stringify(output))

  const bundle = await rollup.rollup(inputOptions)

  bundle.write(outputOptions)
}
 
build()