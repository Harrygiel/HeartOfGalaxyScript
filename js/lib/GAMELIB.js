/*

function m(width, height, span, type?, unknown?);
	create a popup info following the mouse



*/
////////////////////////////////////////////////////////////

function a() {
    for (var a = 0, b = 0; b < game.planets.length; b++)
        for (var d in planets[game.planets[b]].fleets) planets[game.planets[b]].fleets[d] && (a += planets[game.planets[b]].fleets[d].value());
    return parseInt(Math.floor(a))
}

function d() {
    var a = JSON.parse(atob(localStorage.getItem("RHGsv0civ")));
    capital = parseInt(atob(localStorage.getItem("RHGsv0cpt")));
    var b = JSON.parse(atob(localStorage.getItem("RHGsv0plt"))),
        d = JSON.parse(atob(localStorage.getItem("RHGsv0sch")));
    firstTime = !0;
    for (var q =
            0; q < a.length; q++) {
        civisLoader(civis[q], a[q]);
        for (var e = 0; e < a[q].buildings.length; e++) a[q].buildings[e] && buildingLoader(civis[q].buildings[e], a[q].buildings[e]);
        for (e = 0; e < a[q].researches.length; e++) a[q].researches[e] && (civis[q].researches[e].level = 0)
    }
    fleetSchedule.count = d.count;
    var a = 0,
        t;
    for (t in d.fleets) a++;
    fleetSchedule.load(d.schedule, d.fleets, a);
    game = civis[0];
    for (q = 0; q < b.length; q++) b[q] && planetLoader(planets[q], b[q])
}

function b() {
    var a = JSON.parse(atob(internalSave.c)),
        b = JSON.parse(atob(internalSave.p)),
        d = JSON.parse(atob(internalSave.s));
    firstTime = !0;
    for (var q = 0; q < a.length; q++) {
        civisLoader(civis[q], a[q]);
        for (var e = 0; e < a[q].buildings.length; e++) a[q].buildings[e] && buildingLoader(civis[q].buildings[e], a[q].buildings[e]);
        for (e = 0; e < a[q].researches.length; e++) a[q].researches[e] && (civis[q].researches[e].level = 0)
    }
    fleetSchedule.count = d.count;
    var a = 0,
        t;
    for (t in d.fleets) a++;
    fleetSchedule.load(d.schedule, d.fleets, a);
    game = civis[0];
    for (q = 0; q < b.length; q++) b[q] && planetLoader(planets[q], b[q])
}

function e() {
    var a =
        parseInt(game.days / 365),
        b = parseInt(game.days) - 365 * a,
        d = "<span class='blue_text' >Influence: </span><span class='white_text'>" + game.influence() + "</span><br>";
    5 <= game.researches[3].level && (d += " <span class='blue_text'>Market Coins: </span><span class='white_text'>" + beauty(Math.floor(game.money)) + "<img src='ui/coin.png' style='height:16px;width:16px;position:relative;top:4px;'></span>");
    a = "<span class='blue_text' >Year: </span><span class='white_text'>" + a + "</span>" + (" <span class='blue_text'>Day: </span><span class='white_text'>" +
        b + "</span>");
    $("#topbar_content").html(d);
    $("#topbar_year").html(a)
}

function h() {
    for (var a = 0; a < game.buildings.length; a++)
        if (game.buildings[a].show(currentPlanet)) {
            var b = $("#building" + a),
                d = "blue_text",
                e = "white_text";
            currentPlanet.structureAffordable(a) ? (d = "blue_text", e = "white_text", avBuilding[a] = !0, b.removeClass("red_button"), b.addClass("button")) : (e = d = "red_text", avBuilding[a] = !1, b.removeClass("button"), b.addClass("red_button"));
            for (var f = "<div style='width:98%; height:80px;position:relative;'>", f =
                    f + "<div style='position:relative; top:8px; left:8px'>", f = currentPlanet.structure[a].active ? f + ("<img id='b_shut_" + a + "' name='" + a + "' src='ui/act.png' style='z-index:1000;width:16px;height:16px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>") : f + ("<img id='b_shut_" + a + "' name='" + a + "' src='ui/shut.png' style='z-index:1000;width:16px;height:16px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>"), t = !1, G = 0, z = ""; !t && G < resNum;) t = currentPlanet.globalNoRes[a][G], z = " (needs " + resources[G].name.capitalize() +
                ")", G++;
            f = t ? f + ("<span class='blue_text' style='font-size: 100%;'>" + game.buildings[a].displayName + " <span class='red_text' style='font-size:80%;'>" + z + "</span></span> ") : f + ("<span class='blue_text' style='font-size: 100%;'>" + game.buildings[a].displayName + "</span> ");
            f += "<span class='white_text'>" + currentPlanet.structure[a].number + "</span></div>";
            f += "<div style='position:relative; top:16px; left:8px'>";
            for (G = t = 0; G < resNum; G++) z = currentPlanet.structure[a].cost(G), 0 < z && (f += "</div><div style='position:absolute; top:" +
                (32 + 16 * t) + "px; left: 320px;'>", f += "<span class='" + d + "'>" + resources[G].name.capitalize() + ": </span><span class='" + e + "'>" + beauty(z) + " (x" + game.buildings[a].resourcesMult[G] + ")</span><br>", t++);
            f += "</div>";
            f += "<div style='position:relative; top:16px; left:8px'>";
            f += "<img id='b_build_" + a + "' name='" + a + "' src='ui/add2.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>";
            f += "<img id='b_build10_" + a + "' name='" + a + "' src='ui/add10.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>";
            f += "<img id='b_build50_" + a + "' name='" + a + "' src='ui/add50.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>";
            f += "<img id='b_void' src='ui/void.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;'/>";
            f += "<img id='b_dismantle_" + a + "' name='" + a + "' src='ui/x.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>";
            f += "<img id='b_dismantle10_" + a + "' name='" + a + "' src='ui/x10.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>";
            f += "<img id='b_dismantle50_" + a + "' name='" + a + "' src='ui/x50.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>";
            f += "</div>";
            f += "</div>";
            b.html(f);
            $("#b_shut_" + a).unbind();
            $("#b_shut_" + a).click(function() {
                currentBuildingId = parseInt($(this).attr("name"));
                currentPlanet.structure[currentBuildingId].active = currentPlanet.structure[currentBuildingId].active ? !1 : !0;
                h()
            });
            $("#b_build_" + a).unbind();
            $("#b_build_" + a).click(function() {
                currentBuildingId = parseInt($(this).attr("name"));
                currentPlanet.buyStructure(currentBuildingId) || (new m(210, 0, "<span class='red_text'>There are not enough resources!</span>", "info")).drawToast();
                h()
            });
            $("#b_build10_" + a).unbind();
            $("#b_build10_" + a).click(function() {
                currentBuildingId = parseInt($(this).attr("name"));
                currentPlanet.buyMultipleStructure(currentBuildingId, 10) || (new m(210, 0, "<span class='red_text'>There are not enough resources!</span>", "info")).drawToast();
                h()
            });
            $("#b_build50_" + a).unbind();
            $("#b_build50_" + a).click(function() {
                currentBuildingId =
                    parseInt($(this).attr("name"));
                currentPlanet.buyMultipleStructure(currentBuildingId, 50) || (new m(210, 0, "<span class='red_text'>There are not enough resources!</span>", "info")).drawToast();
                h()
            });
            $("#b_dismantle_" + a).unbind();
            $("#b_dismantle_" + a).click(function() {
                currentBuildingId = parseInt($(this).attr("name"));
                currentPlanet.sellStructure(currentBuildingId) || (new m(210, 0, "<span class='red_text'>There are no buildings to dismantle!</span>", "info")).drawToast();
                h()
            });
            $("#b_dismantle10_" + a).unbind();
            $("#b_dismantle10_" +
                a).click(function() {
                currentBuildingId = parseInt($(this).attr("name"));
                currentPlanet.sellMultipleStructure(currentBuildingId, 10) || (new m(210, 0, "<span class='red_text'>There are no buildings to dismantle!</span>", "info")).drawToast();
                h()
            });
            $("#b_dismantle50_" + a).unbind();
            $("#b_dismantle50_" + a).click(function() {
                currentBuildingId = parseInt($(this).attr("name"));
                currentPlanet.sellMultipleStructure(currentBuildingId, 50) || (new m(210, 0, "<span class='red_text'>There are no buildings to dismantle!</span>", "info")).drawToast();
                h()
            });
            $("#b_dismantle_" + a).hover(function() {
                (new m(240, 10, "<span class='blue_text'>Gives 50% of resources back</span>", "info")).drawInfo();
                $(document).on("mousemove", function(a) {
                    mouseX = a.pageX + 10;
                    mouseY = a.pageY + 10;
                    $("#popup_info").css({
                        left: mouseX,
                        top: mouseY
                    })
                });
                $("#popup_info").css({
                    left: mouseX,
                    top: mouseY
                })
            }, function() {
                currentPopup.drop()
            });
            $("#b_dismantle_" + a).mouseout(function() {
                $(document).on("mousemove", function() {})
            });
            $("#b_dismantle10_" + a).hover(function() {
                var a = parseInt($(this).attr("name"));
                (new m(210, 10, currentPlanet.showSellCost(a, 10), "info")).drawInfo();
                $(document).on("mousemove", function(a) {
                    mouseX = a.pageX + 10;
                    mouseY = a.pageY + 10;
                    $("#popup_info").css({
                        left: mouseX,
                        top: mouseY
                    })
                });
                $("#popup_info").css({
                    left: mouseX,
                    top: mouseY
                })
            }, function() {
                currentPopup.drop()
            });
            $("#b_dismantle10_" + a).mouseout(function() {
                $(document).on("mousemove", function() {})
            });
            $("#b_dismantle50_" + a).hover(function() {
                var a = parseInt($(this).attr("name"));
                (new m(210, 10, currentPlanet.showSellCost(a, 50), "info")).drawInfo();
                $(document).on("mousemove", function(a) {
                    mouseX = a.pageX + 10;
                    mouseY = a.pageY + 10;
                    $("#popup_info").css({
                        left: mouseX,
                        top: mouseY
                    })
                });
                $("#popup_info").css({
                    left: mouseX,
                    top: mouseY
                })
            }, function() {
                currentPopup.drop()
            });
            $("#b_dismantle50_" + a).mouseout(function() {
                $(document).on("mousemove", function() {})
            });
            $("#b_build10_" + a).hover(function() {
                var a = parseInt($(this).attr("name"));
                (new m(200, 10, currentPlanet.showBuyCost(a, 10), "info")).drawInfo();
                $(document).on("mousemove", function(a) {
                    mouseX = a.pageX + 10;
                    mouseY = a.pageY +
                        10;
                    $("#popup_info").css({
                        left: mouseX,
                        top: mouseY
                    })
                });
                $("#popup_info").css({
                    left: mouseX,
                    top: mouseY
                })
            }, function() {
                currentPopup.drop()
            });
            $("#b_build10_" + a).mouseout(function() {
                $(document).on("mousemove", function() {})
            });
            $("#b_build50_" + a).hover(function() {
                var a = parseInt($(this).attr("name"));
                (new m(200, 10, currentPlanet.showBuyCost(a, 50), "info")).drawInfo();
                $(document).on("mousemove", function(a) {
                    mouseX = a.pageX + 10;
                    mouseY = a.pageY + 10;
                    $("#popup_info").css({
                        left: mouseX,
                        top: mouseY
                    })
                });
                $("#popup_info").css({
                    left: mouseX,
                    top: mouseY
                })
            }, function() {
                currentPopup.drop()
            });
            $("#b_build50_" + a).mouseout(function() {
                $(document).on("mousemove", function() {})
            })
        }
}

function n() {
    for (var a = [], b = 0; b < game.ships.length; b++) a[b] = game.ships[b].id;
    for (var d = 0; d < a.length; d++) {
        var b = a[d],
            e = $("#shipyard" + d);
        currentPlanet.shipAffordable(b) ? (e.removeClass("red_button"), e.addClass("button"), avShip[b] || (upd = !0, avShip[b] = !0)) : (e.removeClass("button"), e.addClass("red_button"), avBuilding[b] && (upd = !0, avShip[b] = !1));
        if (ships[b].show() && game.ships[d].req <=
            currentPlanet.structure[buildingsName.shipyard].number) {
            currentPlanet.shipAffordable(b) ? (avShip[b] = !0, e.removeClass("red_button"), e.addClass("button")) : (avShip[b] = !1, e.removeClass("button"), e.addClass("red_button"));
            var f = "<div style='width:98%; height:80px;position:relative;'>",
                f = f + "<div style='position:relative; top:8px; left:8px'>",
                f = f + ("<span class='blue_text' style='font-size: 100%;'>" + ships[b].name + "</span> "),
                f = f + ("<span class='white_text'>" + currentPlanet.shipyardFleet.ships[b] + "</span></div>"),
                f = f + "<div style='position:relative; top:16px; left:8px'>",
                f = f + "</div>",
                f = f + "<div style='position:relative; top:16px; left:8px'>",
                f = f + ("<img id='sh_build_" + b + "' name='" + b + "' src='ui/add2.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>"),
                f = f + ("<img id='sh_build10_" + b + "' name='" + b + "' src='ui/add10.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>"),
                f = f + ("<img id='sh_build100_" + b + "' name='" + b + "' src='ui/add100.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>"),
                f = f + ("<img id='sh_build1000_" + b + "' name='" + b + "' src='ui/add1000.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>"),
                f = f + ("<img id='sh_build10000_" + b + "' name='" + b + "' src='ui/add10000.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>"),
                f = f + "<img id='sh_void' src='ui/void.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;'/>",
                f = f + ("<img id='sh_dismantle_" + b + "' name='" + b + "' src='ui/x.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>"),
                f = f + ("<img id='sh_dismantle10_" + b + "' name='" + b + "' src='ui/x10.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>"),
                f = f + ("<img id='sh_dismantle100_" + b + "' name='" + b + "' src='ui/x100.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>"),
                f = f + ("<img id='sh_dismantle1000_" + b + "' name='" + b + "' src='ui/x1000.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>"),
                f = f + ("<img id='sh_dismantle10000_" +
                    b + "' name='" + b + "' src='ui/x10000.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>"),
                f = f + "<div style='position:relative; top:-68px;left:66%;'>",
                f = f + ("<input style='width:64px;height:16px;font-size:92%;position:relative;top:-6px;' id='sh_buildt_" + b + "' name='" + b + "' type='text' value='0' /><img id='sh_buildc_" + b + "' name='" + b + "' src='ui/add2.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/><br>"),
                f = f + ("<input style='width:64px;height:16px;font-size:92%;position:relative;top:-6px;' id='sh_dismantlet_" +
                    b + "' name='" + b + "' type='text' value='0' /><img id='sh_dismantlec_" + b + "' name='" + b + "' src='ui/x.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>"),
                f = f + "</div>",
                f = f + "</div>",
                f = f + "</div>";
            e.html(f);
            $("#sh_buildt_" + b).change(function() {
                var a = parseInt($(this).attr("name"));
                Number.isInteger(parseInt($(this).val())) ? 0 > parseInt($(this).val()) ? $(this).val(0) : parseInt($(this).val()) >= currentPlanet.maxMultipleShip(a) && $(this).val(currentPlanet.maxMultipleShip(a)) :
                    $(this).val(0);
                $(this).val(parseInt($(this).val()))
            });
            $("#sh_dismantlet_" + b).change(function() {
                var a = parseInt($(this).attr("name"));
                Number.isInteger(parseInt($(this).val())) ? 0 > parseInt($(this).val()) ? $(this).val(0) : parseInt($(this).val()) >= currentPlanet.shipyardFleet.ships[a] && $(this).val(currentPlanet.shipyardFleet.ships[a]) : $(this).val(0);
                $(this).val(parseInt($(this).val()))
            });
            $("#sh_buildc_" + b).unbind();
            $("#sh_buildc_" + b).click(function() {
                var a = parseInt($(this).attr("name"));
                $("#sh_buildt_" + a).change();
                currentPlanet.buyMultipleShip(a, parseInt($("#sh_buildt_" + a).val())) ? (currentPlanet.shipyardFleet.pushed || (currentPlanet.fleetPush(currentPlanet.shipyardFleet), currentPlanet.shipyardFleet.pushed = !0), n()) : (n(), (new m(210, 0, "<span class='red_text text_shadow'>There are not enough resources!</span>", "info")).drawToast())
            });
            $("#sh_dismantlec_" + b).unbind();
            $("#sh_dismantlec_" + b).click(function() {
                var a = parseInt($(this).attr("name"));
                $("#sh_dismantlet_" + a).change();
                currentPlanet.sellMultipleShip(a, parseInt($("#sh_dismantlet_" +
                    a).val())) ? (n(), a = new m(210, 0, "<span class='red_text text_shadow'>Ships to dismantled!</span>", "info")) : (n(), a = new m(210, 0, "<span class='red_text text_shadow'>There are no ships to dismantle!</span>", "info"));
                a.drawToast()
            });
            $("#sh_dismantlec_" + b).hover(function() {
                var a = parseInt($(this).attr("name"));
                $("#sh_dismantlet_" + a).change();
                (new m(220, 10, currentPlanet.showSellShipCost(a, parseInt($("#sh_dismantlet_" + a).val())), "info")).drawInfo();
                $(document).on("mousemove", function(a) {
                    mouseX = a.pageX + 10;
                    mouseY =
                        a.pageY + 10;
                    $("#popup_info").css({
                        left: mouseX,
                        top: mouseY
                    })
                });
                $("#popup_info").css({
                    left: mouseX,
                    top: mouseY
                })
            }, function() {
                currentPopup.drop()
            });
            $("#sh_dismantlec_" + b).mouseout(function() {
                var a = parseInt($(this).attr("name"));
                $("#sh_dismantlet_" + a).change();
                $(document).on("mousemove", function() {})
            });
            $("#sh_buildc_" + b).hover(function() {
                var a = parseInt($(this).attr("name"));
                $("#sh_buildt_" + a).change();
                (new m(220, 10, currentPlanet.showBuyShipCost(a, parseInt($("#sh_buildt_" + a).val())), "info")).drawInfo();
                $(document).on("mousemove",
                    function(a) {
                        mouseX = a.pageX + 10;
                        mouseY = a.pageY + 10;
                        $("#popup_info").css({
                            left: mouseX,
                            top: mouseY
                        })
                    });
                $("#popup_info").css({
                    left: mouseX,
                    top: mouseY
                })
            }, function() {
                currentPopup.drop()
            });
            $("#sh_buildc_" + b).mouseout(function() {
                var a = parseInt($(this).attr("name"));
                $("#sh_buildt_" + a).change();
                $(document).on("mousemove", function() {})
            });
            $("#sh_build_" + b).unbind();
            $("#sh_build_" + b).click(function() {
                var a = parseInt($(this).attr("name"));
                currentPlanet.buyShip(a) ? currentPlanet.shipyardFleet.pushed || (currentPlanet.fleetPush(currentPlanet.shipyardFleet),
                    currentPlanet.shipyardFleet.pushed = !0) : (new m(210, 0, "<span class='red_text text_shadow'>There are not enough resources!</span>", "info")).drawToast();
                n()
            });
            $("#sh_build10_" + b).unbind();
            $("#sh_build10_" + b).click(function() {
                var a = parseInt($(this).attr("name"));
                currentPlanet.buyMultipleShip(a, 10) ? currentPlanet.shipyardFleet.pushed || (currentPlanet.fleetPush(currentPlanet.shipyardFleet), currentPlanet.shipyardFleet.pushed = !0) : (new m(210, 0, "<span class='red_text text_shadow'>There are not enough resources!</span>",
                    "info")).drawToast();
                n()
            });
            $("#sh_build100_" + b).unbind();
            $("#sh_build100_" + b).click(function() {
                var a = parseInt($(this).attr("name"));
                currentPlanet.buyMultipleShip(a, 100) ? currentPlanet.shipyardFleet.pushed || (currentPlanet.fleetPush(currentPlanet.shipyardFleet), currentPlanet.shipyardFleet.pushed = !0) : (new m(210, 0, "<span class='red_text text_shadow'>There are not enough resources!</span>", "info")).drawToast();
                n()
            });
            $("#sh_build1000_" + b).unbind();
            $("#sh_build1000_" + b).click(function() {
                var a = parseInt($(this).attr("name"));
                currentPlanet.buyMultipleShip(a, 1E3) ? currentPlanet.shipyardFleet.pushed || (currentPlanet.fleetPush(currentPlanet.shipyardFleet), currentPlanet.shipyardFleet.pushed = !0) : (new m(210, 0, "<span class='red_text text_shadow'>There are not enough resources!</span>", "info")).drawToast();
                n()
            });
            $("#sh_build10000_" + b).unbind();
            $("#sh_build10000_" + b).click(function() {
                var a = parseInt($(this).attr("name"));
                currentPlanet.buyMultipleShip(a, 1E4) ? currentPlanet.shipyardFleet.pushed || (currentPlanet.fleetPush(currentPlanet.shipyardFleet),
                    currentPlanet.shipyardFleet.pushed = !0) : (new m(210, 0, "<span class='red_text text_shadow'>There are not enough resources!</span>", "info")).drawToast();
                n()
            });
            $("#sh_dismantle_" + b).unbind();
            $("#sh_dismantle_" + b).click(function() {
                var a = parseInt($(this).attr("name"));
                currentPlanet.sellShip(a) || (new m(210, 0, "<span class='red_text text_shadow'>There are no ships to dismantle!</span>", "info")).drawToast();
                n()
            });
            $("#sh_dismantle10_" + b).unbind();
            $("#sh_dismantle10_" + b).click(function() {
                var a = parseInt($(this).attr("name"));
                currentPlanet.sellMultipleShip(a, 10) || (new m(210, 0, "<span class='red_text text_shadow'>There are no ships to dismantle!</span>", "info")).drawToast();
                n()
            });
            $("#sh_dismantle100_" + b).unbind();
            $("#sh_dismantle100_" + b).click(function() {
                var a = parseInt($(this).attr("name"));
                currentPlanet.sellMultipleShip(a, 100) || (new m(210, 0, "<span class='red_text text_shadow'>There are no ships to dismantle!</span>", "info")).drawToast();
                n()
            });
            $("#sh_dismantle1000_" + b).unbind();
            $("#sh_dismantle1000_" + b).click(function() {
                var a =
                    parseInt($(this).attr("name"));
                currentPlanet.sellMultipleShip(a, 1E3) || (new m(210, 0, "<span class='red_text text_shadow'>There are no ships to dismantle!</span>", "info")).drawToast();
                n()
            });
            $("#sh_dismantle10000_" + b).unbind();
            $("#sh_dismantle10000_" + b).click(function() {
                var a = parseInt($(this).attr("name"));
                currentPlanet.sellMultipleShip(a, 1E4) || (new m(210, 0, "<span class='red_text text_shadow'>There are no ships to dismantle!</span>", "info")).drawToast();
                n()
            });
            $("#sh_dismantle_" + b).hover(function() {
                (new m(240,
                    10, "<span class='blue_text'>Gives 100% of resources back</span>", "info")).drawInfo();
                $(document).on("mousemove", function(a) {
                    mouseX = a.pageX + 10;
                    mouseY = a.pageY + 10;
                    $("#popup_info").css({
                        left: mouseX,
                        top: mouseY
                    })
                });
                $("#popup_info").css({
                    left: mouseX,
                    top: mouseY
                })
            }, function() {
                currentPopup.drop()
            });
            $("#sh_dismantle_" + b).mouseout(function() {
                $(document).on("mousemove", function() {})
            });
            $("#sh_dismantle10_" + b).hover(function() {
                var a = parseInt($(this).attr("name"));
                (new m(220, 10, currentPlanet.showSellShipCost(a, 10),
                    "info")).drawInfo();
                $(document).on("mousemove", function(a) {
                    mouseX = a.pageX + 10;
                    mouseY = a.pageY + 10;
                    $("#popup_info").css({
                        left: mouseX,
                        top: mouseY
                    })
                });
                $("#popup_info").css({
                    left: mouseX,
                    top: mouseY
                })
            }, function() {
                currentPopup.drop()
            });
            $("#sh_dismantle10_" + b).mouseout(function() {
                $(document).on("mousemove", function() {})
            });
            $("#sh_dismantle100_" + b).hover(function() {
                var a = parseInt($(this).attr("name"));
                (new m(220, 10, currentPlanet.showSellShipCost(a, 100), "info")).drawInfo();
                $(document).on("mousemove", function(a) {
                    mouseX =
                        a.pageX + 10;
                    mouseY = a.pageY + 10;
                    $("#popup_info").css({
                        left: mouseX,
                        top: mouseY
                    })
                });
                $("#popup_info").css({
                    left: mouseX,
                    top: mouseY
                })
            }, function() {
                currentPopup.drop()
            });
            $("#sh_dismantle100_" + b).mouseout(function() {
                $(document).on("mousemove", function() {})
            });
            $("#sh_dismantle1000_" + b).hover(function() {
                var a = parseInt($(this).attr("name"));
                (new m(220, 10, currentPlanet.showSellShipCost(a, 1E3), "info")).drawInfo();
                $(document).on("mousemove", function(a) {
                    mouseX = a.pageX + 10;
                    mouseY = a.pageY + 10;
                    $("#popup_info").css({
                        left: mouseX,
                        top: mouseY
                    })
                });
                $("#popup_info").css({
                    left: mouseX,
                    top: mouseY
                })
            }, function() {
                currentPopup.drop()
            });
            $("#sh_dismantle1000_" + b).mouseout(function() {
                $(document).on("mousemove", function() {})
            });
            $("#sh_dismantle10000_" + b).hover(function() {
                    var a = parseInt($(this).attr("name"));
                    (new m(220, 10, currentPlanet.showSellShipCost(a, 1E4), "info")).drawInfo();
                    $(document).on("mousemove", function(a) {
                        mouseX = a.pageX + 10;
                        mouseY = a.pageY + 10;
                        $("#popup_info").css({
                            left: mouseX,
                            top: mouseY
                        })
                    });
                    $("#popup_info").css({
                        left: mouseX,
                        top: mouseY
                    })
                },
                function() {
                    currentPopup.drop()
                });
            $("#sh_dismantle10000_" + b).mouseout(function() {
                $(document).on("mousemove", function() {})
            });
            $("#sh_build10_" + b).hover(function() {
                var a = parseInt($(this).attr("name"));
                (new m(220, 10, currentPlanet.showBuyShipCost(a, 10), "info")).drawInfo();
                $(document).on("mousemove", function(a) {
                    mouseX = a.pageX + 10;
                    mouseY = a.pageY + 10;
                    $("#popup_info").css({
                        left: mouseX,
                        top: mouseY
                    })
                });
                $("#popup_info").css({
                    left: mouseX,
                    top: mouseY
                })
            }, function() {
                currentPopup.drop()
            });
            $("#sh_build10_" + b).mouseout(function() {
                $(document).on("mousemove",
                    function() {})
            });
            $("#sh_build100_" + b).hover(function() {
                var a = parseInt($(this).attr("name"));
                (new m(220, 10, currentPlanet.showBuyShipCost(a, 100), "info")).drawInfo();
                $(document).on("mousemove", function(a) {
                    mouseX = a.pageX + 10;
                    mouseY = a.pageY + 10;
                    $("#popup_info").css({
                        left: mouseX,
                        top: mouseY
                    })
                });
                $("#popup_info").css({
                    left: mouseX,
                    top: mouseY
                })
            }, function() {
                currentPopup.drop()
            });
            $("#sh_build100_" + b).mouseout(function() {
                $(document).on("mousemove", function() {})
            });
            $("#sh_build1000_" + b).hover(function() {
                var a = parseInt($(this).attr("name"));
                (new m(220, 10, currentPlanet.showBuyShipCost(a, 1E3), "info")).drawInfo();
                $(document).on("mousemove", function(a) {
                    mouseX = a.pageX + 10;
                    mouseY = a.pageY + 10;
                    $("#popup_info").css({
                        left: mouseX,
                        top: mouseY
                    })
                });
                $("#popup_info").css({
                    left: mouseX,
                    top: mouseY
                })
            }, function() {
                currentPopup.drop()
            });
            $("#sh_build1000_" + b).mouseout(function() {
                $(document).on("mousemove", function() {})
            });
            $("#sh_build10000_" + b).hover(function() {
                var a = parseInt($(this).attr("name"));
                (new m(220, 10, currentPlanet.showBuyShipCost(a, 1E4), "info")).drawInfo();
                $(document).on("mousemove", function(a) {
                    mouseX = a.pageX + 10;
                    mouseY = a.pageY + 10;
                    $("#popup_info").css({
                        left: mouseX,
                        top: mouseY
                    })
                });
                $("#popup_info").css({
                    left: mouseX,
                    top: mouseY
                })
            }, function() {
                currentPopup.drop()
            });
            $("#sh_build10000_" + b).mouseout(function() {
                $(document).on("mousemove", function() {})
            })
        } else if (game.ships[d].req <= currentPlanet.structure[buildingsName.shipyard].number + 1) {
            var f = "<div style='width:98%; height:80px;position:relative;'>",
                f = f + "<div style='position:relative; top:8px; left:8px'>",
                f = f +
                ("<span class='red_text' style='font-size: 100%;'>" + ships[b].name + "</span> "),
                f = f + ("<span class='red_text'> - Unlocked by Shipyard " + game.ships[d].req + "</span></div>"),
                f = f + "<div style='position:relative; top:16px; left:8px'>",
                t;
            for (t in game.ships[d].resReq) f += "<span class='red_text'> Needs " + game.researches[researchesName[t]].name + " " + game.ships[d].resReq[t] + "</span>";
            f += "</div>";
            f += "</div>";
            $("#shipyard_locked" + d).html(f)
        }
    }
}

function l() {
    $("#planet_mini_name").html(currentPlanet.name);
    currentPlanet.id ==
        capital ? $("#planet_mini_name").css("color", "rgb(249,159,36)") : $("#planet_mini_name").css("color", "#80c0ff");
    $("#planet_mini_image").attr("src", "img/" + currentPlanet.icon + "/" + currentPlanet.icon + ".png");
    $("#planet_mini_image").unbind();
    $("#planet_mini_image").click(function() {
        D(currentPlanet)
    });
    $("#planet_mini").show()
}

