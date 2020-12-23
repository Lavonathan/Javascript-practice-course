//////////////////////////////
// script.js
// PURPOSE: Practicing fundamentals of js.
// AUTHOR: Lavon Marquise Edwards
// DATE:December 22, 2020
// NOTES: 
/////////////////////////////

let js = "testing";
if (js === "testing");

js += " " + (41 + 8 + 23 - 10);
alert(js);

console.log(js);

let getH1Test = document.getElementsByTagName("h1")[0];
getH1Test.innerHTML = js;