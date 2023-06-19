function calculateSpeed(speed){
    const speedLimit = 70
    const maxDemeritPoints = 12
    const demeritPoint = Math.floor((speed - speedLimit) / 5)

    if (speed <= speedLimit ){
        console.log("Ok")
    }

    if (demeritPoint > maxDemeritPoints){
        console.log("License suspended")
    }
}

calculateSpeed(80);