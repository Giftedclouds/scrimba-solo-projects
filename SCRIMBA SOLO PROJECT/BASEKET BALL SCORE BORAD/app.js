let hscore = 0
let ascore = 0
let players = [ "KD", "Lebron James", "Curry", "M.Jordan", "Shaq", "Kobe" ]
let playerPoints = [ 0,0,0,0,0,0 ]

let shome = document.getElementById("homescore")
let saway = document.getElementById("awayscore")
let player1 = document.getElementById("p-1")
let player2 = document.getElementById("p-2")
let player3 = document.getElementById("p-3")
let player4 = document.getElementById("p-4")
let player5 = document.getElementById("p-5")
let player6 = document.getElementById("p-6")

function reset() {
    hscore = 0
    ascore = 0
    shome.innerText = 0
    saway.innerText = 0
    playerPoints =[0,0,0,0,0,0]
    player1.innerText =  ""
    player2.innerText = ""
    player3.innerText = ""
    player4.innerText = ""
    player5.innerText = ""
    player6.innerText = ""
}


function h1() {
    hscore += 1
    playerPoints[0] += 1
    shome.innerText =  hscore
    player1.innerText = players[0]+ " " + playerPoints[0] + " " + "points"
}

function h2() {
    hscore += 2
    playerPoints[1]+= 2
    shome.innerText =  hscore
    player2.innerText = players[1]+ " " + playerPoints[1] + " " + "points"
}

function h3() {
    hscore += 3
    playerPoints[2] += 3
    shome.innerText =  hscore
    player3.innerText = players[2]+ " " + playerPoints[2] + " " + "points"
}

function a1() {
    ascore += 1
    playerPoints[3] += 1
    saway.innerText = ascore
    player4.innerText = players[3]+ " " + playerPoints[3] + " " + "points"
}

function a2() {
    ascore += 2
    playerPoints[4] += 2
    saway.innerText = ascore
    player5.innerText = players[4]+ " " + playerPoints[4] + " " + "points"
}

function a3() {
    ascore += 3
    playerPoints[5] += 3
    saway.innerText = ascore
    player6.innerText = players[5]+ " " + playerPoints[5] + " " + "points"

}

