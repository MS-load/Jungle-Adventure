/**This is a description of the userWantsToPlay function.
 * Creates homepage if the user wants to play!
 */

function userWantsToPlay() {

    alert("Great then let's get started")
    const name = prompt("What's your name?")
    let welcome = document.getElementById("welcome")
    welcome.innerText = "Hello " + name + ", " + welcome.innerText //Adding the user name to the welcome message

    let hide = document.querySelector("main .btn")
    hide.style.display = "none"

    let unHide = document.querySelector("footer")
    unHide.classList.remove("d-none")

    let gameText = document.getElementById("gameText")
    gameText.innerText = "Some text here. \n" + scenes["scene" + 0]//Start scene first crossroad the player arrives at 
}


//Object scenes decribes the various scenarios that the user faces
let scenes = {
    "scene0": "Jungles form a magical place, and you find your self admist one .....what do you choose to do ?",
    "scene1": "You are in the stage1",
    "scene2": "You are in the stage2",
    "scene3": "You are in the stage3",
    "scene4": "You are in the stage4",
    "scene5": "You are in the stage5",
    "scene6": "You are in the stage6",
    "scene7": "You are in the stage7",
    "scene8": "You are in the stage8",
    "scene9": "You are in the stage9",
}


/**This is a description of the getUserInput function.
 * @param {string} userInput gives the users response after converting it to lowercase
 * @returns {string} based on condiiton
 */

function getUserInput(userInput) {
    let gameText = document.getElementById("gameText")
    let getUserInput = document.querySelector(".form-control").value
    userInput = getUserInput.toLowerCase()

    if (userInput == "yes") {
        gameText.append("Great then let's get started" + scenes["scene" + 0])

    }
    else if (userInput == "no") {
        gameText.append("Sorry to see you go!")
    }
    else {
        gameText.append("That is not a valid option")
    }
}

function chnagescenes(direction) {

}