function w() {
    $("#shipyard_mini_name").html(currentPlanet.name);
    currentPlanet.id == capital ? $("#shipyard_mini_name").css("color", "rgb(249,159,36)") : $("#shipyard_mini_name").css("color", "#80c0ff");
    $("#shipyard_mini_image").attr("src", "img/" + currentPlanet.icon + "/" + currentPlanet.icon + ".png");
    $("#shipyard_mini_image").click(function() {
        D(currentPlanet)
    });
    $("#shipyard_mini").show()
}

function B() {
    $("#market_mini_name").html(currentPlanet.name);
    currentPlanet.id == capital ? $("#market_mini_name").css("color", "rgb(249,159,36)") : $("#market_mini_name").css("color", "#80c0ff");
    $("#market_mini_image").attr("src", "img/" + currentPlanet.icon + "/" + currentPlanet.icon + ".png");
    $("#market_mini_image").click(function() {
        D(currentPlanet)
    });
    $("#market_mini").show()
}

function C() {
    if (mainCycle >= fpsFleet / fps) {
        var a = ((new Date).getTime() - Y) / 1E3;
        Y = (new Date).getTime();
        if (0 > a || isNaN(a)) a = .1, console.log(a);
        market.esport(a * idleBon);
        game.days += .1 * idleBon * a;
        e();
        for (var b = "<span class='blue_text'> Research Points: </span>", d = 0, q = 0; q < game.planets.length; q++) planets[game.planets[q]].globalProd.researchPoint && (d += planets[game.planets[q]].globalProd.researchPoint);
        game.researchPoint += a * d;
        isNaN(game.researchPoint) && (game.researchPoint = 0);
        b += "<span class='white_text'>" +
            beauty(game.researchPoint) + " (" + (0 < d ? "+" : "") + "" + beauty(d) + "/s)</span>";
        0 < game.timeTravelNum && (b = b + "<br><span class='green_text'> Technology Points: </span>" + ("<span class='green_text'>" + beauty(game.techPoints) + "</span>"));
        $("#downbar_content").html(b);
        currentUpdater();
        updateResource(a);
        mainCycle = 1;
        game.money += a * game.influence();
        isNaN(game.money) && (game.money = 0)
    } else mainCycle++;
    a = fleetSchedule.pop();
    b = 0;
    for (d = 1; b < a.length;) planets[a[b].destination].fleets[d] || (planets[a[b].destination].fleets[d] =
        a[b].fleet, b++), d++;
    "nada" != fleetStr && ((new m(180, 0, fleetStr, "info")).drawToast(), fleetStr = "nada")
}

function A(a, b, d, e, f) {
    this.id = a;
    this.func = f;
    this.html = "<ul style='width:" + d + "px;float:left;text-align:center;'>";
    this.html += "<li id='" + this.id + "' class='button' style='display:table;height:" + e + "px;width:" + d + "px;'><span class='blue_text' style='display:table-cell;font-size:120%;vertical-align:middle;position:relative;'>" + b + "</span></li></ul>";
    this.getHtml = function() {
        return this.html
    };
    this.enable = function() {
        $("#" +
            this.id).click(this.func)
    }
}

function m(a, b, d, e, f) {
    toastTimeout && clearTimeout(toastTimeout);
    currentPopup && currentPopup.drop();
    this.width = a;
    this.height = b;
    this.content = d;
    this.type = e;
    this.func = f;
    switch (e) {
        case "prompt":
            this.func = f;
            this.content += "<br><input id='prompt_value' class='white_text' style='position:absolute; left:32px; width:" + (this.width - 64) + "px; top:48px; border:none; background-color:rgba(75, 129, 156, 0.3);text-align:center;'>";
            this.content += "<br><br><ul style='width:" + this.width + "px; float:left; text-align:center;'>";
            this.content += "<li style='width:" + this.width + "px;'>";
            this.content += "<span id='prompt_ok_button' class='blue_text button text_shadow' style='position:absolute; left:0px; width:" + this.width / 2 + "px;'>Ok</span>";
            this.content += "<span id='prompt_cancel_button' class='blue_text button text_shadow' style='position:absolute; left:" + this.width / 2 + "px; width:" + this.width / 2 + "px;'>Cancel</span>";
            this.content += "</li></ul>";
            break;
        case "info":
            break;
        case "fleetDivide":
            this.func = f;
            this.content += "<br><div style='text-align:right;max-height:160px;overflow-y:auto;overflow-x:hidden;'>";
            for (d = 0; d < ships.length; d++) 0 < f.ships[d] && (this.content += "<span class='blue_text' style='float:left;margin-left:16px'>" + ships[d].name + "</span><input style='width:64px'id='slide" + d + "' name='" + d + "'type='range' min='0' max='" + f.ships[d] + "' value='0' step='1' /><input style='width:48px;margin-right:16px'id='textval" + d + "' name='" + d + "' type='text' value='0'/><br>");
            this.content += "</div><br><ul style='width: " + this.width + "px; float:left; text-align:center;'><li id='popup_ok_button' class='button text_shadow' style='width: " +
                this.width + "px;'><span class='blue_text'>Divide</span></li><li id='popup_close_button' class='button text_shadow' style='width: " + this.width + "px;'><span class='blue_text'>Cancel</span></li></ul>";
            break;
        case "loadShip":
            this.func = f;
            this.content += "<br><div style='text-align:right;height:200px;overflow-y:auto;'>";
            d = planets[this.func.planet].rawProduction();
            for (e = 0; e < resNum; e++) 1 <= planets[f.planet].resources[e] && (this.content += "<span class='blue_text' style='float:left;margin-left:16px'>" + resources[e].name.capitalize() +
                ": <span class='white_text' style='font-size:100%;'> " + beauty(planets[this.func.planet].resources[e]) + " <span class='" + (0 <= d[e] ? 0 < d[e] ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < d[e] ? "+" : "") + "" + beauty(d[e]) + "/s)</span></span></span><input style='width:80px'id='res_slide" + e + "' name='" + e + "'type='range' min='0' max='" + Math.min(planets[this.func.planet].resources[e], this.func.availableStorage()) + "' value='0' step='1' /><input style='width:80px'id='res_textval" + e + "' name='" + e + "' type='text' value='0'/><br>");
            this.content += "</div><br><br><ul style='width: " + this.width + "px; float:left; text-align:center;'><li id='popup_ok_button' class='button text_shadow' style='width: " + this.width + "px;'><span class='blue_text'>Load resources</span></li><li id='popup_close_button' class='button text_shadow' style='width: " + this.width + "px;'><span class='blue_text'>Cancel</span></li></ul>";
            break;
        case "loadAutoShip":
            this.func = f;
            this.content += "<br><div style='text-align:right;height:200px;overflow-y:auto;'>";
            for (e = 0; e < resNum; e++) 1 <=
                planets[this.func.planet].resources[e] && (this.content += "<span class='blue_text' style='float:left;margin-left:16px'>" + resources[e].name + "</span><input style='width:80px'id='res_slide" + e + "' name='" + e + "'type='range' min='0' max='" + Math.min(planets[this.func.planet].resources[e], this.func.availableStorage()) + "' value='0' step='1' /><input style='width:80px'id='res_textval" + e + "' name='" + e + "' type='text' value='0'/><br>");
            this.content += "</div><br><br><ul style='width: " + this.width + "px; float:left; text-align:center;'><li id='popup_ok_button' class='button text_shadow' style='width: " +
                this.width + "px;'><span class='blue_text'>Save</span></li><li id='popup_close_button' class='button text_shadow' style='width: " + this.width + "px;'><span class='blue_text'>Cancel</span></li></ul>";
            break;
        case "renameFleet":
            this.func = f;
            d = currentFleetId.split("_");
            d = planets[d[0]].fleets[d[1]];
            this.content += "<br><div >";
            this.content += "<input style='width:320px'id='rename_fleet' type='text' value='" + d.name + "'/><br>";
            this.content += "</div><br><br><ul style='width: " + this.width + "px; float:left; text-align:center;'><li id='popup_ok_button' class='button text_shadow' style='width: " +
                this.width + "px;'><span class='blue_text'>Change Name</span></li><li id='popup_close_button' class='button text_shadow' style='width: " + this.width + "px;'><span class='blue_text'>Cancel</span></li></ul>";
            break;
        case "renameGame":
            this.content += "<br><div >";
            this.content += "<input style='width:320px'id='rename_fleet' type='text' value='" + game.name + "'/><br>";
            this.content += "</div><br><br><ul style='width: " + this.width + "px; float:left; text-align:center;'><li id='popup_ok_button' class='button text_shadow' style='width: " +
                this.width + "px;'><span class='blue_text'>Change Name</span></li><li id='popup_close_button' class='button text_shadow' style='width: " + this.width + "px;'><span class='blue_text'>Cancel</span></li></ul>";
            break;
        case "renameFleetTravel":
            this.func = f;
            this.content += "<br><div >";
            this.content += "<input style='width:320px'id='rename_fleet' type='text' value='" + this.func.name + "'/><br>";
            this.content += "</div><br><br><ul style='width: " + this.width + "px; float:left; text-align:center;'><li id='popup_ok_button' class='button text_shadow' style='width: " +
                this.width + "px;'><span class='blue_text'>Change Name</span></li><li id='popup_close_button' class='button text_shadow' style='width: " + this.width + "px;'><span class='blue_text'>Cancel</span></li></ul>";
            break;
        case "confirm":
            this.content += "<br><br><ul style='width: " + this.width + "px; float:left; text-align:center;'><li id='popup_ok_button' class='button text_shadow' style='width: " + this.width + "px;'><span class='blue_text'>Ok</span></li><li id='popup_close_button' class='button text_shadow' style='width: " +
                this.width + "px;'><span class='blue_text'>Cancel</span></li></ul>";
            break;
        default:
            this.content += "<br><br><ul style='width: " + this.width + "px; float:left; text-align:center;'><li id='popup_ok_button' class='button text_shadow' style='width: " + this.width + "px;'><span class='blue_text'>Ok</span></li></ul>"
    }
    this.draw = function() {
        $("#popup_content").html("<span style='float:left; text-align:center;'>" + this.content + "</span>");
        switch (this.type) {
            case "prompt":
                this.promptValue = function() {
                    return $("#prompt_value").val()
                };
                $("#prompt_ok_button").click(function() {
                    currentPopup.func()
                });
                $("#prompt_cancel_button").click(this.drop);
                break;
            case "buy":
                $("#popup_ok_button").click(f);
                $("#popup_leave_button").click(this.drop);
                break;
            case "info":
                break;
            case "fleetDivide":
                for (var d = 0; d < ships.length; d++) 0 < f.ships[d] && ($("#slide" + d).change(function() {
                    $("#textval" + $(this).attr("name")).val($(this).val())
                }), $("#textval" + d).change(function() {
                    Number.isInteger(parseInt($(this).val())) ? parseInt($(this).val()) > $("#slide" + $(this).attr("name")).attr("max") &&
                        $(this).val($("#slide" + $(this).attr("name")).attr("max")) : $(this).val(0);
                    $("#slide" + $(this).attr("name")).val($(this).val())
                }));
                $("#popup_close_button").click(this.drop);
                $("#popup_ok_button").click(this.drop);
                $("#popup_ok_button").click(function() {
                    for (var a = currentFleetId.split("_"), b = a[0], d = planets[b].fleets[a[1]], e = d.maxStorage(), g = 0; null != planets[b].fleets[g];) g++;
                    for (var q = 0, f = 0, t = 0; t < ships.length; t++) $("#slide" + t).val() && (q += parseInt($("#slide" + t).val())), f += d.ships[t];
                    if (0 == f) a = new m(210, 0,
                        "<span class='red_text red_text_shadow'>This fleet has no ship!</span>", "info"), a.drawToast();
                    else if (0 == q) a = new m(210, 0, "<span class='red_text red_text_shadow'>You must select at least 1 ship!</span>", "info"), a.drawToast();
                    else {
                        planets[b].fleets[g] = new Fleet(game.id, "div - " + d.name);
                        for (t = 0; t < ships.length; t++) $("#slide" + t).val() && (q = parseInt($("#slide" + t).val()), planets[b].fleets[g].ships[t] = q, d.ships[t] -= q);
                        for (t = f = 0; t < ships.length; t++) f += d.ships[t];
                        if (0 == f && 0 != a[1]) planets[b].fleets[g].storage =
                            planets[b].fleets[a[1]].storage, delete planets[b].fleets[a[1]];
                        else
                            for (d = planets[b].fleets[g].maxStorage() / e, planets[b].fleets[a[1]].maxStorage(), t = 0; t < resNum; t++) q = parseInt(Math.floor(planets[b].fleets[a[1]].storage[t] * d)), planets[b].fleets[g].load(t, q) && planets[b].fleets[a[1]].unloadSingle(t, q)
                    }
                    y();
                    $("#ship_info_name").html("");
                    $("#ship_info_list").html("")
                });
                break;
            case "loadShip":
                for (d = 0; d < resNum; d++) $("#res_slide" + d).change(function() {
                        $("#res_textval" + $(this).attr("name")).val($(this).val())
                    }),
                    $("#res_textval" + d).change(function() {
                        Number.isInteger(parseInt($(this).val())) ? parseInt($(this).val()) > $("#res_slide" + $(this).attr("name")).attr("max") && $(this).val($("#res_slide" + $(this).attr("name")).attr("max")) : $(this).val(0);
                        $("#res_slide" + $(this).attr("name")).val($(this).val())
                    });
                $("#popup_close_button").click(this.drop);
                currentPopup = this;
                $("#popup_ok_button").unbind();
                $("#popup_ok_button").click(function() {
                    for (var a = currentFleetId.split("_"), b = a[0], d = planets[b].fleets[a[1]], e = 0, g = 0; g < resNum; g++) $("#res_slide" +
                        g).val() && (e += parseInt($("#res_slide" + g).val()));
                    if (e <= d.availableStorage()) {
                        for (g = 0; g < resNum; g++) $("#res_slide" + g).val() && (d = parseInt($("#res_slide" + g).val()), planets[b].resources[g] >= d && (d = Math.min(d, planets[b].resources[g]), planets[b].fleets[a[1]].load(g, d) && planets[b].resourcesAdd(g, -d)));
                        y();
                        $("#ship_info_name").html("");
                        $("#ship_info_list").html("");
                        currentPopup.drop();
                        a = new m(210, 0, "<span class='blue_text text_shadow'>Resources loaded!</span>", "info")
                    } else currentPopup.drop(), a = new m(210, 0,
                        "<span class='red_text red_text_shadow'>Not enough storage!</span>", "info");
                    a.drawToast()
                });
                break;
            case "renameFleet":
                currentPopup = this;
                $("#popup_close_button").unbind();
                $("#popup_close_button").click(this.drop);
                $("#popup_ok_button").unbind();
                $("#popup_ok_button").click(function() {
                    var a = currentFleetId.split("_");
                    planets[a[0]].fleets[a[1]].name = String($("#rename_fleet").val()).replace(/[&<>"'\/]/g, function(a) {
                        return ""
                    });
                    currentPopup.drop();
                    y();
                    (new m(210, 0, "<span class='blue_text text_shadow'>Fleet renamed!</span>",
                        "info")).drawToast()
                });
                break;
            case "renameGame":
                currentPopup = this;
                $("#popup_close_button").unbind();
                $("#popup_close_button").click(this.drop);
                $("#popup_ok_button").unbind();
                $("#popup_ok_button").click(function() {
                    game.name = String($("#rename_fleet").val()).replace(/[&<>"'\/]/g, function(a) {
                        return ""
                    });
                    currentPopup.drop();
                    D(currentPlanet);
                    (new m(210, 0, "<span class='blue_text text_shadow'>Civilization renamed!</span>", "info")).drawToast()
                });
                break;
            case "renameFleetTravel":
                currentPopup = this;
                $("#popup_close_button").unbind();
                $("#popup_close_button").click(this.drop);
                $("#popup_ok_button").unbind();
                $("#popup_ok_button").click(function() {
                    currentPopup.func.name = String($("#rename_fleet").val()).replace(/[&<>"'\/]/g, function(a) {
                        return ""
                    });
                    currentPopup.drop();
                    J("auto");
                    (new m(210, 0, "<span class='blue_text text_shadow'>Fleet renamed!</span>", "info")).drawToast()
                });
                break;
            case "confirm":
                $("#popup_ok_button").click(this.func);
                $("#popup_close_button").click(this.drop);
                break;
            default:
                $("#popup_ok_button").click(this.drop)
        }
        $("#popup_info").hide();
        $("#popup").css("top", "" + parseInt(($(window).height() - b) / 2) + "px");
        $("#popup").css("left", "" + parseInt(($(window).width() - a) / 2) + "px");
        $("#popup_content").css("width", "" + a + "px");
        $("#line_top").css("width", "" + a + "px");
        $("#line_down").css("width", "" + a + "px");
        $("#popup_content").css("height", "" + b + "px");
        $("#popup_content").mCustomScrollbar(L);
        "info" == this.type && ($("#popup_container").css("z-index", 0), $("#popup_container").css("background-color", "rgba(2, 4, 5, 0.0)"));
        $("#popup_container").show()
    };
    this.drawInfo =
        function() {
            $("#popup_info_content").html("<span style='float:left; text-align:center;'>" + this.content + "</span>");
            switch (this.type) {
                case "prompt":
                    this.promptValue = function() {
                        return $("#prompt_value").val()
                    };
                    $("#prompt_ok_button").click(function() {
                        currentPopup.func()
                    });
                    $("#prompt_cancel_button").click(this.drop);
                    break;
                case "buy":
                    $("#popup_ok_button").click(f);
                    $("#popup_leave_button").click(this.drop);
                    break;
                case "info":
                    break;
                default:
                    $("#popup_ok_button").click(this.drop)
            }
            $("#popup_info").css("top", "" +
                parseInt(($(window).height() - b) / 2) + "px");
            $("#popup_info").css("left", "" + parseInt(($(window).width() - a) / 2) + "px");
            $("#popup__info_content").css("width", "" + a + "px");
            $("#line_top_info").css("width", "" + a + "px");
            $("#line_down_info").css("width", "" + a + "px");
            $("#popup_info_content").css("height", "" + b + "px");
            $("#popup_info").show()
        };
    this.drawToast = function() {
        clearTimeout(toastTimeout);
        $("#popup_display_content").html("<span style='float:left; text-align:center;'>" + this.content + "</span>");
        $("#popup_display").css("left",
            "" + parseInt(($(window).width() - a) / 2) + "px");
        $("#popup_display_content").css("width", "" + a + "px");
        $("#popup_display_content").css("height", "" + b + "px");
        $("#popup_display").show();
        toastTimeout = setTimeout(function() {
            "info" == currentPopup.type && currentPopup.drop()
        }, 3E3)
    };
    this.drop = function() {
        "info" != this.type ? $("#popup_container").hide() : ($("#popup_info").hide(), $("#popup_display").hide(), $("#popup_container").css("z-index", 100), $("#popup_container").css("background-color", "rgba(2, 4, 5, 0.7)"))
    };
    currentPopup =
        this
}

function u() {
    $("#story_interface").hide();
    $("#permanent_menu").hide();
    $("#planet_mini").hide();
    $("#planet_interface").hide();
    $("#planet_building_interface").hide();
    $("#planet_selection_interface").hide();
    $("#research_interface").hide();
    $("#settings_interface").hide();
    $("#ship_interface").hide();
    $("#shipyard_interface").hide();
    $("#map_interface").hide();
    $("#map_selection_interface").hide();
    $("#nebula_name").hide();
    $("#quest_interface").hide();
    $("#market_interface").hide();
    $("#profile_interface").hide();
    $("#building_selection_interface").hide();
    $("#back_button").hide();
    $("#bottom_build_menu").hide()
}

function H() {
    currentInterface = "permanentMenu";
    currentUpdater = function() {};
    u();
    $("#permanent_menu").show();
    firston && (firston = !1)
}

function D(a) {
    currentPlanet = a;
    currentInterface = "planetInterface";
    currentUpdater = function() {};
    $("#planet_visualizer").attr("src", "img/" + a.icon + "/" + a.icon + ".png");
    game.searchPlanet(a.id) ? ($("#arrow_left").unbind(), $("#arrow_left").click(function() {
        for (var a = !1, b = 0; !a && b < game.planets.length;) game.planets[b] ==
            currentPlanet.id ? a = !0 : b++;
        a && D(planets[game.planets[(b + game.planets.length - 1) % game.planets.length]])
    }), $("#arrow_right").unbind(), $("#arrow_right").click(function() {
        for (var a = !1, b = 0; !a && b < game.planets.length;) game.planets[b] == currentPlanet.id ? a = !0 : b++;
        a && D(planets[game.planets[(b + 1) % game.planets.length]])
    }), $("#arrow_left").show(), $("#arrow_right").show()) : ($("#arrow_left").unbind(), $("#arrow_left").hide(), $("#arrow_right").unbind(), $("#arrow_right").hide());
    if (null != a.civis) {
        var b = "<span class='white_text' style='font-size:100%;'>Controlled by </span>" +
            civis[a.civis].name;
        $("#civis_name").html(b);
        a.civis == game.id && $("#game_rename").click(function() {
            (new m(360, 140, "<br><span class='blue_text text_shadow'>Type the new name</span><br>", "renameGame")).draw()
        })
    } else $("#civis_name").html("");
    var b = "",
        d;
    game.searchPlanet(a.id) ? d = "blue_text" : null == a.civis ? d = "white_text" : null != a.civis && (d = "red_text");
    a.id == game.capital ? (b += "<span class='blue_text' style='position:absolute; font-size:120%; float:left; width:200px; text-align:center; top:8px; color: rgb(240,180,20);'>" +
        a.name + "</span>", b += "<br><span class='blue_text' style='position:absolute; font-size: 80%; float:left; width:200px; text-align:center; top: 32px; color: rgb(240,180,20);'>(Capital)</span>") : b += "<span class='" + d + "' style='position:absolute; font-size:120%; float:left; width:200px; text-align:center; top:8px;'>" + a.name + "</span>";
    b = b + "<ul id='info_list' style='position:absolute; text-align:left; top:48px; margin-top:16px; clear:both;'><div style='position:relative; left:8px;'>" + ("<span class='blue_text'>Type: </span><span class='white_text'>" +
        a.type.capitalize() + " planet</span><br>");
    b += "<span class='blue_text'>Radius: </span><span class='white_text'>" + a.info.radius + " km</span><br>";
    b += "<span class='blue_text'>Temperature: </span><span class='white_text'>" + a.info.temp + " \u00b0C</span><br>";
    b += "<span class='blue_text'>Atmosphere: </span><span class='white_text'>" + a.info.atmos + "</span><br>";
    b += "<span class='blue_text'>Orbital Distance: </span><span class='white_text'>" + a.info.orbit + " AU</span><br><br>";
    b += "<span class='blue_text'>Influence: </span><span class='white_text'>" +
        a.influence + "</span><br><br>";
    if (game.searchPlanet(a.id)) {
        b += "<span class='blue_text'>Energy Prod.: </span><span class='white_text' style='float:right;margin-right:20%;'>" + Math.floor(a.energyProduction()) + "</span><br>";
        b += "<span class='blue_text'>Energy Cons.: </span><span class='white_text' style='float:right;margin-right:20%;'>" + Math.floor(-a.energyConsumption()) + "</span><br>";
        d = Math.floor(a.energyProduction() + a.energyConsumption());
        var e = a.energyMalus();
        1 < e ? e = 1 : 0 > e && (e = 0);
        var f = "green_text";
        .85 <=
            e && 1 > e ? f = "gold_text" : .85 > e && (f = "red_text");
        b += "<span class='blue_text'>Balance: </span><span class='" + f + "' style='float:right;margin-right:20%;'>" + parseInt(Math.floor(d)) + "</span><br>";
        b += "<span class='blue_text'>Efficiency: </span><span class='" + f + "' style='float:right;margin-right:20%;'>" + Math.floor(1E4 * e) / 100 + "%</span><br><br>"
    }
    for (d = 0; d < resNum; d++) resources[d].show(game) && (0 < a.baseResources[d] && "ore" == resources[d].type && (b += "<span class='blue_text'>" + resources[d].name.capitalize() + ":</span><span class='white_text' style='float:right;margin-right:20%;'>x" +
        a.baseResources[d].toFixed(2) + "</span><br>"), 1 != a.baseResources[d] && "ore" != resources[d].type && (b += "<span class='green_text'>" + resources[d].name.capitalize() + ":</span><span class='white_text' style='float:right;margin-right:20%;'>x" + a.baseResources[d].toFixed(2) + "</span><br>"));
    var g, b = b + "</div>";
    game.searchPlanet(a.id) ? (b += "<br><br><br>", g = new A("action_b", "Buildings", 240, 40, I), b += g.getHtml()) : null == a.civis ? currentPlanetClicker = function() {
        v(nebulas[a.map])
    } : null != a.civis && (currentPlanetClicker = function() {
        v(nebulas[a.map])
    });
    b += "</ul>";
    $("#info_list").html(b);
    g && g.enable();
    g = "";
    game.searchPlanet(a.id) ? g += "<span class='blue_text' style='position:absolute; font-size:120%; float:left; width:200px; text-align:center; top:8px;'>Status</span>" : a.unlock && (d = researchesName[a.unlock], g = g + "<br><span class='green_text' style='font-size:100%; float:left; width:200px; text-align:center; top:8px;'>This planet unlocks: </span><br><br>" + ("<span class='blue_text' style='font-size: 100%;'>" + game.researches[d].name + " Research</span><br><br>"),
        g += "<span class='white_text'>" + game.researches[d].description() + "</span><li>");
    g += "<ul id='info_list2' style='position:absolute; text-align:left; top:48px; margin-top:16px; clear:both;'><div style='position:relative; left:8px;'>";
    if (game.searchPlanet(a.id)) {
        b = a.rawProduction();
        e = Array(resNum);
        a.importExport();
        for (d = 0; d < resNum; d++) e[d] = a.globalImport[d] - a.globalExport[d];
        for (d = 0; d < resNum; d++)
            if (resources[d].show(game) || 0 < a.resources[d]) g += "<div><span class='blue_text'>" + resources[d].name.capitalize() +
                ": </span><span class='white_text' style='margin-righ:16px;font-size:80%' id='res_name_prod_" + d + "' name='" + d + "'>" + beauty(a.resources[d]) + " <span class='" + (0 <= b[d] ? 0 < b[d] ? "green_text" : "gray_text" : "red_text oblique_txt") + "'>(" + (0 < b[d] ? "+" : "") + "" + beauty(b[d]) + "/s)</span>", 0 != e[d] && (g += "<span class='" + (0 <= e[d] ? 0 < e[d] ? "purple_text" : "gray_text" : "pink_text oblique_txt") + "'> (" + (0 < e[d] ? "+" : "") + "" + beauty(e[d]) + "/s)</span>"), g += "</span></div>"
    }
    g += "</div></ul>";
    $("#info_list2").html(g);
    $("#building_icon").hide();
    game.searchPlanet(a.id) && (currentPlanet = a, $("#building_icon").click(function() {
        I()
    }), $("#building_icon").show(), $("#action_b").click(function() {
        I()
    }));
    game.searchPlanet(a.id) && (currentUpdater = function() {
        var b;
        b = "<span class='blue_text' style='position:absolute; font-size:120%; float:left; width:200px; text-align:center; top:8px;'>Status</span><ul id='info_list2' style='position:absolute; text-align:left; top:48px; margin-top:16px; clear:both;'><div style='position:relative; left:8px;'>";
        var d = a.rawProduction(),
            e = Array(resNum);
        a.importExport();
        for (var f = 0; f < resNum; f++) e[f] = a.globalImport[f] - a.globalExport[f];
        for (f = 0; f < resNum; f++)
            if (resources[f].show(game) || 0 < a.resources[f]) b += "<div><span class='blue_text'>" + resources[f].name.capitalize() + ": </span><span class='white_text' style='margin-righ:16px;font-size:80%' id='res_name_prod_" + f + "' name='" + f + "'>" + beauty(a.resources[f]) + " <span class='" + (0 <= d[f] ? 0 < d[f] ? "green_text" : "gray_text" : "red_text oblique_txt") + "'>(" + (0 < d[f] ? "+" : "") + "" + beauty(d[f]) + "/s)</span>",
                0 != e[f] && (b += "<span class='" + (0 <= e[f] ? 0 < e[f] ? "purple_text" : "gray_text" : "pink_text oblique_txt") + "'> (" + (0 < e[f] ? "+" : "") + "" + beauty(e[f]) + "/s)</span>"), b += "</span></div>";
        b += "</div></ul>";
        $("#info_list2").html(b)
    });
    u();
    $("#planet_interface").show();
    $("#back_button").unbind();
    $("#back_button").click(V);
    $("#back_button").show();
    game.searchPlanet(a.id) && ($("#bottom_build_menu").show(), 5 <= game.researches[3].level ? ($("#b_market_icon").show(), $("#b_shipyard_icon").show()) : (1 <= game.researches[3].level && $("#b_shipyard_icon").show(),
        $("#b_market_icon").hide()))
}

function I() {
    currentInterface = "buildingSelectionInterface";
    u();
    $("#building_selection_planet_icon").attr("src", "img/" + currentPlanet.icon + "/" + currentPlanet.icon + ".png");
    $("#building_selection_interface").show();
    $("#back_button").unbind();
    $("#back_button").click(function() {
        D(currentPlanet)
    });
    $("#back_button").show();
    $("#bottom_build_menu").show();
    5 <= game.researches[3].level ? ($("#b_market_icon").show(), $("#b_shipyard_icon").show()) : (1 <= game.researches[3].level && $("#b_shipyard_icon").show(),
        $("#b_market_icon").hide())
}

