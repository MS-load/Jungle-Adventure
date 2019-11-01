/**
 * confirms the user wants to play
 */
function userWantsToPlay() {
    let gameText = document.getElementById("gameText")
    gameText.innerHTML = scenes[10]
    let playButton = document.querySelector("main .btn")
    playButton.style.display = "none"
    let nameField = document.querySelector(".userInput")
    nameField.classList.remove("d-none")
}

/**
 * gets the players name
 */
function getPlayerName() {
    let input1 = document.querySelector(".name")
    let playerName = input1.value
    let nameField = document.querySelector(".userInput")
    nameField.style.display = "none"
    setUpPlayField(playerName)
    beginGame()
}

/**
 * sets the playing field
 * @param {string} name adds player name to the welcome text 
*/
function setUpPlayField(name) {
    const welcome = document.querySelector(".welcome")
    welcome.innerHTML = "Hello " + name + ", <br>Welcome to " + welcome.innerHTML
    const hideNameField = document.querySelector("main .btn")
    hideNameField.style.display = "none"
    const unHideInputField = document.querySelector(".playerInput")
    unHideInputField.classList.remove("d-none")
    const gameTextBox = document.querySelector("main")
    gameTextBox.style.background = "rgba(0, 0, 0, 0.3)"
}


/**
 * game begins
 */
function beginGame() {
    gameText.innerHTML = scenes[0]
    return sceneNumber = "0"
}

/**
 * records player input
 * scrolls text to the bottom of the div
 * adds a background to the div
 */
function getPlayerInput() {
    let input2 = document.querySelector(".action")
    let getPlayerInput = input2.value
    getPlayerInput = ""
    playerInput = getPlayerInput.toLowerCase()
    switch (sceneNumber) {
        case "0": changeScene0()
            break;
        case "1": changeScene1()
            break;
        case "2": changeScene2()
            break;
        case "3": changeScene3()
            break;
        case "4": changeScene4()
            break;
        case "5": changeScene5()
            break;
        case "6": changeScene6()
            break;
        case "7": changeScene7()
            break;
        case "8": changeScene8()
            break;
    }
    const gameTextBox = document.querySelector("main")
    gameTextBox.scrollTop = gameTextBox.scrollHeight
}

/**
 * calls the getUserInput on pressing the Enter key
 */
document.addEventListener("keypress", function (event) {
    console.log(event)
    if (event.keyCode == "13") {
        getPlayerInput()
    }
})

/**
 * changes scene0
 * @return {string} sceneNumber gives us the next scene for the user input
 */
function changeScene0() {

    if (playerInput === "right") {
        gameText.innerHTML += scenes[1]
        return sceneNumber = "1"
    }
    else if (playerInput === "straight") {
        gameText.innerHTML += scenes[2]
        return sceneNumber = "2"
    }
    else if (playerInput === "left") {
        gameText.innerHTML += scenes[3]
        return sceneNumber = "3"
    }
    else if (playerInput === "talk") {
        gameText.innerHTML += jumbleWord("climb a tree")
    }

    else if (playerInput === "look") {

    }
    else {

        displayInvalidMove()
    }
}
/**
 * changes scene1
 * @return {string} sceneNumber gives us the next scene for the user input
 */
function changeScene1() {

    if (playerInput === "eat") {
        gameText.innerHTML = scenes[9]
        displayGameOver()
    }
    else if (playerInput === "proceed") {
        gameText.innerHTML += scenes[4]
        return sceneNumber = "4"
    }
    else if (playerInput === "talk") {
        gameText.innerHTML += jumbleWord("poison")
    }
    else {
        displayInvalidMove()
    }
}
/**
 * changes scene2
 * @return {string} sceneNumber gives us the next scene for the user input
 */
function changeScene2() {

    if (playerInput === "to be filled") {
        gameText.innerHTML = scenes[9]
        displayGameOver()
    }
    else if (playerInput === "banana") {
        gameText.innerHTML += scenes[6]
        return sceneNumber = "6"
    }
    else if (playerInput === "talk") {
        gameText.innerHTML += jumbleWord("banana")
    }
    else {
        displayInvalidMove()
    }
}
/**
 * changes scene3
 * @return {string} sceneNumber gives us the next scene for the user input
 */

