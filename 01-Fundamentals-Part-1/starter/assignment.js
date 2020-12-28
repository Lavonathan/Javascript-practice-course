//////////////////////////////
// assignment.js
// PURPOSE: The practice assignment for JS fundamentals 1.
// AUTHOR: Lavon Marquise Edwards
// DATE:December 23, 2020
// NOTES: 
/////////////////////////////

//  Lecture: Values and Variables
//let country = "Canada";
//let continent = "North America";
let canadaPopulation = 37.59 * 1000000;



//  Lecture Data Types
let isIsland = false;
let language;

console.log('isIsland: ' + isIsland);
console.log('population: ' + canadaPopulation);

//  Lecture let, const, and var
language = "english";

const country = "Canada";
const continent = "North America";
//continent = "south america";

console.log('Country: ' + country);
console.log('Continent: ' + continent);

//////////////////////////////////////////////
//  Lecture Basic Operators.
const halfPopulation = canadaPopulation / 2;
canadaPopulation++;
console.log("population: " + canadaPopulation)

const finlandPopulation = 6 * 1000000;
console.log(canadaPopulation > finlandPopulation)

const averageCountryPopulation = 33 * 1000000;
console.log(canadaPopulation < averageCountryPopulation);

let description = country + "is in " + continent + ", and its " + canadaPopulation + " million people speak " + language;

console.log(description);

//////////////////////////////////////////////
//  Lecture ....