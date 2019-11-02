//Global Variables
const input1 = document.querySelector(".name")
const input2 = document.querySelector(".action")

/**
 * calls the gePLayerName on pressing the Enter key
 */
input1.addEventListener("keypress", function (event) {
    if (event.keyCode == "13") {
        getPlayerName()
    }
})

/**
 * calls the getUserInput on pressing the Enter key
 */
input2.addEventListener("keypress", function (event) {
    if (event.keyCode == "13") {
        getPlayerInput()
    }
})

/**
 * confirms the user wants to play
 */
function userWantsToPlay() {
    const gameText = document.getElementById("gameText")
    gameText.innerHTML = scenes[10]
    const playButton = document.querySelector("main .btn")
    playButton.style.display = "none"
    const nameField = document.querySelector(".userInput")
    nameField.classList.remove("d-none")
}

/**
 * gets the players name
 */
function getPlayerName() {
    const playerName = input1.value
    const nameField = document.querySelector(".userInput")
    nameField.style.display = "none"
    setUpPlayField()
    beginGame(playerName)
}

/**
 * sets the playing field
 * scrolls text to the bottom of the div
 * adds a background to the div
*/
function setUpPlayField() {
    const welcome = document.querySelector(".welcome")
    welcome.innerHTML = "Welcome to " + welcome.innerHTML
    const hideNameField = document.querySelector("main .btn")
    hideNameField.style.display = "none"
    const unHideInputField = document.querySelector(".playerInput")
    unHideInputField.classList.remove("d-none")
    const gameTextBox = document.querySelector("main")
    gameTextBox.style.background = "rgba(0, 0, 0, 0.3)"
    gameTextBox.scrollTop = gameTextBox.scrollHeight
    gameTextBox.style.maxHeight = "50vh"
}

/**
 * game begins
 * @param {string} name adds player name to the welcome text
 * @param {number} start provides the start scene number
 * @returns {number}  goes to the first scene of the game (Scene0)
 */
function beginGame(name) {
    gameText.innerHTML = "Hello <b>" + name + "</b>, " + scenes[0]
    return sceneNumber = 0
}

/**
 * records player input in lowercase
 * determines what to display next before the next input is entered
 */
function getPlayerInput() {
    const getPlayerInput = input2.value
    playerInput = getPlayerInput.toLowerCase()

    switch (sceneNumber) {
        case 0: changeScene0()
            break;
        case 1: changeScene1()
            break;
        case 2: changeScene2()
            break;
        case 3: changeScene3()
            break;
        case 4: changeScene4()
            break;
        case 5: changeScene5()
            break;
        case 6: changeScene6()
            break;
        case 7: changeScene7()
            break;
        case 8: changeScene8()
            break;
    }
}

/**
 * determines which scene is displayed next 
 * @param {string} option defines which array is to be called
 * @param {number} arrayNumber defines which array item is to be called
 * @return {number} may return the array number for the next scene if scene requires to be changed
 */
function displayNext(option, arrayNumber) {
    const hint = document.querySelector("footer p")

    if (option === "look") {
        hint.classList.remove("d-none")
        hint.innerHTML = look[arrayNumber]
    }
    else if (option === "talk") {
        hint.classList.remove("d-none")
        hint.innerHTML = talk[arrayNumber]

    }
    else if (option === "jumble") {
        hint.classList.remove("d-none")
        hint.innerHTML = "Im all scrambled :" + jumbleWord(talk[arrayNumber])

    }
    else if (option === "scene") {
        gameText.innerHTML += scenes[arrayNumber]
        hint.classList.add("d-none")
        return sceneNumber = arrayNumber
    }
}

/**
 * changes scene0 to the next required scene based on players response
 */
function changeScene0() {
    if (playerInput === "right") {
        displayNext("scene", 1)
    }
    else if (playerInput === "straight") {
        displayNext("scene", 2)
    }
    else if (playerInput === "left") {
        displayNext("scene", 3)
    }
    else if (playerInput === "talk") {
        displayNext("talk", 0)
    }
    else if (playerInput === "look") {
        displayNext("look", 0)
    }
    else {
            displayInvalidMove()
        }
    }

