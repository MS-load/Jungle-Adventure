
/**This function confirms the user wants to play*/
function userWantsToPlay() {
    alert("Great then let's get started")
    let playerName = prompt("What's your name?")
    playingField(playerName)
}

/**This function sets the playing field
 * @param {string} name adds player name to the welcome text 
*/
function playingField(name) {
    let welcome = document.getElementById("welcome")
    welcome.innerText = "Hello " + name + ", \n" + welcome.innerText

    let hide = document.querySelector("main .btn")
    hide.style.display = "none"
    let unHide = document.querySelector("footer")
    unHide.classList.remove("d-none")

    //------------------PLAYER BEGINS THE GAME-----------
    let gameText = document.getElementById("gameText")
    gameText.innerText = "Jungles form a magical place, and you find your self admist one\n" + scene0.discription

}


//----------------GAME SET UP-------------------

function controls(walk,choice,look,help,pick){
 this.walk = walk;
 this.choice = choice;
 this.look = look;
 this.help = help;
 this.pick = pick;
}

function scene(description,control,pick){
    this.description = description;
    this.control = control;
    this.pick = pick;
}

let scene0 = new scene ("You arrive at a cross road where .... which way would you go left right or straight?","walk")
let scene1 = new scene ("elephant herd .....what do you choose to do attack or avoid ?","choice")
let scene2 = new scene ("Hungry you find a tree bearing beautiful furits .....what do you choose to do eat or skip?","choice")
let scene3 = new scene ("See a small stream .....what do you choose to do jump or walk along ?","walk")
let scene4 = new scene ("You arrive at a cross road where .... which way would you go left right or straight?","walk")
let scene5 = new scene ("You arrive at a cross road where .... which way would you go left right or straight?","walk")
let scene6 = new scene ("You arrive at a cross road where .... which way would you go left right or straight?","walk")
let scene7 = new scene ("You arrive at a cross road where .... which way would you go left right or straight?","walk")
let scene8 = new scene ("You arrive at a cross road where .... which way would you go left right or straight?","walk")
let scene9 = new scene ("DEAD GAME OVER")
let scene10 = new scene ("YOU WON")

//Object items decribes the various things that the user can carry
let items = {
    "item1": "Binocuars",
    "item2": "Rope",
    "item3": "Water Bottle",
    "item4": "Boat",
    "item5": "logs"
}

//Object actions decribes the various actions that the user can perform
let actions = {
    "look up": "The sun is shining and its a really hot day ...",
    "pick item": "You've picked it but remember not to carry too mnay things its a long walk",
    "jump": "Thats was a huge leap",
    "climb": "That was tiring climbing all the way up here ",
    "run": "Phew! close call! Good thing that you were quick",
}

// function scene(sceneNumber, description, direction) {
//     this.sceneNumber = sceneNumber;
//     this.description = description;
//     this.direction = direction;

//     updateScene(){

//     }
// }

// let changeScenes = [
//     new scene (01,"Jungles form a magical place, and you find your self admist one .....what do you choose to do ?" )
// ]

/**This function records the players input
 * @param  {string} userInput gives the users response after converting it to lowercase
 */
function getPlayerInput(playerInput) {
    let gameText = document.getElementById("gameText")
    let getPlayerInput = document.querySelector(".form-control").value
    playerInput = getPlayerInput.toLowerCase()
    playerChoice(playerInput)
}
/**This is fuction allows us to call the getUserInput funtion on pressing the Enter key
 */
document.onkeydown = function () {
    if (window.event.keyCode == '13') {
        getPlayerInput();
    }
}

function playerChoice(value){
    let command = value.split(" ")[0]
     switch (command) {
        case "go":
            let action = value.split(" ")[1]
            changeScene(action)
            break;
        // case "right": changeScene("right")
        //     break;
        // case "straight": changeScene("straight")
        //     break;
        // case "back": changeScene("back")
        //     break;
        default:
            alert("I'm sorry, but that's not really an option you have!")
    }

}

let start = "scene0"

function changeScene(action) {
    start = scenes[start].choices[action]
    gameText.append("\n" + scenes[start].discription)
}