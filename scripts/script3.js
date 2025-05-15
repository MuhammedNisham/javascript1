// Control structure
    // 1. Conditional statement

const age_limit = 18;
const heavy_driver_age_limit = 21;

let age = 30;
//  if-else ladder
if (age >= heavy_driver_age_limit){
    console.log("You can drive heavy vehicles");
}
else if (age >= age_limit){
    console.log("You can drive..");
}
else{
    console.log("you cannot drive");
}

// Nested if

if (age >= age_limit){
    console.log("You can drive");

    if (age >= heavy_driver_age_limit){
        console.log("you can drive heavy vehicles too");
    }
}
else{
    console.log("You cannot drive")
}

// b.ternary Operator
// used to decide values based on conditions
// <variables> = condition ? <valueIfTrue> : <valueIfFalse>;
let message = age >= age_limit ? "you can drive" : "youu cannot drive";

message = age >= age_limit ?
                     age >= heavy_driver_age_limit ?
                    "you can drive heavy" : "you cannot drive heavy vehicles"
                : "you cannot drive"
console.log(message);