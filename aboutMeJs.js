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

let getUserFullName = prompt("What's your first and last name.")
document.write(`Welcome to my site ${getUserFullName}`)