function p(a, b) {
    currentInterface = "planetBuildingInterface";
    currentPlanet = b;
    currentUpdater = function() {};
    for (var d = "", e = 0; e < game.buildings.length; e++)
        if (game.buildings[e].type == a) {
            var f = "button",
                f = currentPlanet.structureAffordable(e) ? "button" : "red_button",
                g = !1;
            if ("mining" == a)
                for (var G = 0; G < resNum; G++) {
                    if (0 < game.buildings[e].resourcesProd[G] * currentPlanet.baseResources[G]) {
                        g = !0;
                        break
                    }
                } else g = !0;
            game.buildings[e].show(currentPlanet) && g && (d += "<li id='building" + e + "' name='" + e +
                "' style='height:80px;' class='" + f + "'></li>")
        }
    d += "<li id='building_empty' style='height:80px;'></li>";
    $("#building_list").html(d);
    d = "<ul id='mini_list' style='position:absolute; text-align:left; top:0px; clear:both;'><div style='position:relative; left:8px;'>" + ("<span class='blue_text'>Energy Prod.: </span><span class='white_text' style='float:right;margin-right:20%;'>" + Math.floor(b.energyProduction()) + "</span><br>");
    d += "<span class='blue_text'>Energy Cons.: </span><span class='white_text' style='float:right;margin-right:20%;'>" +
        Math.floor(-b.energyConsumption()) + "</span><br>";
    e = Math.floor(b.energyProduction() + b.energyConsumption());
    f = b.energyMalus();
    1 < f ? f = 1 : 0 > f && (f = 0);
    g = "green_text";
    .85 <= f && 1 > f ? g = "gold_text" : .85 > f && (g = "red_text");
    d += "<span class='blue_text'>Balance: </span><span class='" + g + "' style='float:right;margin-right:20%;'>" + parseInt(Math.floor(e)) + "</span><br>";
    d += "<span class='blue_text'>Efficiency: </span><span class='" + g + "' style='float:right;margin-right:20%;'>" + Math.floor(1E4 * f) / 100 + "%</span><br><br>";
    f = b.rawProduction();
    g = Array(resNum);
    b.importExport();
    for (e = 0; e < resNum; e++) g[e] = b.globalImport[e] - b.globalExport[e];
    for (e = 0; e < resNum; e++)
        if (resources[e].show(game) || 0 < b.resources[e]) d += "<div><span class='blue_text'>" + resources[e].name.capitalize() + ": </span><span class='white_text' style='margin-righ:16px;font-size:80%' id='res_name_prod_" + e + "' name='" + e + "'>" + beauty(b.resources[e]) + " <span class='" + (0 <= f[e] ? 0 < f[e] ? "green_text" : "gray_text" : "red_text oblique_txt") + "'>(" + (0 < f[e] ? "+" : "") + "" + beauty(f[e]) + "/s)</span>", 0 != g[e] &&
            (d += "<span class='" + (0 <= g[e] ? 0 < g[e] ? "purple_text" : "gray_text" : "pink_text oblique_txt") + "'> (" + (0 < g[e] ? "+" : "") + "" + beauty(g[e]) + "/s)</span>"), d += "</span></div>";
    d += "</div></ul>";
    $("#mini_list").html(d);
    for (e = 0; e < game.buildings.length; e++)
        if (game.buildings[e].type == a) {
            g = !1;
            if ("mining" == a)
                for (G = 0; G < resNum; G++) {
                    if (0 < game.buildings[e].resourcesProd[G]) {
                        g = !0;
                        break
                    }
                } else g = !0;
            game.buildings[e].show(currentPlanet) && g && ($("#building" + e).unbind(), $("#building" + e).valore = e, $("#building" + e).click(function() {
                var a =
                    game.buildings[parseInt($(this).attr("name"))],
                    b = "<span class='green_text'>(Active)</span>";
                currentPlanet.structure[a.id].active || (b = "<span class='red_text'>(Not Active)</span>");
                $("#building_info_name").html(game.buildings[parseInt($(this).attr("name"))].displayName + "<br>" + b);
                for (var b = "<ul id='building_info_list' style='position:absolute; text-align:right; top:48px; margin-top:16px; clear:both;'><div style='position:relative; left:8px;'><div style='position:relative; left:8px;'><span class='blue_text' style='float:left;margin-left:16px;font-size:120%;'>Production</span><br><br>",
                        d = game.buildings[parseInt($(this).attr("name"))].rawProduction(currentPlanet), e = game.buildings[parseInt($(this).attr("name"))].production(currentPlanet), f = 0; f < resNum; f++) 0 != a.resourcesProd[f] && (0 < a.resourcesProd[f] && (0 < currentPlanet.baseResources[f] || "mine" != a.type2) ? b += "<span class='blue_text' style='float:left;margin-left:16px;'>" + resources[f].name.capitalize() + ": </span><span class='green_text'>" + beauty(d[f]) + "/s (" + beauty(e[f]) + "/s tot)</span><br>" : 0 > a.resourcesProd[f] && (b += "<span class='blue_text' style='float:left;margin-left:16px;'>" +
                    resources[f].name.capitalize() + ": </span><span class='red_text'>" + beauty(d[f]) + "/s (" + beauty(e[f]) + "/s tot)</span><br>"));
                0 != a.energy && (d = "red_text", 0 < a.energy && (d = "green_text"), b = "solar" == a.type2 ? b + ("<span class='blue_text' style='float:left;margin-left:16px;'>Energy: </span><span class='" + d + "'>" + beauty(a.energy / (currentPlanet.info.orbit * currentPlanet.info.orbit)) + "/s (" + beauty(e.energy) + "/s tot)</span><br>") : b + ("<span class='blue_text' style='float:left;margin-left:16px;'>Energy: </span><span class='" +
                    d + "'>" + beauty(a.energy) + "/s (" + beauty(e.energy) + "/s tot)</span><br>"));
                0 != a.population && (d = "red_text", 0 < currentPlanet.basePopulation * a.population && (d = "green_text"), b += "<span class='blue_text' style='float:left;margin-left:16px;'>Population: </span><span class='" + d + "'>" + beauty(currentPlanet.basePopulation * a.population) + "/s (" + beauty(currentPlanet.basePopulation * currentPlanet.structure[parseInt($(this).attr("name"))].number * a.population) + "/s tot)</span><br>");
                0 != a.pollution && (d = "red_text", 0 > a.pollution &&
                    (d = "green_text"));
                0 != a.researchPoint && (d = "red_text", 0 < a.researchPoint && (d = "green_text"), b = "cryolab" == a.name ? b + ("<span class='blue_text' style='float:left;margin-left:16px;'>Research points: </span><span class='" + d + "'>" + beauty(a.researchPoint * currentPlanet.info.temp * -5) + "/s<br>(" + beauty(currentPlanet.structure[parseInt($(this).attr("name"))].number * a.researchPoint * currentPlanet.info.temp * -5) + "/s tot)</span><br>") : "lavaresearch" == a.name ? b + ("<span class='blue_text' style='float:left;margin-left:16px;'>Research points: </span><span class='" +
                    d + "'>" + beauty(a.researchPoint * currentPlanet.info.temp) + "/s<br>(" + beauty(currentPlanet.structure[parseInt($(this).attr("name"))].number * a.researchPoint * currentPlanet.info.temp) + "/s tot)</span><br>") : b + ("<span class='blue_text' style='float:left;margin-left:16px;'>Research points: </span><span class='" + d + "'>" + beauty(a.researchPoint) + "/s<br>(" + beauty(currentPlanet.structure[parseInt($(this).attr("name"))].number * a.researchPoint) + "/s tot)</span><br>"));
                b += "</div><br><div style='position:relative; left:8px;'><span class='blue_text' style='float:left;margin-left:16px;font-size:120%;'>Cost</span><br><br>";
                for (a = 0; a < resNum; a++) e = currentPlanet.structure[parseInt($(this).attr("name"))].cost(a), d = "blue_text", f = "white_text", e > currentPlanet.resources[a] && (f = d = "red_text"), 0 < e && (b += "<span class='" + d + "' style='float:left;margin-left:16px;'>" + resources[a].name.capitalize() + ": </span><span class='" + f + "'>" + beauty(e) + " (x" + game.buildings[parseInt($(this).attr("name"))].resourcesMult[a] + ")</span><br>");
                b += "</div><br><br>";
                a = !1;
                "time_machine" == buildings[parseInt($(this).attr("name"))].name && 0 < currentPlanet.structure[parseInt($(this).attr("name"))].number ?
                    (a = new A("time_button", "Travel in Time", 224, 40, function() {
                        var a = game.totalTPspent() + 2 * game.influence() * Math.log(1 + game.totalRPspent() / (300 * bi)) / Math.log(5);
                        (new m(210, 200, "<br><span class='blue_text'>Are you sure you want to travel in time? </span><br><span class='red_text'>You will lose all your planets, resources and fleets!</span><br><span class='blue_text'>After traveling in time you will get <span class='green_text'>" + beauty(a) + " Technology Points</span> to reassign them on researches.</span>",
                            "confirm", prestige)).draw()
                    }), b += a.getHtml()) : "space_machine" == buildings[parseInt($(this).attr("name"))].name && 0 < currentPlanet.structure[parseInt($(this).attr("name"))].number && (a = new A("space_button", "Send a Fleet to Solidad<br><span class='white_text'>(" + beauty(1E5 * Math.sqrt(currentPlanet.structure[parseInt($(this).attr("name"))].number)) + " weight per antimatter)</span>", 224, 40, function() {
                        (new m(210, 0, "<span class='blue_text text_shadow'>Select the Fleet you wish to send through the gate</span>",
                            "info")).drawToast();
                        var a = currentPlanet.id;
                        y(a);
                        for (var b in planets[a].fleets) 0 < planets[a].fleets[b].shipNum() && ($("#fleet" + a + "_" + b).unbind(), $("#fleet" + a + "_" + b).click(function() {
                            var a = $(this).attr("name").split("_"),
                                b = a[0],
                                d = planets[b].fleets[a[1]],
                                e = Math.ceil(d.totalWeight() / (1E5 * Math.sqrt(planets[b].structure[buildingsName.space_machine].number)));
                            planets[b].resources[resourcesName.antimatter.id] >= e ? (planets[planetsName.solidad].fleetPush(d), delete planets[b].fleets[a[1]], planets[b].resources[resourcesName.antimatter.id] -=
                                e, 0 > planets[b].resources[resourcesName.antimatter.id] && (planets[b].resources[resourcesName.antimatter.id] = 0), p("other", planets[b]), a = new m(210, 0, "<span class='blue_text'>Fleet moved to Solidad</span>", "info")) : (p("other", planets[b]), a = new m(210, 0, "<span class='red_text red_text_shadow'>Not enough antimatter to move this fleet</span>", "info"));
                            a.drawToast()
                        }), $("#fleet" + a + "_" + b).hover(function() {
                            var a = $(this).attr("name").split("_"),
                                b = a[0],
                                a = planets[b].fleets[a[1]];
                            (new m(240, 10, "<span class='blue_text'>Total weight: </span><span class='white_text'>" +
                                beauty(a.totalWeight()) + "</span><br><span class='blue_text'>Antimatter cost: </span><span class='white_text'>" + beauty(Math.ceil(a.totalWeight() / (1E5 * Math.sqrt(planets[b].structure[buildingsName.space_machine].number)))) + "</span>", "info")).drawInfo();
                            $(document).on("mousemove", function(a) {
                                mouseX = a.pageX + 10;
                                mouseY = a.pageY + 10;
                                $("#popup_info").css({
                                    left: mouseX,
                                    top: mouseY
                                })
                            });
                            $("#popup_info").css({
                                left: mouseX,
                                top: mouseY
                            })
                        }, function() {
                            currentPopup.drop()
                        }), $("#fleet" + a + "_" + b).mouseout(function() {
                            $(document).on("mousemove",
                                function() {})
                        }))
                    }), b += a.getHtml());
                b += "</ul>";
                $("#building_info_list").html(b);
                currentBuildingId = parseInt($(this).attr("name"));
                a && a.enable();
                h()
            }))
        }
    h();
    currentUpdater = function() {
        var d;
        d = "<ul id='mini_list' style='position:absolute; text-align:left; top:0px;clear:both;'><div style='position:relative; left:8px;'>" + ("<span class='blue_text'>Energy Prod.: </span><span class='white_text' style='float:right;margin-right:20%;'>" + Math.floor(b.energyProduction()) + "</span><br>");
        d += "<span class='blue_text'>Energy Cons.: </span><span class='white_text' style='float:right;margin-right:20%;'>" +
            Math.floor(-b.energyConsumption()) + "</span><br>";
        var e = Math.floor(b.energyProduction() + b.energyConsumption()),
            f = b.energyMalus();
        1 < f ? f = 1 : 0 > f && (f = 0);
        var g = "green_text";
        .85 <= f && 1 > f ? g = "gold_text" : .85 > f && (g = "red_text");
        d += "<span class='blue_text'>Balance: </span><span class='" + g + "' style='float:right;margin-right:20%;'>" + parseInt(Math.floor(e)) + "</span><br>";
        d += "<span class='blue_text'>Efficiency: </span><span class='" + g + "' style='float:right;margin-right:20%;'>" + Math.floor(1E4 * f) / 100 + "%</span><br><br>";
        f = b.rawProduction();
        g = Array(resNum);
        b.importExport();
        for (e = 0; e < resNum; e++) g[e] = b.globalImport[e] - b.globalExport[e];
        for (e = 0; e < resNum; e++)
            if (resources[e].show(game) || 0 < b.resources[e]) d += "<div><span class='blue_text'>" + resources[e].name.capitalize() + ": </span><span class='white_text' style='margin-righ:16px;font-size:80%' id='res_name_prod_" + e + "' name='" + e + "'>" + beauty(b.resources[e]) + " <span class='" + (0 <= f[e] ? 0 < f[e] ? "green_text" : "gray_text" : "red_text oblique_txt") + "'>(" + (0 < f[e] ? "+" : "") + "" + beauty(f[e]) +
                "/s)</span>", 0 != g[e] && (d += "<span class='" + (0 <= g[e] ? 0 < g[e] ? "purple_text" : "gray_text" : "pink_text oblique_txt") + "'> (" + (0 < g[e] ? "+" : "") + "" + beauty(g[e]) + "/s)</span>"), d += "</span></div>";
        d += "</div></ul>";
        $("#mini_list").html(d);
        for (e = 0; e < game.buildings.length; e++)
            if (game.buildings[e].type == a) {
                var q = !1,
                    f = "blue_text",
                    g = "white_text";
                d = $("#building" + e);
                currentPlanet.structureAffordable(e) ? (d.removeClass("red_button"), d.addClass("button"), avBuilding[e] || (q = !0, avBuilding[e] = !0, f = "blue_text", g = "white_text")) :
                    (d.removeClass("button"), d.addClass("red_button"), avBuilding[e] && (q = !0, avBuilding[e] = !1, g = f = "red_text"));
                for (var f = !1, t = 0, G = ""; !f && t < resNum;) f = currentPlanet.globalNoRes[e][t], G = "<span class='blue_text'>" + game.buildings[e].displayName + "</span><span class='white_text'> needs </span><span class='blue_text'>" + resources[t].name.capitalize() + "</span>", t++;
                f && currentPlanet.structure[e].active && (q = !0, (new m(210, 0, G, "info")).drawToast());
                if (q) {
                    f = !1;
                    if ("mining" == a)
                        for (g = 0; g < resNum; g++) {
                            if (0 < game.buildings[e].resourcesProd[g]) {
                                f = !0;
                                break
                            }
                        } else f = !0;
                    if (game.buildings[e].show(currentPlanet) && f) {
                        f = "blue_text";
                        g = "white_text";
                        currentPlanet.structureAffordable(e) ? (f = "blue_text", g = "white_text", avBuilding[e] = !0, d.removeClass("red_button"), d.addClass("button")) : (g = f = "red_text", avBuilding[e] = !1, d.removeClass("button"), d.addClass("red_button"));
                        for (var q = "<div style='width:98%; height:80px;position:relative;'>", q = q + "<div style='position:relative; top:8px; left:8px'>", q = currentPlanet.structure[e].active ? q + ("<img id='b_shut_" + e + "' name='" +
                                e + "' src='ui/act.png' style='z-index:1000;width:16px;height:16px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>") : q + ("<img id='b_shut_" + e + "' name='" + e + "' src='ui/shut.png' style='z-index:1000;width:16px;height:16px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>"), O = !1, t = 0, G = ""; !O && t < resNum;) O = currentPlanet.globalNoRes[e][t], G = " (needs " + resources[t].name.capitalize() + ")", t++;
                        q = O ? q + ("<span class='blue_text' style='font-size: 100%;'>" + game.buildings[e].displayName +
                            " <span class='red_text' style='font-size:80%;'>" + G + "</span></span> ") : q + ("<span class='blue_text' style='font-size: 100%;'>" + game.buildings[e].displayName + "</span> ");
                        q += "<span class='white_text'>" + currentPlanet.structure[e].number + "</span></div>";
                        q += "<div style='position:relative; top:16px; left:8px'>";
                        for (G = t = 0; G < resNum; G++) O = currentPlanet.structure[e].cost(G), 0 < O && (q += "</div><div style='position:absolute; top:" + (32 + 16 * t) + "px; left: 320px;'>", q += "<span class='" + f + "'>" + resources[G].name.capitalize() +
                            ": </span><span class='" + g + "'>" + beauty(O) + " (x" + game.buildings[e].resourcesMult[G] + ")</span><br>", t++);
                        q += "</div>";
                        q += "<div style='position:relative; top:16px; left:8px'>";
                        q += "<img id='b_build_" + e + "' name='" + e + "' src='ui/add2.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>";
                        q += "<img id='b_build10_" + e + "' name='" + e + "' src='ui/add10.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>";
                        q += "<img id='b_build50_" +
                            e + "' name='" + e + "' src='ui/add50.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>";
                        q += "<img id='b_void' src='ui/void.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;'/>";
                        q += "<img id='b_dismantle_" + e + "' name='" + e + "' src='ui/x.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>";
                        q += "<img id='b_dismantle10_" + e + "' name='" + e + "' src='ui/x10.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>";
                        q += "<img id='b_dismantle50_" + e + "' name='" + e + "' src='ui/x50.png' style='width:32px;height:32px;position:relative;top:3px;left:-2px;' style='cursor:pointer;'/>";
                        q += "</div>";
                        q += "</div>";
                        d.html(q);
                        $("#b_shut_" + e).unbind();
                        $("#b_shut_" + e).click(function() {
                            currentBuildingId = parseInt($(this).attr("name"));
                            currentPlanet.structure[currentBuildingId].active = currentPlanet.structure[currentBuildingId].active ? !1 : !0;
                            h()
                        });
                        $("#b_build_" + e).unbind();
                        $("#b_build_" + e).click(function() {
                            currentBuildingId = parseInt($(this).attr("name"));
                            currentPlanet.buyStructure(currentBuildingId) || (new m(210, 0, "<span class='red_text'>There are not enough resources!</span>", "info")).drawToast();
                            h()
                        });
                        $("#b_build10_" + e).unbind();
                        $("#b_build10_" + e).click(function() {
                            currentBuildingId = parseInt($(this).attr("name"));
                            currentPlanet.buyMultipleStructure(currentBuildingId, 10) || (new m(210, 0, "<span class='red_text'>There are not enough resources!</span>", "info")).drawToast();
                            h()
                        });
                        $("#b_build50_" + e).unbind();
                        $("#b_build50_" + e).click(function() {
                            currentBuildingId =
                                parseInt($(this).attr("name"));
                            currentPlanet.buyMultipleStructure(currentBuildingId, 50) || (new m(210, 0, "<span class='red_text'>There are not enough resources!</span>", "info")).drawToast();
                            h()
                        });
                        $("#b_dismantle_" + e).unbind();
                        $("#b_dismantle_" + e).click(function() {
                            currentBuildingId = parseInt($(this).attr("name"));
                            currentPlanet.sellStructure(currentBuildingId) || (new m(210, 0, "<span class='red_text'>There are no buildings to dismantle!</span>", "info")).drawToast();
                            h()
                        });
                        $("#b_dismantle10_" + e).unbind();
                        $("#b_dismantle10_" +
                            e).click(function() {
                            currentBuildingId = parseInt($(this).attr("name"));
                            currentPlanet.sellMultipleStructure(currentBuildingId, 10) || (new m(210, 0, "<span class='red_text'>There are no buildings to dismantle!</span>", "info")).drawToast();
                            h()
                        });
                        $("#b_dismantle50_" + e).unbind();
                        $("#b_dismantle50_" + e).click(function() {
                            currentBuildingId = parseInt($(this).attr("name"));
                            currentPlanet.sellMultipleStructure(currentBuildingId, 50) || (new m(210, 0, "<span class='red_text'>There are no buildings to dismantle!</span>", "info")).drawToast();
                            h()
                        });
                        $("#b_dismantle_" + e).hover(function() {
                            (new m(240, 10, "<span class='blue_text'>Gives 50% of resources back</span>", "info")).drawInfo();
                            $(document).on("mousemove", function(a) {
                                mouseX = a.pageX + 10;
                                mouseY = a.pageY + 10;
                                $("#popup_info").css({
                                    left: mouseX,
                                    top: mouseY
                                })
                            });
                            $("#popup_info").css({
                                left: mouseX,
                                top: mouseY
                            })
                        }, function() {
                            currentPopup.drop()
                        });
                        $("#b_dismantle_" + e).mouseout(function() {
                            $(document).on("mousemove", function() {})
                        });
                        $("#b_dismantle10_" + e).hover(function() {
                            var a = parseInt($(this).attr("name"));
                            (new m(210, 10, currentPlanet.showSellCost(a, 10), "info")).drawInfo();
                            $(document).on("mousemove", function(a) {
                                mouseX = a.pageX + 10;
                                mouseY = a.pageY + 10;
                                $("#popup_info").css({
                                    left: mouseX,
                                    top: mouseY
                                })
                            });
                            $("#popup_info").css({
                                left: mouseX,
                                top: mouseY
                            })
                        }, function() {
                            currentPopup.drop()
                        });
                        $("#b_dismantle10_" + e).mouseout(function() {
                            $(document).on("mousemove", function() {})
                        });
                        $("#b_dismantle50_" + e).hover(function() {
                            var a = parseInt($(this).attr("name"));
                            (new m(210, 10, currentPlanet.showSellCost(a, 50), "info")).drawInfo();
                            $(document).on("mousemove", function(a) {
                                mouseX = a.pageX + 10;
                                mouseY = a.pageY + 10;
                                $("#popup_info").css({
                                    left: mouseX,
                                    top: mouseY
                                })
                            });
                            $("#popup_info").css({
                                left: mouseX,
                                top: mouseY
                            })
                        }, function() {
                            currentPopup.drop()
                        });
                        $("#b_dismantle50_" + e).mouseout(function() {
                            $(document).on("mousemove", function() {})
                        });
                        $("#b_build10_" + e).hover(function() {
                            var a = parseInt($(this).attr("name"));
                            (new m(200, 10, currentPlanet.showBuyCost(a, 10), "info")).drawInfo();
                            $(document).on("mousemove", function(a) {
                                mouseX = a.pageX + 10;
                                mouseY = a.pageY +
                                    10;
                                $("#popup_info").css({
                                    left: mouseX,
                                    top: mouseY
                                })
                            });
                            $("#popup_info").css({
                                left: mouseX,
                                top: mouseY
                            })
                        }, function() {
                            currentPopup.drop()
                        });
                        $("#b_build10_" + e).mouseout(function() {
                            $(document).on("mousemove", function() {})
                        });
                        $("#b_build50_" + e).hover(function() {
                            var a = parseInt($(this).attr("name"));
                            (new m(200, 10, currentPlanet.showBuyCost(a, 50), "info")).drawInfo();
                            $(document).on("mousemove", function(a) {
                                mouseX = a.pageX + 10;
                                mouseY = a.pageY + 10;
                                $("#popup_info").css({
                                    left: mouseX,
                                    top: mouseY
                                })
                            });
                            $("#popup_info").css({
                                left: mouseX,
                                top: mouseY
                            })
                        }, function() {
                            currentPopup.drop()
                        });
                        $("#b_build50_" + e).mouseout(function() {
                            $(document).on("mousemove", function() {})
                        })
                    }
                }
            }
    };
    currentUpdater();
    u();
    l();
    $("#arrow_mini_left").unbind();
    $("#arrow_mini_left").click(function() {
        for (var b = !1, d = 0; !b && d < game.planets.length;) game.planets[d] == currentPlanet.id ? b = !0 : d++;
        b && p(a, planets[game.planets[(d + game.planets.length - 1) % game.planets.length]])
    });
    $("#arrow_mini_right").unbind();
    $("#arrow_mini_right").click(function() {
        for (var b = !1, d = 0; !b && d < game.planets.length;) game.planets[d] ==
            currentPlanet.id ? b = !0 : d++;
        b && p(a, planets[game.planets[(d + 1) % game.planets.length]])
    });
    $("#arrow_mini_left").show();
    $("#arrow_mini_right").show();
    $("#planet_building_interface").show();
    $("#back_button").unbind();
    $("#back_button").click(I);
    $("#back_button").show();
    game.searchPlanet(currentPlanet.id) && ($("#bottom_build_menu").show(), 5 <= game.researches[3].level ? ($("#b_market_icon").show(), $("#b_shipyard_icon").show()) : (1 <= game.researches[3].level && $("#b_shipyard_icon").show(), $("#b_market_icon").hide()))
}

function F(a) {
    currentInterface = "shipyardInterface";
    currentPlanet = a;
    currentUpdate = function() {};
    for (var b = [], d = "", e = 0; e < game.ships.length; e++) {
        var f = "button",
            f = currentPlanet.shipAffordable(game.ships[e].id) ? "button" : "red_button";
        game.ships[e].req <= currentPlanet.structure[buildingsName.shipyard].number && game.ships[e].show() ? d += "<li id='shipyard" + e + "' name='" + game.ships[e].id + "' style='height:80px;' class='" + f + "'></li>" : game.ships[e].req <= currentPlanet.structure[buildingsName.shipyard].number + 1 && (d +=
            "<li id='shipyard_locked" + e + "' name='" + game.ships[e].id + "' style='height:80px;' class='red_button'></li>");
        b[e] = game.ships[e].id
    }
    $("#shipyard_list").html(d);
    d = "<ul id='shipyard_mini_list' style='position:absolute; text-align:left; top:0px;clear:both;'><div style='position:relative; left:8px;'>" + ("<span class='blue_text'>Energy Prod.: </span><span class='white_text' style='float:right;margin-right:20%;'>" + Math.floor(a.energyProduction()) + "</span><br>");
    d += "<span class='blue_text'>Energy Cons.: </span><span class='white_text' style='float:right;margin-right:20%;'>" +
        Math.floor(-a.energyConsumption()) + "</span><br>";
    e = Math.floor(a.energyProduction() + a.energyConsumption());
    f = a.energyMalus();
    1 < f ? f = 1 : 0 > f && (f = 0);
    var g = "green_text";
    .85 <= f && 1 > f ? g = "gold_text" : .85 > f && (g = "red_text");
    d += "<span class='blue_text'>Balance: </span><span class='" + g + "' style='float:right;margin-right:20%;'>" + parseInt(Math.floor(e)) + "</span><br>";
    d += "<span class='blue_text'>Efficiency: </span><span class='" + g + "' style='float:right;margin-right:20%;'>" + Math.floor(1E4 * f) / 100 + "%</span><br><br>";
    f =
        a.rawProduction();
    g = Array(resNum);
    a.importExport();
    for (e = 0; e < resNum; e++) g[e] = a.globalImport[e] - a.globalExport[e];
    for (e = 0; e < resNum; e++)
        if (resources[e].show(game) || 0 < a.resources[e]) d += "<div><span class='blue_text'>" + resources[e].name.capitalize() + ": </span><span class='white_text' style='margin-righ:16px;font-size:80%' id='res_name_prod_" + e + "' name='" + e + "'>" + beauty(a.resources[e]) + " <span class='" + (0 <= f[e] ? 0 < f[e] ? "green_text" : "gray_text" : "red_text oblique_txt") + "'>(" + (0 < f[e] ? "+" : "") + "" + beauty(f[e]) +
            "/s)</span>", 0 != g[e] && (d += "<span class='" + (0 <= g[e] ? 0 < g[e] ? "purple_text" : "gray_text" : "pink_text oblique_txt") + "'> (" + (0 < g[e] ? "+" : "") + "" + beauty(g[e]) + "/s)</span>"), d += "</span></div>";
    d += "</div></ul>";
    $("#shipyard_mini_list").html(d);
    currentPlanet.shipyardFleet = new Fleet(game.id, "Fleet Y" + Math.floor(game.days / 365) + "-D" + Math.floor(game.days % 365));
    currentPlanet.shipyardFleet.pushed = !1;
    for (e = 0; e < b.length; e++) game.ships[e].req <= currentPlanet.structure[buildingsName.shipyard].number && game.ships[e].show() &&
        ($("#shipyard" + e).valore = e, $("#shipyard" + e).click(function() {
            $("#shipyard_info_name").html(ships[parseInt($(this).attr("name"))].name);
            var a = "<ul id='shipyard_info_list' style='position:absolute; text-align:right; top:48px; margin-top:16px; clear:both;'>",
                b = ships[parseInt($(this).attr("name"))],
                a = a + "<div style='position:relative; left:8px;'><span class='blue_text' style='float:left;margin-left:16px;font-size:120%;'>Information</span><br><br>" + ("<span class='blue_text' style='float:left;margin-left:16px;'>Type: </span><span class='white_text'>" +
                    b.type + "</span><br>"),
                a = a + ("<span class='blue_text' style='float:left;margin-left:16px;'>HP: </span><span class='white_text'>" + Math.floor(b.hp) + "</span><br>"),
                a = a + ("<span class='blue_text' style='float:left;margin-left:16px;'>Power: </span><span class='white_text'>" + Math.floor(100 * b.power) / 100 + "</span><br>"),
                a = a + ("<span class='blue_text' style='float:left;margin-left:16px;'>Armor: </span><span class='white_text'>" + Math.floor(100 * b.armor) / 100 + "</span><br>"),
                a = a + ("<span class='blue_text' style='float:left;margin-left:16px;'>Damage Reduction: </span><span class='white_text'>" +
                    Math.floor(100 * (100 - 100 / (1 + Math.log(1 + b.armor / 1E4) / Math.log(2)))) / 100 + "%</span><br>"),
                a = a + ("<span class='blue_text' style='float:left;margin-left:16px;'>Speed: </span><span class='white_text'>" + Math.floor(100 * b.speed) / 100 + "</span><br>"),
                a = a + ("<span class='blue_text' style='float:left;margin-left:16px;'>Weight: </span><span class='white_text'>" + b.weight + "</span><br>"),
                a = a + ("<span class='blue_text' style='float:left;margin-left:16px;'>Storage: </span><span class='white_text'>" + b.maxStorage + "</span><br>");
            b.fuel && b.fuel.capitalize();
            a += "</div><br><div style='position:relative; left:8px;'><span class='blue_text' style='float:left;margin-left:16px;font-size:120%;'>Cost</span><br><br>";
            for (b = 0; b < resNum; b++) {
                var d = ships[parseInt($(this).attr("name"))].cost[b],
                    e = "blue_text",
                    f = "white_text";
                d > currentPlanet.resources[b] && (f = e = "red_text");
                0 < d && (a += "<span class='" + e + "' style='float:left;margin-left:16px;'>" + resources[b].name.capitalize() + ": </span><span class='" + f + "'>" + beauty(d) + "</span><br>")
            }
            e = "blue_text";
            f = "white_text";
            ships[parseInt($(this).attr("name"))].population > currentPlanet.population && (f = e = "red_text");
            0 < ships[parseInt($(this).attr("name"))].population && (a += "<span class='" + e + "' style='float:left;margin-left:16px;'>Population: </span><span class='" + f + "'>" + beauty(ships[parseInt($(this).attr("name"))].population) + "</span><br>");
            a += "</div><br><br></ul>";
            $("#shipyard_info_list").html(a);
            currentShipId = parseInt($(this).attr("name"))
        }));
    n();
    currentUpdater = function() {
        var d;
        d = "<ul id='shipyard_mini_list' style='position:absolute; text-align:left; top:0px; clear:both;'><div style='position:relative; left:8px;'>" +
            ("<span class='blue_text'>Energy Prod.: </span><span class='white_text' style='float:right;margin-right:20%;'>" + Math.floor(a.energyProduction()) + "</span><br>");
        d += "<span class='blue_text'>Energy Cons.: </span><span class='white_text' style='float:right;margin-right:20%;'>" + Math.floor(-a.energyConsumption()) + "</span><br>";
        var e = Math.floor(a.energyProduction() + a.energyConsumption()),
            f = a.energyMalus();
        1 < f ? f = 1 : 0 > f && (f = 0);
        var g = "green_text";
        .85 <= f && 1 > f ? g = "gold_text" : .85 > f && (g = "red_text");
        d += "<span class='blue_text'>Balance: </span><span class='" +
            g + "' style='float:right;margin-right:20%;'>" + parseInt(Math.floor(e)) + "</span><br>";
        d += "<span class='blue_text'>Efficiency: </span><span class='" + g + "' style='float:right;margin-right:20%;'>" + Math.floor(1E4 * f) / 100 + "%</span><br><br>";
        f = a.rawProduction();
        g = Array(resNum);
        a.importExport();
        for (e = 0; e < resNum; e++) g[e] = a.globalImport[e] - a.globalExport[e];
        for (e = 0; e < resNum; e++)
            if (resources[e].show(game) || 0 < a.resources[e]) d += "<div><span class='blue_text'>" + resources[e].name.capitalize() + ": </span><span class='white_text' style='margin-righ:16px;font-size:80%' id='res_name_prod_" +
                e + "' name='" + e + "'>" + beauty(a.resources[e]) + " <span class='" + (0 <= f[e] ? 0 < f[e] ? "green_text" : "gray_text" : "red_text oblique_txt") + "'>(" + (0 < f[e] ? "+" : "") + "" + beauty(f[e]) + "/s)</span>", 0 != g[e] && (d += "<span class='" + (0 <= g[e] ? 0 < g[e] ? "purple_text" : "gray_text" : "pink_text oblique_txt") + "'> (" + (0 < g[e] ? "+" : "") + "" + beauty(g[e]) + "/s)</span>"), d += "</span></div>";
        d += "</div></ul>";
        $("#shipyard_mini_list").html(d);
        for (d = 0; d < b.length; d++) e = b[d], ships[e].req <= currentPlanet.structure[buildingsName.shipyard].number && ships[e].show()
    };
    currentUpdater();
    u();
    w();
    $("#shipyard_interface").show();
    $("#back_button").unbind();
    $("#back_button").click(I);
    $("#back_button").show();
    game.searchPlanet(currentPlanet.id) && ($("#bottom_build_menu").show(), 5 <= game.researches[3].level ? ($("#b_market_icon").show(), $("#b_shipyard_icon").show()) : (1 <= game.researches[3].level && $("#b_shipyard_icon").show(), $("#b_market_icon").hide()))
}

