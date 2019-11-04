
//Global Variables
const input1 = document.querySelector(".name")
const input2 = document.querySelector(".action")
const gameTextBox = document.querySelector("main")
//To provide only 3 trials for wrong answer in certain scenes
let scene2Wrong = 0, scene3Wrong = 0, scene4Wrong = 0

/**
 * toggles the audio between play and pause
 */
function toggleMusic() {
    const music = document.querySelector("audio")
    const isPaused = music.paused
    const musicNote = document.querySelector(".material-icons")
    if (isPaused) {
        music.play()
        musicNote.style.color = "yellowgreen"
    }
    else {
        music.pause()
        musicNote.style.color = "white"
    }
}

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
    gameText.innerHTML = scenes[8]
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
    const hideNameField = document.querySelector("main .btn")
    hideNameField.style.display = "none"
    const unHideInputField = document.querySelector("footer")
    unHideInputField.classList.remove("d-none")
    gameTextBox.style.background = "rgba(0, 0, 0, 0.3)"
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
    let getPlayerInput = input2.value
    playerInput = getPlayerInput.toLowerCase()

    if (playerInput !== "quit") {
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
        }
    }
    else {
        displayGameResult("loose", 8)
    }
    gameTextBox.scrollTop = gameTextBox.scrollHeight
    input2.value = ""
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
        hint.classList.remove("d-none", "bg-danger")
        hint.classList.add("bg-success")
        hint.innerHTML = look[arrayNumber]
    }
    else if (option === "talk") {
        hint.classList.remove("d-none", "bg-danger")
        hint.classList.add("bg-success")
        hint.innerHTML = talk[arrayNumber]
    }
    else if (option === "jumble") {
        hint.classList.remove("d-none", "bg-danger")
        hint.classList.add("bg-success")
        hint.innerHTML = "From up here it's scrambled : <br>" + jumbleWord(talk[arrayNumber])
    }
    else if (option === "wrongAnswer") {
        hint.classList.remove("d-none", "bg-success")
        hint.classList.add("bg-danger")
        hint.innerHTML = "Sorry,wrong answer! Caution: limited number of tries!"
    }
    else if (option === "unknown") {
        hint.classList.remove("d-none", "bg-success")
        hint.classList.add("bg-danger")
        hint.innerHTML = "Sorry, that's not an option! Try again: type 'talk' or 'look'"
    }
    else if (option === "scene") {
        gameText.innerHTML += "<p class='pt-1 border-top'>" + scenes[arrayNumber] + "</p>"
        hint.classList.add("d-none")
        return sceneNumber = arrayNumber
    }
}

// All the scene are conditions defined below

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
        displayNext("unknown")
    }
}

/**
 * changes scene1 to the next required scene based on players response
 */
function changeScene1() {
    if (playerInput === "eat") {
        displayGameResult("loose", 1)
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
        displayNext("unknown")
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
        scene2Wrong += 1
        if (scene2Wrong >= 3) {
            displayGameResult("loose", 2)
        }
        else {
            displayNext("wrongAnswer")
        }
    }
}

/**
 * changes scene3 to the next required scene based on players response
 */
function changeScene3() {
    if (playerInput === "lifevest") {
        displayNext("scene", 6)
    }
    else if (playerInput === "talk") {
        displayNext("jumble", 3)
    }
    else if (playerInput === "look") {
        displayNext("look", 3)
    }
    else {
        scene3Wrong += 1
        if (scene3Wrong >= 3) {
            displayGameResult("loose", 3)
        }
        else {
            displayNext("wrongAnswer")
        }
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
        displayNext("talk", 4)
    }
    else if (playerInput === "look") {
        displayNext("look", 4)
    }
    else {
        scene4Wrong += 1
        if (scene4Wrong >= 3) {
            displayGameResult("loose", 4)
        }
        else {
            displayNext("wrongAnswer")
        }
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
        displayGameResult("loose", 5)
    }
    else if (playerInput === "talk") {
        displayNext("talk", 5)
    }
    else if (playerInput === "look") {
        displayNext("look", 5)
    }
    else {
        displayNext("unknown")
    }
}

/**
 * changes scene6 to the next required scene based on players response
 */
function changeScene6() {

    if (playerInput === "seek shelter") {
        displayNext("scene", 7)
    }
    else if (playerInput === "set up camp") {
        displayNext("scene", 2)
    }
    else if (playerInput === "continue") {
        displayGameResult("loose", 6)
    }
    else if (playerInput === "talk") {
        displayNext("talk", 6)
    }
    else if (playerInput === "look") {
        displayNext("look", 6)
    }
    else {
        displayNext("unknown")
    }
}

/**
 * changes scene7 to the next required scene based on players response
 */
function changeScene7() {

    if (playerInput === "yes") {
        displayGameResult("win", 0)
    }
    else if (playerInput === "no") {
        displayGameResult("loose", 7)
    }
    else if (playerInput === "talk") {
        displayNext("talk", 7)
    }
    else if (playerInput === "look") {
        displayNext("look", 7)
    }
    else {
        displayNext("unknown")
    }
}

//Other Game related functions

/**
 * displays game result
 * @param {string} gameResult if player wins or looses
 * @param {number} arrayNumber for the game over text
 */
function displayGameResult(gameResult, arrayNumber) {
    const HideInputField = document.querySelector("footer")
    HideInputField.style.display = "none"
    gameTextBox.style.display = "none"

    let welcome = document.querySelector(".welcome")
    if (gameResult === "win") {
        document.querySelector("body").style.backgroundImage = "url(./Media/Win.jpg)"
        welcome.innerHTML = "YOU WON ! <br>" + GameOverMessage[arrayNumber]
    }
    else {
        document.querySelector("body").style.backgroundImage = "url(./Media/GameOver.jpg)"
        welcome.innerHTML = "GAME OVER <br>" + GameOverMessage[arrayNumber]
    }
    setTimeout(function () { location.reload() }, 7000)
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
    return jumbledWord
}


