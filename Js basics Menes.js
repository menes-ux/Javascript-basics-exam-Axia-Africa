// Javacript basics Axia Africa exam - 06/27/2025.

//Question 1 
let myAge = 19
let userAge = prompt("How old are you? ")
userAge = Number(userAge)

if (myAge > userAge) {
    console.log(`I am ${myAge - userAge} older than you.`);
}

else if (myAge < userAge) {
    console.log(`You are ${userAge - myAge} older than you.`);
}

else {
    console.log (`We are the same age`);
}


//Question 2 
    //Part A
let a = 4;
let b = 3;

    //Part A

if (a > b) {
    console.log(`a is greater than b`);
}
else {
    console.log(`a is less than b`);
}

    //Part B 
console.log(a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`);



//Question 3

console.log(`I am going to tell you if the number you entered is even or odd!`)

let userChoice = prompt("Enter a number: ")
userChoice = Number(userChoice)

if (userChoice % 2 === 0
) {
    console.log(`${userChoice} is an even number.`)
}
else {
    console.log(`${userChoice} is an odd number.`)
}


//Question 4 
let month = prompt("Enter a month: ")
month = month.toLowerCase(); // convert input to lowercase for easy matching

if (month === "september" || month === "october" || month === "november") {
  console.log(`${month} is in Autumn.`);
} else if (monthJa === "december" || month === "january" || month === "february") {
  console.log(`${month} is in Winter.`);
} else if (month === "march" || month === "april" || month === "may") {
  console.log(`${month} is in Spring.`);
} else if (month === "june" || month === "july" || month === "august") {
  console.log(`${month} is in Summer.`);
} else {
  console.log("Invalid month entered.");
}


//Question 5
let day = prompt("Enter a day: ")
day = day.toLowerCase();

if (day === "monday" || day === "tuesday" || day === "wednesday"|| day === "thursday" || day === "Friday") {
    console.log(`${day} working day`)
}

else if (day === "saturday" || day === "sunday") {
  console.log(`${day} is a weekend.`);
} else {
  console.log("Invalid day entered.");
}
