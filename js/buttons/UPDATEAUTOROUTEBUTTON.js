function UpdateAutoRouteButton(core){
    
    var _this = this;
    this.core = core;
    this.AppendButton();

    $("#autobuildhub_icon").click(this.core.UARButtonPressed);

    $("#autobuildhub_icon").hover(function() {
        (new m(120,
            20, "<span class='blue_text' style='width:100%;text-align:center'>Automaticaly correct HUB routes</span>", "info")).drawInfo();
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

UpdateAutoRouteButton.prototype.AppendButton = function(){
    var uARIcon = document.createElement("img");
    uARIcon.id = "autobuildhub_icon";
    uARIcon.class = "icon";
    uARIcon.src = GM_getResourceURL("updateAutoRouteIcon");
    uARIcon.height=30;
    uARIcon.width=30;
    uARIcon.style.marginTop ="6px";
    uARIcon.style.marginLeft="120px";
    uARIcon.style.cursor="pointer";
    uARIcon.style.transition="background 0.5s linear";
    document.getElementById("icon_cont").appendChild(uARIcon);
}

UpdateAutoRouteButton.prototype.SetColorState = function(){
    if (this.core.hasInfo) {
        $("#autobuildhub_icon").css({
            'background-color': 'rgba(0,0,255,0.2)' //blue
        })
    }
    else if (this.core.hasWarning) {
        $("#autobuildhub_icon").css({
            'background-color': 'rgba(255,255,0,0.2)' //yellow

        })
    }
    else if (this.core.hasAlert) {
        $("#autobuildhub_icon").css({
            'background-color': 'rgba(255,0,0,0.2)' //red
        })
    }
    else{
        $("#autobuildhub_icon").css({
            'background-color': 'rgba(0,0,255,1)' //blue
        })
        setTimeout(function () {
            $("#autobuildhub_icon").css({
                'background-color': 'rgba(0,0,0,0)' //none
            })
        }, 1000);

    }
    //mCSB_20_container
}