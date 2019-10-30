
/**
 * confirms the user wants to play*/
function userWantsToPlay() {
    alert("Great then let's get started")
    let playerName = prompt("What's your name?")
    setUpPlayField(playerName)
    beginGame()
}

/**
 * sets the playing field
 * @param {string} name adds player name to the welcome text 
*/
function setUpPlayField(name) {
    let welcome = document.getElementById("welcome")
    welcome.innerHTML = "Hello " + name + ", <br>" + welcome.innerHTML

    let hide = document.querySelector("main .btn")
    hide.style.display = "none"
    let unHide = document.querySelector("footer")
    unHide.classList.remove("d-none")
}

/**
 * records player input
 */



function getPlayerInput() {
    let getPlayerInput = document.querySelector(".form-control").value
    playerInput = getPlayerInput.toLowerCase()

    switch (i) {
        case "0":
            getUserInputScene0()
            break;
        case "1":
            getUserInputScene1()
            break;
        case "2":
            getUserInputScene2()
            break;
        case "3":
            getUserInputScene3()
            break;
        case "4":
            getUserInputScene4()
            break;
    }

}

/**This is fuction allows us to call the getUserInput funtion on pressing the Enter key
 */
document.onkeydown = function () {
    if (window.event.keyCode == '13') {
        getPlayerInput();
    }
}

/**
 * game begins
 */
function beginGame() {
    let gameText = document.getElementById("gameText")
    gameText.innerHTML = "Jungles form a magical place, and you find your self admist one." + scenes[0]
    return i = "0"
}

function getUserInputScene0() {

    if (playerInput === "right") {
        gameText.innerHTML = gameText.innerHTML + scenes[1]
        return i = "1"
    }
    else if (playerInput === "straight") {
        gameText.innerHTML = gameText.innerHTML + scenes[2]
        return i = "2"
    }
    else if (playerInput === "left") {
        gameText.innerHTML = gameText.innerHTML + scenes[3]
        return i = "3"
    }
    else if (playerInput === "help") {
        alert("Try using one of the following commands to get passed this stage:" + help[0])
    }
    else {
        displayInvalidMove()
    }
}

function getUserInputScene1() {

    if (playerInput === "attack") {
        gameText.innerHTML = gameText.innerHTML + scenes[9]
        return i = "9"
    }
    else if (playerInput === "avoid") {
        gameText.innerHTML = gameText.innerHTML + scenes[4]
        return i = "4"
    }
    else if (playerInput === "help") {
        alert("Try using one of the following commands to get passed this stage:" + help[1])
    }
    else {
        displayInvalidMove()
    }

}
function getUserInputScene2() {

    if (playerInput === "eat") {
        gameText.innerHTML = gameText.innerHTML + scenes[9]
        return i = "9"
    }
    else if (playerInput === "abstain") {
        gameText.innerHTML = gameText.innerHTML + scenes[6]
        return i = "6"
    }
    else if (playerInput === "help") {
        alert("Try using one of the following commands to get passed this stage:" + help[2])
    }
    else {
        displayInvalidMove()
    }
}

function getUserInputScene3() {

    if (playerInput === "walk") {
        gameText.innerHTML = gameText.innerHTML + scenes[9]
        return i = "9"
    }
    else if (playerInput === "jump") {
        gameText.innerHTML = gameText.innerHTML + scenes[5]
        return i = "5"
    }
    else if (playerInput === "help") {
        alert("Try using one of the following commands to get passed this stage:" + help[1])
    }
    else {
        displayInvalidMove()
    }
}


function getUserInputScene4() {

    if (playerInput === "right") {
        gameText.innerHTML = gameText.innerHTML + scenes[9]
        return i = "9"
    }
    else if (playerInput === "straight") {
        gameText.innerHTML = gameText.innerHTML + scenes[5]
        return i = "5"
    }
    else if (playerInput === "help") {
        alert("Try using one of the following commands to get passed this stage:" + help[0])
    }
    else {
        displayInvalidMove()
    }
}


function getUserInputScene5() {

    if (playerInput === "right") {
        gameText.innerHTML = gameText.innerHTML + scenes[8]
        return i = "8"
    }
    else if (playerInput === "left") {
        gameText.innerHTML = gameText.innerHTML + scenes[7]
        return i = "7"
    }
    else if (playerInput === "help") {
        alert("Try using one of the following commands to get passed this stage:" + help[0])
    }
    else {
        displayInvalidMove()
    }
}

function getUserInputScene6() {

    if (playerInput === "right") {
        gameText.innerHTML = gameText.innerHTML + scenes[9]
        return i = "9"

    }
    else if (playerInput === "left") {
        gameText.innerHTML = gameText.innerHTML + scenes[8]
        return i = "8"

    }
    else if (playerInput === "help") {
        alert("Try using one of the following commands to get passed this stage:" + help[0])
    }
    else {
        displayInvalidMove()
    }

}
function getUserInputScene7() {

    if (playerInput === "right") {
        gameText.innerHTML = gameText.innerHTML + scenes[2]
        return i = "2"

    }
    else if (playerInput === "left") {
        gameText.innerHTML = gameText.innerHTML + scenes[9]
        return i = "9"
    }
    else if (playerInput === "help") {
        alert("Try using one of the following commands to get passed this stage:" + help[0])
    }
    else {
        displayInvalidMove()
    }

}
function getUserInputScene8() {

    if (playerInput === "right") {
        displayWinner()

    }
    else if (playerInput === "left") {
        gameText.innerHTML = gameText.innerHTML + scenes[9]
        return i = "9"

    }
    else if (playerInput === "help") {
        alert("Try using one of the following commands to get passed this stage:" + help[0])
    }
    else {
        displayInvalidMove()
    }

}


function displayInvalidMove() {
    alert("I'm sorry, but that's not really an option you have! Try again or type 'help'")
}

function displayWinner() {
    var winnerImage = document.createElement("IMG");
    winnerImage.setAttribute("src", "./media/win.jpg");
    winnerImage.setAttribute("width", "304");
    winnerImage.setAttribute("height", "228");
    document.body.appendChild(winnerImage);
}

let scenes = [
    "<br> You arrive at a cross road where .... which way would you go <b>left</b>,<b> right</b> or <b>straight</b>?",
    "<br> elephant herd .....what do you choose to do <b>attack</b> or avoid ?",
    "<br> Hungry you find a tree bearing beautiful furits .....what do you choose to do eat or abstain?",
    "<br> See a small stream .....what do you choose to do jump or walk along ?",
    "<br> You arrive at a cross road where .... which way would you go right or straight?",
    "<br> You arrive at a cross road where .... which way would you go left right or straight?",
    "<br> You arrive at a cross road where .... which way would you go left right or straight?",
    "<br> You arrive at a cross road where .... which way would you go left right or straight?",
    "<br> DEAD GAME OVER"
]

let help = [
    "<b>left right straight</b>",
    "<b>attack avoid</b>",
    "<b>eat abstain</b>",
    "<b>jump walk</b>",
    "<b>left right straight</b>",
    "<b>left right straight</b>",
    "<b>left right straight</b>",
    "<b>left right straight</b>",
]