function E() {
    currentInterface = "researchInterface";
    for (var a = "", b = 0; b < game.researches.length; b++)
        if (game.researches[b].requirement()) {
            var d =
                "blue_text",
                e = "white_text",
                f = "button",
                t = "green_text";
            game.researches[b].cost() > Math.floor(game.researchPoint) ? (avRes[b] = !1, e = d = "red_text") : (avRes[b] = !0, d = "blue_text", e = "white_text", f = "button", t = "green_text");
            a += "<li id='research" + b + "' name='" + b + "' style='width:1200px; height:116px;'>";
            a += "<div style='position:relative; top:8px; left:8px; width:900px;' id='research_title_" + b + "'>";
            a = game.researches[b].level >= game.researches[b].max ? a + ("<span class='blue_text' style='font-size: 100%;'>" + game.researches[b].name +
                " " + (game.researches[b].level - game.researches[b].bonusLevel) + (0 < game.researches[b].bonusLevel ? " <span class='green_text'>(+" + game.researches[b].bonusLevel + ") </span>" : " ") + "<span class='white_text'>(Max Level)</span></span><span class='" + d + "'>    (Research Points: <span class='" + e + "'>" + beauty(game.researches[b].cost()) + "</span>)</span>" + (0 < game.timeTravelNum ? "<span class='" + t + "'>    (Technology Points: <span class='" + e + "'>" + beauty(game.researches[b].costBonus()) + "</span> x" + beauty(game.researches[b].multBonus) +
                    ")</span>" : "") + "</div>") : a + ("<span class='blue_text' style='font-size: 100%;'>" + game.researches[b].name + " " + (game.researches[b].level - game.researches[b].bonusLevel) + (0 < game.researches[b].bonusLevel ? " <span class='green_text'>(+" + game.researches[b].bonusLevel + ") </span>" : "") + "</span><img src='ui/arrow_small.png' style='width:16px;height:16px;top:3px;position:relative'/><span class='blue_text' style='font-size: 100%;'>" + game.researches[b].name + " " + (game.researches[b].level - game.researches[b].bonusLevel +
                1) + (0 < game.researches[b].bonusLevel ? " <span class='green_text'>(+" + game.researches[b].bonusLevel + ") </span>" : " ") + "</span><span class='" + d + "'>    (Research Points: <span class='" + e + "'>" + beauty(game.researches[b].cost()) + "</span>)</span>" + (0 < game.timeTravelNum ? "<span class='" + t + "'>    (Technology Points: <span class='" + e + "'>" + beauty(game.researches[b].costBonus()) + "</span> x" + beauty(game.researches[b].multBonus) + ")</span>" : "") + "</div>");
            a += "<div style='position:relative; top:16px; left:8px; width:356px;height:80px'>";
            a += "<span class='white_text'>" + game.researches[b].description() + "</span></div>";
            a += "<div style='position:relative;top:-72px; left:700px;width:200px;height:32px;' class='" + f + "' name='" + b + "'  id='buy_research_" + b + "'>";
            a += "<span class='blue_text' style='position:relative;top:8px;'>Buy with Research Points</span>";
            a += "</div>";
            0 < game.timeTravelNum && (a += "<div style='position:relative;top:-72px; left:700px;width:200px;height:32px;'class='" + f + "' name='" + b + "'  id='buy_tech_" + b + "'>", a += "<span class='green_text' style='position:relative;top:8px;'>Buy with Tech Points</span>",
                a += "</div>");
            a += "</li>"
        }
    a += "<li id='research_empty' style='width:1024px; height:80px;'><div style='position:relative; top:8px; left:8px; width:640px;'></div></li>";
    $("#research_list").html(a);
    for (var b = 0; b < game.researches.length; b++) game.researches[b].requirement() && (game.researches[b].level >= game.researches[b].max ? $("#buy_research_" + b).click(function() {
        (new m(210, 0, "<span class='blue_text text_shadow'>Max Level reached!</span>", "info")).drawToast()
    }) : $("#buy_research_" + b).click(function() {
        game.researches[parseInt($(this).attr("name"))].cost() <=
            game.researchPoint ? game.researches[parseInt($(this).attr("name"))].enable() : (new m(210, 0, "<span class='red_text red_text_shadow'>There are not enough Research Points!</span>", "info")).drawToast();
        E()
    }), 0 < game.timeTravelNum && (game.researches[b].level >= game.researches[b].max ? $("#buy_tech_" + b).click(function() {
        (new m(210, 0, "<span class='blue_text text_shadow'>Max Level reached!</span>", "info")).drawToast()
    }) : $("#buy_tech_" + b).click(function() {
        game.researches[parseInt($(this).attr("name"))].costBonus() <=
            game.techPoints ? game.researches[parseInt($(this).attr("name"))].enableBonus() : (new m(210, 0, "<span class='red_text red_text_shadow'>There are not enough Technology Points!</span>", "info")).drawToast();
        E()
    })));
    currentUpdater = function() {
        for (var a = 0; a < game.researches.length; a++)
            if (game.researches[a].requirement()) {
                var b = !1,
                    d = "blue_text",
                    e = "white_text";
                game.researches[a].cost() > Math.floor(game.researchPoint) && avRes[a] && (b = !0, avRes[a] = !1, e = d = "red_text");
                game.researches[a].cost() <= Math.floor(game.researchPoint) &&
                    !avRes[a] && (b = !0, avRes[a] = !0, d = "blue_text", e = "white_text");
                b && ($("#research" + a).length && E(), b = "", b = game.researches[a].level >= game.researches[a].max ? b + ("<span class='blue_text' style='font-size: 100%;'>" + game.researches[a].name + " " + (game.researches[a].level - game.researches[a].bonusLevel) + (0 < game.researches[a].bonusLevel ? " <span class='green_text'>(+" + game.researches[a].bonusLevel + ") </span>" : " ") + "<span class='white_text'>(Max Level)</span></span><span class='" + d + "'>    (Research Points: <span class='" +
                    e + "'>" + beauty(game.researches[a].cost()) + "</span>)</span>" + (0 < game.timeTravelNum ? "<span class='" + t + "'>    (Technology Points: <span class='" + e + "'>" + beauty(game.researches[a].costBonus()) + "</span> x" + beauty(game.researches[a].multBonus) + ")</span>" : "")) : b + ("<span class='blue_text' style='font-size: 100%;'>" + game.researches[a].name + " " + (game.researches[a].level - game.researches[a].bonusLevel) + (0 < game.researches[a].bonusLevel ? " <span class='green_text'>(+" + game.researches[a].bonusLevel + ") </span>" : "") +
                    "</span><img src='ui/arrow_small.png' style='width:16px;height:16px;top:3px;position:relative'/><span class='blue_text' style='font-size: 100%;'>" + game.researches[a].name + " " + (game.researches[a].level - game.researches[a].bonusLevel + 1) + (0 < game.researches[a].bonusLevel ? " <span class='green_text'>(+" + game.researches[a].bonusLevel + ") </span>" : " ") + "</span><span class='" + d + "'>    (Research Points: <span class='" + e + "'>" + beauty(game.researches[a].cost()) + "</span>)</span>" + (0 < game.timeTravelNum ? "<span class='" +
                        t + "'>    (Technology Points: <span class='" + e + "'>" + beauty(game.researches[a].costBonus()) + "</span> x" + beauty(game.researches[a].multBonus) + ")</span>" : "")), $("#research_title_" + a).html(b))
            }
    };
    currentUpdater();
    u();
    $("#research_interface").show();
    $("#back_button").unbind();
    $("#back_button").click(H);
    $("#back_button").show();
    game.searchPlanet(currentPlanet.id) && ($("#bottom_build_menu").show(), 5 <= game.researches[3].level ? ($("#b_market_icon").show(), $("#b_shipyard_icon").show()) : (1 <= game.researches[3].level &&
        $("#b_shipyard_icon").show(), $("#b_market_icon").hide()))
}

function v(a, b) {
    var d = b || mapzoomlevel;
    currentInterface = "mapInterface";
    currentNebula = a;
    currentUpdater = function() {};
    $("#map_image").attr("src", "img/nebula/" + a.icon);
    var e = "<img id='map_zoom_m' style='position:relative;top:8px;width:32px;height:32px;cursor:pointer;' src='ui/zoomm.png'/>";
    1 < game.mapsLength() && (e += "<img id='map_arrow_left' style='position:relative;top:4px;width:20px;height:20px;cursor:pointer;' src='ui/arrow_small_left.png'/>");
    e += a.name;
    1 < game.mapsLength() && (e += "<img id='map_arrow_right' style='position:relative;top:4px;width:20px;height:20px;cursor:pointer;' src='ui/arrow_small.png'/>");
    e += "<img id='map_zoom_p' style='position:relative;top:8px;width:32px;height:32px;cursor:pointer;' src='ui/zoomp.png'/>";
    $("#nebula_name").html(e);
    $("#map_arrow_left").click(function() {
        var b = (a.id + nebulas.length) % game.mapsLength();
        v(nebulas[b], mapzoomlevel)
    });
    $("#map_arrow_right").click(function() {
        var b = (a.id + 1) % game.mapsLength();
        v(nebulas[b],
            mapzoomlevel)
    });
    $("#map_zoom_p").click(function() {
        1 <= mapzoomlevel && (mapzoomlevel -= .2);
        1 > mapzoomlevel && (mapzoomlevel = 1);
        v(a, mapzoomlevel)
    });
    $("#map_zoom_m").click(function() {
        2 >= mapzoomlevel && (mapzoomlevel += .2);
        2 < mapzoomlevel && (mapzoomlevel = 2);
        v(a, mapzoomlevel)
    });
    for (var e = "", f = Array(a.planets.length), g = 0; g < a.planets.length; g++) {
        var h = "pnebula_gray_text";
        game.searchPlanet(a.planets[g]) && (h = "pnebula_text");
        game.searchPlanet(a.planets[g]) || null == planets[a.planets[g]].civis || (h = "pnebula_red_text");
        var O =
            1E12;
        planets[a.planets[0]].shortestPath[a.planets[g]] && (O = planets[a.planets[0]].shortestPath[a.planets[g]].hops, O += 11 * a.id);
        O <= game.researches[researchesName.astronomy].level && (e += "<div id='pdiv" + g + "' name='" + a.planets[g] + "' style='cursor: pointer;position:absolute;top:" + planets[a.planets[g]].y / d + "px;left:" + planets[a.planets[g]].x / d + "px;z-index:20;height:" + 24 / d + "px;' class='" + h + "'>", e += "<img style='width:" + 48 / d + "px;height:" + 48 / d + "px;position:relative;left:-" + 14 / d + "px;top:-" + 14 / d + "px;' id='pnebula" +
            a.planets[g] + "' src='img/" + planets[a.planets[g]].icon + "/" + planets[a.planets[g]].icon + ".png' />", e += "<span style='position:relative; left:-" + 8 / d + "px;top:-" + 34 / d + "px;cursor:pointer;'>" + planets[a.planets[g]].name + "</span>", e += "</div>");
        f[g] = Array(planets[a.planets[g]].routes.length);
        for (h = 0; h < planets[a.planets[g]].routes.length; h++)
            if (planets[a.planets[g]].routes[h].planet1 == planets[a.planets[g]].id) {
                var M = planets[a.planets[g]].routes[h].cx(),
                    N = planets[a.planets[g]].routes[h].cy(),
                    Z = parseInt(planets[a.planets[g]].routes[h].distance());
                f[g][h] = Z;
                if (O <= game.researches[researchesName.astronomy].level) {
                    var U = Math.max(planets[a.planets[0]].shortestPath[planets[a.planets[g]].routes[h].planet1].hops, planets[a.planets[0]].shortestPath[planets[a.planets[g]].routes[h].planet2].hops),
                        U = U + 11 * a.id;
                    U <= researches[researchesName.astronomy].level && (M = 180 * Math.atan(N / M) / Math.PI, 0 > N && 0 > M && (M += 180), e += "<div id='route" + g + "_" + h + "' name='" + g + "_" + h + "' style='position:absolute;top:" + parseInt((8 + planets[a.planets[g]].y) / d) + "px;left:" + parseInt((12 + planets[a.planets[g]].x) /
                        d) + "px;z-index:8;'>", e += "<img src='ui/line.png' style='width:" + Z / d + "px;height:3px;-ms-transform:rotate(" + M + "deg);-webkit-transform:rotate(" + M + "deg);transform:rotate(" + M + "deg);transform-origin: top left;' /></div>")
                }
            }
    }
    $("#map_icon_container").html(e);
    for (g = 0; g < a.planets.length; g++)
        for ($("#pdiv" + g).click(function() {
                D(planets[parseInt($(this).attr("name"))])
            }), h = 0; h < planets[a.planets[g]].routes.length; h++) $("#route" + g + "_" + h).hover(function() {
            var a = $(this).attr("name").split("_"),
                b = parseInt(a[0]),
                a = parseInt(a[1]),
                d = "<span class='blue_text'>Distance: </span><span class='white_text'>" + parseInt(Math.floor(f[b][a])) + "</span><br>",
                d = d + ("<span class='blue_text'>Time (0.3): </span><span class='white_text'>" + parseInt(Math.floor(f[b][a] / .3)) + "s</span><br>"),
                d = d + ("<span class='blue_text'>Time (0.5): </span><span class='white_text'>" + parseInt(Math.floor(f[b][a] / .5)) + "s</span><br>"),
                d = d + ("<span class='blue_text'>Time (0.8): </span><span class='white_text'>" + parseInt(Math.floor(f[b][a] / .8)) + "s</span><br>"),
                d = d + ("<span class='blue_text'>Time (1.2): </span><span class='white_text'>" +
                    parseInt(Math.floor(f[b][a] / 1.2)) + "s</span><br>"),
                d = d + ("<span class='blue_text'>Time (2.0): </span><span class='white_text'>" + parseInt(Math.floor(f[b][a] / 2)) + "s</span>");
            (new m(170, 10, d, "info")).drawInfo();
            $(document).on("mousemove", function(a) {
                mouseX = a.pageX + 10;
                mouseY = a.pageY + 10;
                $("#popup_info").css({
                    left: mouseX,
                    top: mouseY
                })
            });
            $("#popup_info").css({
                left: mouseX,
                top: mouseY
            })
        }, function() {
            currentPopup.drop()
        }), $("#route" + g + "_" + h).mouseout(function() {
            $(document).on("mousemove", function() {})
        });
    u();
    $("#map_interface").show();
    $("#nebula_name").show();
    $("#back_button").unbind();
    $("#back_button").click(H);
    $("#back_button").show()
}

