
// examples of date types lesson :

  // primitive data types:

    //a string data:
    const name = 'ofek yafa  sheli';// strings allways have one '. 
    console.log (typeof name);

    // a number data:
    const age = 21 ;
    console.log (typeof age)

    // a boolean data
    const hasKids = false
    console.log (typeof hasKids)

    // an undefined data
    let undefinedtest;
    console.log (typeof undefinedtest)

    //a symbol data
    const sym = Symbol();
    console.log (typeof Sym);
  

  //reference data types - objects:
    
    // array:

    const hobbies = ['music', 'ofek'];
    console.log(typeof hobbies)

    // objectliteral

    const address = {
      city: 'raanana',
      country: 'israel'
    }

    console.log(typeof address)

    //dates

    const today = new Date;
    console.log(today)
    console.log(typeof today) /// all reference data types are shown as objects.
  



    //// Conversions

    let val;

// Number to string
val = String(555);
val = String(4+4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('100.30');
val = parseFloat('100.30');

// Output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);

