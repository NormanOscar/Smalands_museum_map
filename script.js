var imgMap;
var roomCards;
var activeRoom;
function init() {
    roomCards = document.querySelectorAll(".roomCards");
    let buttonParent = document.querySelector("#roomPins");
    let numberedLinks = buttonParent.querySelectorAll(":scope > button");
    for (let i = 0; i < numberedLinks.length; i++) {
        numberedLinks[i].addEventListener("click", openRoom);
    }
    let descLinks = document.querySelectorAll(".descLink");
    for (let j = 0; j < descLinks.length; j++) {
        descLinks[j].addEventListener("click",openRoom);
    }
    let closeBtns = document.querySelectorAll(".closeBtns");
    for (let k = 0; k < closeBtns.length; k++) {
        closeBtns[k].addEventListener("click", closeRoom);
    }

}
window.addEventListener("load", init);
function changeToGreen() {
    if (document.querySelector("#direction").style.display == "block") {
        document.querySelector("#direction").style.display = "none";
    }

    let roomCards = document.querySelectorAll(".roomCards");
    for (let i = 0; i < roomCards.length; i++) {
        roomCards[i].style.display = 'none'
    }
    document.querySelector("title").innerHTML = "Map: Floor 0";
    document.querySelector("#map").setAttribute('src', "img/green-map.jpg");
    document.querySelector("#flr0").className = "active";
    document.querySelector("#flr1").className = "inactive";
    document.querySelector("#flr0").disabled = true;
    document.querySelector("#flr1").disabled = false;
    let parentElem = document.querySelector("#roomPins");
    let childrenElem = parentElem.querySelectorAll(":scope > button");
    for (let i = 0; i < childrenElem.length; i++) {
        if (childrenElem[i].className == "greenLinks") {
            childrenElem[i].style.display = "block";
        }
        else {
            childrenElem[i].style.display = "none";
        }
    }
}
function changeToBlue() {
    let roomCards = document.querySelectorAll(".roomCards");
    for (let i = 0; i < roomCards.length; i++) {
        roomCards[i].style.display = 'none'
    }
    document.querySelector("title").innerHTML = "Map: Floor 1";
    document.querySelector("#map").setAttribute('src', "img/blue-map.jpg");
    document.querySelector("#flr1").className = "active";
    document.querySelector("#flr0").className = "inactive";
    document.querySelector("#flr1").disabled = true;
    document.querySelector("#flr0").disabled = false;
    let parentElem = document.querySelector("#roomPins");
    let childrenElem = parentElem.querySelectorAll(":scope > button");
    for (let i = 0; i < childrenElem.length; i++) {
        if (childrenElem[i].className == "blueLinks") {
            childrenElem[i].style.display = "block";
        }
        else {
            childrenElem[i].style.display = "none";
        }
    }
}
function openRoom() {
    closeRoom();
    if (this.value == activeRoom) {
        activeRoom = null;
        return;
    }
    activeRoom = this.value;
    if (activeRoom <= 7) {
        changeToGreen();
    }
    else {
        changeToBlue();
        document.querySelector("#direction").style.display = "block";
    }
    let thisCardElem = document.querySelector("#card"+activeRoom);
    //Show card
    thisCardElem.style.display = 'block';
    //Show correct img
    document.querySelector("#map").setAttribute('src', "img/"+activeRoom+"_map.jpg");
    
}
function closeRoom() {
    if (activeRoom == null) {
        return;
    }
    if (activeRoom <= 7) {
        document.querySelector("#map").setAttribute('src', "img/green-map.jpg");
    }
    else {
        document.querySelector("#map").setAttribute('src', "img/blue-map.jpg");
        document.querySelector("#direction").style.display = "none";
    }
    let thisCardElem = document.querySelector("#card"+activeRoom);
    //Remove card
    thisCardElem.style.display = 'none';
}
function showPopup() {
    let popup = document.getElementById("popup");
    let overlay = document.getElementById("overlay");
    if (popup.style.display == 'block') {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }
    else {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    }
}
function closePopup() {
    let popup = document.getElementById("popup");
    let overlay = document.getElementById("overlay");
    if (popup.style.display == 'none') {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    }
    else {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }
}