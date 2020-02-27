"use strict";

function gaaFremad() {
    if (billedIndeks < billedliste.length - 1) {
        billedIndeks++;
    } else {
        billedIndeks = 0;
    }

    document.getElementById("slidebillede").src = billedliste[billedIndeks];
}

function gaaTilbage() {
    if (billedIndeks > 0) {
        billedIndeks--;
    } else {
        //billedIndeks = 2; Er erstattet af linjen herunder.
        billedIndeks = billedliste.length - 1;
    }

    document.getElementById("slidebillede").src = billedliste[billedIndeks];
}


function aktiverTekstAnimation() {
    for (let i = 0; i <= tekstIdListe.length - 1; i++) {
        if (erSynlig(tekstIdListe[i])) {
            document.getElementById(tekstIdListe[i]).classList.add("bounce-in-top");
        } else {
            document.getElementById(tekstIdListe[i]).classList.remove("bounce-in-top");
        }
    }
}

function erSynlig(elementId) {
    const elementBoks = document.getElementById(elementId).getBoundingClientRect();
    const halvtredsPct = elementBoks.height * 0.5;
    const start = window.innerHeight - halvtredsPct;

    if (elementBoks.top <= start && elementBoks.bottom - halvtredsPct > 0) {
        return true;
    } else {
        return false;
    }
}

function play1() {
    aud.play()
}

function mute1() {
    aud.pause()
}


// ------- Hovedprogram ---------

const billedliste = ["images/kiosk.jpg", "images/mustafa.jpg", "images/kilicvarer.jpg", "images/hylde1.jpg", "images/overblik.jpg", "images/hylde2.jpg"];
let billedIndeks = 0;
const tekstIdListe = ["noegle", "oeko", "vegan"];
const video = document.getElementById("video");
const aud = new Audio("Crowd_Talking.mp3");



document.getElementById("spil").addEventListener("click", function (){
    play1();
})

document.getElementById("mute").addEventListener("click", function (){
    mute1();
})

document.getElementById("frem").addEventListener("click", function () {
    gaaFremad();
})

document.getElementById("tilbage").addEventListener("click", function () {
    gaaTilbage();
});

window.addEventListener("scroll", function () {
    aktiverTekstAnimation();
});


