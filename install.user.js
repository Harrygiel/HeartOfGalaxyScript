// ==UserScript==
// @name         HeartOfScript-Harrygiel
// @namespace    https://github.com/Harrygiel/HeartOfGalaxyScript/tree/master
// @version      0.0.3
// @description  Automate HearthOfGalaxy things
// @author       Harrygiel
// @match        https://game274411.konggames.com/gamez/0027/4411/live/*
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/js/init/INIT.js
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/js/lib/BRILLIANDLIB.js
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/js/core/BRILLIANDUPDATE.js
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/js/buttons/UPDATEAUTOROUTE.js
// @resource	 updateAutoRouteIcon https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/img/updatehub.png
// @grant        GM_getResourceURL
// ==/UserScript==

setTimeout(function(){ if(typeof game !== 'undefined' && typeof game.planets !== 'undefined'){
                          console.log("[SCRIPT] Script loaded !");
                          script.init();
                          }
                     }, 5000);
