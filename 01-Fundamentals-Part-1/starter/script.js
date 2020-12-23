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

let getH1Test = document.getElementsByTagName("h1")[0];

//  Storing variables
let firstName = 'King Lavon ';
let age = 25;

getH1Test.innerHTML = firstName + age + '<br>';
getH1Test.innerHTML += firstName + age+ '<br>';
getH1Test.innerHTML += firstName + age+ '<br>';
getH1Test.innerHTML += firstName + age+ '<br>';
