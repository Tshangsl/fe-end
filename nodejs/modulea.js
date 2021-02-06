function  add(a,b) {
    return a+b;
}
//exports本身是一个对象 add在该对象下添加一个add方法
exports.add=add;

//导出的是exports对象
exports.minus = function (a,b) {
    return a-b;
}

//直接导出的=后面的东西
module.exports = function (a,b) {
    return a-b;
}