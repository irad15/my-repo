
 ///Dates and Time Lesson

 let vol;

 const hayom = new Date(); /// this is the current time

// different ways to write dates:
let birthdate = new Date ('11-11-1999  23:00');
birthdate = new Date ('november 11 1999  23:00'); 
birthdate = new Date ('11/11/1999  23:00');




 vol = birthdate;
 vol = hayom.getMonth();
vol= hayom.getDate();
 vol = hayom.getDay();
 vol = hayom.getFullYear();
 vol = hayom.getHours();
 vol = hayom.getMinutes();
 vol = hayom.getSeconds();
 vol = hayom.getMilliseconds();
 vol = hayom.getTime();

birthdate.setMonth(5);
birthdate.setDate(12);
birthdate.setFullYear(2002);
 


 console.log(birthdate);


