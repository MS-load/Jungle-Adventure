let rooms = {
    "room0": "You are in the jungle"
}


/** */
function getUserInput(){
    let gameText = document.getElementById("gameText")
    let userInput = document.querySelector(".form-control")
    gameText.append(rooms.room0)
    console.log(userInput.value)
}