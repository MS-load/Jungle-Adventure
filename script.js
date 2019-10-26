let scenes = {
    "scene0": "You are in the jungle",
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


/** */
function getUserInput(){
    let gameText = document.getElementById("gameText")
    let userInput = document.querySelector(".form-control")
    console.log(userInput.value)

    if(userInput.value == "yes"){
        gameText.append("Great then let's get started"+ scenes["scene"+0])

    }
    else if (userInput.value == "no"){
        gameText.append("Sorry to see you go!")
    }
    else{
        gameText.append("That is not a valid option")
    }
}