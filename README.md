#### sketch-measure-script

将sketch-measure导出的16进制颜色转换成主题包的颜色变量，改写了sketch-measure的部分源代码，考虑到
后续主题包的颜色变量可能增加，所以将这部分代码抽离出来，后续主题包的升级可以不用重新安装插件，直接改变远程
的js脚本即可。