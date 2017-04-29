var updateAutoRouteButton = new Object();

updateAutoRouteButton.init = function(){

    this.appendButton();

    $("#autobuildhub_icon").click(function() {
        console.log("Updating...");
        //script.UpdateAutoRoute();
        console.log("Updated !");
    });
/*
    $("#autobuildhub_icon").hover(function() {
        (new m(120,
            20, "<span class='blue_text' style='width:100%;text-align:center'>Automaticaly correct<br>HUB routes</span>", "info")).drawInfo();
        $(document).on("mousemove", function(a) {
            mouseX = a.pageX + 16;
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
    });*/
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
    document.getElementById("icon_cont").appendChild(updateAutoRouteIcon);
}