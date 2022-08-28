
//ES5 
// var calArea = function(height, width){
//     height = height || 50;
//     width = width || 80
//     return height  * width;
// }

// console.log(calArea(2,4));

//ES6 
var calcArea = function(height=4, width=10){
    return height * width;
}
calcArea(2,7)