// ==UserScript==
// @name         HeartOfScript-Harrygiel
// @namespace    https://github.com/Harrygiel/HeartOfGalaxyScript/tree/dev
// @version      0.0.2
// @description  Automate HearthOfGalaxy things
// @author       Harrygiel
// @include      *
// @require      http://www.kongregate.com/games/Cheslava/heart-of-galaxy
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/js/init/INIT.js
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/js/core/BRILLIANDUPDATE.js
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/js/buttons/UPDATEAUTOROUTE.js
// @resource	 updateAutoRouteIcon https://rawgit.com/Harrygiel/HeartOfGalaxyScript/img/updatehub.png
// @grant        GM_getResourceURL
// ==/UserScript==

setTimeout(function(){ if(typeof game !== 'undefined' && typeof game.planets !== 'undefined'){
                          console.log("[SCRIPT] Script loaded !");
                          script.init();
                          }
                     }, 5000);