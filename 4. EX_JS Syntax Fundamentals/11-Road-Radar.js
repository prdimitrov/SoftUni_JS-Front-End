// Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. 
// Each area has a different limit: 
// •	On the motorway, the limit is 130 km/h
// •	On the interstate, the limit is 90 km/h
// •	In the city, the limit is 50 km/h 
// •	Within a residential area, the limit is 20 km/h
// If the driver is within the limits, there should be a printed speed and the speed limit. 
//                 `Driving {speed} km/h in a {speed limit} zone`
// If the driver is over the limit, however, your function should print the severity 
// of the infraction and the difference in speeds. 
// `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
// For speeding up to 20 km/h over the limit, the status should be speeding.
// For speeding up to 40 km/h over the limit, the status should be excessive speeding.
// For anything else, status should be reckless driving.
// The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.
// The output should be printed on the console.

function speedLimit(speed, drivingArea) {
    let maxSpeed = 0;
    switch (drivingArea) {
        case 'motorway':
            maxSpeed = 130;
            break;
        case 'interstate':
            maxSpeed = 90;
            break;
        case 'city':
            maxSpeed = 50;
            break;
        case 'residential':
            maxSpeed = 20;
            break;
        default:
            break;
    }
    if (speed <= maxSpeed) {
        console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`);
    } else {
        let brokenSpeed = speed - maxSpeed;
        let status;
        // For speeding up to 20 km/h over the limit, the status should be speeding.
        // For speeding up to 40 km/h over the limit, the status should be excessive speeding.
        // For anything else, status should be reckless driving.
        if (brokenSpeed <= 20) {
            status = 'speeding';
        } else if (brokenSpeed >= 21 && brokenSpeed <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${brokenSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
    }
}

speedLimit(40, 'city');
speedLimit(21, 'residential');
speedLimit(120, 'interstate');
speedLimit(200, 'motorway');