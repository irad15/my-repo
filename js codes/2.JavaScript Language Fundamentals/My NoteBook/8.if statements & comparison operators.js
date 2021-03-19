/// if statements and comparison operators:

//if statement syntax
//if(something)
// {do something}
// else
// {do someting else}





// 1. "equal to" ifs:

const id = 100;// = is assigning and == is comparing

////1. a correct equation"
if(id==100){
console.log ("correct");
}

////2. an incorrect equation:
if (id==101){
  console.log ('correct');
} //// it will say nothing

 //however, it will say something if we define an else:

 //// 3.incorrect equation with an else:
if (id==101){
  console.log ('correct');}
  else {
    console.log('incorrect');
  }
 




  // not equal to: the sign is !=
// example:
  if(id!=101){
console.log('Correct');
  }




  // equal to value & data type sign is ===
// in this example '50' is not equal to 50, because '50' is a string and 50 is a num/ there fore we use === sign that makes a match only when value and data type are the same
  const od = '50';
if (od === 50){
  console.log('correct');
}
else{
  console.log('Incorrect')
}
// of course you can have the "not equal to value & date type sign" which is !== example:

if (od !== 50){
  console.log('correct');
}
else{
  console.log('Incorrect')
}





/// test if something is undefiened

if(typeof id !== undefined){
  console.log(`it is a number and it actually equalls to: ${id}`);
}else {
  console.log(`Ha! it's not a number you stupid!`)
}









//2. greater or less than ifs:
const ad = 100;
if (id>200){
  console.log('correct')
} else {;
  console.log('incorrect')
}
//  greater or equal:

if (ad>=100){
      console.log('correct')}
  else {console.log('incorrect')}





  // the else if command: else if is used to test other conditions:
  const color = 'yellow';
  if (color=== 'red'){
    console.log('color is red')
  } else if(color === 'blue') {
    console.log('color is blue')
  }else {
 console.log('the color is neither red or blue')
  }
/// if is the first command, then else if as much as i need, and then i finish with else










//Logical Operators;











