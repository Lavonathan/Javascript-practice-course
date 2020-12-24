//////////////////////////////
// script.js
// PURPOSE: Practicing fundamentals of js.
// AUTHOR: Lavon Marquise Edwards
// DATE:December 22, 2020
// NOTES: 
/////////////////////////////

let js = "testing";
//if (js === "testing") {alert(js)};

js += " " + (41 + 8 + 23 - 10);
//alert(js);

console.log(js);

let getH1Test = document.getElementsByTagName("h1");
let firstH1OnPage = getH1Test[0];

//  Storing variables
let firstName = 'King Lavon ';
let age = 25;

firstH1OnPage.innerHTML = firstName + age + '<br>';
firstH1OnPage.innerHTML += firstName + age+ '<br>';
firstH1OnPage.innerHTML += firstName + age+ '<br>';
firstH1OnPage.innerHTML += firstName + age+ '<br>';

//  Constants, that you know will never change should be written in all uppercase.
const PI = 3.14159;  

//Can't reasign constants
//PI = 5;
firstH1OnPage.innerHTML += firstName + PI+ '<br>';
