// Practice Assignments for JavaScript Fundamentals sections


// LECTURE: Values a;nd Variables
const country = 'Iran';
const continent = 'Asia';
let population = 85;
console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types
const isIsland = false;
let language
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

// LECTURE: let, const and var
language = 'persian'

// LECTURE: Basic Operators
console.log(population / 2);
population ++ 
console.log(population);
console.log(population > 6);
console.log(population < 33);
let description = country + " is in " + continent + ",and its " + population + " million peaple speaks " + language;
console.log(description);

// LECTURE: Strings and Template Literals
description = `${country} is in ${continent},and its ${population} million peaple speaks ${language}`;
console.log(description);

// LECTURE: Taking Decisions: if / else Statements
const aboveAvearge = `${country}s population is above average.`;
const populationDiffrence = 33 - population;
const belowAverage = `${country}s population is ${populationDiffrence} million below average.`;

if (population > 33) {
    console.log(aboveAvearge);
} else {
    console.log(belowAverage);
}

// LECTURE: Type Conversion and Coercion 
/*
1. Predict the result of these 5 operations without executing them:
'9' - '5'; // = 4
'19' - '13' + '17'; // = 617 
'19' - '13' + 17; // = 23
'123' < 57; // = fals
5 + 6 + '4' + 9 - 4 - 2; // = 18
2. Execute the operations to check if you were right

// LECTURE: Equality Operators: == vs. === 

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('no border');
}  

*/
// LECTURE: Logical Operators

if ((language === 'English') && (population < 50)) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

// LECTURE: The switch Statement

switch (language) {
    case 'chinease':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
    default:
        console.log('Great language too');
}

// LECTURE: The Conditional (Ternary) Operator

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);