/**
 * changes scene1 to the next required scene based on players response
 */
function changeScene1() {

    if (playerInput === "eat") {
        gameText.innerHTML = scenes[9]
        displayGameResult("loose")
    }
    else if (playerInput === "proceed") {
        displayNext("scene", 4)
    }
    else if (playerInput === "talk") {
        displayNext("jumble", 1)
    }
    else if (playerInput === "look") {
        displayNext("look", 1)
    }
    else {
        displayInvalidMove()
    }
}

/**
 * changes scene2  to the next required scene based on players response
 */
function changeScene2() {

    if (playerInput === "banana") {
        displayNext("scene", 5)
    }
    else if (playerInput === "talk") {
        displayNext("jumble", 2)
    }
    else if (playerInput === "look") {
        displayNext("look", 2)
    }
    else {
        displayInvalidMove()
    }
}

/**
 * changes scene3 to the next required scene based on players response
 */
function changeScene3() {

    if (playerInput === "life vest") {
        displayNext("scene", 6)
    }
    else if (playerInput === "talk") {
        displayNext("jumble", 3)
    }
    else if (playerInput === "look") {
        displayNext("look", 3)
    }
    else {
        displayInvalidMove()
    }
}

/**
 * changes scene4 to the next required scene based on players response
 */
function changeScene4() {

    if (playerInput === "climb a tree") {
        displayNext("scene", 5)
    }
    else if (playerInput === "talk") {
        displayNext("jumble", 4)
    }
    else if (playerInput === "look") {
        displayNext("look", 4)
    }
    else {
        displayInvalidMove()
    }
}

/**
 * changes scene5 to the next required scene based on players response
 */
function changeScene5() {

    if (playerInput === "play dead") {
        displayNext("scene", 7)
    }
    else if (playerInput === "run away") {
        gameText.innerHTML = scenes[9]
        displayGameResult("loose")
    }
    else if (playerInput === "talk") {
        displayNext("talk", 5)
    }
    else if (playerInput === "look") {
        displayNext("look", 5)
    }
    else {
        displayInvalidMove()
    }
}

/**
 * changes scene6 to the next required scene based on players response
 */
function changeScene6() {

    if (playerInput === "right") {
        gameText.innerHTML = scenes[9]
        displayGameResult()
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
 * changes scene7 to the next required scene based on players response
 */
function changeScene7() {

    if (playerInput === "right") {
        gameText.innerHTML += scenes[2]
        return sceneNumber = "2"
    }
    else if (playerInput === "left") {
        gameText.innerHTML = scenes[9]
        displayGameResult("loose")
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
 */
function changeScene8() {

    if (playerInput === "right") {
        displayWinner()
    }
    else if (playerInput === "left") {
        gameText.innerHTML = scenes[9]
        displayGameResult()
    }
    else if (playerInput === "talk") {
        gameText.innerHTML += jumbleWord("tiger")
    }
    else {
        displayInvalidMove()
    }
}

/**
 * alerts the user that the move is not possible NOT WORKING
 */
function displayInvalidMove() {
        alert("I'm sorry, but that's not really an option you have! Try again or type 'help'")
 
}

/**
 * displays game result
 * @param {string} gameResult if player wins or looses
 */
function displayGameResult(gameResult) {
    const HideInputField = document.querySelector(".playerInput")
    HideInputField.style.display = "none"
    if (gameResult === "win") {
        document.querySelector("body").style.backgroundImage = "url(./Media/GameOver.jpg)"
    }
    else {
        document.querySelector("body").style.backgroundImage = "url(./Media/GameOver.jpg)"
    }
    let welcome = document.querySelector(".welcome")
    welcome.innerHTML = " "
    // setTimeout(function () { location.reload() }, 5000)
}

/**
 * Randomly jumbles the word
 * @param  {string} word the string to be jumbled
 * @return {string} the new string jumbled
 */
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
    return "<br>Decode this to get past the scene : <b>" + jumbledWord + "</b>"
}

