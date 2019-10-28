
/**This function confirms the user wants to play*/
function userWantsToPlay() {

    alert("Great then let's get started")

    /** @const {string} name gets the players name */
    const name = prompt("What's your name?")

    //Adding the player name to the welcome message
    let welcome = document.getElementById("welcome")
    welcome.innerText = "Hello " + name + ", \n" + welcome.innerText

    //Setting up the playing field
    let hide = document.querySelector("main .btn")
    hide.style.display = "none"
    let unHide = document.querySelector("footer")
    unHide.classList.remove("d-none")

    //------------------PLAYER BEGINS THE GAME-----------
    let gameText = document.getElementById("gameText")
    gameText.innerText = "Jungles form a magical place, and you find your self admist one\n" + scenes["scene" + 0].discription

}





//Object scenes decribes the various scenarios that the user faces
let scenes = {
    "scene0": {
        "discription": ("You arrive at a cross road where .... which way would you go left right or straight? "),
        "choices": {
            "left": "scene3",
            "right": "scene1",
            "straight": "scene2",
        }
    },
    "scene1": {
        "discription": "elephant herd ....." + +"what do you choose to do attack or avoid ?",
        "choices": {
            "attack": "scene9",
            "avoid": "scene5"
        }
    },
    "scene2": {
        "discription": "Hungry you find a tree bearing beautiful furits .....what do you choose to do eat or skip?",
        "choices": {
            "eat": "scene9",
            "skip": "scene4"
        }
    },
    "scene3": {
        "discription": "See a small stream .....what do you choose to do jump or walk along ?",
        "choices": {
            "jump": "scene9",
            "walk": "scene6"
        }
    },
    "scene4": {
        "discription": "Jungles form a magical place, and you find your self admist one .....what do you choose to do ?",
        "choices": {
            "north": "scene1",
            "south": "scene2"
        }
    },
    "scene5": {
        "discription": "Jungles form a magical place, and you find your self admist one .....what do you choose to do ?",
        "choices": {
            "north": "scene1",
            "south": "scene2"
        }
    },
    "scene6": {
        "discription": "Jungles form a magical place, and you find your self admist one .....what do you choose to do ?",
        "choices": {
            "north": "scene1",
            "south": "scene2"
        }
    },
    "scene7": {
        "discription": "Jungles form a magical place, and you find your self admist one .....what do you choose to do ?",
        "choices": {
            "north": "scene1",
            "south": "scene2"
        }
    },
    "scene8": {
        "discription": "Jungles form a magical place, and you find your self admist one .....what do you choose to do ?",
        "choices": {
            "north": "scene1",
            "south": "scene2"
        }
    },
    "scene9": {
        "discription": "Jungles form a magical place, and you find your self admist one .....what do you choose to do ?",
        "choices": {
            "north": "scene1",
            "south": "scene2"
        }
    },
}

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
    // playerChoice()

    switch (playerInput) {
        case "left":
            changeScene("left")
            break;
        case "right": changeScene("right")
            break;
        case "straight": changeScene("straight")
            break;
        case "back": changeScene("back")
            break;
        default:
            alert("Im sorry, I do not undetsand what you are trying to do. That's not really an option you have!")
    }


}
/**This is fuction allows us to call the getUserInput funtion on pressing the Enter key
 */
document.onkeydown = function () {
    if (window.event.keyCode == '13') {
        getPlayerInput();
    }
}

let start = "scene0"

function changeScene(action) {
    start = scenes[start].choices[action]
    gameText.append("\n" + scenes[start].discription)
}