function changeScene3() {

    if (playerInput === "to be filled") {
        gameText.innerHTML = scenes[9]
        displayGameOver()
    }
    else if (playerInput === "life vest") {
        gameText.innerHTML += scenes[5]
        return sceneNumber = "5"
    }
    else if (playerInput === "talk") {
        gameText.innerHTML += jumbleWord("life vest")
    }
    else {
        displayInvalidMove()
    }
}
/**
 * changes scene4
 * @return {string} sceneNumber gives us the next scene for the user input
 */
function changeScene4() {

    if (playerInput === "to be filled") {
        gameText.innerHTML = scenes[9]
        displayGameOver()
    }
    else if (playerInput === "climb a tree") {
        gameText.innerHTML += scenes[5]
        return sceneNumber = "5"
    }
    else if (playerInput === "talk") {
        gameText.innerHTML += jumbleWord("climb a tree")
    }
    else {
        displayInvalidMove()
    }
}
/**
 * changes scene5
 * @return {string} sceneNumber gives us the next scene for the user input
 */
function changeScene5() {

    if (playerInput === "to be filled") {
        gameText.innerHTML += scenes[8]
        displayWinner()
    }
    else if (playerInput === "wait patiently") {
        gameText.innerHTML += scenes[7]
        return sceneNumber = "7"
    }
    else if (playerInput === "talk") {
        gameText.innerHTML += jumbleWord("wait patiently")
    }
    else {
        displayInvalidMove()
    }
}
/**
 * changes scene6
 * @return {string} sceneNumber gives us the next scene for the user input
 */
function changeScene6() {

    if (playerInput === "right") {
        gameText.innerHTML = scenes[9]
        displayGameOver()

    }
    else if (playerInput === "left") {
        gameText.innerHTML += scenes[8]
        displayWinner()

    }
    else if (playerInput === "talk") {
        gameText.innerHTML += jumbleWord("tiger")
    }
    else {
        displayInvalidMove()
    }
}
/**
 * changes scene7
 * @return {string} sceneNumber gives us the next scene for the user input
 */
function changeScene7() {

    if (playerInput === "right") {
        gameText.innerHTML += scenes[2]
        return sceneNumber = "2"
    }
    else if (playerInput === "left") {
        gameText.innerHTML = scenes[9]
        displayGameOver()
    }
    else if (playerInput === "talk") {
        gameText.innerHTML += jumbleWord("tiger")
    }
    else {
        displayInvalidMove()
    }
}
/**
 * changes scene8
 * @return {string} sceneNumber gives us the next scene for the user input
 */
function changeScene8() {

    if (playerInput === "right") {
        displayWinner()
    }
    else if (playerInput === "left") {
        gameText.innerHTML = scenes[9]
        displayGameOver()
    }
    else if (playerInput === "talk") {
        gameText.innerHTML += jumbleWord("tiger")
    }
    else {
        displayInvalidMove()
    }
}
/**
 * displays game over
 */
function displayGameOver() {
    let HideInputField = document.querySelector(".playerInput")
    HideInputField.style.display = "none"
    document.querySelector("body").style.backgroundImage = "url(./Media/Scene9.jpg)"
    let welcome = document.querySelector(".welcome")
    welcome.innerHTML = " "
    setTimeout(function () { location.reload() }, 5000)
}
/**
 * alerts the user that the move is not possible
 */
function displayInvalidMove() {
    alert("I'm sorry, but that's not really an option you have! Try again or type 'help'")
}
/**
 * displays the winning page
 */
function displayWinner() {
    let HideInputField = document.querySelector(".playerInput")
    HideInputField.style.display = "none"
    document.querySelector("body").style.backgroundImage = "url(./Media/Scene9.jpg)"
    let welcome = document.querySelector(".welcome")
    welcome.innerHTML = " "
    setTimeout(function () { location.reload() }, 5000)
}

function jumbleWord(word) {
    const alphabetArray = word.split("")
    const jumbledArray = []
    const length = alphabetArray.length
    for (i = 0; i < length; i++) {
        const arrayIndex = Math.floor(Math.random() * alphabetArray.length)
        jumbledArray.push(alphabetArray[arrayIndex])
        alphabetArray.splice(arrayIndex, 1)
    }

    const jumbledWord = jumbledArray.join("")
    console.log(jumbledWord)
    return "<br>Decode this to get past the scene : <b>" + jumbledWord + "</b>"
}
