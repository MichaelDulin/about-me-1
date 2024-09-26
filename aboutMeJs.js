"use strict"







let score = 0

function q1() {
    let askOne = prompt("Am I from Washington?").toLowerCase()
    if (askOne === "no" || askOne === "n") {
        score++
        alert("Right.I'm from Cali")

    }
    else if (askOne === "yes" || askOne === "y") {

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
}

q1();


function q2() {
    let askTwo = prompt("Are boxer dogs my favorite type of dog?").toLowerCase()

    if (askTwo === "yes" || askTwo === "y") {

        alert("Boxers are the best!")
        score++
    }
    else if (askTwo === "no" || askTwo === "n") {

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
}

q2();

function q3() {
    let askThree = prompt("Do I like tattoos").toLowerCase()

    if (askThree === "yes" || askThree === "y") {

        alert("Yes I like tattoos.")
        score++
    }
    else if (askThree === "no" || askThree === "n") {

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

}

q3();

function q4() {
    let askFour = prompt("Am I 29?").toLowerCase()

    if (askFour === "no" || askFour === "n") {

        alert("True. I'm 30 :(")
        score++
    }
    else if (askFour === "yes" || askFour === "y") {

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
}

q4();

function q5() {
    let askFive = prompt("Am I a Cowboys fan?").toLowerCase()

    if (askFive === "yes" || askFive === "y") {

        alert("Yeah. Next year is gonna be our year.")
        score++
    }
    else if (askFive === "no" || askFive === "n") {

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
}

q5();

function q6() {

    let getUserFullName = prompt("What's your first and last name.")
    alert(`Welcome to my site ${getUserFullName}`)

    let myAnswer = 167
    let maxAttempts = 3
    let askSix = parseInt(prompt("Guess a number between 1 and 100,000"))

    if (askSix === myAnswer) {
        alert("You Are Correct!")
        score++
    }
    else if (askSix > 167) {
        for (let i = 0; i < maxAttempts; i++) {
            alert("Too High")
            parseInt(prompt("Guess a number between 1 and 100,000"))
            if (i === maxAttempts - 1) {
                alert("The Correct Answer Was 167")
            }

        }

    }
    else if (askSix < 167) {
        for (let i = 0; i < maxAttempts; i++) {
            alert("Too Low")
            parseInt(prompt("Guess a number between 1 and 100,000."))

            if (i === maxAttempts - 1) {
                alert("The Correct Answer Was 167")
            }

        }
    }
    else {
        alert("What?")
    }
}

q6()

function q7() {

    let myAnswers = [1, 2, 3]
    let attemptsLeft = 5
    let askSeven = parseInt(prompt("Guess my favorite number."))

    if (askSeven === myAnswers[0] || askSeven === myAnswers[1] || askSeven === myAnswers[2]) {
        alert("You Are Correct")
        score++
    }
    else {
        for (let i = 0; i < attemptsLeft; i++) {
            alert(`Try Again. You Have ${attemptsLeft - i} Left`)
            parseInt(prompt("Guess my favorite number."))

            if (i === attemptsLeft - 1) {
                alert("The Correct Answers Were 1, 2, 3")
            }
        }
    }
}

q7()

alert(`You scored ${score}`)