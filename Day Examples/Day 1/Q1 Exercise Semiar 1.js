//q1
var age = [prompt("Enter Age")];

for (let i = 0; i < 10; i++) {
    age.push(prompt("Enter Age"));
}

for(let i = 0; i < 10; i++)
{
    if (age < 18) {
        console.log("User too young");
    } else if (age >= 18 && age < 30) {
        console.log("You are in your prime");
    } else if (age >= 30 && age < 50) {
        console.log("Work hard and diligently");
    } else if (age >= 50 && age < 65) {
        console.log("Take care of yourself");
    } else if (age >= 65) {
        console.log("Relax and enjoy retirement");
    }
}

//q2
let year = prompt("Enter Year");

if(isLeapYear(year))
{
    console.log("The year is a leap year");
}

function isLeapYear (year)
{
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    }else{
        console.log(year + ' is not a leap year');
    }
}

//q3

