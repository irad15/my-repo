
/// arrays lesson

const numbers = [41,65,235,6978,754,32];
const numbers2= new Array(42,654,23,7876,543,2);
const stringas = ['hello' , 'ofek', 'my', 'love'];
const mixed2 = ['hey',4,true, null,new Date(),{a:54, s:64}];


let rob;
// array length
rob = mixed2.length;
// check if array is an actuall array
rob = Array.isArray(mixed2);
//find a value in array
rob = mixed2[5];
// find index of a value
rob = mixed2.indexOf(null);


// how to mutate arrays:

//1. add to the end of an array
mixed2.push(13);
// add to the frint if an array
mixed2.unshift(231);
// take of at the end of an array
mixed2.pop();
 // take of at the start of an array;
 mixed2.shift();
 //splice out value from array (where we wanna start cutting, where we wanna end cuttinh)
 mixed2.splice(3,4);
//reverse the array
mixed2.reverse();
//concatenate arrays
rob = numbers.concat(numbers2);
//sorting arrays- will sort only by the first digit. use the compare function!
rob = numbers.sort();
//the compare function!
rob = numbers.sort
(function (x,y){return x-y});
//the reverse compare function
rob = numbers.sort 
(function (x,y){return y-x});

// a demonstration of a function called "find"

function under50(num){
  return num < 50;
}
rob = numbers.find(under50);


console.log(mixed2);
console.log(rob);
