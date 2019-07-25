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
  name: 'convertColorToVariable'
}

async function build () {
  const result = await sassExtract.render({
    file: './src/variables.scss'
  })

  const { global } = result.vars
  const output = Object.keys(global).reduce((colorMap, curColorName) => {
    const curColorValue = global[curColorName].value.hex
    if (colorMap[curColorValue]) {
      colorMap[curColorValue] += `、${curColorName}`
    } else {
      colorMap[curColorValue] = curColorName
    }
    return colorMap
  }, {})

  fs.writeFileSync('./src/result.json', JSON.stringify(output, null, 2))

  const bundle = await rollup.rollup(inputOptions)

  bundle.write(outputOptions)
}

build()