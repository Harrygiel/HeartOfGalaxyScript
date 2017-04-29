// ==UserScript==
// @name         HeartOfScript-Harrygiel
// @namespace    https://github.com/Harrygiel/HeartOfGalaxyScript
// @version      0.1
// @description  Automate HearthOfGalaxy things
// @author       Harrygiel, Brilliand
// @include      *kongregate.com/games/Cheslava/heart-of-galaxy
// @grant        none
// ==/UserScript==

var script = document.createElement('script');
script.id = 'HeartOfScript';
script.src = 'https://github.com/Harrygiel/HeartOfGalaxyScript/tree/dev/js/init/REQUIRE.js';
console.log("SCRIPT: Script added");
document.head.appendChild(script);