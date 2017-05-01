var updateAutoRouteButton = new Object();

updateAutoRouteButton.init = function(){
    this.hasAlert = false;
    this.hasWarning = false;
    this.hasInfo = false;
    this.appendButton();

    $("#autobuildhub_icon").click(function() {
        console.log("Updating...");

        updateAutoRouteButton.hasAlert = false;
        updateAutoRouteButton.hasWarning = false;
        updateAutoRouteButton.hasInfo = false;

        script.UpdateAutoRoute();
        updateAutoRouteButton.setColorStat();

        console.log("Updated !");
    });

    $("#autobuildhub_icon").hover(function() {
        (new m(120,
            20, "<span class='blue_text' style='width:100%;text-align:center'>Automaticaly correctHUB routes</span>", "info")).drawInfo();
        $(document).on("mousemove", function(a) {
            mouseX = a.pageX - 60;
            mouseY = a.pageY - 30;
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
    $("#autobuildhub_icon").mouseout(function() {
        $(document).on("mousemove", function() {})
    });
}

updateAutoRouteButton.appendButton = function(){
    var updateAutoRouteIcon = document.createElement("img");
    updateAutoRouteIcon.id = "autobuildhub_icon";
    updateAutoRouteIcon.class = "icon";
    updateAutoRouteIcon.src = GM_getResourceURL("updateAutoRouteIcon");
    updateAutoRouteIcon.height=30;
    updateAutoRouteIcon.width=30;
    updateAutoRouteIcon.style.marginTop ="6px";
    updateAutoRouteIcon.style.marginLeft="120px";
    updateAutoRouteIcon.style.cursor="pointer";
    updateAutoRouteIcon.style.transition="background 1s linear";
    document.getElementById("icon_cont").appendChild(updateAutoRouteIcon);
}

updateAutoRouteButton.setColorStat = function(){
    if (this.hasInfo) {
        console.log("info");
        $("#autobuildhub_icon").css({
            'background-color': 'rgba(0,0,255,0.2)' //blue
        })
    }
    else if (this.hasWarning) {
        console.log("warning");
        $("#autobuildhub_icon").css({
            'background-color': 'rgba(255,255,0,0.2)' //yellow

        })
    }
    else if (this.hasAlert) {
        console.log("alert");
        $("#autobuildhub_icon").css({
            'background-color': 'rgba(255,0,0,0.2)' //red
        })
    }
    else{
        console.log("no state");
        $("#autobuildhub_icon").css({
            'background-color': 'rgba(0,0,255,1)' //blue
        })
        $("#autobuildhub_icon").css({
            'background-color': 'none' //blue
        })

    }
    //mCSB_20_container
}