// ==UserScript==
// @name         [DEV]HeartOfGalaxy-Script-Harrygiel
// @namespace    https://github.com/Harrygiel/HeartOfGalaxyScript/tree/dev
// @version      0.1
// @description  Automate HearthOfGalaxy things
// @author       Harrygiel
// @include      *
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/dev/js/init/PRELOAD.js
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/dev/js/init/LOADING.js
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/dev/js/init/INIT.js
// @grant        none
// ==/UserScript==

setTimeout(function(){ if(typeof game !== 'undefined' && typeof game.planets !== 'undefined'){
                          console.log("[SCRIPT] Script loaded !");
                          load.loading();
                          }
                     }, 5000);