function y(a) {
    currentInterface = "shipInterface";
    var b = null;
    $.isNumeric(a) && (b = a);
    a = "";
    var d = 0,
        e = 0,
        f = planets.length;
    null != b && (e = b, f = b + 1);
    for (; e < f; e++)
        if (!b || b == e) {
            var g = !1,
                h;
            for (h in planets[e].fleets) planets[e].fleets[h].civis == game.id && (g = !0);
            for (var z in planets[e].fleets)(game.searchPlanet(e) || game == civis[planets[e].fleets[z].civis] || g) && 0 < planets[e].fleets[z].shipNum() && (a += "<li id='fleet" + e +
                "_" + z + "' name='" + e + "_" + z + "' style='height:80px;' class='button'>", a += "<div style='width:98%; height:80px;position:relative;'>", a += "<div style='position:relative; top:8px; left:8px'>", planets[e].fleets[z].civis != game.id ? a += "<span class='red_text' style='font-size: 100%;'>" + planets[e].fleets[z].name + "</span>" : (a += "<span class='blue_text' style='font-size: 100%;'>" + planets[e].fleets[z].name + " </span>", a += "<img id='b_rename_icon_" + e + "_" + z + "' name='" + e + "_" + z + "' src='ui/RENAME.png' style='width:16px;height:16px;position:relative;top:3px;cursor:pointer;'/>"),
                a += "<span class='white_text'> orbiting </span><span class='blue_text' style='font-size: 100%;'>" + planets[e].name + "</span></div>", game.id == planets[e].fleets[z].civis && (a += "<div id='quick_fleet_menu_" + e + "_" + z + "' style='position:absolute;right:10%;bottom:10%'>", game.searchPlanet(e) && (a += "<img id='b_load_icon_" + e + "_" + z + "' name='" + e + "_" + z + "' src='ui/load.png' class='icon' style='cursor:pointer;'/>", a += "<img id='b_unload_icon_" + e + "_" + z + "' name='" + e + "_" + z + "' src='ui/unload.png' class='icon' style='cursor:pointer;'/>"),
                    a += "<img id='b_divide_icon_" + e + "_" + z + "' name='" + e + "_" + z + "' src='ui/divide.png' class='icon' style='cursor:pointer;'/>", a += "<img id='b_move_icon_" + e + "_" + z + "' name='" + e + "_" + z + "' src='ui/move.png' class='icon' style='cursor:pointer;'/>", game.searchPlanet(e) && (a += "<img id='b_automove_icon_" + e + "_" + z + "' name='" + e + "_" + z + "' src='ui/automove.png' class='icon' style='cursor:pointer;'/>", a += "<img id='b_void_ship_icon' src='ui/void.png' class='icon' style='cursor:pointer;'/>", a += "<img id='b_dismantle_ship_icon_" +
                        e + "_" + z + "' name='" + e + "_" + z + "' src='ui/x.png' class='icon' style='cursor:pointer;'/>"), a += "</div>'"), a += "</div>", a += "</li>", d++), 0 < z && 0 == planets[e].fleets[z].shipNum() && delete planets[e].fleets[z]
        }
    0 == d && (a += "<li id='nofleet' style='height:80px;' class='button'><div style='width:98%; height:80px;position:relative;'><div style='text-align:center;position:relative; top:8px; left:8px'><span class='gray_text' style='font-size: 100%;'>There are no fleets to show</span> </li>");
    $("#ship_list").html(a);
    for (e =
        0; e < planets.length; e++)
        if (!b || b == e) {
            g = !1;
            for (h in planets[e].fleets) planets[e].fleets[h].civis == game.id && (g = !0);
            for (z in planets[e].fleets)(game.searchPlanet(e) || game == civis[planets[e].fleets[z].civis] || g) && 0 < planets[e].fleets[z].shipNum() && (0 != z && ($("#b_move_icon_" + e + "_" + z).click(function() {
                currentFleetId = $(this).attr("name");
                var a = currentFleetId.split("_")[0];
                v(nebulas[planets[a].map]);
                for (a = 0; a < currentNebula.planets.length; a++) $("#pdiv" + a).unbind(), $("#pdiv" + a).click(function() {
                    var a = currentFleetId.split("_"),
                        b = a[0],
                        d = planets[b].fleets[a[1]];
                    d.type = "normal";
                    parseInt(b) != parseInt($(this).attr("name")) ? (d = d.move(parseInt(b), parseInt($(this).attr("name"))), delete planets[b].fleets[a[1]], $("#ship_info_list").html(""), y(), a = 0, 60 <= d ? a = "" + parseInt(Math.floor(d / 60)) + " minutes and " + parseInt(Math.floor(d % 60)) + " seconds" : 0 > d ? (b = new m(210, 0, "<span class='red_text red_text_shadow'>Already on this planet!</span>", "info"), b.drawToast()) : a = "" + parseInt(Math.floor(d)) + " seconds", b = new m(210, 0, "<span class='red_text red_text_shadow'>Fleet will arrive in " +
                        a + "</span>", "info")) : b = new m(210, 0, "<span class='red_text red_text_shadow'>Already on this planet!</span>", "info");
                    b.drawToast()
                })
            }), game.searchPlanet(e) && ($("#b_automove_icon_" + e + "_" + z).click(function() {
                currentFleetId = $(this).attr("name");
                var a = currentFleetId.split("_")[0];
                v(nebulas[planets[a].map]);
                for (a = 0; a < currentNebula.planets.length; a++) $("#pdiv" + a).unbind(), $("#pdiv" + a).click(function() {
                    if (planets[parseInt($(this).attr("name"))].civis == game.id) {
                        var a = currentFleetId.split("_"),
                            b = a[0],
                            d = planets[b].fleets[a[1]];
                        parseInt(b) != parseInt($(this).attr("name")) ? aa(d, parseInt(b), parseInt($(this).attr("name")), parseInt(a[1])) : (a = new m(210, 0, "<span class='red_text red_text_shadow'>Already on this planet!</span>", "info"), a.drawToast())
                    } else a = new m(210, 0, "<span class='red_text red_text_shadow'>This is an enemy planet!</span>", "info"), a.drawToast()
                })
            }), $("#b_dismantle_ship_icon_" + e + "_" + z).unbind(), $("#b_dismantle_ship_icon_" + e + "_" + z).click(function() {
                currentFleetId = $(this).attr("name");
                var a = currentFleetId.split("_"),
                    b = parseInt(a[0]),
                    d = planets[b].fleets[a[1]];
                d.unload(b);
                for (var e = 0; e < ships.length; e++) {
                    for (var f = 0; f < resNum; f++) planets[b].resources[f] += ships[e].cost[f] * d.ships[e] / 2;
                    d.ships[e] = 0
                }
                delete planets[b].fleets[a[1]];
                $("#ship_info_list").html("");
                currentPopup.drop();
                y()
            }), $("#b_dismantle_ship_icon_" + e + "_" + z).hover(function() {
                (new m(170, 10, "<span class='blue_text'>Dismantle this fleet</span>", "info")).drawInfo();
                $(document).on("mousemove", function(a) {
                    mouseX = a.pageX + 10;
                    mouseY = a.pageY + 10;
                    $("#popup_info").css({
                        left: mouseX,
                        top: mouseY
                    })
                });
                $("#popup_info").css({
                    left: mouseX,
                    top: mouseY
                })
            }, function() {
                currentPopup.drop()
            }), $("#b_dismantle_ship_icon_" + e + "_" + z).mouseout(function() {
                $(document).on("mousemove", function() {})
            }))), game.searchPlanet(e) && ($("#b_load_icon_" + e + "_" + z).click(function() {
                var a = $(this).attr("name").split("_"),
                    b = a[0],
                    a = planets[b].fleets[a[1]];
                a.planet = b;
                (new m(512, 374, "<br><span class='blue_text text_shadow'>Select the amount of resources</span><br>", "loadShip", a)).draw()
            }), $("#b_unload_icon_" + e + "_" + z).click(function() {
                var a =
                    $(this).attr("name").split("_"),
                    b = a[0],
                    a = planets[b].fleets[a[1]];
                currentFleetId = $(this).attr("name");
                a.unload(b);
                (new m(210, 0, "<span class='blue_text text_shadow'>Fleet unloaded on " + planets[b].name + "</span>", "info")).drawToast()
            })), $("#b_divide_icon_" + e + "_" + z).click(function() {
                currentFleetId = $(this).attr("name");
                for (var a = $(this).attr("name").split("_"), b = planets[a[0]].fleets[a[1]], d = a = 0; d < ships.length; d++) 0 < b.ships[d] && a++;
                b = new m(420, Math.min(64 + 20 * a, 240), "<br><span class='blue_text text_shadow'>Select the number of ships</span><br>",
                    "fleetDivide", b);
                console.log(a);
                b.draw();
                y();
                $("#ship_info_list").html("")
            }), $("#b_rename_icon_" + e + "_" + z).click(function() {
                currentFleetId = $(this).attr("name");
                var a = $(this).attr("name").split("_");
                (new m(360, 140, "<br><span class='blue_text text_shadow'>Type the new name</span><br>", "renameFleet", planets[a[0]].fleets[a[1]])).draw()
            }))
        }
    a = "<ul id='ship_mini_list2' style='text-align:left;'>";
    d = new A("overview_button", "Orbiting Fleets", 224, 48, y);
    a += d.getHtml();
    f = new A("traveling_button", "Traveling Fleets",
        224, 48,
        function() {
            J("normal")
        });
    a += f.getHtml();
    e = new A("marketship_button", "Market Fleets", 224, 48, function() {
        J("market")
    });
    a += e.getHtml();
    g = new A("autoroutesov_button", "Auto-routes", 224, 48, function() {
        J("auto")
    });
    a += g.getHtml();
    for (var M = Array(game.planets.length), N = 0; N < game.planets.length; N++) M[N] = new A("autoroutesov_" + N + "_button", "<img class='icon' style='position:absolute;top:8px;left:8px' src='img/" + planets[game.planets[N]].icon + "/" + planets[game.planets[N]].icon + ".png'/>" + planets[game.planets[N]].name +
        "", 224, 48,
        function() {
            var a = $(this).attr("id").split("_");
            J(game.planets[parseInt(a[1])])
        }), a += M[N].getHtml();
    a += "</ul>";
    $("#ship_mini_list").html(a);
    $("#ship_mini_list").css("position", "absolute");
    $("#ship_mini_list").css("top", "8px");
    $("#ship_info_placeholder").css("height", 48 * (game.planets.length + 4) + 16 + "px");
    d.enable();
    f.enable();
    e.enable();
    g.enable();
    for (N = 0; N < game.planets.length; N++) M[N].enable();
    for (e = 0; e < planets.length; e++)
        if (!b || b == e) {
            g = !1;
            for (h in planets[e].fleets) planets[e].fleets[h].civis ==
                game.id && (g = !0);
            for (z in planets[e].fleets)(game.searchPlanet(e) || game == civis[planets[e].fleets[z].civis] || g) && 0 < planets[e].fleets[z].shipNum() && ($("#fleet" + e + "_" + z).unbind(), $("#fleet" + e + "_" + z).click(function() {
                var a = $(this).attr("name").split("_"),
                    d = a[0],
                    e = planets[d].fleets[a[1]];
                e.civis != game.id ? $("#ship_info_name").html("<span class='red_text_n'>" + e.name + "</span><br><span class='red_text' style='font-size: 80%;'>(" + civis[e.civis].name + ")</span>") : $("#ship_info_name").html(e.name);
                var f;
                f = "<ul id='ship_info_list' style='position:absolute; text-align:right; top:48px; margin-top:16px; clear:both;'><div style='position:relative; left:8px;'><span class='blue_text' style='float:left;margin-left:16px;font-size:120%;'>Information</span><br><br>" +
                    ("<span class='blue_text' style='float:left;margin-left:16px;'>Total Power: </span><span class='white_text' id='ammo_bonus'>" + beauty(e.power()) + "</span><br>");
                f += "<span class='blue_text' style='float:left;margin-left:16px;'>Total HP: </span><span class='white_text'>" + beauty(e.hp()) + "</span><br>";
                f += "<span class='blue_text' style='float:left;margin-left:16px;'>Speed: </span><span class='white_text'>" + Math.floor(100 * e.speed()) / 100 + "</span><br>";
                f += "<span class='blue_text' style='float:left;margin-left:16px;'>Total Storage: </span><span class='white_text'>" +
                    beauty(e.maxStorage()) + "</span><br>";
                var g = 0;
                f = f + "</div><br><div style='position:relative; left:8px;'><span class='blue_text' style='float:left;margin-left:16px;font-size:120%;'>Storage</span><br><br>" + ("<span class='blue_text' style='float:left;margin-left:16px;'>Storage left: </span><span class='white_text'>" + beauty(parseInt(Math.floor(e.availableStorage()))) + "</span><br>");
                for (var t = 0; t < resNum; t++) 0 < e.storage[t] && (g++, f += "<span class='blue_text' style='float:left;margin-left:16px;'>" + resources[t].name.capitalize() +
                    ": </span><span class='white_text'>" + beauty(parseInt(Math.floor(e.storage[t]))) + "</span><br>");
                f += "</div><br><div style='position:relative; left:8px;'><span class='blue_text' style='float:left;margin-left:16px;font-size:120%;'>Ships</span><br><br>";
                for (t = 0; t < ships.length; t++) 0 < e.ships[t] && (f += "<span class='blue_text' style='float:left;margin-left:16px;' id='ship_name_infos_" + t + "' name='" + t + "'>" + ships[t].name + "</span></span><span class='white_text'>" + e.ships[t] + "</span><br>", g++);
                f += "</div><br><br>";
                $("#ship_infolist_placeholder").css("height", "" + (768 + 16 * g) + "px");
                if (game == civis[e.civis]) {
                    planets[d].population = 1001;
                    e.hp();
                    e.armor();
                    e.power();
                    var g = new A("conquer_button", "Conquer Planet", 224, 40, function() {
                            var a = currentFleetId.split("_"),
                                b = a[0],
                                a = planets[b].fleets[a[1]];
                            planets[b].population = 1001;
                            var d = 200 * planets[b].structure[buildingsName.turret].number + 500 * planets[b].structure[buildingsName.laser].number,
                                e = 250 * planets[b].structure[buildingsName.pierturret].number,
                                f = 150 * planets[b].structure[buildingsName.turret].number +
                                100 * planets[b].structure[buildingsName.laser].number + 100 * planets[b].structure[buildingsName.pierturret].number + 1E3 * planets[b].structure[buildingsName.shieldturret].number,
                                g = 1E3 * planets[b].structure[buildingsName.turret].number + 2E3 * planets[b].structure[buildingsName.laser].number + 1E3 * planets[b].structure[buildingsName.pierturret].number + 5E3 * planets[b].structure[buildingsName.shieldturret].number,
                                d = (a.hp() + 1) / (e + d + a.armor() * d / (e + d + .01) + .01);
                            if ((g + 1) / (1.1 * a.power() - f + .01) < d) {
                                f = !1;
                                for (g = 0; !f && g < civis[planets[b].civis].planets.length;) civis[planets[b].civis].planets[g] ==
                                    b ? f = !0 : g++;
                                f ? (civis[planets[b].civis].planets.splice(g, 1), civis[planets[b].civis].capital == b && 0 < civis[planets[b].civis].planets.length && (civis[planets[b].civis].capital = civis[planets[b].civis].planets[0]), planets[b].civis = a.civis, game.pushPlanet(b), save(), submitNumber("Number of planets", game.planets.length), submitNumber("Infuence", game.influence()), currentPlanet = planets[b], D(currentPlanet), S = new m(210, 96, "<br><span class='blue_text text_shadow'>" + planets[b].name + " has been conquered!</span>", "Ok")) :
                                    S = new m(210, 96, "<br><span class='blue_text text_shadow'>ERROR 168!</span>", "Ok")
                            } else S = new m(210, 96, "<br><span class='blue_text text_shadow'>Your fleet has been destroyed!</span>", "Ok");
                            S.draw()
                        }),
                        h = new A("colonize_button", "Colonize " + planets[d].name, 224, 40, function() {
                            for (var a = currentFleetId.split("_"), b = parseInt(a[0]), d = planets[b].fleets[a[1]], e = 0, f = 0; f < ships.length; f++) "Colonial Ship" == ships[f].type && 0 < d.ships[f] ? (planets[b].resources[resourcesName.iron.id] += .5 * ships[f].cost[resourcesName.iron.id] *
                                d.ships[f], planets[b].resources[resourcesName.steel.id] += .5 * ships[f].cost[resourcesName.steel.id] * d.ships[f], planets[b].resources[resourcesName.titanium.id] += .5 * ships[f].cost[resourcesName.titanium.id] * d.ships[f], d.ships[f] = 0) : e++;
                            0 == e && delete planets[b].fleets[a[1]];
                            $("#ship_info_list").html("");
                            planets[b].civis = d.civis;
                            planets[b].fleets[0].civis = d.civis;
                            game.pushPlanet(b);
                            save();
                            submitNumber("Number of planets", game.planets.length);
                            submitNumber("Infuence", game.influence());
                            currentPlanet = planets[b];
                            D(currentPlanet);
                            S = new m(210, 96, "<br><span class='blue_text text_shadow'>" + planets[b].name + " has been colonized!</span>", "Ok");
                            S.draw()
                        }),
                        q = new A("load_button", "Load", 224, 40, function() {
                            var a = currentFleetId.split("_"),
                                b = a[0],
                                a = planets[b].fleets[a[1]];
                            a.planet = b;
                            (new m(512, 374, "<br><span class='blue_text text_shadow'>Select the amount of resources</span><br>", "loadShip", a)).draw()
                        }),
                        N = new A("unload_button", "Unload", 224, 40, function() {
                            e.unload(d);
                            (new m(210, 0, "<span class='blue_text text_shadow'>Fleet unloaded on " +
                                planets[d].name + "</span>", "info")).drawToast()
                        }),
                        O = new A("move_button", "Move", 224, 40, function() {
                            var a = currentFleetId.split("_")[0];
                            v(nebulas[planets[a].map]);
                            for (a = 0; a < currentNebula.planets.length; a++) $("#pdiv" + a).unbind(), $("#pdiv" + a).click(function() {
                                var a = currentFleetId.split("_"),
                                    b = a[0],
                                    d = planets[b].fleets[a[1]];
                                d.type = "normal";
                                parseInt(b) != parseInt($(this).attr("name")) ? (d = d.move(parseInt(b), parseInt($(this).attr("name"))), delete planets[b].fleets[a[1]], $("#ship_info_list").html(""), y(), a = 0,
                                    60 <= d ? a = "" + parseInt(Math.floor(d / 60)) + " minutes and " + parseInt(Math.floor(d % 60)) + " seconds" : 0 > d ? (b = new m(210, 0, "<span class='red_text red_text_shadow'>Already on this planet!</span>", "info"), b.drawToast()) : a = "" + parseInt(Math.floor(d)) + " seconds", b = new m(210, 0, "<span class='blue_text text_shadow'>Fleet will arrive in " + a + "</span>", "info")) : b = new m(210, 0, "<span class='red_text red_text_shadow'>Already on this planet!</span>", "info");
                                b.drawToast()
                            })
                        }),
                        z = new A("automove_button", "Automatic Route", 224,
                            40,
                            function() {
                                var a = currentFleetId.split("_")[0];
                                v(nebulas[planets[a].map]);
                                for (a = 0; a < currentNebula.planets.length; a++) $("#pdiv" + a).unbind(), $("#pdiv" + a).click(function() {
                                    if (planets[parseInt($(this).attr("name"))].civis == game.id) {
                                        var a = currentFleetId.split("_"),
                                            b = a[0],
                                            d = planets[b].fleets[a[1]];
                                        parseInt(b) != parseInt($(this).attr("name")) ? aa(d, parseInt(b), parseInt($(this).attr("name")), parseInt(a[1])) : (a = new m(210, 0, "<span class='red_text red_text_shadow'>Already on this planet!</span>", "info"), a.drawToast())
                                    } else a =
                                        new m(210, 0, "<span class='red_text red_text_shadow'>This is an enemy planet!</span>", "info"), a.drawToast()
                                })
                            }),
                        M = new A("divide_button", "Divide Fleet", 224, 40, function() {
                            for (var a = currentFleetId.split("_"), b = planets[a[0]].fleets[a[1]], d = a = 0; d < ships.length; d++) 0 < b.ships[d] && a++;
                            b = new m(420, Math.min(64 + 20 * a, 240), "<br><span class='blue_text text_shadow'>Select the number of ships</span><br>", "fleetDivide", b);
                            console.log(a);
                            b.draw();
                            y();
                            $("#ship_info_list").html("")
                        }),
                        n = new A("merge_button", "Merge Fleet",
                            224, 40,
                            function() {
                                (new m(210, 0, "<span class='blue_text text_shadow'>Select the Fleet to join</span>", "info")).drawToast();
                                for (var a = 0; a < planets.length; a++)
                                    if (!b || b == a)
                                        for (var d in planets[a].fleets)(game.searchPlanet(a) || game == civis[planets[a].fleets[d].civis]) && 0 < planets[a].fleets[d].shipNum() ? ($("#fleet" + a + "_" + d).unbind(), $("#fleet" + a + "_" + d).click(function() {
                                            var a = $(this).attr("name").split("_"),
                                                b = a[0],
                                                d = planets[b].fleets[a[1]],
                                                e = currentFleetId.split("_"),
                                                f = e[0],
                                                g = planets[f].fleets[e[1]];
                                            b != f ? a =
                                                new m(210, 0, "<span class='red_text red_text_shadow'>Fleets are orbiting different planets! Can't merge them.</span>", "info") : a[1] == e[1] ? a = new m(210, 0, "<span class='red_text red_text_shadow'>Can't merge with itself</span>", "info") : (d.fusion(g), delete planets[f].fleets[e[1]], a = new m(210, 0, "<span class='blue_text text_shadow'>Fleets merged</span>", "info"));
                                            a.drawToast();
                                            y()
                                        })) : ($("#fleet" + a + "_" + d).unbind(), $("#fleet" + a + "_" + d).click(function() {
                                            (new m(210, 0, "<span class='red_text red_text_shadow'>Can't merge with this fleet!</span>",
                                                "info")).drawToast()
                                        }))
                            }),
                        G = new A("mergeauto_button", "Merge with Autoroute", 224, 40, function() {
                            (new m(210, 0, "<span class='blue_text text_shadow'>Select the Autoroute to join</span>", "info")).drawToast();
                            var a = currentFleetId.split("_"),
                                a = parseInt(a[0]);
                            J(a);
                            for (var b = fleetSchedule.civisFleet(game.id), d = 0; d < b.length; d++) b[d].origin != a && b[d].destination != a || "auto" != fleetSchedule.fleets[b[d].fleet].type || ($("#travel" + b[d].fleet).unbind(), $("#travel" + b[d].fleet).click(function() {
                                var a = $(this).attr("name").split("_"),
                                    b = parseInt(a[1]);
                                parseInt(a[0]);
                                var a = currentFleetId.split("_"),
                                    d = a[0],
                                    e = planets[d].fleets[a[1]];
                                e.speed() > fleetSchedule.fleets[b].speed() ? b = new m(210, 0, "<span class='red_text text_shadow'>Select a fleet slower than the auto route!</span>", "info") : (e.unload(d), fleetSchedule.fleets[b].fusion(e), delete planets[d].fleets[a[1]], y(), b = new m(210, 0, "<span class='blue_text text_shadow'>Fleet merged</span>", "info"));
                                b.drawToast()
                            }))
                        }),
                        l = new A("rename_button", "Rename Fleet", 224, 40, function() {
                            var a = currentFleetId.split("_");
                            (new m(360, 140, "<br><span class='blue_text text_shadow'>Type the new name</span><br>", "renameFleet", planets[a[0]].fleets[a[1]])).draw()
                        }),
                        X = new A("attack_button", "Attack Fleet", 224, 40, function() {
                            var a = currentFleetId.split("_")[0];
                            y();
                            var b = new m(210, 0, "<span class='blue_text text_shadow'>Select the enemy fleet</span>", "info");
                            b.drawToast();
                            $("#ship_list").children().each(function(d, e) {
                                var f = $(this).attr("name").split("_");
                                parseInt(f[0]) == a && planets[f[0]].fleets[parseInt(f[1])].civis == planets[a].civis &&
                                    planets[f[0]].fleets[parseInt(f[1])].civis != game.id || $(this).css("display", "none");
                                $(this).unbind();
                                $(this).click(function() {
                                    var a = $(this).attr("name").split("_"),
                                        d = currentFleetId.split("_"),
                                        e = d[0],
                                        f = planets[a[0]].fleets[parseInt(a[1])].battle(planets[e].fleets[d[1]], !1);
                                    "atk" == f.winner ? (b = new m(210, 96, "<br><span class='blue_text text_shadow'>Your fleet won the battle!</span>", "Ok"), b.draw(), 0 == planets[a[0]].fleets[parseInt(a[1])].shipNum() && delete planets[a[0]].fleets[parseInt(a[1])]) : "def" == f.winner &&
                                        (b = new m(210, 96, "<br><span class='red_text red_text_shadow'>Your fleet lost the battle!</span>", "Ok"), b.draw(), 0 == planets[e].fleets[d[1]].shipNum() && delete planets[e].fleets[d[1]]);
                                    $("#ship_list").html(f.r);
                                    $("#ship_info_list").html("")
                                });
                                $(this).hover(function() {
                                    var a = $(this).attr("name").split("_"),
                                        b = currentFleetId.split("_"),
                                        d = b[0],
                                        a = planets[a[0]].fleets[parseInt(a[1])].battle(planets[d].fleets[b[1]], !0),
                                        b = "";
                                    "atk" == a.winner ? b += "<span class='green_text text_shadow'>Your fleet will win the battle!</span>" :
                                        "def" == a.winner && (b += "<span class='red_text red_text_shadow'>Your fleet will lose the battle!</span>");
                                    (new m(200, 10, b, "info")).drawInfo();
                                    $(document).on("mousemove", function(a) {
                                        mouseX = a.pageX + 10;
                                        mouseY = a.pageY + 10;
                                        $("#popup_info").css({
                                            left: mouseX,
                                            top: mouseY
                                        })
                                    });
                                    $("#popup_info").css({
                                        left: mouseX,
                                        top: mouseY
                                    })
                                }, function() {
                                    currentPopup.drop()
                                });
                                $(this).mouseout(function() {
                                    $(document).on("mousemove", function() {})
                                })
                            })
                        });
                    0 < a[1] && (f += X.getHtml());
                    for (var p = !1, u = !1, t = 0; t < ships.length; t++) "Colonial Ship" ==
                        ships[t].type && 0 < e.ships[t] && (p = !0);
                    game.searchPlanet(d) && (p = !1);
                    planets[d].civis && (p = !1);
                    if (p) f += h.getHtml();
                    else if (planets[d].civis != e.civis && planets[d].civis) {
                        var u = !0,
                            w;
                        for (w in planets[d].fleets) planets[d].fleets[w].civis == planets[d].civis && 0 != w && (u = !1)
                    }
                    u ? f += g.getHtml() : !game.searchPlanet(d) && planets[d].civis && (g = new A("conquer_button", "<span class='red_text'>Destroy enemy fleets before conquering this planet!</span>", 224, 40, function() {}), f += g.getHtml());
                    0 != a[1] && (f += n.getHtml(), f += G.getHtml());
                    game.searchPlanet(d) && (0 != a[1] && (f += q.getHtml()), 0 != a[1] && (f += N.getHtml()));
                    0 != a[1] && (f += O.getHtml());
                    0 != a[1] && game.searchPlanet(d) && (f += z.getHtml());
                    f += M.getHtml();
                    f += l.getHtml();
                    f += "</ul>";
                    $("#ship_info_list").html(f);
                    currentFleetId = $(this).attr("name");
                    p ? h.enable() : u && g.enable();
                    game.searchPlanet(d) && (0 != a[1] && q.enable(), 0 != a[1] && N.enable());
                    0 != a[1] && O.enable();
                    0 != a[1] && game.searchPlanet(d) && z.enable();
                    M.enable();
                    0 != a[1] && (n.enable(), G.enable());
                    l.enable();
                    0 != a[1] && X.enable()
                } else f += "</ul>", $("#ship_info_list").html(f),
                    currentFleetId = $(this).attr("name");
                for (t = 0; t < ships.length; t++) 0 < e.ships[t] && ($("#ship_name_infos_" + t).hover(function() {
                    var a = parseInt($(this).attr("name")),
                        b = currentFleetId.split("_"),
                        b = planets[b[0]].fleets[b[1]],
                        d = "<span class='blue_text'>Power: </span><span class='white_text'>" + beauty(ships[a].power) + "</span><br>",
                        d = d + ("<span class='blue_text'>Armor: </span><span class='white_text'>" + beauty(ships[a].armor) + "</span><br>"),
                        d = d + ("<span class='blue_text'>HPs: </span><span class='white_text'>" + beauty(ships[a].hp) +
                            "</span><br>"),
                        d = d + ("<span class='blue_text'>Dmg Reduction: </span><span class='white_text'>" + Math.floor(100 * (100 - 100 / (1 + Math.log(1 + ships[a].armor * (1 + b.storage[resourcesName.armor.id] / (2 * mi)) / 1E4) / Math.log(2)))) / 100 + "%</span><br>"),
                        d = d + ("<span class='blue_text'>Speed: </span><span class='white_text'>" + Math.floor(100 * ships[a].speed) / 100 + "</span><br>"),
                        d = d + ("<span class='blue_text'>Weight: </span><span class='white_text'>" + beauty(ships[a].weight) + "</span><br>"),
                        d = d + ("<span class='blue_text'>Weight%: </span><span class='white_text'>" +
                            Math.floor(ships[a].weight * b.ships[a] / b.weight() * 1E4) / 100 + "%</span><br>");
                    (new m(140, 10, d, "info")).drawInfo();
                    $(document).on("mousemove", function(a) {
                        mouseX = a.pageX + 10;
                        mouseY = a.pageY + 10;
                        $("#popup_info").css({
                            left: mouseX,
                            top: mouseY
                        })
                    });
                    $("#popup_info").css({
                        left: mouseX,
                        top: mouseY
                    })
                }, function() {
                    currentPopup.drop()
                }), $("#ship_name_infos_" + t).mouseout(function() {
                    $(document).on("mousemove", function() {})
                }), $("#ammo_bonus").hover(function() {
                    for (var a = currentFleetId.split("_"), b = planets[a[0]].fleets[a[1]],
                            d = a = 0; d < ships.length; d++) a += ships[d].power * b.ships[d];
                    var d = 10 * a * Math.log(1 + b.storage[resourcesName.ammunition.id] / (10 * mi)) / Math.log(2),
                        e = 20 * a * Math.log(1 + b.storage[resourcesName["u-ammunition"].id] / (10 * mi)) / Math.log(2),
                        f = 60 * a * Math.log(1 + b.storage[resourcesName["t-ammunition"].id] / (20 * mi)) / Math.log(2),
                        b = 1 + .1 * Math.log(1 + b.ships[14]) / Math.log(2),
                        a = "<span class='blue_text'>Base Power: </span><span class='white_text'>" + beauty(a) + "</span><br>",
                        a = a + ("<span class='blue_text'>Ammo Bonus: </span><span class='white_text'>+" +
                            beauty(d) + "</span><br>"),
                        a = a + ("<span class='blue_text'>U-Ammo Bonus: </span><span class='white_text'>+" + beauty(e) + "</span><br>"),
                        a = a + ("<span class='blue_text'>T-Ammo Bonus: </span><span class='white_text'>+" + beauty(f) + "</span><br>"),
                        a = a + ("<span class='blue_text'>Admiral Bonus: </span><span class='white_text'>x" + beauty(b) + "</span><br>");
                    (new m(200, 10, a, "info")).drawInfo();
                    $(document).on("mousemove", function(a) {
                        mouseX = a.pageX + 10;
                        mouseY = a.pageY + 10;
                        $("#popup_info").css({
                            left: mouseX - 210,
                            top: mouseY
                        })
                    });
                    $("#popup_info").css({
                        left: mouseX - 210,
                        top: mouseY
                    })
                }, function() {
                    currentPopup.drop()
                }), $("#ammo_bonus").mouseout(function() {
                    $(document).on("mousemove", function() {})
                }))
            }))
        }
    currentUpdater = function() {};
    u();
    $("#ship_interface").show();
    $("#back_button").unbind();
    $("#back_button").click(H);
    $("#back_button").show();
    game.searchPlanet(currentPlanet.id) && ($("#bottom_build_menu").show(), 5 <= game.researches[3].level ? ($("#b_market_icon").show(), $("#b_shipyard_icon").show()) : (1 <= game.researches[3].level && $("#b_shipyard_icon").show(),
        $("#b_market_icon").hide()))
}

function J(a) {
    currentCriteriaAuto = a;
    currentUpdater = function() {};
    y();
    "travelingShipInterface" != currentInterface && ($("#ship_info_list").html(""), $("#ship_info_name").html(""));
    currentInterface = "travelingShipInterface";
    $("#ship_list").html("");
    currentUpdater = function() {};
    var b = fleetSchedule.civisFleet(game.id);
    "market" == a && (b = fleetSchedule.marketFleets());
    for (var d = 0, e = "", f = 0; f < b.length; f++)
        if ("all" == a || "auto" != a && fleetSchedule.fleets[b[f].fleet].type == a || "market" == a && ("market_delivery" ==
                fleetSchedule.fleets[b[f].fleet].type || "market_sell" == fleetSchedule.fleets[b[f].fleet].type) || "auto" == a && "auto" == fleetSchedule.fleets[b[f].fleet].type || (b[f].origin == a || b[f].destination == a) && "auto" == fleetSchedule.fleets[b[f].fleet].type) {
            var e = e + ("<li id='travel" + b[f].fleet + "' name='" + f + "_" + b[f].fleet + "' style='height:96px;' class='button'>"),
                e = e + "<div style='width:98%; height:120px;position:relative;'>",
                e = e + "<div style='position:relative; top:8px; left:8px'>",
                e = e + ("<span class='blue_text' style='font-size: 100%;'>" +
                    fleetSchedule.fleets[b[f].fleet].name + "</span>"),
                e = e + ("<img id='b_rename_travel_icon_" + b[f].fleet + "' name='" + b[f].fleet + "' src='ui/RENAME.png' style='width:16px;height:16px;position:relative;top:3px;cursor:pointer;'/>"),
                e = e + ("<span class='white_text'> traveling to </span><span class='blue_text' style='font-size: 100%;'>" + planets[b[f].destination].name + "</span>"),
                e = e + ("<span class='white_text'> (last seen in </span><span class='blue_text' style='font-size: 100%;'>" + planets[b[f].lastPlanet].name + "</span><span class='white_text'>)</span>"),
                g = b[f].departureTime + (b[f].totalTime - b[f].departureTime) / idleBon - (new Date).getTime();
            0 > g && (g = 0);
            var g = Math.floor(g / 1E3),
                h = Math.floor(g / 60),
                e = e + ("<span class='white_text'> will arrive in: </span><span class='blue_text' id='ship_time_" + b[f].fleet + "'>" + Math.floor(h / 60) % 60 + "h " + h % 60 + "m " + g % 60 + "s</span>"),
                e = e + "</div>",
                z = b[f].hop,
                g = shortestRouteId(b[f].origin, b[f].destination),
                h = g.length - 2,
                M = 100 * ((new Date).getTime() - b[f].departureTime) / (b[f].arrivalTime - b[f].departureTime) * idleBon;
            100 < M && (M = 100);
            e += "<div style='position:relative;top:32px;'><div style='width:400px;height:12px;background-color:rgba(75, 129, 156, 0.3);position:relative;left:20px;top:-8px'></div>";
            e += "<div id='q" + b[f].fleet + "' style='max-width:400px;width:" + Math.floor(400 * z / h + 4 * M / h) + "px;height:12px;background-color: rgba(100,152,208,0.3);position:relative;top:-20px;left:20px;'></div>";
            for (z = 0; z < g.length - 1; z++) e += "<img id='qplanet" + b[f].fleet + "_" + z + "' src='img/" + planets[g[z + 1]].icon + "/" + planets[g[z + 1]].icon + ".png' style='width:30px;height:30px;position:relative;top:-40px;left:" + Math.floor(400 * z / h - 30 * z - 4) + "px;'></img>";
            "auto" == b[f].type && (e += "<div class='blue_text' style='position:relative; top:-72px; left:480px; font-size: 80%;cursor:pointer;width:100%' id='autoroute_overview_" +
                b[f].fleet + "_" + f + "' name='exp_" + b[f].fleet + "_" + b[f].origin + "_" + b[f].destination + "' >Show resources<img src='ui/arrow_down.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' /></div>", e += "<div class='blue_text' style='position:relative; top:-56px; left:15%;width:70%; font-size: 80%;cursor:pointer;' id='autoroute_resources_" + b[f].fleet + "'></div>");
            g = parseInt(M);
            100 < g && (g = 100);
            e += "</div>";
            e += "</div></li>";
            d++
        }
    0 == d && (e += "<li id='nofleet' style='height:120px;' class='button'><div style='width:98%; height:120px;position:relative;'><div style='text-align:center;position:relative; top:8px; left:8px'><span class='gray_text' style='font-size: 100%;'>There are no fleets to show</span> </li>");
    $("#ship_list").html(e);
    for (f = 0; f < b.length; f++)
        if ("all" == a || "auto" != a && fleetSchedule.fleets[b[f].fleet].type == a || "market" == a && ("market_delivery" == fleetSchedule.fleets[b[f].fleet].type || "market_sell" == fleetSchedule.fleets[b[f].fleet].type) || "auto" == a && "auto" == fleetSchedule.fleets[b[f].fleet].type || (b[f].origin == a || b[f].destination == a) && "auto" == fleetSchedule.fleets[b[f].fleet].type) $("#travel" + b[f].fleet).unbind(), $("#travel" + b[f].fleet).click(function() {
            var d = $(this).attr("name").split("_"),
                e = parseInt(d[1]),
                d = parseInt(d[0]);
            "auto" == fleetSchedule.fleets[e].type ? $("#ship_info_name").html(fleetSchedule.fleets[e].name + "<br><span class='white_text' style='font-size:70%'>(Automatic Transport)</span>") : $("#ship_info_name").html(fleetSchedule.fleets[e].name);
            var f;
            f = "<ul id='ship_info_list' style='position:absolute; text-align:right; top:48px; margin-top:16px; clear:both;'><div style='position:relative; left:8px;'><span class='blue_text' style='float:left;margin-left:16px;font-size:120%;'>Information</span><br><br>" +
                ("<span class='blue_text' style='float:left;margin-left:16px;'>Total Power: </span><span class='white_text'>" + beauty(fleetSchedule.fleets[e].power()) + "</span><br>");
            f += "<span class='blue_text' style='float:left;margin-left:16px;'>Total Armor: </span><span class='white_text'>" + beauty(fleetSchedule.fleets[e].armor()) + "</span><br>";
            f += "<span class='blue_text' style='float:left;margin-left:16px;'>Total HP: </span><span class='white_text'>" + beauty(fleetSchedule.fleets[e].hp()) + "</span><br>";
            f += "<span class='blue_text' style='float:left;margin-left:16px;'>Speed: </span><span class='white_text'>" +
                Math.floor(100 * fleetSchedule.fleets[e].speed()) / 100 + "</span><br>";
            f += "<span class='blue_text' style='float:left;margin-left:16px;'>Total Storage: </span><span class='white_text'>" + beauty(fleetSchedule.fleets[e].maxStorage()) + "</span><br>";
            var g = (b[d].totalTime - b[d].departureTime) / idleBon;
            0 > g && (g = 0);
            var g = Math.floor(g / 1E3),
                t = Math.floor(g / 60);
            f = f + ("<span class='blue_text' style='float:left;margin-left:16px;'>Total Travel Time: </span><span class='white_text'>" + Math.floor(t / 60) % 60 + "h " + t % 60 + "m " + g % 60 +
                "s</span><br>") + "</div><br>";
            g = 512;
            f = f + "<div style='position:relative; left:8px;'><span class='blue_text' style='float:left;margin-left:16px;font-size:120%;'>Storage</span><br><br>" + ("<span class='blue_text' style='float:left;margin-left:16px;'>Storage left: </span><span class='white_text'>" + beauty(parseInt(Math.floor(fleetSchedule.fleets[e].availableStorage()))) + "</span><br>");
            for (t = 0; t < resNum; t++) 0 < fleetSchedule.fleets[e].storage[t] && (f += "<span class='blue_text' style='float:left;margin-left:16px;'>" +
                resources[t].name.capitalize() + ": </span><span class='white_text'>" + parseInt(Math.floor(fleetSchedule.fleets[e].storage[t])) + "</span><br>", g += 16);
            f += "</div><br><div style='position:relative; left:8px;'><span class='blue_text' style='float:left;margin-left:16px;font-size:120%;'>Ships</span><br><br>";
            for (t = 0; t < ships.length; t++) 0 < fleetSchedule.fleets[e].ships[t] && (f += "<span class='blue_text' style='float:left;margin-left:16px;'>" + ships[t].name + "</span><span class='white_text'>" + fleetSchedule.fleets[e].ships[t] +
                "</span><br>", g += 16);
            f += "</div><br><br>";
            if ("auto" == fleetSchedule.fleets[e].type) {
                var t = new A("autocnc_button", "Cancel automatic route", 224, 40, function() {
                        var b = $(this).attr("name").split("_"),
                            d = parseInt(b[1]);
                        parseInt(b[0]);
                        fleetSchedule.fleets[d].type = "normal";
                        (new m(210, 0, "<span class='blue_text text_shadow'>Route canceled</span>", "info")).drawToast();
                        J(a)
                    }),
                    h = new A("autoedit_button", "Edit automatic route", 224, 40, function() {
                        var a = $(this).attr("name").split("_"),
                            d = parseInt(a[1]),
                            a = parseInt(a[0]);
                        da(fleetSchedule.fleets[d], b[a].origin, b[a].destination)
                    });
                f += t.getHtml();
                f += h.getHtml();
                f += "</ul>";
                $("#ship_info_list").html(f);
                t.enable();
                h.enable();
                $("#autocnc_button").attr("name", d + "_" + e);
                $("#autoedit_button").attr("name", d + "_" + e)
            } else e = new A("cancel_travel_button", "Cancel Travel", 224, 40, function() {
                var d = b[parseInt($(this).attr("name"))].fleet,
                    e = fleetSchedule.fleets[d];
                if (fleetSchedule.fleets[d]) {
                    for (var f = 1; planets[e.lastPlanet].fleets[f];) f++;
                    planets[e.lastPlanet].fleets[f] = fleetSchedule.fleets[d];
                    fleetSchedule.fleets[d] = null
                } else(new m(210, 0, "<span class='red_text red_text_shadow'>This fleet doesn't exist!</span>", "info")).drawToast();
                J(a)
            }), fleetSchedule.fleets[b[d].fleet].civis == game.id && (f += e.getHtml()), f += "</ul>", $("#ship_info_list").html(f), fleetSchedule.fleets[b[d].fleet].civis == game.id && (e.enable(), $("#cancel_travel_button").attr("name", d));
            $("#ship_infolist_placeholder").css("height", g + "px")
        }), $("#b_rename_travel_icon_" + b[f].fleet).click(function() {
            var a = fleetSchedule.fleets[parseInt($(this).attr("name"))];
            (new m(360, 140, "<br><span class='blue_text text_shadow'>Type the new name</span><br>", "renameFleetTravel", a)).draw()
        }), "auto" == fleetSchedule.fleets[b[f].fleet].type && ($("#autoroute_overview_" + b[f].fleet + "_" + f).unbind(), $("#autoroute_overview_" + b[f].fleet + "_" + f).click(function() {
            var a = $(this).attr("name").split("_"),
                b = a[0],
                d = parseInt(a[1]),
                e = parseInt(a[2]),
                a = parseInt(a[3]);
            if ("exp" == b) {
                var b = 96,
                    f = fleetSchedule.fleets[d],
                    g = parseInt(Math.floor(2 * planets[e].shortestPath[a].distance / f.speed())),
                    t;
                t = "<div style='position:relative;left:16px;'><div style='float:left;margin:0;width:48%;'>" +
                    ("<img src='img/" + planets[e].icon + "/" + planets[e].icon + ".png' style='cursor:pointer;position:relative;top:8px;height:24px;width:24px;'/><span class='blue_text' style='font-size:90%'> " + planets[e].name + "</span><br>");
                for (var b = b + 64, h = 0, m = 0; m < resNum; m++) 0 < f.autoRes[f.autoMap[e]][m] && (t += "<br><span class='blue_text' style='font-size:90%;'>" + resources[m].name.capitalize() + ": </span><span class='white_text' style='font-size:100%;'>" + beauty(f.autoRes[f.autoMap[e]][m]) + " </span><span class='blue_text'>(" +
                    beauty(f.autoRes[f.autoMap[e]][m] / g) + "/s)</span>", h += 22);
                t = t + "</div><div style='position:relative;left:16px;'><div style='float:left;margin:0;width:48%;'>" + ("<img src='img/" + planets[a].icon + "/" + planets[a].icon + ".png' style='cursor:pointer;position:relative;top:8px;height:24px;width:24px;'/><span class='blue_text' style='font-size:90%'> " + planets[a].name + "</span><br>");
                for (var q = 0, m = 0; m < resNum; m++) 0 < f.autoRes[f.autoMap[a]][m] && (t += "<br><span class='blue_text' style='font-size:90%;'>" + resources[m].name.capitalize() +
                    ": </span><span class='white_text' style='font-size:100%;'>" + beauty(f.autoRes[f.autoMap[a]][m]) + " </span><span class='blue_text'>(" + beauty(f.autoRes[f.autoMap[a]][m] / g) + "/s)</span>", q += 22);
                t += "</div></div>";
                f = h;
                q > h && (f = q);
                b += f;
                $("#autoroute_resources_" + d).html(t);
                $("#travel" + d).css("height", b + "px");
                $(this).html("Hide resources<img src='ui/arrow_up.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' />");
                $(this).attr("name", "hide_" + d + "_" + e + "_" + a)
            } else $(this).html("Show resources<img src='ui/arrow_down.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' />"),
                $(this).attr("name", "exp_" + d + "_" + e + "_" + a), $("#autoroute_resources_" + d).html(""), $("#travel" + d).css("height", "96px")
        }));
    currentUpdater = function() {
        var b = fleetSchedule.civisFleet(game.id);
        "market" == a && (b = fleetSchedule.marketFleets());
        for (var d = 0; d < b.length; d++)
            if ("all" == a || "auto" != a && fleetSchedule.fleets[b[d].fleet].type == a || "market" == a && ("market_delivery" == fleetSchedule.fleets[b[d].fleet].type || "market_sell" == fleetSchedule.fleets[b[d].fleet].type) || "auto" == a && "auto" == fleetSchedule.fleets[b[d].fleet].type ||
                (b[d].origin == a || b[d].destination == a) && "auto" == fleetSchedule.fleets[b[d].fleet].type) {
                var e = b[d].hop,
                    f = shortestRouteId(b[d].origin, b[d].destination).length - 2,
                    g = b[d].departureTime + (b[d].totalTime - b[d].departureTime) / idleBon - (new Date).getTime();
                0 > g && (g = 0);
                var g = Math.floor(g / 1E3),
                    t = Math.floor(g / 60),
                    h = Math.floor(t / 60);
                $("#ship_time_" + b[d].fleet).html("" + h % 60 + "h " + t % 60 + "m " + g % 60 + "s");
                g = 100 * ((new Date).getTime() - b[d].departureTime) / (b[d].arrivalTime - b[d].departureTime) * idleBon;
                100 < g && (g = 100);
                $("#q" + b[d].fleet).css("width",
                    "" + Math.floor(400 * e / f + 4 * g / f) + "px");
                100 < parseInt(g) && J(a)
            }
    };
    game.searchPlanet(currentPlanet.id) && ($("#bottom_build_menu").show(), 5 <= game.researches[3].level ? ($("#b_market_icon").show(), $("#b_shipyard_icon").show()) : (1 <= game.researches[3].level && $("#b_shipyard_icon").show(), $("#b_market_icon").hide()))
}

