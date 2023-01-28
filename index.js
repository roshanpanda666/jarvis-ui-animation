
$("button").click(function(){
    
    var audio = new Audio('repulsur.mp3');
    audio.play();
    $(".innerround").css("animation-play-state", "running")
    $(".innerround2").css("animation-play-state", "running")
    $(".layer").css("animation-play-state", "running")
    $(".layer4").css("animation-play-state", "running")
    $(".layer2").css("animation-play-state", "running")
    $(".layer3").css("animation-play-state", "running")
    $(".fatherlayer").css("animation-play-state", "running")

})