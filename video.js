"Use strict",

function play1() {
    aud.play()
}

function mute1() {
    aud.pause()
}

const aud = new Audio("Crowd_Talking.mp3");



document.getElementById("spil").addEventListener("click", function (){
    play1();
})

document.getElementById("mute").addEventListener("click", function (){
    mute1();
})


