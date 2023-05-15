/* // CONDITIONS
let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false

if (sum < 21) {   // or.., (sum <=20)
    console.log ("Do you want to draw a new card ?")
}
else if (sum === 21) { // if equal to , for numbers 
    console.log("Wohoo! You've got a Blackjack! ")
    hasBlackJack = true
}
else {
    console.log("You're out of the game.")
}
 */


/*
// Eligibilty Criteria of age = 21.
let age = 22
if (age <= 20 )  // less than and equal to
{
    console.log("Not Eligible")
}
else {
    console.log("Eligible")
}
 */


//  || BLACKJACK GAME ||

let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

/* or,...another method.,
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el") // " .sum-el " - for class and # for id. 
and so on..... */

function startGame() {

    cardsEl.textContent = "Cards : " + firstCard + " " + secondCard
    sumEl.textContent = "Sum : " + sum
    if (sum < 21) {   // or.., (sum <=20)
        message = "Do you want to draw a new card ?"
    }
    else if (sum === 21) { // if equal to , for numbers 
        message = "Wohoo! You've got a Blackjack! "
        hasBlackJack = true
    }
    else {
        message = "You're out of the game."
    }
    messageEl.textContent = message

    console.log(message)
}

function newCard() {

    console.log("Drawing a new card from the deck!")
    let card = 6
    sum += card

    startGame()
}




