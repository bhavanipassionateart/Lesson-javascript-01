/* Introduction*/

// Hello World!
console.log('Hello, world!');

// variables
let greeting = 'Hi from a variable' 
console.log(greeting);
greeting = 3;
console.log(greeting);

greeting ="Hellow";
const PI = 3.1415;

//printing
//Concatenation
console.log(greeting + 'PI is : ' +PI);

// Interpolation and templating literals
console.log(' $ {greeting},PI is : ${PI}');

// Be careful with floats
console.log(0.1 + 0.2);

// Equality
console.log(1==1); //true
console.log(1=='1') // true - will convert sa
console.log(1==='1'); // false

// Loose typing and conversion
let myNumber =5;
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber + 5); // 10

myNumber ='5';
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber +5);// '55'

/*control flows*/
//if
let myAge =38;
if(myAge>=40){
    console.log('you are getting old!');
 } else {
       console.log('You \' re still young') ;
    }
    //Ternary operation
    myAge ===38 ?
     console.log('Old'):
     console.log('not old');

     //boolean statement ? true : false


/*
camelCase // Praxis in JS functions,vars
PascalCase // Classes
snake_case // often not used
*/

/* Loops */
// for
for (let i =0 ; i<5; i++){
    console.log(i);
}

let persons = [
    'Mike',
    'Emma',
    'Ally',
    'Lizzie'
];

// Log entire array
console.log(persons);

//length of array
console.log(persons.length);

// Get the first person
console.log(persons[0]);

// Get the last person
console.log(persons[persons.length-1]);

// Get a slice of the array
 
let newPersons = persons.slice(0,3); // first 3

console.log(newPersons);

// Add to start of array
persons.unshift('Acke');

// Add to end of array
persons.push('Lotta');
console.log(persons);

// Remove from start of array
persons.shift();

// Remove from end of array
persons.pop();

console.log(persons);

// Loop over arrays
for(let person of persons){
    console.log(persons);
}

//older but still works
for(let i=0; i<persons.length; i++){
    console.log(persons[i]);
}

//Lambda loop
persons.forEach(x=> console.log(x));

//objects
let mike = {
    firstName: 'Mike',
    lastName: 'Bäck',
    age:38,
    hobby: 'music'
};

console.log(mike);

console.log(`First name: ${mike.lastName}`);
console.log(`First name : ${mike["firstName"]}`);//one more way
let mikeStr = `${mike.firstName} ${mike.lastName}, age: ${mike.age}`;
console.log(mikeStr);

