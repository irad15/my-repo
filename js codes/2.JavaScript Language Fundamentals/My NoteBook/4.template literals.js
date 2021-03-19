

// template literal lesson:
const myname = 'irad';
const myage = '22';
const friend = 'orod';
let vals;
vals = Number([1,2,3]);
let verbs= Number(true);

//. i can write it in both ways: 1.let vals; vals=32 .2. second way is to write: let vals = 32; .//
console.log(verbs); // just to show that aboolean is converted to number by writing number and using ()'s. 
console.log(typeof verbs);

let htmlList;
// the template literal/// basicly a free text option, and if i want to add object or variables i need to write the dollar sign and braces
htmlList= `
<ul> 
 <li>name: suhiush${myname}</li>
 <li>age: ${myage} </li>
 <li>friend: ${friend} </li>
 <li>false number: ${verbs}</li>

  </ul>
`
document.body.innerHTML = htmlList;

let rok = `
hello my name is irad
<ul> 
<li>my fine name: ${name} </li>  
<li> my cute age: ${age} </li>  
<li> my best partner in crime: ${friend}</li>  
<li> my friend's name is: ${myname}</li>
</ul>

`
document.body.innerHTML = rok


