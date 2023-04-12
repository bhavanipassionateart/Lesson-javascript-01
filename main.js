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
 
let mikeAdvanced = {
    firstName:`Mike`,
    lastName: `Back`,
    age :38,
    hobbies: ['music', 'programmming', 'reading', 'games']
};
console.log(mikeAdvanced); //object
let mikeJSON = JSON.stringify(mikeAdvanced); // Object to JSON
console.log(JSON.stringify(mikeAdvanced)); // JSON
console.log(mikeJSON);
console.log(JSON.parse(mikeJSON)); // Back to object

// Loop over object
for(let propertyName in mikeAdvanced) {
    let propertyValue = mikeAdvanced[propertyName];
    console.log(propertyName,propertyValue);
}

//Loop through object and array inside of object        // Loop over object
for(let propertyName in mikeAdvanced) {                 // Get Value from key
    let propertyValue = mikeAdvanced[propertyName];     // check if array?
    if(Array.isArray(propertyValue) === true) {         // Loop over array
        for(let hobby of propertyValue) {
            console.log("Hobby: " +hobby);
        }
    }else {
            console.log(propertyName + ":" +propertyValue);
        }
    }
// Connection to HTML
// Ask JS to create a new element
let myDiv = document.createElement(`div`);
// Add some HTML
myDiv.innerHTML = `
<h1>Hello from JS!</h1>
<p> This text is from JavaScript, my age is ${mike.age}</p>
`;
// Grab the body tag
let body = document.querySelector(`body`);

// Add the div to the HTML
body.append(myDiv);

// Another way to add data
let myBands = [
    {
        name: `The Beatles`,
        genre: `Pop`
    },
    {
        name: `The Rolling Stones`,
        genre: `Rock`
    }
];

// Ggrab the bands div
let bandsDiv = document.querySelector(`#bands`);
for (let band of myBands){
    bandsDiv.innerHTML += `
    <div class ="band">
        <h2> ${band.name}</h2>
        <p> Genre: ${band.genre}</p>
    </div>
    `;
}

// Functions
function sayHello() {
    console.log(`Hello`);
}
const sayHello2 = () => {
    console.log(`Hello 2`);
}
sayHello();
sayHello2();

// Different ways of declaring the same function 
function add(a,b){
    return a+b;
}
// Arrow function
const add2 = (a,b) => {
    return a+b;
}

// Function expression
const add3 = function(a,b) {
    return a+b;
}
// Arrow function with implict return
const add4 = (a,b) => a+b;

// Arrow function with implicit return and one parameter
const add5 = a => a+5;
 

console.log(add(1,2));
console.log(add2(1,2));
console.log(add2(1,2));
console.log(add2(1,2));
console.log(add2(1));



class Person {
    constructor(name,age,hobby){
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }

    greetings() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age}`);
        console.log('I enjoy:' +this.hobby);
    }
}
const mikeClass = new Person('Mike', 38,'Music');
mikeClass.greetings();
console.log(mikeClass.hobby);