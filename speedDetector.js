function speedDetector(driverSpeed) {
    const maxSpeed = 70;
    const demeritPointsPer5KmsAboveMaxSpeed = 1;
    const kmsPerDemeritPoint = 5;


    if (driverSpeed <= maxSpeed) {
        return "Ok";
    }
    // Calculating demerit points using info above;
    let demeritPoints = Math.floor((driverSpeed - maxSpeed) / kmsPerDemeritPoint) * demeritPointsPer5KmsAboveMaxSpeed;
    if (demeritPoints > 12) {
        return "License suspended";
    } else {
        return `You have earned ${demeritPoints} demerit points! `;
    }
}

console.log(speedDetector(168));


