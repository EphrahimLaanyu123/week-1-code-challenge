const prompt = require("prompt-sync")();

let a = prompt ("Enter a number:");

console.log(a);
var studentMarks = 40

if (studentMarks < 0 || studentMarks > 100){
    console.log("Invalid output.")
}
if (studentMarks > 79){
    console.log("You got an A")
} else if (studentMarks < 80 && studentMarks > 59){
    console.log("YOu got a B")
} else if (studentMarks < 60 && studentMarks > 48){
    console.log("you got a C")
}else if (studentMarks < 50 && studentMarks > 39){
    console.log("You got a D")
}else {
    console.log("You got an E")
}