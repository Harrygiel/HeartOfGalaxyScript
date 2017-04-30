# HeartOfGalaxyScript

## WARNING
### Generals warning
A script is not something to take lightly. Some of them can easly integrate a keylogger. Be aware of the comments of others users, and check the code yourself if you are able to.
An easy way to know if the script is dangerous or not is to read the install.user.js file.

For example:
```
// @match        https://game274411.konggames.com/gamez/0027/4411/live/*
```
mean that the script will only be launched on konggames.com, on the game number 274411 (yeah, Heart of Galaxy, obviously).

It can be a goo idea to look what the script need:
```
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/js/init/INIT.js
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/js/lib/BRILLIANDLIB.js
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/js/core/BRILLIANDUPDATE.js
// @require      https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/js/buttons/UPDATEAUTOROUTE.js
// @resource	 updateAutoRouteIcon https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/img/updatehub.png
```

Last point, what permission does he want?
```
// @grant        GM_getResourceURL
```
Mean he want to get the ressources listed before.

If you see
```
@match *
```
or

```
@include *
```
Watch out: this script will try to run everywhere. Be sure of what he do, and read why in the documentation.

### HeartOfGalaxyScript warning

This tool is completely fan-ade, based on the version 30 of Hearth of Galaxy. Be aware that if something goes wrong, it CAN corrupt your savefile, so do not forget to do backup regulary.

## Getting Started

Hearth Of Galaxy is entirely created by Cheslava, and hosted on [Kongregate](http://www.kongregate.com/games/Cheslava/heart-of-galaxy).

### Prerequisites

This userscript is created for tampermonkey and SHOULD BE compatible with greasemonkey, but no question about this compatibility will be answered.
Tampermonkey can be installed directly with the add on store of your browser.
[Chrome Tampermonkey add on](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=fr)

Finaly, in the tampermonkey parameter: Externals > Update Interval: Always: you don't want to update only 1/10 of the script, trust me I tried.

### Installing the script

#### Solution 1: Autodetection

1) Go to the install.user.js file here: https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/install.user.js
2) Tampermonkey will directly autodetect the file, and ask if you want to integrate the userscript to chrome.

#### Solution 2: No Autodetection/Auto installation

1) Open the TamperMonkey dashboard and go to utilities – in the URL box paste https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/install.user.js and click IMPORT

#### Solution 3: No Autodetection/Manual installation 

1) Go to the install.user.js file here: https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/install.user.js
2) Copy the text
3) Open the TamperMonkey dashboard
4) Paste the contents of install.user.js into a user script 
5) add in the update URL: https://rawgit.com/Harrygiel/HeartOfGalaxyScript/master/install.user.js

### Using the script

1) Launch [Hearth of galaxy](http://www.kongregate.com/games/Cheslava/heart-of-galaxy)
2) Wait for a new button to appear on the bottom right corner
3) The script will only work for now in some condition:
    - Ishtar gate is the ONLY hub possible for now
    - 1 fleet is doing an autoroute from Ishtar gate to any other planet you own
    - You put anything different of 0 in the ressource you want to move (ex: import 1 iron and export 1 ice from vasilis will autocorrect the iron and the ice to your production and need on vasilis)
4) Press the button, and every fleet in AutoRoute should be corrected: the production of the destinaion planet should be of 0, and Ishtar Gat will get everything.

## Question
```
Q: The script is not working !
```
A: Read this file COMPLETELY first, then if nothing work, post an issue

```
Q: For some planets, the fleet don't get everything !
```
A: Your fleet don't have the cargo capacity to import everything. add some ship in the Auto Route

```
Q: This script corrupted my savefile !
```
A: Even if it never happened before, you where prevented ! use your backup..... You have a backup right ?

```
Q: I have a perfect idea for the script !
```
A: 2 solutions: Clone the git, create a branch, add your feature, do a CLEAN pull request, with description of your work, and wait. Or ask nicely and maybe one day, somebody will add it for you.

```
Q: I can add a feature, but I don't have any idea !
```
A: Great ! Just ask around, I'm pretty sure some people have great idea. Why not adding automaticaly ship if the fleet don't have the cargo capacity first ? why not automaticaly create a fleet and autoroute them ?

```
Q: After an update, the script is not working anymore !
```
A: First, in the tampermonkey parameter: Externals > Update Interval: ALways: you don't want to update only 1/10 of the script, trust me.


## Authors

- Core script created by Brilliand
- Tampermonkey script + core script integration by Harrygiel

## License

GNU General Public License v3.0
Read the License file.
