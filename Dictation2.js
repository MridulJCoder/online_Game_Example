document.getElementById("btn2").style.display = "none";
document.getElementById("o1").style.display = "none";
document.getElementById("o2").style.display = "none";
document.getElementById("o3").style.display = "none";
document.getElementById("sound").style.display = "none";
let value = 0;
let score = 0;

let val_sound = 'https://texttospeech.io/uploads/mp3/9b001a9fe6e4db79af9641df4dcda40d.mp3'
function sound() {
    let audio = new Audio(val_sound);
    audio.play();
}

document.getElementById("btn1").onclick = function() {
    document.getElementById("instructions").innerHTML = "Hello";
    document.getElementById("ins2").innerHTML = "This is a spelling test for class 1. After you start, press the button saying: Play The sound.";
    document.getElementById("ins3").innerHTML = "After you hear the sound press the button with the correct spelling of the word.";
    document.getElementById("ins4").innerHTML = "You will recieve your score at the last.";
    document.getElementById("ins5").innerHTML = "Press the button below to continue. Good Luck 👍";   
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "block";
}

document.getElementById("btn2").onclick = function() {
    document.getElementById("instructions").innerHTML = "";
    document.getElementById("btn2").style.display = "";
    document.getElementById("ins2").innerHTML = "";
    document.getElementById("ins3").innerHTML = "";
    document.getElementById("ins4").innerHTML = "";
    document.getElementById("ins5").innerHTML = "";   
    document.getElementById("btn2").style.display = "none";
    document.getElementById("o1").style.display = "block";
    document.getElementById("o3").style.display = "block";
    document.getElementById("o2").style.display = "block";
    document.getElementById("sound").style.display = "block";
}

// game
document.getElementById("o2").onclick = function() {
    document.getElementById("o1").innerHTML = "hous";
    document.getElementById("o2").innerHTML = "hoos";
    document.getElementById("o3").innerHTML = "house";
    score++
}

document.getElementById("o1").onclick = function() {
    document.getElementById("o1").innerHTML = "hous";
    document.getElementById("o2").innerHTML = "hoos";
    document.getElementById("o3").innerHTML = "house";
}

document.getElementById("o3").onclick = function() {
    document.getElementById("o1").innerHTML = "hous";
    document.getElementById("o2").innerHTML = "hoos";
    document.getElementById("o3").innerHTML = "house";
}

document.getElementById("o2").onclick = function() {
    document.getElementById("o3").id = "o21";
    document.getElementById("02").id = "o3";
}

document.getElementById("o21").onclick = function() {
    score++
    document.getElementById("o1").innerHTML = "friend"
    document.getElementById("o2").innerHTML = "frend"
    document.getElementById("o3").innerHTML = "fried"
}

document.getElementById("o3").onclick = function() {
    document.getElementById("o1").innerHTML = "friend"
    document.getElementById("o2").innerHTML = "frend"
    document.getElementById("o3").innerHTML = "fried"
}

document.getElementById("o1").onclick = function() {
    document.getElementById("o1").innerHTML = "friend"
    document.getElementById("o2").innerHTML = "frend"
    document.getElementById("o3").innerHTML = "fried"
}