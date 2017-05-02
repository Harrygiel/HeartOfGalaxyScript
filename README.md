# HeartOfGalaxyScript

[Features](https://github.com/Harrygiel/HeartOfGalaxyScript#features)
[WARNING](https://github.com/Harrygiel/HeartOfGalaxyScript#warning)
   [Generals warning](https://github.com/Harrygiel/HeartOfGalaxyScript#generals-warning)
   [HeartOfGalaxyScript warning](https://github.com/Harrygiel/HeartOfGalaxyScript#heartofgalaxyscript-warning)
[Getting Started](https://github.com/Harrygiel/HeartOfGalaxyScript#getting-started)
   [Prerequisites](https://github.com/Harrygiel/HeartOfGalaxyScript#prerequisites)
   [Installing the script](https://github.com/Harrygiel/HeartOfGalaxyScript#installing-the-script)
   [Using the script](https://github.com/Harrygiel/HeartOfGalaxyScript#using-the-script)
   [Updating the script](https://github.com/Harrygiel/HeartOfGalaxyScript#updating-the-script)
[Questions](https://github.com/Harrygiel/HeartOfGalaxyScript#questions)
[Changelog](https://github.com/Harrygiel/HeartOfGalaxyScript#changelog)
[Authors](https://github.com/Harrygiel/HeartOfGalaxyScript#authors)
[License](https://github.com/Harrygiel/HeartOfGalaxyScript#license)

## Features

Hearth of Script v 0.1.0:
	- Add a button, that can autocorrect your autoroute to create a hub to Ishtar Gate
	- Warn you when something wrong with a road
	- Show you what's wrong and how many storage is needed on the road

READ THE [Using the script](https://github.com/Harrygiel/HeartOfGalaxyScript#using-the-script) part ! some features can be tricky to activate during the beta

## WARNING

IN SHORT:
	- DON'T download a script you don't trust
	- BACKUP before the first use (and do regular backup)

Now, welcome to the long story:

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
5) TRICKY PART: to activate the alert overview if the button turn red, press the fleet button on the upper part of the screen AFTER the update button, even if you are already on this screen. It will be automaticaly done later.

### Updating the script

1) Tampermonkey dashboard allow you to update the script automaticaly. click on the time since the last update.
2) Optional: Sometime, Tampemonkey don't update the externals, even with the option activated. Go on the script pannel, go in the External tab, and purge every external manually.

## Questions
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
A: First, in the tampermonkey parameter: Externals > Update Interval: Always: you don't want to update only 1/10 of the script, trust me.

## Changelog

```
#### Hearth Of Script ####

---- V0.1.0 ----

* Correcting an error in the popup calculator
* Cleaned useless file
* Updated install.user.js
* Updated Changelog
* Updated README.md
	warning summary added
	feature added
	"updating the script" added
	Changelog added


---- V0.0.5 ----

* Adding info popup for planets with alerts

---- V0.0.4 ----

* Reworked all classes. Now a core object create and call
  every object (button/manager/etc...) needed
* Added game function library
* Correcting the popup on the auto button.
* Adding color background on the Update AutoRoad button
  in function of the alert state
* Adding color background for planets with alerts

---- V0.0.3 ----

* Cleaned project

---- V0.0.2 ----

* Project renamed "Hearth Of Script" from "Hearth Of Galaxy Script"
* Update AutoRoad button added
* Brilliand script added
* Button/Brilland script linked

---- V0.0.1 ----

* Project created:
	Changelog created
	License created
	Readme created
	Script Loader created
	Hello World created
```


## Authors

- Core script (route import/export calulation) created by Brilliand
- Tampermonkey script + core script integration by Harrygiel

## License

GNU General Public License v3.0
Read the License file.
