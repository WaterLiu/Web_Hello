// function foo1 (){
//     var that = this;
//     setTimeout(function () {
//         console.log(this);
//         console.log(this.b);
//     },1000)
//
//     console.log('foo1' + this);
//
// }
// var obj1 = {
//     b: 2
// };
// foo1.call(obj1);

// (function(x,y){
//     alert(x+y);
//     return x+y;
// }(3,4));