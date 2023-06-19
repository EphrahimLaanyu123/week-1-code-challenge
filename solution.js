var  speed  = 200

if (speed < 70){
    console.log("Ok")
}   else {
    var demeritPoint = Math.floor(speed - 70) /5
    var maxDemeritPoints = 12

    if (demeritPoint > maxDemeritPoints){
        console.log("Licence suspended")
    } else {
        console.log(demeritPoint)
    }
} 




console.log(demeritPoint)