function K(a) {
    currentInterface = "marketInterface";
    currentPlanet = a;
    currentUpdate = function() {};
    for (var b = "", d = 0; d < resNum; d++)
        if (resources[d].show(game)) {
            for (var e = 0, f = 0, g = "", h = 0; h < civis.length; h++) e += civis[h].esportage[d] *
                civis[h].planets.length, 0 < civis[h].esportage[d] && (f++, g += ", " + civis[h].shortName);
            b += "<li id='market" + d + "' name='" + d + "' style='height:100px;'>";
            b += "<div style='width:98%; height:80px;position:relative;'>";
            b += "<div style='position:relative; top:8px; left:8px'>";
            b += "<span class='blue_text' style='font-size: 100%;'>" + resources[d].name.capitalize() + " </span>";
            b += "<span class='white_text' id='market" + d + "stock'>" + beauty(market.stock[d]) + " (~ +" + beauty(e) + "/s)</span>";
            0 < f && (b += "<span class='blue_text' style='font-size: 80%;'> Exported by: </span><span class='white_text' style='font-size: 80%;'>" +
                g.substring(2) + "</span>");
            b += "</div>";
            b += "<br>";
            b += "<span class='blue_text' style='font-size: 80%;'>Buy Price (1000 units): </span> ";
            b += "<span class='white_text' style='font-size: 80%;' id='market" + d + "bp'>" + beauty(1E3 * market.buyPrice(d, game)) + "</span>";
            b += "<img src='ui/coin.png' style='height:16px;width:16px;position:relative;top:4px;'/>";
            b += "<span style='position:relative;left:64px;'>";
            b += "<input id='market_buy_" + d + "' name='" + d + "' type='text' value='0' style='width:80px;height:12px;font-size:80%;'/>";
            b += "<span class='red_text' style='font-size: 80%;' id='totalbuy_" + d + "'>  -0</span><img src='ui/coin.png' style='height:16px;width:16px;position:relative;top:4px;'/>";
            b += "</span>";
            b += "<br>";
            b += "<span class='blue_text' style='font-size: 80%;'>Sell Price (1000 units): </span> ";
            b += "<span class='white_text' style='font-size: 80%;' id='market" + d + "sp'>" + beauty(1E3 * market.sellPrice(d, game)) + "</span>";
            b += "<img src='ui/coin.png' style='height:16px;width:16px;position:relative;top:4px;'/>";
            b += "<span style='position:relative;left:64px;'>";
            b += "<input id='market_sell_" + d + "' name='" + d + "' type='text' value='0' style='width:80px;height:12px;font-size:80%;'/>";
            b += "<span class='green_text' style='font-size: 80%;' id='totalsell_" + d + "'>  +0</span><img src='ui/coin.png' style='height:16px;width:16px;position:relative;top:4px;'/>";
            b += "</span>";
            b += "</div>";
            b += "</div></li>"
        }
    $("#market_list").html(b);
    var z = 0;
    for (d in a.fleets) 0 != d && a.fleets[d] && a.fleets[d].civis == game.id && 0 < a.fleets[d].shipNum() && (z += a.fleets[d].maxStorage());
    for (d = 0; d < resNum; d++) resources[d].show(game) &&
        ($("#market_buy_" + d).change(function() {
            $(this).val(parseInt($(this).val()));
            Number.isInteger(parseInt($(this).val())) ? parseInt($(this).val()) > market.stock[parseInt($(this).attr("name"))] && $(this).val(market.stock[parseInt($(this).attr("name"))]) : $(this).val(0);
            $("#totalbuy_" + $(this).attr("name")).html("  -" + beauty(parseInt($(this).val()) * market.buyPrice($(this).attr("name"), game)));
            for (var a = 0, b = 0; b < resNum; b++) resources[b].show(game) && (a += parseInt($("#market_buy_" + b).val()) * market.buyPrice(b, game));
            $("#buy_total").html("  (-" + beauty(a) + "<img src='ui/coin.png' style='height:16px;width:16px;position:relative;top:4px;'/>)")
        }), $("#market_sell_" + d).change(function() {
            $(this).val(parseInt($(this).val()));
            for (var a = z, b = 0; b < resNum; b++) resources[b].show(game) && b != parseInt($(this).attr("name")) && (a -= parseInt($("#market_sell_" + b).val()));
            Number.isInteger(parseInt($(this).val())) ? parseInt($(this).val()) > a && $(this).val(Math.max(0, a)) : $(this).val(0);
            $("#totalsell_" + $(this).attr("name")).html("  +" + beauty(parseInt($(this).val()) *
                market.sellPrice($(this).attr("name"), game)));
            for (b = a = 0; b < resNum; b++) resources[b].show(game) && (a += parseInt($("#market_sell_" + b).val()) * market.sellPrice(b, game));
            $("#sell_total").html("  (+" + beauty(a) + "<img src='ui/coin.png' style='height:16px;width:16px;position:relative;top:4px;'/>)")
        }));
    b = "<ul id='market_mini_list' style='position:absolute; text-align:left; top:0px; clear:both;'><div style='position:relative; left:8px;'>" + ("<span class='blue_text'>Energy Prod.: </span><span class='white_text' style='float:right;margin-right:20%;'>" +
        Math.floor(a.energyProduction()) + "</span><br>");
    b += "<span class='blue_text'>Energy Cons.: </span><span class='white_text' style='float:right;margin-right:20%;'>" + Math.floor(-a.energyConsumption()) + "</span><br>";
    d = Math.floor(a.energyProduction() + a.energyConsumption());
    e = a.energyMalus();
    1 < e ? e = 1 : 0 > e && (e = 0);
    f = "green_text";
    .85 <= e && 1 > e ? f = "gold_text" : .85 > e && (f = "red_text");
    b += "<span class='blue_text'>Balance: </span><span class='" + f + "' style='float:right;margin-right:20%;'>" + parseInt(Math.floor(d)) + "</span><br>";
    b += "<span class='blue_text'>Efficiency: </span><span class='" + f + "' style='float:right;margin-right:20%;'>" + Math.floor(1E4 * e) / 100 + "%</span><br><br>";
    e = a.rawProduction();
    f = Array(resNum);
    a.importExport();
    for (d = 0; d < resNum; d++) f[d] = a.globalImport[d] - a.globalExport[d];
    for (d = 0; d < resNum; d++)
        if (resources[d].show(game) || 0 < a.resources[d]) b += "<div><span class='blue_text'>" + resources[d].name.capitalize() + ": </span><span class='white_text' style='margin-righ:16px;font-size:80%' id='res_name_prod_" + d + "' name='" +
            d + "'>" + beauty(a.resources[d]) + " <span class='" + (0 <= e[d] ? 0 < e[d] ? "green_text" : "gray_text" : "red_text oblique_txt") + "'>(" + (0 < e[d] ? "+" : "") + "" + beauty(e[d]) + "/s)</span>", 0 != f[d] && (b += "<span class='" + (0 <= f[d] ? 0 < f[d] ? "purple_text" : "gray_text" : "pink_text oblique_txt") + "'> (" + (0 < f[d] ? "+" : "") + "" + beauty(f[d]) + "/s)</span>"), b += "</span></div>";
    b += "</div></ul>";
    $("#market_mini_list").html(b);
    b = "";
    for (d = f = e = 0; d < resNum; d++) resources[d].show(game) && (e += parseInt($("#market_buy_" + d).val()), f += parseInt($("#market_sell_" +
        d).val()));
    $("#market_info_name").html("<span class='blue_text' style='font-size:80%;'>Total available storage of orbiting fleets: </span><span class='white_text' style='font-size:60%;'>" + beauty(z) + "</span><br><br><div class='button'><span class='blue_text' style='font-size:100%;width:100%;cursor:pointer;' id='market_buy_button'>Buy</span><span class='red_text' style='font-size:60%;' id='buy_total'>  (-" + beauty(e) + "<img src='ui/coin.png' style='height:16px;width:16px;position:relative;top:4px;'/>)</span></div><br><div class='button'><span class='blue_text' style='font-size:100%;width:100%;cursor:pointer;' id='market_sell_button'>Sell</span><span class='green_text' style='font-size:60%;' id='sell_total'>  (+" +
        beauty(f) + "<img src='ui/coin.png' style='height:16px;width:16px;position:relative;top:4px;'/>)</span></div>");
    $("#market_buy_button").unbind();
    $("#market_buy_button").click(function() {
        for (var a = new Fleet(8, "Market Delivery"), b = 0, d = 0, e = 0; e < resNum; e++) resources[e].show(game) && (b += parseInt($("#market_buy_" + e).val()), a.storage[e] = parseInt($("#market_buy_" + e).val()), d += parseInt($("#market_buy_" + e).val()) * market.buyPrice(e, game));
        a.ships[2] = 1 + Math.ceil(b / ships[2].maxStorage);
        a.type = "market_delivery";
        if (0 <
            b)
            if (game.money >= d) {
                game.money -= d;
                0 > game.money && (game.money = 0);
                if (currentPlanet.id != planetsName.virgo) {
                    e = a.move(planetsName.virgo, currentPlanet.id);
                    b = 0;
                    60 <= e ? b = "" + parseInt(Math.floor(e / 60)) + " minutes and " + parseInt(Math.floor(e % 60)) + " seconds" : 0 > e ? (e = new m(210, 0, "<span class='red_text red_text_shadow'>Already on this planet!</span>", "info"), e.drawToast()) : b = "" + parseInt(Math.floor(e)) + " seconds";
                    for (e = 0; e < resNum; e++) resources[e].show(game) && (market.stock[e] -= a.storage[e], 0 > market.stock[e] && (market.stock[e] =
                        0));
                    K(currentPlanet);
                    e = new m(210, 110, "<br><span class='blue_text text_shadow'>The delivery will arrive in " + b + "</span>", "Ok")
                } else a.unload(currentPlanet.id), e = new m(210, 110, "<br><span class='blue_text text_shadow'>Resources bought</span>", "Ok");
                e.draw()
            } else e = new m(210, 0, "<span class='red_text red_text_shadow'>You don't have enough coins!</span>", "info"), e.drawToast();
        else e = new m(210, 0, "<span class='red_text red_text_shadow'>Your resource request is empty</span>", "info"), e.drawToast()
    });
    $("#market_sell_button").unbind();
    $("#market_sell_button").click(function() {
        for (var b = 0, d = !1, e = 0; e < resNum; e++)
            if (resources[e].show(game) && (b += parseInt($("#market_sell_" + e).val()), parseInt($("#market_sell_" + e).val()) > currentPlanet.resources[e])) {
                d = !0;
                break
            }
        if (d) b = new m(210, 0, "<span class='red_text red_text_shadow'>Not enough resources on the planet</span>", "info");
        else if (0 < b) {
            var e = 0,
                f;
            for (f in a.fleets) 0 != f && a.fleets[f] && a.fleets[f].civis == game.id && 0 < a.fleets[f].shipNum() && (e += a.fleets[f].maxStorage());
            if (b <= e) {
                e = !1;
                d = 0;
                for (f in currentPlanet.fleets)
                    if (0 !=
                        f && currentPlanet.fleets[f] && currentPlanet.fleets[f].civis == game.id && 0 < currentPlanet.fleets[f].shipNum() && currentPlanet.fleets[f].maxStorage() >= b) {
                        d = f;
                        e = !0;
                        break
                    }
                if (e) {
                    currentPlanet.fleets[d].type = "market_sell";
                    currentPlanet.fleets[d].unload(currentPlanet.id);
                    for (e = 0; e < resNum; e++) resources[e].show(game) && (b = parseInt($("#market_sell_" + e).val()), currentPlanet.fleets[d].load(e, b) && currentPlanet.resourcesAdd(e, -b));
                    planetsName.virgo != currentPlanet.id ? (currentPlanet.fleets[d].move(currentPlanet.id, planetsName.virgo),
                        delete currentPlanet.fleets[d], K(currentPlanet), b = new m(210, 0, "<span class='blue_text'>Fleet sent</span>", "info")) : (market.sell(currentPlanet.fleets[d]), b = new m(210, 0, "<span class='blue_text'>Resources Sold</span>", "info"))
                } else b = new m(210, 0, "<span class='blue_text'>You don't have a fleet big enough to carry the resources</span>", "info")
            } else b = new m(210, 0, "<span class='red_text red_text_shadow'>Not enough fleets available in orbit to carry the resources</span>", "info")
        } else b = new m(210, 0, "<span class='red_text red_text_shadow'>Empty resources request</span>",
            "info");
        b.drawToast()
    });
    $("#market_info_list").html(b);
    for (d = 0; d < resNum; d++) resources[d].show(game) && ($("#market" + d).valore = d, $("#market" + d).click(function() {}));
    currentUpdater = function() {
        var b;
        b = "<ul id='market_mini_list' style='position:absolute; text-align:left; top:0px; clear:both;'><div style='position:relative; left:8px;'>" + ("<span class='blue_text'>Energy Prod.: </span><span class='white_text' style='float:right;margin-right:20%;'>" + Math.floor(a.energyProduction()) + "</span><br>");
        b += "<span class='blue_text'>Energy Cons.: </span><span class='white_text' style='float:right;margin-right:20%;'>" +
            Math.floor(-a.energyConsumption()) + "</span><br>";
        var d = Math.floor(a.energyProduction() + a.energyConsumption()),
            e = a.energyMalus();
        1 < e ? e = 1 : 0 > e && (e = 0);
        var f = "green_text";
        .85 <= e && 1 > e ? f = "gold_text" : .85 > e && (f = "red_text");
        b += "<span class='blue_text'>Balance: </span><span class='" + f + "' style='float:right;margin-right:20%;'>" + parseInt(Math.floor(d)) + "</span><br>";
        b += "<span class='blue_text'>Efficiency: </span><span class='" + f + "' style='float:right;margin-right:20%;'>" + Math.floor(1E4 * e) / 100 + "%</span><br><br>";
        e = a.rawProduction();
        f = Array(resNum);
        a.importExport();
        for (d = 0; d < resNum; d++) f[d] = a.globalImport[d] - a.globalExport[d];
        for (d = 0; d < resNum; d++)
            if (resources[d].show(game) || 0 < a.resources[d]) b += "<div><span class='blue_text'>" + resources[d].name.capitalize() + ": </span><span class='white_text' style='margin-righ:16px;font-size:80%' id='res_name_prod_" + d + "' name='" + d + "'>" + beauty(a.resources[d]) + " <span class='" + (0 <= e[d] ? 0 < e[d] ? "green_text" : "gray_text" : "red_text oblique_txt") + "'>(" + (0 < e[d] ? "+" : "") + "" + beauty(e[d]) +
                "/s)</span>", 0 != f[d] && (b += "<span class='" + (0 <= f[d] ? 0 < f[d] ? "purple_text" : "gray_text" : "pink_text oblique_txt") + "'> (" + (0 < f[d] ? "+" : "") + "" + beauty(f[d]) + "/s)</span>"), b += "</span></div>";
        b += "</div></ul>";
        $("#market_mini_list").html(b);
        for (d = 0; d < resNum; d++)
            if (resources[d].show(game)) {
                for (e = b = 0; e < civis.length; e++) b += civis[e].esportage[d] * civis[e].planets.length;
                $("#market" + d + "stock").html(beauty(market.stock[d]) + " (~ +" + beauty(b) + "/s)")
            }
    };
    currentUpdater();
    u();
    B();
    $("#market_interface").show();
    $("#back_button").unbind();
    $("#back_button").click(I);
    $("#back_button").show();
    game.searchPlanet(currentPlanet.id) && ($("#bottom_build_menu").show(), 5 <= game.researches[3].level ? ($("#b_market_icon").show(), $("#b_market_icon").show()) : (1 <= game.researches[3].level && $("#b_market_icon").show(), $("#b_market_icon").hide()))
}

function Q() {
    currentInterface = "profileInterface";
    var a;
    a = "<li style='height:64px;><div style='position:absolute; top:8px; left:8px; width:98%'></div></li><li style='height:100px;'><div style='position:absolute;  left: 8px; width:98%;'><span id='span_wipe' class='red_text' style='font-size:100%; width: 98%; float:left; text-align:center;cursor:pointer;'>Wipe Data<br>(BE SURE BEFORE CLICKING!!)</span><br><br></div></li><li style='height:100px;'><div style='position:absolute;  left: 8px; width:98%;'><span id='span_logs' class='blue_text' style='font-size:100%; width: 98%; float:left; text-align:center;cursor:pointer;'>Change logs<br></span><br><br></div></li>" +
        ("<span id='span_copyright' class='white_text' style='position:absolute;font-size:80%; width: 98%; text-align:left;cursor:pointer;top:8%;left:2%'>\u00a9 2017 - version " + GAME_VERSION + "</span><br><br>");
    $("#profile_info_list").html(a);
    $("#span_wipe").click(function() {
        (new m(220, 110, "<br><span class='red_text red_text_shadow'>Are you sure you want to wipe your data? You will lose ALL your progress!</span>", "confirm", function() {
            wipeData();
            (new m(210, 0, "<span class='red_text red_text_shadow'>Your data has been deleted!</span>",
                "info")).drawToast()
        })).draw()
    });
    $("#span_logs").click(function() {
        P()
    });
    currentUpdater = function() {};
    u();
    $("#profile_interface").show()
}

function P() {
    currentInterface = "logsInterface";
    for (var a = "", b = change_logs.length - 1; 0 <= b; b--) a += "<li style='height:" + (64 + 18 * change_logs[b].lines) + "px;'><div style='position:absolute;  left: 8px; width:98%;'>", a += "<br><br><span id='logs_title_" + b + "' class='blue_text' style='font-size:110%;text-align:center;width: 98%; float:left;cursor:pointer;'>**" + change_logs[b].title +
        "**</span><br><br>", a += "<span id='logs_" + b + "' class='white_text' style='width: 98%; float:left;cursor:pointer;'>" + change_logs[b].desc + "</span>", a += "</div></li>";
    $("#profile_info_list").html(a);
    currentUpdater = function() {};
    u();
    $("#profile_interface").show()
}

function x(a) {
    return "</span><span class='blue_text'>" + a + "</span><span class='white_text'>"
}

