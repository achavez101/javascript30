
// Cannot be a reserved keyword
// Should have meaningful names
// Cannot start with a number
// Cannot contain a space or hyphen

// let firstName = 'Ace';
// let lastName = 'C';


// reassign use let
// no reassign use const
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// Primitives
let name = 'Ace'; //String Literal
let age = 15; //Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined;
let lastName = null; // used to clear the value of a variable
let selectedColor = 'red';


// Reference Types 
// Object
let person = {
    namer: 'Ace',
    aged: 15
};
// Dot Notation 
person.name = 'Acer';

// Bracket Notation
person['name'] = 'Acerr';

console.log(person.name);

// Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length);

// Functions
function greet(named, lastNamed) {
    console.log('Hello ' + named + ' ' + lastNamed);
}

greet('Aced', 'Two');
greet('Marry', 'Rose');

//function that calculates a value
function square(number) {
    return number * number;
}

console.log(square(2));