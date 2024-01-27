


var orangePrice = '50';
var chocolatePrice = '5.23';
// var orangePrice = parseInt('50');
var chocolatePrice = parseFloat('5.23')
// console.log(typeof orangePrice);
// console.log(typeof chocolatePrice);

/* note: we use parseInt() and parseFloat() to convert string to Number.
 */





// how many number will show after [ doshomik ( . ) ] we can set that by using " tofixed(how many number) "
var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(total.toFixed(2) );


// positive infinity
const num = 50 /0;
console.log(num.toFixed(3));

// negative infinity
const infinity = -50 / 0;
console.log(infinity.toFixed(2));