function V() {
    currentInterface = "resourcesOverview";
    currentUpdater = function() {};
    var a;
    a = "<li id='empire_li' style='height:64px;width:100%'><img src='ui/empire.png' class='planet_icon' style='align:center;cursor:pointer;'/><span class='blue_text' style='position:relative; top:-26px; left:8px; font-size: 100%;cursor:pointer;'>Empire</span><span class='blue_text' style='position:relative; top:-26px; left:32px; font-size: 80%;cursor:pointer;width:100%' id='empire_overview' name='exp'>Show overview<img src='ui/arrow_down.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' /></span><div id='empire_overview_info' style='position:relative;left:10%;width:80%;'></div></li>";
    for (var b = 0; b < game.planets.length; b++) {
        var d = game.planets[b];
        a += "<li id='planet" + d + "' name='" + d + "' style='height:64px;width:100%'>";
        a += "<img id='planet_img_" + d + "' name='" + b + "' src='img/" + planets[game.planets[b]].icon + "/" + planets[game.planets[b]].icon + ".png' class='planet_icon' style='align:center;cursor:pointer;'/>";
        a = capital == b ? a + ("<span id='planet_int_" + d + "' name='" + b + "' class='blue_text' style='position:relative; top:-26px; left:8px; font-size: 100%; color:rgb(249,159,36);cursor:pointer;'>" + planets[d].name +
            "</span>") : a + ("<span id='planet_int_" + d + "' name='" + b + "' class='blue_text' style='position:relative; top:-26px; left:8px; font-size: 100%;cursor:pointer;'>" + planets[d].name + "</span>");
        a += "<span class='blue_text' style='position:relative; top:-26px; left:32px; font-size: 80%;cursor:pointer;width:100%' id='planet_overview_" + d + "' name='exp_" + d + "' >Show overview<img src='ui/arrow_down.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' /></span>";
        a += "<div id='planet_overview_info_" +
            d + "' name='" + d + "' style='position:relative;left:10%;width:80%;'>";
        a += "</div></li>"
    }
    $("#planet_list").html(a);
    for (b = 0; b < game.planets.length; b++) planets[game.planets[b]].importExport(), d = game.planets[b], $("#planet_int_" + d).click(function() {
        D(planets[game.planets[parseInt($(this).attr("name"))]])
    }), $("#planet_img_" + d).click(function() {
        D(planets[game.planets[parseInt($(this).attr("name"))]])
    }), $("#planet_overview_" + d).click(function() {
        var a = $(this).attr("name").split("_"),
            b = a[0],
            a = parseInt(a[1]);
        if ("exp" ==
            b) {
            var d = planets[a].rawProduction();
            $(this).html("Hide overview<img src='ui/arrow_up.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' />");
            $(this).attr("name", "hide_" + a);
            for (var b = 64, e = "", g = 0; g < resNum; g++) resources[g].show(game) && (d[g] += planets[a].globalImport[g] - planets[a].globalExport[g], e += "<div style='width:100%;height:24px' id='planet_res_" + a + "_" + g + "' name='" + a + "_" + g + "'><div class='button' style='height:24px;'><span class='blue_text' style='width:240px'>" + resources[g].name.capitalize() +
                ": </span><span class='white_text' style='float:right;margin-right:32px;'><span id='total_res_" + a + "_" + g + "'>" + beauty(planets[a].resources[g]) + " <span class='" + (0 <= d[g] ? 0 < d[g] ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < d[g] ? "+" : "") + "" + beauty(d[g]) + "/s)</span></span><span class='blue_text' style='font-size:80%;cursor:pointer;padding-left:64px' id='res_overview_" + a + "_" + g + "' name='exp_" + a + "_" + g + "' >Show overview<img src='ui/arrow_down.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' /></span></span>",
                e += "</div><div id='planet_res_building_" + a + "_" + g + "' name='" + a + "_" + g + "' style='position:relative;left:10%;width:80%;'></div></div>", b += 24);
            var g = planets[a].energyProduction() + planets[a].energyConsumption(),
                h = planets[a].energyMalus();
            1 < h ? h = 1 : 0 > h && (h = 0);
            var m = "green_text";
            .85 <= h && 1 > h ? m = "gold_text" : .85 > h && (m = "red_text");
            e += "<div style='width:100%;height:24px' id='planet_res_" + a + "_energy' name='" + a + "_energy'><div class='button' style='height:24px;'><span class='blue_text' style='width:240px'>Energy: </span><span class='white_text' style='float:right;margin-right:32px;'><span id='total_res_" +
                a + "_energy'> <span class='" + m + "'>" + beauty(g) + " (" + Math.floor(1E4 * h) / 100 + "% efficiency)</span></span><span class='blue_text' style='font-size:80%;cursor:pointer;padding-left:64px' id='res_overview_" + a + "_energy' name='exp_" + a + "_energy' >Show overview<img src='ui/arrow_down.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' /></span></span>";
            d = d.researchPoint;
            e = e + ("</div><div id='planet_res_building_" + a + "_energy' name='" + a + "_energy' style='position:relative;left:10%;width:80%;'></div></div>") +
                ("<div style='width:100%;height:24px' id='planet_res_" + a + "_research' name='" + a + "_research'><div class='button' style='height:24px;'><span class='blue_text' style='width:240px'>Research Points: </span><span class='white_text' style='float:right;margin-right:32px;'><span id='total_res_" + a + "_research'>" + beauty(game.researchPoint) + " <span class='" + (0 < d ? "green_text" : "gray_text") + "'>(" + beauty(d) + "/s)</span></span><span class='blue_text' style='font-size:80%;cursor:pointer;padding-left:64px' id='res_overview_" +
                    a + "_research' name='exp_" + a + "_research' >Show overview<img src='ui/arrow_down.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' /></span></span>");
            e = e + ("</div><div id='planet_res_building_" + a + "_research' name='" + a + "_research' style='position:relative;left:10%;width:80%;'></div></div>") + "<br>";
            b += 96;
            $("#planet_overview_info_" + a).html(e);
            $("#planet" + a).css("height", b + "px");
            overviewPlanetExpand[a] = !0;
            for (g = 0; g < resNum; g++) resources[g].show(game) && ($("#res_overview_" + a + "_" + g).unbind(),
                $("#res_overview_" + a + "_" + g).click(function() {
                    var a = $(this).attr("name").split("_"),
                        b = a[0],
                        d = parseInt(a[1]),
                        a = parseInt(a[2]);
                    if ("exp" == b) {
                        overviewResourceExpand[d][a] = !0;
                        for (var b = "<div style='width:100%;height:8px'></div>", e = 52, f = 0; f < game.buildings.length; f++)
                            if (0 != game.buildings[f].resourcesProd[a] && 0 < planets[d].structure[f].number) var e = e + 20,
                                g = game.buildings[f].production(planets[d])[a],
                                b = b + ("<div style='width:100%;height:20px' class='button' id='planet_res_" + d + "_" + a + "_" + f + "' name='" + d + "_" + a + "'><span class='blue_text' style='width:240px'>" +
                                    game.buildings[f].displayName + " <span class='white_text'>" + planets[d].structure[f].number + "</span> </span><span class='white_text' style='float:right;margin-right:320px;'><span class='" + (0 <= g ? 0 < g ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < g ? "+" : "") + "" + beauty(g) + "/s)</span></span></div>");
                        g = planets[d].globalImport[a] - planets[d].globalExport[a];
                        b = b + "<div style='width:100%;height:20px'></div>" + ("<div style='width:100%;height:20px' class='button' id='planet_res_" + d + "_" + a + "_import' name='" + d + "_" + a +
                            "'><span class='blue_text' style='width:240px'>Import/Export </span><span class='white_text' style='float:right;margin-right:320px;'><span class='" + (0 <= g ? 0 < g ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < g ? "+" : "") + "" + beauty(g) + "/s)</span></span></div>");
                        e += 20;
                        $("#planet_res_" + d + "_" + a).css("height", e + "px");
                        f = parseInt($("#planet" + d).css("height").split("px")[0]);
                        $("#planet" + d).css("height", f + e + "px");
                        $("#planet_res_building_" + d + "_" + a).html(b);
                        $(this).html("Hide overview<img src='ui/arrow_up.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' />");
                        $(this).attr("name", "hide_" + d + "_" + a)
                    } else overviewResourceExpand[d][a] = !1, $(this).html("Show overview<img src='ui/arrow_down.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' />"), $(this).attr("name", "exp_" + d + "_" + a), e = parseInt($("#planet_res_" + d + "_" + a).css("height").split("px")[0]), f = parseInt($("#planet" + d).css("height").split("px")[0]), b = 0 < f - e ? f - e : 0, $("#planet" + d).css("height", b + "px"), $("#planet_res_" + d + "_" + a).css("height", "24px"), $("#planet_res_building_" + d + "_" + a).html("")
                }),
                $("#res_overview_" + a + "_energy").unbind(), $("#res_overview_" + a + "_energy").click(function() {
                    var a = $(this).attr("name").split("_"),
                        b = a[0],
                        a = parseInt(a[1]);
                    if ("exp" == b) {
                        overviewResourceExpand[a].energy = !0;
                        for (var b = "<div style='width:100%;height:8px'></div>", d = 32, e = 0; e < game.buildings.length; e++)
                            if (0 != game.buildings[e].energy && 0 < planets[a].structure[e].number) var d = d + 20,
                                f = game.buildings[e].production(planets[a]).energy,
                                b = b + ("<div style='width:100%;height:20px' class='button' id='planet_res_" + a + "_energy_" +
                                    e + "' name='" + a + "_energy'><span class='blue_text' style='width:240px'>" + game.buildings[e].displayName + " <span class='white_text'>" + planets[a].structure[e].number + "</span> </span><span class='white_text' style='float:right;margin-right:320px;'><span class='" + (0 <= f ? 0 < f ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < f ? "+" : "") + "" + beauty(f) + "/s)</span></span></div>");
                        b += "</div>";
                        $("#planet_res_" + a + "_energy").css("height", d + "px");
                        e = parseInt($("#planet" + a).css("height").split("px")[0]);
                        $("#planet" + a).css("height",
                            e + d + "px");
                        $("#planet_res_building_" + a + "_energy").html(b);
                        $(this).html("Hide overview<img src='ui/arrow_up.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' />");
                        $(this).attr("name", "hide_" + a + "_energy")
                    } else overviewResourceExpand[a].energy = !1, $(this).html("Show overview<img src='ui/arrow_down.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' />"), $(this).attr("name", "exp_" + a + "_energy"), d = parseInt($("#planet_res_" + a + "_energy").css("height").split("px")[0]),
                        e = parseInt($("#planet" + a).css("height").split("px")[0]), b = 0 < e - d ? e - d : 0, $("#planet" + a).css("height", b + "px"), $("#planet_res_" + a + "_energy").css("height", "24px"), $("#planet_res_building_" + a + "_energy").html("")
                }), $("#res_overview_" + a + "_research").unbind(), $("#res_overview_" + a + "_research").click(function() {
                    var a = $(this).attr("name").split("_"),
                        b = a[0],
                        a = parseInt(a[1]);
                    if ("exp" == b) {
                        overviewResourceExpand[a].research = !0;
                        for (var b = "<div style='width:100%;height:8px'></div>", d = 32, e = 0; e < game.buildings.length; e++)
                            if (0 !=
                                game.buildings[e].researchPoint && 0 < planets[a].structure[e].number) var d = d + 20,
                                f = game.buildings[e].production(planets[a]).researchPoint,
                                b = b + ("<div style='width:100%;height:20px' class='button' id='planet_res_" + a + "_research_" + e + "' name='" + a + "_research'><span class='blue_text' style='width:240px'>" + game.buildings[e].displayName + " <span class='white_text'>" + planets[a].structure[e].number + "</span> </span><span class='white_text' style='float:right;margin-right:320px;'><span class='" + (0 <= f ? 0 < f ? "green_text" :
                                    "gray_text" : "red_text") + "'>(" + (0 < f ? "+" : "") + "" + beauty(f) + "/s)</span></span></div>");
                        b += "</div>";
                        $("#planet_res_" + a + "_research").css("height", d + "px");
                        e = parseInt($("#planet" + a).css("height").split("px")[0]);
                        $("#planet" + a).css("height", e + d + "px");
                        $("#planet_res_building_" + a + "_research").html(b);
                        $(this).html("Hide overview<img src='ui/arrow_up.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' />");
                        $(this).attr("name", "hide_" + a + "_research")
                    } else overviewResourceExpand[a].research = !1,
                        $(this).html("Show overview<img src='ui/arrow_down.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' />"), $(this).attr("name", "exp_" + a + "_research"), d = parseInt($("#planet_res_" + a + "_research").css("height").split("px")[0]), e = parseInt($("#planet" + a).css("height").split("px")[0]), b = 0 < e - d ? e - d : 0, $("#planet" + a).css("height", b + "px"), $("#planet_res_" + a + "_research").css("height", "24px"), $("#planet_res_building_" + a + "_research").html("")
                }))
        } else overviewPlanetExpand[a] = !1, $(this).html("Show overview<img src='ui/arrow_down.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' />"),
            $(this).attr("name", "exp_" + a), $("#planet" + a).css("height", "64px"), $("#planet_overview_info_" + a).html("")
    });
    $("#empire_overview").click(function() {
        if ("exp" == $(this).attr("name")) {
            for (var a = Array(resNum + 1), b = Array(resNum), d = 0; d < resNum; d++) a[d] = 0, b[d] = 0;
            for (var e = a.researchPoint = 0; e < game.planets.length; e++) {
                for (var g = planets[game.planets[e]].rawProduction(), d = 0; d < resNum; d++) a[d] += g[d], b[d] += planets[game.planets[e]].resources[d];
                a.researchPoint += g.researchPoint
            }
            $(this).html("Hide overview<img src='ui/arrow_up.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' />");
            $(this).attr("name", "hide");
            e = 64;
            g = "";
            for (d = 0; d < resNum; d++) resources[d].show(game) && (g += "<div style='width:100%;height:24px' id='empire_res_" + d + "' name='" + d + "'><div class='button' style='height:24px;'><span class='blue_text' style='width:240px'>" + resources[d].name.capitalize() + ": </span><span class='white_text' style='float:right;margin-right:32px;'><span id='total_res_empire_" + d + "'>" + beauty(b[d]) + " <span class='" + (0 <= a[d] ? 0 < a[d] ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < a[d] ? "+" : "") + "" + beauty(a[d]) +
                "/s)</span></span><span class='blue_text' style='font-size:80%;cursor:pointer;padding-left:64px' id='res_overview_empire_" + d + "' name='exp_" + d + "' >Show overview<img src='ui/arrow_down.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' /></span></span>", g += "</div><div id='empire_res_building_" + d + "' name='" + d + "' style='position:relative;left:10%;width:80%;'></div></div>", e += 24);
            a = a.researchPoint;
            g += "<div style='width:100%;height:24px' id='empire_res_research' name='empire_research'><div class='button' style='height:24px;'><span class='blue_text' style='width:240px'>Research Points: </span><span class='white_text' style='float:right;margin-right:32px;'><span id='total_res_empire_research'>" +
                beauty(game.researchPoint) + " <span class='" + (0 < a ? "green_text" : "gray_text") + "'>(" + beauty(a) + "/s)</span></span><span class='blue_text' style='font-size:80%;cursor:pointer;padding-left:64px' id='res_overview_empire_research' name='exp_empire_research' >Show overview<img src='ui/arrow_down.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' /></span></span>";
            g += "</div><div id='empire_res_building_research' name='empire_research' style='position:relative;left:10%;width:80%;'></div></div><br>";
            e += 96;
            $("#empire_overview_info").html(g);
            $("#empire_li").css("height", e + "px");
            overviewPlanetExpand.empire = !0;
            for (d = 0; d < resNum; d++) resources[d].show(game) && ($("#res_overview_empire_" + d).unbind(), $("#res_overview_empire_" + d).click(function() {
                var a = $(this).attr("name").split("_"),
                    b = a[0],
                    a = parseInt(a[1]);
                if ("exp" == b) {
                    overviewResourceExpand.empire[a] = !0;
                    for (var b = "<div style='width:100%;height:8px'></div>", d = 52, e = Array(game.buildings.length), f = 0; f < game.buildings.length; f++) e[f] = 0;
                    for (var g = 0; g < game.planets.length; g++)
                        for (f =
                            0; f < game.buildings.length; f++) 0 != game.buildings[f].resourcesProd[a] && (e[f] += planets[game.planets[g]].structure[f].number);
                    for (f = 0; f < game.buildings.length; f++)
                        if (0 < e[f]) {
                            for (var d = d + 20, h = 0, g = 0; g < game.planets.length; g++) h += game.buildings[f].production(planets[game.planets[g]])[a];
                            b += "<div style='width:100%;height:20px' class='button' id='empire_res_" + a + "_" + f + "' name='" + a + "'><span class='blue_text' style='width:240px'>" + game.buildings[f].displayName + " <span class='white_text'>" + e[f] + "</span> </span><span class='white_text' style='float:right;margin-right:320px;'><span class='" +
                                (0 <= h ? 0 < h ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < h ? "+" : "") + "" + beauty(h) + "/s)</span></span></div>"
                        }
                    $("#empire_res_" + a).css("height", d + "px");
                    e = parseInt($("#empire_li").css("height").split("px")[0]);
                    $("#empire_li").css("height", e + d + "px");
                    $("#empire_res_building_" + a).html(b);
                    $(this).html("Hide overview<img src='ui/arrow_up.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' />");
                    $(this).attr("name", "hide_" + a)
                } else overviewResourceExpand.empire[a] = !1, $(this).html("Show overview<img src='ui/arrow_down.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' />"),
                    $(this).attr("name", "exp_" + a), d = parseInt($("#empire_res_" + a).css("height").split("px")[0]), e = parseInt($("#empire_li").css("height").split("px")[0]), b = 0 < e - d ? e - d : 0, $("#empire_li").css("height", b + "px"), $("#empire_res_" + a).css("height", "24px"), $("#empire_res_building_" + a).html("")
            }), $("#res_overview_empire_research").unbind(), $("#res_overview_empire_research").click(function() {
                if ("exp" == $(this).attr("name").split("_")[0]) {
                    overviewResourceExpand.empire.research = !0;
                    for (var a = "<div style='width:100%;height:8px'></div>",
                            b = 32, d = Array(game.buildings.length), e = 0; e < game.buildings.length; e++) d[e] = 0;
                    for (var f = 0; f < game.planets.length; f++)
                        for (e = 0; e < game.buildings.length; e++) 0 != game.buildings[e].researchPoint && (d[e] += planets[game.planets[f]].structure[e].number);
                    for (e = 0; e < game.buildings.length; e++)
                        if (0 < d[e]) {
                            for (var b = b + 20, g = 0, f = 0; f < game.planets.length; f++) g += game.buildings[e].production(planets[game.planets[f]]).researchPoint;
                            a += "<div style='width:100%;height:20px' class='button' id='empire_res_research_" + e + "' name='empire_research'><span class='blue_text' style='width:240px'>" +
                                game.buildings[e].displayName + " <span class='white_text'>" + d[e] + "</span> </span><span class='white_text' style='float:right;margin-right:320px;'><span class='" + (0 <= g ? 0 < g ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < g ? "+" : "") + "" + beauty(g) + "/s)</span></span></div>"
                        }
                    a += "</div>";
                    $("#empire_res_research").css("height", b + "px");
                    d = parseInt($("#empire_li").css("height").split("px")[0]);
                    $("#empire_li").css("height", d + b + "px");
                    $("#empire_res_building_research").html(a);
                    $(this).html("Hide overview<img src='ui/arrow_up.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' />");
                    $(this).attr("name", "hide_research")
                } else overviewResourceExpand.empire.research = !1, $(this).html("Show overview<img src='ui/arrow_down.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' />"), $(this).attr("name", "exp_research"), b = parseInt($("#empire_res_research").css("height").split("px")[0]), d = parseInt($("#empire_li").css("height").split("px")[0]), a = 0 < d - b ? d - b : 0, $("#empire_li").css("height", a + "px"), $("#empire_res_research").css("height", "24px"), $("#empire_res_building_research").html("")
            }))
        } else $(this).html("Show overview<img src='ui/arrow_down.png' style='position:relative; width:20px;height:20px;top:5px;left:4px' />"),
            $(this).attr("name", "exp"), $("#empire_li").css("height", "64px"), $("#empire_overview_info").html(""), overviewPlanetExpand.empire = !1
    });
    for (b = 0; b < game.planets.length; b++)
        if (d = game.planets[b], overviewPlanetExpand[d]) {
            $("#planet_overview_" + b).click();
            for (a = 0; a < resNum; a++) overviewResourceExpand[d][a] && $("#res_overview_" + d + "_" + a).click();
            overviewResourceExpand[d].energy && $("#res_overview_" + d + "_energy").click();
            overviewResourceExpand[d].research && $("#res_overview_" + d + "_research").click()
        }
    if (overviewPlanetExpand.empire) {
        $("#empire_overview").click();
        for (a = 0; a < resNum; a++) overviewResourceExpand.empire[a] && $("#res_overview_empire_" + a).click();
        overviewResourceExpand.empire.research && $("#res_overview_empire_research").click()
    }
    currentUpdater = function() {
        for (var a = 0; a < game.planets.length; a++) {
            var b = game.planets[a];
            if (overviewPlanetExpand[b]) {
                planets[b].importExport();
                for (var d = planets[b].rawProduction(), e = 0; e < resNum; e++) resources[e].show(game) && (d[e] += planets[b].globalImport[e] - planets[b].globalExport[e], $("#total_res_" + b + "_" + e).html(beauty(planets[b].resources[e]) +
                    " <span class='" + (0 <= d[e] ? 0 < d[e] ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < d[e] ? "+" : "") + "" + beauty(d[e]) + "/s)</span>"));
                var e = planets[b].energyProduction() + planets[b].energyConsumption(),
                    g = planets[b].energyMalus();
                1 < g ? g = 1 : 0 > g && (g = 0);
                var h = "green_text";
                .85 <= g && 1 > g ? h = "gold_text" : .85 > g && (h = "red_text");
                $("#total_res_" + b + "_energy").html("<span class='" + h + "'>" + beauty(e) + " (" + Math.floor(1E4 * g) / 100 + "% efficiency)</span>");
                d = d.researchPoint;
                $("#total_res_" + b + "_research").html("" + beauty(game.researchPoint) +
                    " <span class='" + (0 < d ? "green_text" : "gray_text") + "'>(" + beauty(d) + "/s)</span>");
                for (e = 0; e < resNum; e++)
                    if (overviewResourceExpand[b][e]) {
                        for (d = 0; d < game.buildings.length; d++) 0 != game.buildings[d].resourcesProd[e] && 0 < planets[b].structure[d].number && (g = game.buildings[d].production(planets[b])[e], $("#planet_res_" + b + "_" + e + "_" + d).html("<span class='blue_text' style='width:240px'>" + game.buildings[d].displayName + " <span class='white_text'>" + planets[b].structure[d].number + "</span> </span><span class='white_text' style='float:right;margin-right:320px;'><span class='" +
                            (0 <= g ? 0 < g ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < g ? "+" : "") + "" + beauty(g) + "/s)</span></span>"));
                        g = planets[b].globalImport[e] - planets[b].globalExport[e];
                        $("#planet_res_" + b + "_" + e + "_import").html("<span class='blue_text' style='width:240px'>Import/Export </span><span class='white_text' style='float:right;margin-right:320px;'><span class='" + (0 <= g ? 0 < g ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < g ? "+" : "") + "" + beauty(g) + "/s)</span></span>")
                    }
                if (overviewResourceExpand[b].energy)
                    for (d = 0; d < game.buildings.length; d++) 0 !=
                        game.buildings[d].energy && 0 < planets[b].structure[d].number && (g = game.buildings[d].production(planets[b]).energy, $("#planet_res_" + b + "_energy_" + d).html("<span class='blue_text' style='width:240px'>" + game.buildings[d].displayName + " <span class='white_text'>" + planets[b].structure[d].number + "</span> </span><span class='white_text' style='float:right;margin-right:320px;'><span class='" + (0 <= g ? 0 < g ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < g ? "+" : "") + "" + beauty(g) + "/s)</span></span>"));
                if (overviewResourceExpand[b].research)
                    for (d =
                        0; d < game.buildings.length; d++) 0 != game.buildings[d].researchPoint && 0 < planets[b].structure[d].number && (g = game.buildings[d].production(planets[b]).researchPoint, $("#planet_res_" + b + "_research_" + d).html("<span class='blue_text' style='width:240px'>" + game.buildings[d].displayName + " <span class='white_text'>" + planets[b].structure[d].number + "</span> </span><span class='white_text' style='float:right;margin-right:320px;'><span class='" + (0 <= g ? 0 < g ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < g ? "+" : "") + "" + beauty(g) +
                        "/s)</span></span>"))
            }
        }
        if (overviewPlanetExpand.empire) {
            d = Array(resNum);
            b = Array(resNum);
            for (e = 0; e < resNum; e++) d[e] = 0, b[e] = 0;
            for (a = d.researchPoint = 0; a < game.planets.length; a++) {
                g = planets[game.planets[a]].rawProduction();
                for (e = 0; e < resNum; e++) resources[e].show(game) && (d[e] += g[e], b[e] += planets[game.planets[a]].resources[e], $("#total_res_empire_" + e).html(beauty(b[e]) + " <span class='" + (0 <= d[e] ? 0 < d[e] ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < d[e] ? "+" : "") + "" + beauty(d[e]) + "/s)</span>"));
                d.researchPoint +=
                    g.researchPoint
            }
            d = d.researchPoint;
            $("#total_res_empire_research").html("" + beauty(game.researchPoint) + " <span class='" + (0 < d ? "green_text" : "gray_text") + "'>(" + beauty(d) + "/s)</span>");
            b = Array(game.buildings.length);
            for (d = 0; d < game.buildings.length; d++) b[d] = 0;
            for (a = 0; a < game.planets.length; a++)
                for (d = 0; d < game.buildings.length; d++) 0 != game.buildings[d].resourcesProd[e] && (b[d] += planets[game.planets[a]].structure[d].number);
            for (e = 0; e < resNum; e++)
                if (overviewResourceExpand.empire[e])
                    for (d = 0; d < game.buildings.length; d++)
                        if (0 <
                            b[d]) {
                            for (a = g = 0; a < game.planets.length; a++) g += game.buildings[d].production(planets[game.planets[a]])[e];
                            $("#empire_res_" + e + "_" + d).html("<span class='blue_text' style='width:240px'>" + game.buildings[d].displayName + " <span class='white_text'>" + b[d] + "</span> </span><span class='white_text' style='float:right;margin-right:320px;'><span class='" + (0 <= g ? 0 < g ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < g ? "+" : "") + "" + beauty(g) + "/s)</span></span>")
                        }
            b = Array(game.buildings.length);
            for (d = 0; d < game.buildings.length; d++) b[d] =
                0;
            for (a = 0; a < game.planets.length; a++)
                for (d = 0; d < game.buildings.length; d++) 0 != game.buildings[d].researchPoint && (b[d] += planets[game.planets[a]].structure[d].number);
            if (overviewResourceExpand.empire.research)
                for (d = 0; d < game.buildings.length; d++)
                    if (0 < b[d]) {
                        for (a = g = 0; a < game.planets.length; a++) g += game.buildings[d].production(planets[game.planets[a]]).researchPoint;
                        $("#empire_res_research_" + d).html("<span class='blue_text' style='width:240px'>" + game.buildings[d].displayName + " <span class='white_text'>" + b[d] +
                            "</span> </span><span class='white_text' style='float:right;margin-right:320px;'><span class='" + (0 <= g ? 0 < g ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < g ? "+" : "") + "" + beauty(g) + "/s)</span></span>")
                    }
        }
    };
    u();
    $("#planet_selection_interface").show();
    $("#back_button").unbind();
    $("#back_button").click(H);
    $("#back_button").show()
}

function ba() {
    currentInterface = "exportInterface";
    currentUpdater = function() {};
    $("#profile_info_list").html("<div style='position:relative;left:16px;'><br><span class='blue_text' id='expsave' style='float:left;margin-left:16px;font-size:100%;cursor:pointer;'>Export Save: (Data could be huge, so it could be slow!)  </span><br> <input id='saveexport' type='text' value='' onClick='this.select();' style='width:95%;height:auto;wrap-word:break-word;'><br><br><br><span class='blue_text' id='impsave' style='float:left;margin-left:16px;font-size:100%;cursor:pointer;'>Import Save (Click)   </span><br> <input id='saveimport' type='text' value='' onClick='this.select();' style='width:95%;height:auto;wrap-word:break-word;'><br><br><br><span class='blue_text' id='impsave2' style='float:left;margin-left:16px;font-size:100%;cursor:pointer;'>(USE ONLY IF YOU ARE GETTING ERRORS) Import Save (Click)   </span><br> <input id='saveimport2' type='text' value='' onClick='this.select();' style='width:95%;height:auto;wrap-word:break-word;'><br></div>");
    btoa(capital);
    var e = {
            schedule: fleetSchedule.toArray(),
            fleets: fleetSchedule.fleets,
            count: fleetSchedule.count,
            m: market.toobj()
        },
        h = JSON.stringify(planetArraySaver(planets)),
        n = JSON.stringify(civisArraySaver(civis)),
        l = JSON.stringify(e),
        e = encodeURIComponent(h + "@DIVIDER@" + n + "@DIVIDER@" + l);
    console.log(LZString.compressToBase64(LZString.compressToUTF16(h)).length + " " + LZString.compressToBase64(LZString.compressToUTF16(n)).length + " " + LZString.compressToBase64(LZString.compressToUTF16(l)).length);
    h = LZString.compressToUTF16(e);
    h = LZString.compressToBase64(h);
    n = LZString.decompressFromUTF16(LZString.decompressFromBase64(h));
    $("#expsave").html("Export Save: (Data could be huge, so it could be slow!)<span class='white_text'>(Loading...)</span>");
    n == e ? ($("#saveexport").val("hg" + h), $("#expsave").html("Export Save: (Data could be huge, so it could be slow!)<span class='green_text'>Done</span>")) : $("#expsave").html("Export Save: <span class='red_text'>ERROR EXPORTING</span>");
    $("#impsave").unbind();
    $("#impsave").click(function() {
        var b =
            $("#saveimport").val(),
            e = "";
        (e = "hg" == b.substring(0, 2) ? decodeURIComponent(LZString.decompressFromUTF16(LZString.decompressFromBase64(b.substring(2)))) : LZString.decompressFromUTF16(LZString.decompressFromBase64(b))) || (e = "hg" == b.substring(0, 2) ? decodeURIComponent(LZString.decompressFromUTF16(atob(b.substring(2)))) : LZString.decompressFromUTF16(atob(b)));
        if (e) try {
            var g = e.split("@DIVIDER@");
            console.log(g);
            if (3 <= g.length) {
                for (b = 0; b < game.researches.length; b++)
                    for (var h = game.researches[b].level, n = 0; n < h; n++) game.researches[b].unbonus(),
                        game.researches[b].level--;
                d();
                firstTime = !1;
                var l = JSON.parse(g[1]),
                    p = JSON.parse(g[0]),
                    q = JSON.parse(g[2]);
                console.log("iMPORT");
                console.log(q);
                clearTimeout(idleTimeout);
                idleBon = 1;
                for (b = 0; b < l.length; b++) {
                    civisLoader(civis[b], l[b], civis[b].name);
                    for (g = 0; g < l[b].buildings.length; g++) l[b].buildings[g] && buildingLoader(civis[b].buildings[g], l[b].buildings[g]);
                    for (g = 0; g < l[b].researches.length; g++) l[b].researches[g] && researchLoader(civis[b].researches[g], l[b].researches[g])
                }
                fleetSchedule.count = q.count;
                var n =
                    0,
                    u;
                for (u in q.fleets) n++;
                console.log(n);
                console.log(q.fleets);
                fleetSchedule.load(q.schedule, q.fleets, n);
                q.m && market.load(q.m);
                game = civis[0];
                for (b = 0; b < p.length; b++) p[b] && planetLoader(planets[b], p[b]);
                game.searchPlanet(planetsName.virgo) || (planets[planetsName.virgo].setCivis(8), civis[8].capital = planetsName.virgo);
                game.searchPlanet(planetsName.nassaus) || (planets[planetsName.nassaus].setCivis(7), civis[7].capital = planetsName.nassaus);
                var v = (new Date).getTime() - game.lastSaved;
                0 > v && (v = 0);
                n = 1 + v / 1E3 / 60 * .5;
                1E3 < n && (n = 1E3);
                idleBon = n;
                idleTimeout = setTimeout(function() {
                    idleBon = 1
                }, 6E4);
                (new m(210, 96, "<br><span class='blue_text text_shadow'>Idle bonus for the next 60 seconds: production x" + Math.floor(100 * n) / 100 + "</span>", "Ok")).draw();
                submitNumber("Number of planets", game.planets.length);
                submitNumber("Infuence", game.influence());
                var w = a();
                submitNumber("Total fleets value", w);
                var x = parseInt(Math.floor(game.days / 365));
                submitNumber("Total years", x);
                submitNumber("totalrp", parseInt(game.totalRPspent()));
                H()
            } else $("#impsave").html("Import Save (Click): <span class='red_text'>Corrupted data</span>")
        } catch (W) {
            console.log(W.message),
                $("#impsave").html("Import Save (Click): <span class='red_text'>Error</span>")
        } else $("#impsave").html("Import Save (Click): <span class='red_text'>Invalid data</span>")
    });
    $("#impsave2").unbind();
    $("#impsave2").click(function() {
        var d = $("#saveimport2").val(),
            e = "";
        if (e = "hg" == d.substring(0, 2) ? decodeURIComponent(LZString.decompressFromUTF16(LZString.decompressFromBase64(d.substring(2)))) : LZString.decompressFromUTF16(LZString.decompressFromBase64(d))) try {
            var g = e.split("@DIVIDER@");
            if (3 <= g.length) {
                for (d =
                    0; d < game.researches.length; d++)
                    for (var h = game.researches[d].level, n = 0; n < h; n++) game.researches[d].unbonus(), game.researches[d].level--;
                b();
                firstTime = !1;
                var l = JSON.parse(g[1]),
                    p = JSON.parse(g[0]),
                    q = JSON.parse(g[2]);
                console.log("iMPORT");
                console.log(q);
                clearTimeout(idleTimeout);
                idleBon = 1;
                for (d = 0; d < l.length; d++) {
                    civisLoader(civis[d], l[d], civis[d].name);
                    for (g = 0; g < l[d].buildings.length; g++) l[d].buildings[g] && buildingLoader(civis[d].buildings[g], l[d].buildings[g]);
                    for (g = 0; g < l[d].researches.length; g++) l[d].researches[g] &&
                        researchLoader(civis[d].researches[g], l[d].researches[g])
                }
                fleetSchedule.count = q.count;
                var n = 0,
                    u;
                for (u in q.fleets) n++;
                console.log(n);
                console.log(q.fleets);
                fleetSchedule.load(q.schedule, q.fleets, n);
                q.m && market.load(q.m);
                game = civis[0];
                for (d = 0; d < p.length; d++) p[d] && planetLoader(planets[d], p[d]);
                game.searchPlanet(planetsName.virgo) || (planets[planetsName.virgo].setCivis(8), civis[8].capital = planetsName.virgo);
                game.searchPlanet(planetsName.nassaus) || (planets[planetsName.nassaus].setCivis(7), civis[7].capital =
                    planetsName.nassaus);
                var v = (new Date).getTime() - game.lastSaved;
                0 > v && (v = 0);
                n = 1 + v / 1E3 / 60 * .5;
                1E3 < n && (n = 1E3);
                idleBon = n;
                idleTimeout = setTimeout(function() {
                    idleBon = 1
                }, 6E4);
                (new m(210, 96, "<br><span class='blue_text text_shadow'>Idle bonus for the next 60 seconds: production x" + Math.floor(100 * n) / 100 + "</span>", "Ok")).draw();
                submitNumber("Number of planets", game.planets.length);
                submitNumber("Infuence", game.influence());
                var w = a();
                submitNumber("Total fleets value", w);
                var x = parseInt(Math.floor(game.days / 365));
                submitNumber("Total years", x);
                submitNumber("totalrp", parseInt(game.totalRPspent()));
                H()
            } else $("#impsave2").html("Import Save (Click): <span class='red_text'>Corrupted data</span>")
        } catch (W) {
            console.log(W.message), $("#impsave2").html("Import Save (Click): <span class='red_text'>Error</span>")
        } else $("#impsave2").html("Import Save (Click): <span class='red_text'>Invalid data</span>")
    });
    u();
    $("#profile_interface").show()
}

