"use strict"
let askOne = prompt("Am I from Washington?").toLowerCase()
// console.log(`The user wrote ${askOne}`)
if (askOne === "no" || askOne === "n") {
    // console.log("Right. I'm from Cali.")
    alert("Right.I'm from Cali")
}
else if (askOne === "yes" || askOne === "y") {
    // console.log("No, I'm from Cali.")
    alert("No, I'm from Cali.")
}

else if (askOne !== "yes" || askOne !== "no") {
    alert("Please answer yes or no.")
}

else if (askOne !== "y" || askOne !== "n") {
    alert("Please answer yes or no.")
}

else {
    alert("What?")
}

let askTwo = prompt("Are boxer dogs my favorite type of dog?").toLowerCase()
// console.log(`The user wrote ${askTwo}`)
if (askTwo === "yes" || askTwo === "y") {
    // console.log("Boxers are the best!")
    alert("Boxers are the best!")
}
else if (askTwo === "no" || askTwo === "n") {
    // console.log("Not right. Boxers are the best.")
    alert("Not right. Boxers are the best.")
}
else if (askTwo !== "yes" || askTwo !== "no") {
    alert("Please answer yes or no.")
}

else if (askTwo !== "y" || askTwo !== "n") {
    alert("Please answer yes or no.")
}

else {
    alert("What?")
}

let askThree = prompt("Do I like tattoos").toLowerCase()
// console.log(`The user wrote ${askThree}`)
if (askThree === "yes" || askThree === "y") {
    // console.log("Yes I like tattoos.")
    alert("Yes I like tattoos.")
}
else if (askThree === "no" || askThree === "n") {
    // console.log("Not true. I love tattoos.")
    alert("Not true. I love tattoos.")
}
else if (askThree !== "yes" || askThree !== "no") {
    alert("Please answer yes or no.")
}

else if (askThree !== "y" || askThree !== "n") {
    alert("Please answer yes or no.")
}

else {
    alert("What?")
}

let askFour = prompt("Am I 29?").toLowerCase()
// console.log(`The user wrote ${askFour}`)
if (askFour === "no" || askFour === "n") {
    // console.log("True. I'm 30")
    alert("True. I'm 30 :(")
}
else if (askFour === "yes" || askFour === "y") {
    // console.log("I wish. I'm 30 :(")
    alert("I wish. I'm 30 :(")
}
else if (askFour !== "yes" || askFour !== "no") {
    alert("Please answer yes or no.")
}

else if (askFour !== "y" || askFour !== "n") {
    alert("Please answer yes or no.")
}

else {
    alert("What?")
}

let askFive = prompt("Am I a Coboys fan?").toLowerCase()
// console.log(`The user wrote ${askFive}`)
if (askFive === "yes" || askFive === "y") {
    // console.log("Yeah. Next year is gonna be our year.")
    alert("Yeah. Next year is gonna be our year.")
}
else if (askFive === "no" || askFive === "n") {
    // console.log("Yes I'm a Cowboys fan :(")
    alert("Yes I'm a Cowboys fan :(")
}
else if (askFive !== "yes" || askFive !== "no") {
    alert("Please answer yes or no.")
}

else if (askFive !== "y" || askFive !== "n") {
    alert("Please answer yes or no.")
}

else {
    alert("What?")
}

let getUserFullName = prompt("What's your first and last name.")
alert(`Welcome to my site ${getUserFullName}`)

let askSix = parseInt(prompt("Guess a number between 1 and 100,000"))
let myAnswer = 167


if (askSix === myAnswer) {
    alert("Yay")
}
else if (askSix > 167) {
    alert("Too High")
    let guessTwo = parseInt(prompt("Guess a number between 1 and 100,000"))
    if (guessTwo > 167) {
        alert("Too High")
        let guessThree = parseInt(prompt("Guess a number between 1 and 100,000"))
        if (guessThree > 167) {
            alert("Too High")
            let guessFour = parseInt(prompt("Guess a number between 1 and 100,000"))
            if (guessFour > 167) {
                alert("Too High")
            }
        }
    }

}

else if (askSix < 167) {
    alert("Too Low")
    let secondGuess = parseInt(prompt("Guess a number between 1 and 100,000"))
    if (secondGuess < 167) {
        alert("Too Low")
        let thirdGuess = parseInt(prompt("Guess a number between 1 and 100,000"))
        if (thirdGuess < 167) {
            alert("Too Low")
            let fourthGuess = parseInt(prompt("Guess a number between 1 and 100,000"))
            if (fourthGuess < 167) {
                alert("Too Low")
            }
        }
    }
}

























document.write(`Welcome to my site ${getUserFullName}`)