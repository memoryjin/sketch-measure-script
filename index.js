var convertColorToVariable = (function () {
  'use strict';

  var variables = {
  	"#ffffff": "$color-brand1-1、$color-data1-1、$color-data1-2、$color-data1-3、$color-data1-4、$color-data1-5、$color-data1-6、$color-data1-7、$color-data1-8、$color-white、$color-other-1、$color-other-2、$color-other-3、$color-fill1-1、$color-text1-7、$color-line1-5",
  	"#0055ff": "$color-brand1-6、$color-notice-2、$color-help-2、$color-link-1",
  	"#334d80": "$color-brand1-9",
  	"#000000": "$color-black、$color-transparent",
  	"#d8fff2": "$color-success-1",
  	"#14cc8f": "$color-success-2",
  	"#00b377": "$color-success-3",
  	"#009966": "$color-success-4",
  	"#e6eeff": "$color-notice-1、$color-help-1",
  	"#0048d9": "$color-notice-3、$color-help-3、$color-link-3、$color-brand1-7",
  	"#003cb3": "$color-notice-4、$color-help-4、$color-link-2、$color-brand1-8",
  	"#ffdecc": "$color-warning-1",
  	"#ff6914": "$color-warning-2",
  	"#fa5a00": "$color-warning-3",
  	"#e65300": "$color-warning-4",
  	"#ffe6ea": "$color-error-1",
  	"#ff274b": "$color-error-2",
  	"#e6173a": "$color-error-3",
  	"#cc1433": "$color-error-4",
  	"#f2f4f9": "$color-line1-1、$color-fill1-2",
  	"#dadee6": "$color-line1-2",
  	"#cfd3d9": "$color-line1-3",
  	"#878d9a": "$color-line1-4、$color-text1-5",
  	"#ebedf2": "$color-fill1-3",
  	"#e5e9f2": "$color-fill1-4",
  	"#cccccc": "$color-text1-1",
  	"#999999": "$color-text1-2",
  	"#666666": "$color-text1-3",
  	"#333333": "$color-text1-4",
  	"#f4f8ff": "$color-fill1-6",
  	"#293d66": "$color-text1-6",
  	"#142f66": "$color-brand1-10",
  	"#d9e1f1": "$color-fill1-5",
  	"#f0f2f5": "$color-fill1-7",
  	"#f5f6fa": "$color-fill1-8",
  	"#ff8f00": "$color-warning-6",
  	"#ffeed9": "$color-warning-5"
  };

  function getColorName (value) {
    let colorValue = value.toLowerCase();
    if (colorValue.length === 4) {
      colorValue += colorValue.slice(1);
    }

    return variables[colorValue] ? `${value}(${variables[colorValue]})` : value
  }

  function convertColorToVariable(str) {
    let rowList = str.split(';').filter(row => row);

    rowList = rowList.map((row) => {
      let [label, value] = row.split(':');
      value = value
        .split(' ')
        .map(item => {
          item = item.trim();
          return item.startsWith('#') ? getColorName(item) : item
        })
        .join(' ');

      return `${label}: ${value}`
    });

    return rowList.join(';')
  }

  return convertColorToVariable;

}());
