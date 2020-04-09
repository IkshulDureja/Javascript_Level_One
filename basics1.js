//EQUALITY
undefined
3>2
true
true
true
false
false
4<6
true
4>6
false
4>=4
true
4>4
false
6<=6
true

// == convert both the objects into similar data types to actually perform the conversion
undefined
2 == 2
true
"user" == "user"
true
"2" == 2
true

//===(if you want to check the equality not just the value but also the data type)
undefined
"2" === 2
false
"5" != 5
false
"5" !== 5
true

//true and false
true == 1
true
true === 1
false
false == 0
true
false === 0
false


//weird behaviour of null, undefined and NaN
null == undefined
true
null === undefined
false
NaN == NaN
false


//LOGICAL OPERATORS
undefined
//Loical operators just allow us to combine multiple comaprison operators
1 === 1
true
2 === 2
true
//AND
undefined
1===1 && 2===2
true
1===1 && 2===2 && 1===2
false
//OR
undefined
1===2 || 1===1
true
//NOT
undefined
(1===1)
true
!(1===1)
false
!!(1===1)
true
!!!!!(1===1)
false



var x = 1
var y = 2

// Exercise 1
"2" == y && x === 1;
true

// Exercise 2
x >= 0 || y === "2";
true

// Exercise 3
!(x !== 1) && y === (1+1);
true

// Exercise 4
y !== "2" && x < 10 ;
true

// Exercise 5
y !== x || y == "2" || x === 3;
true 
