//a la random word generator (you're welcome)
var array1=["embarrassment", "inappropriate", "protection", "alcohol", "bind", "therapist"];
var array2=["iteractive", "catalogue", "dentist", "clay", "soak", "award", "symptom"];

var randomIndex1 = Math.floor( Math.random() * array1.length );
var randomIndex2 = Math.floor( Math.random() * array2.length );

console.log(array1[randomIndex1],array2[randomIndex2]);