function aa(a, b, d, e) {
    currentInterface = "setAutoRouteInterface";
    currentUpdater = function() {};
    var f = parseInt(Math.floor(2 * planets[b].shortestPath[d].distance / (idleBon * a.speed()))),
        g = Math.floor(f / 60),
        g = "<div style='position:relative;left:16px;top:16px;'><span class='blue_text' style='font-size:120%'>Round Trip Time: </span><span class='white_text'>" + Math.floor(g / 60) % 60 + "h " + g % 60 + "m " + f % 60 + "s </span><span class='white_text'>(" + f + "s)</span><div><div style='position:relative;left:16px;top:16px;'>",
        g = g + "<div style='float:left;margin:0;width:48%;'>" + ("<img src='img/" + planets[b].icon + "/" + planets[b].icon +
            ".png' class='icon' style='cursor:pointer;position:relative;top:8px;'/><span class='blue_text' style='font-size:150%'> " + planets[b].name + "</span><br><span class='blue_text'>Fleet storage: </span><span class='white_text'>" + a.maxStorage() + "</span><span style='float:right;margin-righ:16px;' class='blue_text'>Select the amount of resources<br>you want to load in this planet</span><br><br>"),
        h = planets[b].rawProduction(),
        n = Array(resNum);
    planets[b].importExport();
    for (var l = 0; l < resNum; l++) n[l] = planets[b].globalImport[l] -
        planets[b].globalExport[l];
    for (var p = 0; p < resNum; p++)
        if (resources[p].show(game) || 1 <= planets[b].resources[p]) g += "<span class='blue_text' style='font-size:80%;'>" + resources[p].name.capitalize() + "</span><br><span class='blue_text' style='font-size:80%;' id='edit_auto_stock_source_" + p + "'>Stock: <span class='white_text' style='font-size:100%;'> " + beauty(planets[b].resources[p]) + " <span class='" + (0 <= h[p] ? 0 < h[p] ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < h[p] ? "+" : "") + "" + beauty(h[p]) + "/s)</span>", l = p, 0 !=
            n[l] && (g += "<span class='" + (0 <= n[l] ? 0 < n[l] ? "purple_text" : "gray_text" : "pink_text oblique_txt") + "'> (" + (0 < n[l] ? "+" : "") + "" + beauty(n[l]) + "/s)</span>"), g += "</span></span><br><span class='blue_text' style='font-size:80%;' id='new_source_" + p + "'></span><span style='float:right;margin-righ:16px;' class='blue_text'>(<input style='width:64px;height:12px;font-size:92%' id='res_slide0_" + p + "' name='" + p + "'type='text' value='0' />/s) <input style='width:80px' id='res_textval0_" + p + "' name='" + p + "' type='text' value='0'/></span><br><br>";
    var g = g + "<span class='blue_text' style='font-size:120%'></span><br><br></div><div style='float:left;margin:0;width:4%;'><span class='blue_text' style='font-size:120%'></span><br><br></div><div style='float:left;margin:0;width:48%;'>" + ("<img src='img/" + planets[d].icon + "/" + planets[d].icon + ".png' class='icon' style='cursor:pointer;position:relative;top:8px;'/><span class='blue_text' style='font-size:150%'> " + planets[d].name + "</span><br><span class='blue_text'> Fleet storage: </span><span class='white_text'>" +
            a.maxStorage() + "</span><span style='float:right;margin-righ:16px;'  class='blue_text'>Select the amount of resources<br>you want to load in this planet</span><br><br>"),
        h = planets[d].rawProduction(),
        q = Array(resNum);
    planets[d].importExport();
    for (l = 0; l < resNum; l++) q[l] = planets[d].globalImport[l] - planets[d].globalExport[l];
    for (p = 0; p < resNum; p++)
        if (resources[p].show(game) || 1 <= planets[d].resources[p]) g += "<span class='blue_text' style='font-size:80%;'>" + resources[p].name.capitalize() + "</span><br><span class='blue_text' style='font-size:80%;' id='edit_auto_stock_dest_" +
            p + "'>Stock: <span class='white_text' style='font-size:100%;'> " + beauty(planets[d].resources[p]) + " <span class='" + (0 <= h[p] ? 0 < h[p] ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < h[p] ? "+" : "") + "" + beauty(h[p]) + "/s)</span>", l = p, 0 != q[l] && (g += "<span class='" + (0 <= q[l] ? 0 < q[l] ? "purple_text" : "gray_text" : "pink_text oblique_txt") + "'> (" + (0 < q[l] ? "+" : "") + "" + beauty(q[l]) + "/s)</span>"), g += "</span></span><br><span class='blue_text' style='font-size:80%;' id='new_dest_" + p + "'></span><span style='float:right;margin-righ:16px;'class='blue_text'>(<input style='width:64px;height:12px;font-size:92%' id='res_slide1_" +
            p + "' name='" + p + "' type='text' value='0' />/s) <input style='width:80px' id='res_textval1_" + p + "' name='" + p + "' type='text' value='0'/></span><br><br>";
    g += "<span class='blue_text' style='font-size:120%'></span><br><br></div></div><span class='blue_text button' id='but_setroute' style='font-size:120%;position:absolute;left:45%;bottom:0%;'>Create Route</span>";
    $("#profile_info_list").html(g);
    for (g = 0; g < resNum; g++) $("#res_slide0_" + g).change(function() {
        Number.isInteger(1E3 * Math.floor(parseInt($(this).val()))) ||
            $(this).val(0);
        $("#res_textval0_" + $(this).attr("name")).val(parseInt(parseFloat($(this).val()) * f));
        currentUpdater()
    }), $("#res_textval0_" + g).change(function() {
        Number.isInteger(parseInt($(this).val())) ? parseInt($(this).val()) > $("#res_slide0_" + $(this).attr("name")).attr("max") && $(this).val($("#res_slide0_" + $(this).attr("name")).attr("max")) : $(this).val(0);
        $("#res_slide0_" + $(this).attr("name")).val(parseInt($(this).val()) / f);
        currentUpdater()
    }), $("#res_slide1_" + g).change(function() {
        Number.isInteger(1E3 *
            Math.floor(parseInt($(this).val()))) || $(this).val(0);
        $("#res_textval1_" + $(this).attr("name")).val(parseInt(parseFloat($(this).val()) * f));
        currentUpdater()
    }), $("#res_textval1_" + g).change(function() {
        Number.isInteger(parseInt($(this).val())) ? parseInt($(this).val()) > $("#res_slide1_" + $(this).attr("name")).attr("max") && $(this).val($("#res_slide1_" + $(this).attr("name")).attr("max")) : $(this).val(0);
        $("#res_slide1_" + $(this).attr("name")).val(parseInt($(this).val()) / f);
        currentUpdater()
    });
    currentUpdater = function() {
        for (var a =
                planets[b].rawProduction(), e = planets[d].rawProduction(), g = 0; g < resNum; g++)
            if (resources[g].show(game) || 1 <= planets[d].resources[g]) {
                var h = g,
                    m = "",
                    l = "";
                0 != n[h] && (m += "<span class='" + (0 <= n[h] ? 0 < n[h] ? "purple_text" : "gray_text" : "pink_text oblique_txt") + "'> (" + (0 < n[h] ? "+" : "") + "" + beauty(n[h]) + "/s)</span>");
                0 != q[h] && (l += "<span class='" + (0 <= q[h] ? 0 < q[h] ? "purple_text" : "gray_text" : "pink_text oblique_txt") + "'> (" + (0 < q[h] ? "+" : "") + "" + beauty(q[h]) + "/s)</span>");
                $("#edit_auto_stock_dest_" + g).html("Stock: <span class='white_text' style='font-size:100%;'> " +
                    beauty(planets[d].resources[g]) + " <span class='" + (0 <= e[g] ? 0 < e[g] ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < e[g] ? "+" : "") + "" + beauty(e[g]) + "/s)</span>" + l + "</span>");
                $("#edit_auto_stock_source_" + g).html("Stock: <span class='white_text' style='font-size:100%;'> " + beauty(planets[b].resources[g]) + " <span class='" + (0 <= a[g] ? 0 < a[g] ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < a[g] ? "+" : "") + "" + beauty(a[g]) + "/s)</span>" + m + "</span>");
                l = m = 0;
                $("#res_textval0_" + g).val() && (m = parseInt($("#res_textval0_" + g).val()));
                $("#res_textval1_" + g).val() && (l = parseInt($("#res_textval1_" + g).val()));
                h = (-m + l) / f;
                m = (-l + m) / f;
                $("#new_source_" + g).html("This fleet will give: <span class='white_text' style='font-size:100%;'><span class='" + (0 <= h ? 0 < h ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < h ? "+" : "") + "" + beauty(h) + "/s)</span>");
                $("#new_dest_" + g).html("This fleet will give: <span class='white_text' style='font-size:100%;'><span class='" + (0 <= m ? 0 < m ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < m ? "+" : "") + "" + beauty(m) + "/s)</span>")
            }
    };
    $("#but_setroute").unbind();
    $("#but_setroute").click(function() {
        for (var f = 0, g = 0, h = 0; h < resNum; h++) $("#res_textval0_" + h).val() && (f += parseInt($("#res_textval0_" + h).val())), $("#res_textval1_" + h).val() && (g += parseInt($("#res_textval1_" + h).val()));
        if (f <= a.availableStorage())
            if (g <= a.availableStorage()) {
                a.autoMap[b] = 0;
                a.autoMap[d] = 1;
                for (h = 0; h < resNum; h++) $("#res_textval0_" + h).val() ? (f = parseInt($("#res_textval0_" + h).val()), a.autoRes[a.autoMap[b]][h] = f, f = Math.min(f, planets[b].resources[h]), planets[b].fleets[e].load(h,
                    f) && planets[b].resourcesAdd(h, -f)) : a.autoRes[a.autoMap[b]][h] = 0, $("#res_textval1_" + h).val() ? (f = parseInt($("#res_textval1_" + h).val()), a.autoRes[a.autoMap[d]][h] = f) : a.autoRes[a.autoMap[d]][h] = 0;
                a.type = "auto";
                a.move(b, d);
                delete planets[b].fleets[e];
                J(currentCriteriaAuto)
            } else h = new m(210, 0, "<span class='red_text red_text_shadow'>Not enough storage to load resources in " + planets[d].name + "!</span>", "info"), h.drawToast();
        else h = new m(210, 0, "<br><span class='red_text red_text_shadow'>Not enough storage to load resources in " +
            planets[b].name + "!</span>", "info"), h.drawToast()
    });
    u();
    $("#profile_interface").show()
}

function da(a, b, d) {
    currentInterface = "editAutoRouteInterface";
    currentUpdater = function() {};
    var e = parseInt(Math.floor(2 * planets[b].shortestPath[d].distance / (a.speed() * idleBon))),
        f = Math.floor(e / 60),
        f = "<div style='position:relative;left:16px;top:16px;'><span class='blue_text' style='font-size:120%'>Round Trip Time: </span><span class='white_text'>" + Math.floor(f / 60) % 60 + "h " + f % 60 + "m " + e % 60 + "s </span><span class='white_text'>(" +
        e + "s)</span><br><span class='blue_text' style='font-size:120%'>Fleet Name: </span><span class='white_text'>" + a.name + "</span><div>",
        f = f + "<div style='position:relative;left:16px;top:16px;'><div style='float:left;margin:0;width:48%;'>" + ("<img src='img/" + planets[b].icon + "/" + planets[b].icon + ".png' class='icon' style='cursor:pointer;position:relative;top:8px;'/><span class='blue_text' style='font-size:150%'> " + planets[b].name + "</span><br><span class='blue_text'>Fleet storage: </span><span class='white_text'>" +
            a.maxStorage() + "</span><span style='float:right;margin-righ:16px;' class='blue_text'>Select the amount of resources<br>you want to load in this planet</span><br><br>"),
        g = planets[b].rawProduction(),
        h = Array(resNum);
    planets[b].importExport();
    for (var n = 0; n < resNum; n++) h[n] = planets[b].globalImport[n] - planets[b].globalExport[n];
    for (var l = 0; l < resNum; l++)
        if (resources[l].show(game) || 1 <= planets[b].resources[l]) f += "<span class='blue_text' style='font-size:80%;'>" + resources[l].name.capitalize() + "</span><br><span class='blue_text' style='font-size:80%;' id='edit_auto_stock_source_" +
            l + "'>Stock: <span class='white_text' style='font-size:100%;'> " + beauty(planets[b].resources[l]) + " <span class='" + (0 <= g[l] ? 0 < g[l] ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < g[l] ? "+" : "") + "" + beauty(g[l]) + "/s)</span>", n = l, 0 != h[n] && (f += "<span class='" + (0 <= h[n] ? 0 < h[n] ? "purple_text" : "gray_text" : "pink_text oblique_txt") + "'> (" + (0 < h[n] ? "+" : "") + "" + beauty(h[n]) + "/s)</span>"), f += "</span></span><br><span class='blue_text' style='font-size:80%;' id='new_source_" + l + "'></span><span style='float:right;margin-righ:16px;' class='blue_text'>(<input style='width:64px;height:12px;font-size:92%' id='res_slide0_" +
            l + "' name='" + l + "' type='text' value='0'/>/s) <input style='width:80px' id='res_textval0_" + l + "' name='" + l + "' type='text' value='0'/></span><br><br>";
    var f = f + "<span class='blue_text' style='font-size:120%'></span><br><br></div><div style='float:left;margin:0;width:4%;'><span class='blue_text' style='font-size:120%'></span><br><br></div><div style='float:left;margin:0;width:48%;'>" + ("<img src='img/" + planets[d].icon + "/" + planets[d].icon + ".png' class='icon' style='cursor:pointer;position:relative;top:8px;'/><span class='blue_text' style='font-size:150%'> " +
            planets[d].name + "</span><br><span class='blue_text'> Fleet storage: </span><span class='white_text'>" + a.maxStorage() + "</span><span style='float:right;margin-righ:16px;'  class='blue_text'>Select the amount of resources<br>you want to load in this planet</span><br><br>"),
        g = planets[d].rawProduction(),
        p = Array(resNum);
    planets[d].importExport();
    for (n = 0; n < resNum; n++) p[n] = planets[d].globalImport[n] - planets[d].globalExport[n];
    for (l = 0; l < resNum; l++)
        if (resources[l].show(game) || 1 <= planets[d].resources[l]) f +=
            "<span class='blue_text' style='font-size:80%;'>" + resources[l].name.capitalize() + "</span><br><span class='blue_text' style='font-size:80%;' id='edit_auto_stock_dest_" + l + "'>Stock: <span class='white_text' style='font-size:100%;'> " + beauty(planets[d].resources[l]) + " <span class='" + (0 <= g[l] ? 0 < g[l] ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < g[l] ? "+" : "") + "" + beauty(g[l]) + "/s)</span>", n = l, 0 != p[n] && (f += "<span class='" + (0 <= p[n] ? 0 < p[n] ? "purple_text" : "gray_text" : "pink_text oblique_txt") + "'> (" + (0 < p[n] ? "+" :
                "") + "" + beauty(p[n]) + "/s)</span>"), f += "</span></span><br><span class='blue_text' style='font-size:80%;' id='new_dest_" + l + "'></span><span style='float:right;margin-righ:16px;' class='blue_text'>(<input style='width:64px;height:12px;font-size:92%' id='res_slide1_" + l + "' name='" + l + "' type='text' value='0'/>/s) <input style='width:80px' id='res_textval1_" + l + "' name='" + l + "' type='text' value='0'/></span><br><br>";
    f += "<span class='blue_text' style='font-size:120%'></span><br><br></div></div><span class='blue_text button' id='but_editroute' style='font-size:120%;position:absolute;left:45%;bottom:0%;'>Edit Route</span>";
    $("#profile_info_list").html(f);
    for (f = 0; f < resNum; f++) $("#res_slide0_" + f).change(function() {
        Number.isInteger(1E3 * Math.floor(parseInt($(this).val()))) || $(this).val(0);
        $("#res_textval0_" + $(this).attr("name")).val(parseInt(parseFloat($(this).val()) * e));
        currentUpdater()
    }), $("#res_textval0_" + f).change(function() {
        Number.isInteger(parseInt($(this).val())) ? parseInt($(this).val()) > $("#res_slide0_" + $(this).attr("name")).attr("max") && $(this).val($("#res_slide0_" + $(this).attr("name")).attr("max")) : $(this).val(0);
        $("#res_slide0_" + $(this).attr("name")).val(parseInt($(this).val()) / e);
        currentUpdater()
    }), $("#res_slide1_" + f).change(function() {
        Number.isInteger(1E3 * Math.floor(parseInt($(this).val()))) || $(this).val(0);
        $("#res_textval1_" + $(this).attr("name")).val(parseInt(parseFloat($(this).val()) * e));
        currentUpdater()
    }), $("#res_textval1_" + f).change(function() {
        Number.isInteger(parseInt($(this).val())) ? parseInt($(this).val()) > $("#res_slide1_" + $(this).attr("name")).attr("max") && $(this).val($("#res_slide1_" + $(this).attr("name")).attr("max")) :
            $(this).val(0);
        $("#res_slide1_" + $(this).attr("name")).val(parseInt($(this).val()) / e);
        currentUpdater()
    }), $("#res_slide0_" + f).val(Math.floor(1E3 * a.autoRes[a.autoMap[b]][f] / e) / 1E3), $("#res_slide1_" + f).val(Math.floor(1E3 * a.autoRes[a.autoMap[d]][f] / e) / 1E3), $("#res_textval0_" + f).val(a.autoRes[a.autoMap[b]][f]), $("#res_textval1_" + f).val(a.autoRes[a.autoMap[d]][f]);
    currentUpdater = function() {
        for (var a = planets[b].rawProduction(), f = planets[d].rawProduction(), g = 0; g < resNum; g++)
            if (resources[g].show(game) || 1 <= planets[d].resources[g]) {
                var l =
                    g,
                    m = "",
                    n = "";
                0 != h[l] && (m += "<span class='" + (0 <= h[l] ? 0 < h[l] ? "purple_text" : "gray_text" : "pink_text oblique_txt") + "'> (" + (0 < h[l] ? "+" : "") + "" + beauty(h[l]) + "/s)</span>");
                0 != p[l] && (n += "<span class='" + (0 <= p[l] ? 0 < p[l] ? "purple_text" : "gray_text" : "pink_text oblique_txt") + "'> (" + (0 < p[l] ? "+" : "") + "" + beauty(p[l]) + "/s)</span>");
                $("#edit_auto_stock_dest_" + g).html("Stock: <span class='white_text' style='font-size:100%;'> " + beauty(planets[d].resources[g]) + " <span class='" + (0 <= f[g] ? 0 < f[g] ? "green_text" : "gray_text" : "red_text") +
                    "'>(" + (0 < f[g] ? "+" : "") + "" + beauty(f[g]) + "/s)</span>" + n + "</span>");
                $("#edit_auto_stock_source_" + g).html("Stock: <span class='white_text' style='font-size:100%;'> " + beauty(planets[b].resources[g]) + " <span class='" + (0 <= a[g] ? 0 < a[g] ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < a[g] ? "+" : "") + "" + beauty(a[g]) + "/s)</span>" + m + "</span>");
                n = m = 0;
                $("#res_textval0_" + g).val() && (m = parseInt($("#res_textval0_" + g).val()));
                $("#res_textval1_" + g).val() && (n = parseInt($("#res_textval1_" + g).val()));
                l = (-m + n) / e;
                m = (-n + m) / e;
                $("#new_source_" +
                    g).html("This fleet will give: <span class='white_text' style='font-size:100%;'><span class='" + (0 <= l ? 0 < l ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < l ? "+" : "") + "" + beauty(l) + "/s)</span>");
                $("#new_dest_" + g).html("This fleet will give: <span class='white_text' style='font-size:100%;'><span class='" + (0 <= m ? 0 < m ? "green_text" : "gray_text" : "red_text") + "'>(" + (0 < m ? "+" : "") + "" + beauty(m) + "/s)</span>")
            }
    };
    $("#but_editroute").unbind();
    $("#but_editroute").click(function() {
        for (var e = 0, f = 0, g = 0; g < resNum; g++) $("#res_textval0_" +
            g).val() && (e += parseInt($("#res_textval0_" + g).val())), $("#res_textval1_" + g).val() && (f += parseInt($("#res_textval1_" + g).val()));
        if (e <= a.maxStorage())
            if (f <= a.maxStorage()) {
                a.autoMap[b] = 0;
                a.autoMap[d] = 1;
                for (g = 0; g < resNum; g++) $("#res_textval0_" + g).val() ? (e = parseInt($("#res_textval0_" + g).val()), a.autoRes[a.autoMap[b]][g] = e) : a.autoRes[a.autoMap[b]][g] = 0, $("#res_textval1_" + g).val() ? (e = parseInt($("#res_textval1_" + g).val()), a.autoRes[a.autoMap[d]][g] = e) : a.autoRes[a.autoMap[d]][g] = 0;
                a.type = "auto";
                J(currentCriteriaAuto)
            } else g =
                new m(210, 0, "<span class='red_text red_text_shadow'>Not enough storage to load resources in " + planets[d].name + "!</span>", "info"), g.drawToast();
        else g = new m(210, 0, "<br><span class='red_text red_text_shadow'>Not enough storage to load resources in " + planets[b].name + "!</span>", "info"), g.drawToast()
    });
    u();
    $("#profile_interface").show()
}

function ca() {
    currentInterface = "tutorialInterface";
    var a;
    a = "<div style='position:relative;left:16px'><br><span class='blue_text' style='float:left;margin-left:16px;font-size:120%;'>This is a little tutorial to help you start in Heart of Galaxy. These are only guidelines, so feel free to experiment yourself.</span><br><br><br><span class='blue_text' style='float:left;margin-left:16px;font-size:120%;'>First steps</span><br><br>" +
        ("<span class='white_text'>The first step in </span><span class='blue_text'>Heart of Galaxy</span><span class='white_text'> is to set up a steady resource income. The first resource you will ever need is </span><span class='blue_text'>Iron</span><span class='white_text'>, that can be extracted with </span><span class='blue_text'>Mining Plant</span><span class='white_text'>. You can find the </span><span class='blue_text'>Mining Plant</span><span class='white_text'> building in the extraction tab (pickaxe icon): </span><span class='blue_text' id='here_mining' style='cursor:pointer;'>here</span><span class='white_text'>. You have to click on the building in the list, and then the button " +
            x("Build") + " in the menu on the right.</span><br><br>");
    a += "<span class='white_text'>Once you have a good iron production (about 15-20/s), you should start to extract another important resource, </span><span class='blue_text'>Methane</span><span class='white_text'>, by building a </span><span class='blue_text'>Methane Extractor</span><span class='white_text'> in the Extraction tab (same of " + x("Mining Plants") + "). </span><span class='blue_text'>Methane</span><span class='white_text'> is needed to produce </span><span class='blue_text'>Fuel</span><span class='white_text'> which some buildings consume in order to work. Once you have built enough </span><span class='blue_text'>Methane Extractors</span><span class='white_text'>, you can build a " +
        x("Methane Processor") + " to convert " + x("Methane") + " into " + x("Fuel") + ". You can find this building in the production tab (factory icon): </span><span class='blue_text' style='cursor:pointer;' id='here_methane'>here</span><br><br>";
    a += "<span class='white_text'>It is the moment to start producing " + x("Steel") + ". It is produced in " + x("Foundry") + " and consumes " + x("Graphite") + ", " + x("Iron") + " and " + x("Fuel") + ". If you followed the previous steps, you should have already set up " + x("Iron") + " and " + x("Fuel") +
        " production. As you probably figured out, you just need to build a " + x("Graphite Extractor") + " to produce " + x("Graphite") + ". Once you have enough production of these basic resources, you can build a working " + x("Foundry") + ".</span><br><br>";
    a = a + "<span class='white_text'>As you probably noticed, some buildings have negative production. That means that buildings will consume those resources over time. If these resources are not provided, the building will not produce anything! When there is a shortage of a certain resource, you can shut down some buildings or dismantle it in order to balance the production rate and keeping it positive.</span><br><br><br><br><span class='blue_text' style='float:left;margin-left:16px;font-size:120%;'>Energy</span><br><br>" +
        ("<span class='white_text'>" + x("Energy") + " is a special resource. It doesn't work like " + x("Iron") + " or " + x("Steel") + " since it only has to be produced and isn't cumulable. " + x("Energy") + " usage is divided in " + x("Production") + " and " + x("Consumption") + ". Unlike other resource, if production exceeds consumption, energy won't be consumed, instead, all buildings requiring energy to function will get a production malus proportional to the ratio production/consumption. It means, if you consume 1000 " +
            x("Energy") + " and acqually produce 100, all buildings that require energy will produce only 10% of what they are capable of. </span><br><br>");
    a += "<span class='white_text'>" + x("Energy") + " is produced from fuel in the early game. All you need is to build a " + x("Small Generator") + " in the energy tab (atom icon). The generator will produce a little amount of energy sufficient to support only few buildings.</span><br><br>";
    a = a + "<br><br><span class='blue_text' style='float:left;margin-left:16px;font-size:120%;'>Researches</span><br><br>" +
        ("<span class='white_text'>To improve buildings efficiency, and to unlock new ones, you need to invest " + x("Research Points") + " in the research tab: </span><span class='blue_text' id='here_research' style='cursor:pointer;'>here</span><span class='white_text'>. To produce " + x("Research Points") + " you need " + x("Laboratories") + " which can be built in the other tab (three points icon): </span><span class='blue_text' id='here_other' style='cursor:pointer;'>here</span><span class='white_text'>. " + x("Laboratories") +
            " are expensive to build but are necessary to improve your production. Also, they need " + x("Energy") + " to function.</span><br><br>");
    a += "<span class='white_text'>You should start to research " + x("Geology") + " and " + x("Material Science") + " since they improve basic construction resource production such as " + x("Iron") + " and " + x("Steel") + ". When you will research " + x("Geology V") + " you will unlock the " + x("Metal Collector") + ", which can be buit in the extraction tab. This buildings needs energy to function and will extract " +
        x("Titanium") + " and " + x("Uranium") + " (uranium extraction could change!). " + x("Titanium") + " is a resource needed for construction of advanced buildings and space ships. " + x("Uranium") + " will be used in the middle game to produce a great amount of energy, and in the future will be used as fuel for ships. When you will research " + x("Material Science 8") + " you will unlock " + x("Plastic Factory") + " which can be used to produce " + x("Plastic") + "</span><br><br>";
    a += "<span class='white_text'>You can continue researching to unlocks important buildings. Another important research is " +
        x("Chemical Engineering") + " which unlock the " + x("Thermal Power Plant") + " and " + x("Oil") + " extraction which can be converted in fuel more efficiently than " + x("Methane") + " and is required to produce advanced resources such as " + x("Plastic") + "</span><br><br>";
    a = a + "<br><br><span class='blue_text' style='float:left;margin-left:16px;font-size:120%;'>Your first colony</span><br><br>" + ("<span class='white_text'>The purpose of " + x("Heart of Galaxy") + " is not only to produce resources but to use them to colonize and conquer other planets. When you feel ready, you can research " +
        x("Interstellar Travel") + " which gives you the ability to explore the galactic map. It also unlock the " + x("Shipyard") + " where you can build " + x("Space Ships") + ". In order to build a ship, just select it and click " + x("Build") + " in the menu on the right, just like a buiding. When you leave the shipyard, ships will be automatically grouped together in a new fleet that you can interact with in the fleet menu. You can merge fleets together, you can divide them and move them to a particular planet. You can also load resources into it and unload them later on another planet. All these actions can be done using the quick buttons next to the fleet name, or if you left-click on the fleet, you can scroll the menu on the right (with the infos about the fleet) to find the action buttons.</span><br><br>");
    a += "<span class='white_text'>There are three main categories of space ships: " + x("Colonial Ships") + ", " + x("Cargo Ships") + " and " + x("War Ships") + ". " + x("Colonial Ships") + ", for instance the ship " + x("Vitha") + ", are the only ones that can colonize a planet. Don't try to move a cargo ship to a planet without a colony ship, it will be useless, since only a fleet with at least one colony ships will have the action Colonize in the info menu. Colony ships will be destroyed upon colonization! Also, colony ships do not have any storage and are really slow. Note that the speed of the entire fleet will be the minimum speed of its components ships.</span><br><br>";
    a += "<span class='white_text'>Colonizing and conquering other planets is useful to obtain uncommon resources which can be extracted only on some particular planets. " + x("Sand") + " for example, can be extracted only from " + x("Aequoreas") + " and " + x("Desert planets") + ". " + x("Ice") + " can only be extracted on " + x("Icy planets") + " (such as " + x("Vasilis") + ") and " + x("Hydrogen") + " can only be extracted on " + x("Gas Giants") + " (will eventually be available refining water...). You can see in the planet interface which resources can be extracted from a particular planet. If there is no 'resource xNN', it means that resource can't be extracted. For example " +
        x("Vasilis") + " is missing " + x("Graphite") + ", " + x("Promision") + " is missing " + x("Ice") + " etc... Even if you already have a planet on which you can extract a particular resource, colonizing another planet can be worth since it gives another source of income, perhaps even more powerful.</span><br><br>";
    a += "</div>";
    $("#profile_info_list").html(a);
    $("#here_mining").unbind();
    $("#here_mining").click(function() {
        p("mining", planets[0])
    });
    $("#here_methane").unbind();
    $("#here_methane").click(function() {
        p("prod",
            planets[0])
    });
    $("#here_other").unbind();
    $("#here_other").click(function() {
        p("other", planets[0])
    });
    $("#here_research").unbind();
    $("#here_research").click(E);
    currentUpdater = function() {};
    u();
    $("#profile_interface").show()
}