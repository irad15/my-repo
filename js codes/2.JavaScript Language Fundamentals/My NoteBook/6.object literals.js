
/// Object Literal Lesson {  curly braces  }
 
const ofek = {
FirstName: 'Ofek',
MiddleName: 'Cleo',
LastName: 'Sorek',
age:"21",
hobbies:  ['being a perfect person', 'Irad','sports'],
address: {
  city: 'Hod Hasharon',
  street: 'Y.L Perets'
},
giveBirthYear: function(){
  return 2020 - this.age;
  
  }
  

}

let valso;
valso = ofek;
//how to get a specific value
valso = ofek.age;
valso = ofek.address.street;
valso = ofek. hobbies;
vaslo = ofek.giveBirthYear();
console.log(valso);
 ///

