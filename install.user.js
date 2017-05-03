// ==UserScript==
// @name         [DEV]HeartOfScript-Harrygiel
// @namespace    https://github.com/Harrygiel/HeartOfGalaxyScript/tree/dev-Harrygiel
// @version      0.1.0
// @description  Automate HearthOfGalaxy things
// @author       Harrygiel
// @match        https://game274411.konggames.com/gamez/0027/4411/live/*
//////////////////////////////////////////////////////////////////////////
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/dev-Harrygiel/js/lib/GAMELIB.js
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/dev-Harrygiel/js/lib/BRILLIANDLIB.js
//
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/dev-Harrygiel/js/core/UPDATEAUTOROUTECORE.js
//
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/dev-Harrygiel/js/ui/UPDATEAUTOROUTEUIMANAGER.js
//
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/dev-Harrygiel/js/buttons/UPDATEAUTOROUTEBUTTON.js
//
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/dev-Harrygiel/js/init/INIT.js
//////////////////////////////////////////////////////////////////////////
// @resource	 updateAutoRouteIcon https://rawgit.com/Harrygiel/HeartOfGalaxyScript/dev-Harrygiel/img/updatehub.png
//////////////////////////////////////////////////////////////////////////
// @grant        GM_getResourceURL
// ==/UserScript==

var script;

setTimeout(function(){
              console.log("[SCRIPT] Script loaded !");
              script = new Script();
         }, 1000);