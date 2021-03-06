// ==UserScript==
// @name         HeartOfScript-Harrygiel
// @namespace    https://github.com/Harrygiel/HeartOfGalaxyScript/tree/master
// @version      0.1.0
// @description  Automate HearthOfGalaxy things
// @author       Harrygiel
// @match        https://game274411.konggames.com/gamez/0027/4411/live/*
//////////////////////////////////////////////////////////////////////////
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/js/lib/GAMELIB.js
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/js/lib/BRILLIANDLIB.js
//
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/js/core/UPDATEAUTOROUTECORE.js
//
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/js/ui/UPDATEAUTOROUTEUIMANAGER.js
//
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/js/buttons/UPDATEAUTOROUTEBUTTON.js
//
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/js/init/INIT.js
//////////////////////////////////////////////////////////////////////////
// @resource	 updateAutoRouteIcon https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/img/updatehub.png
//////////////////////////////////////////////////////////////////////////
// @grant        GM_getResourceURL
// ==/UserScript==

var script;

setTimeout(function(){
              console.log("[SCRIPT] Script loaded !");
              script = new Script();
         }, 1000);
setTimeout(function(){ if(typeof game !== 'undefined' && typeof game.planets !== 'undefined'){
                          console.log("[SCRIPT] Script loaded !");
                          script.init();
                          }
                     }, 5000);
