// ==UserScript==
// @name         [DEV]HeartOfGalaxy-Script-Harrygiel
// @namespace    https://github.com/Harrygiel/HeartOfGalaxyScript/tree/dev
// @version      0.2
// @description  Automate HearthOfGalaxy things
// @author       Harrygiel
// @include      *
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/dev/js/init/PRELOAD.js
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/dev/js/init/LOADING.js
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/dev/js/init/INIT.js
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/dev/js/lib/BRILLANDLIB.js
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/dev/js/core/BRILLANDUPDATE.js
// @resource	 updateAutoRouteIcon https://rawgit.com/Harrygiel/HeartOfGalaxyScript/dev/img/updatehub.png
// @grant        GM_getResourceURL
// ==/UserScript==

setTimeout(function(){ if(typeof game !== 'undefined' && typeof game.planets !== 'undefined'){
                          console.log("[SCRIPT] Script loaded !");
                          load.loading();
                          }
                     }, 5000);