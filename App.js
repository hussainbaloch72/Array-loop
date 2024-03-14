
// Questions PDF 14-20.
// chapter 14
// Q1
// if (password !== ""){
//     if (password.length <= 5){
//         alert("password must be greater than 5 charecters.")
//             }
//             else{
//                 alert("Ok")
//             }
// }
// Q2
// if (a ===1){
//     if(c === "Max"){
//         alert("Ok")
//     }
// }
// Q3
// if (a === 1 && c === "Max"){
//     alert("OK")
// }
// Q4
// var number1= 10
// var number2= 10
// if(number1 === number2){
//     if (number1<=number2){
//         alert("Both conditions passes: Number1 equals number2 and is less than equal to Number2.")
//     }
// }
// Chapter 15 (Array I)
// Q1
// var EmptyArray =[]

// Q2
// var EmptyArray =["Jawan Pakistan"]
// Q3
// var alphabet =["h","i","j","k"]
// alert(alphabet[2])
// Q4
// var alphabet = ["h", "i","j","k","l","m","n","o"]
// var totallength=alphabet.length
// alert("Total length of the array" + totallength)
// Q5
// var myArray =["firstElement"]
// myArray[1]="secondElement"
// alert(myArray[1])

// Chapter 16 (Array II)
// Q1
// var myArray = ["Hello"];
// myArray.push("World");
// alert(myArray[myArray.length - 1])
// Q2
// var Alphabet = ["h", "i","j","k"]
// Alphabet.pop()
// alert(Alphabet)
// Q3
// var Alphabet = ["h", "i","j","k"]
// Alphabet.push(5)
// alert(Alphabet)
//Q4 
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2, 0, "L");

// Q5 
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(0, 3);

// Q6 
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(pets.indexOf("dog") + 1, 0, "elephant", "lion");
// pets.splice(pets.indexOf("cat"), 3);

// Q7 
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(pets.indexOf("cat"), 2);

//Q8 
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// var reducedPets = pets.slice(3, 5);


// Chapter 17 - 20 (for Loops):
//Q1 
// for (var i = 0; i < 10; i++) {
    
// }

//Q2
// for (var i = 0; i <= 11; i++) {
    
// }

// Q3
// for (var i = 0; i <= 4; i++)

//Q4
// for (var j = 0; j < 100; j++) {
    
// }

//Q5 
// for (var i = 3; i > 0; i--) {
    
// }

// //Q6
// var arrayLength = array.length;

// //Q7
// var flag = true;

// //Q8
// for (var i = 0; i < pets.length; i++) {
    
// }

// // Q9
// for (var i = 1; i <= 10; i++) {
//     if (i === 2) {
//         alert("Counter is: " + i);
//         break;
//     }
// }

// // Q10
// var userInput = prompt("Enter first name");
// for (var i = 0; i < userNames.length; i++) {
//     if (userNames[i] === userInput) {
//         alert("Enter");
//         break;
//     } else {
//         alert("Please write correct user name");
//     }
// }

// //Q11
// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
//     if (userInput === list[i]) {
//         alert("Match found");
//         matchFound = true;
//         break;
//     }
// }
// if (!matchFound) {
//     alert("Match not found");
// }

// //Q12
// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];
// for (var i = 0; i < firstArr.length; i++) {
//     for (var j = 0; j < secondArr.length; j++) {
//         console.log(firstArr[i] + secondArr[j]);
//     }
// }


// // Chapter 14-16 pdf:
// //Q1
// var studentsLiteral = [];

// //Q2 
// var studentsObject = new Array();

// //Q3 
// var stringsArray = ["string1", "string2", "string3"];

// //Q4 
// var numbersArray = [1, 2, 3, 4, 5];

// //Q5 
// var booleanArray = [true, false, true];

// //Q6 
// var mixedArray = ["string", 1, true];

// //Q7 
// var qualifications = [
//     "SSC",
//     "HSC",
//     "BCS",
//     "BS",
//     "BCOM",
//     "MS",
//     "M. Phil.",
//     "PhD"
// ];

// document.write("<h2>Qualifications:</h2>");
// document.write("<ol>");
// for (var i = 0; i < qualifications.length; i++) {
//     document.write("<li>" + qualifications[i] + "</li>");
// }
// document.write("</ol>");


// // Q8 
// var studentNames = ["Michael", "John", "Tony"];
// var scores = [320, 230, 480];

// for (var i = 0; i < studentNames.length; i++) {
//     var percentage = (scores[i] / 500) * 100;
//     document.write("Score of " + studentNames[i] + " is " + scores[i] + ". Percentage: " + percentage + "%<br>");
// }



// var colors = ["Red", "Green", "Blue"];

// var new1 = prompt("Enter color to add to the beginning:");
// colors.unshift(new1);
// console.log(colors);
 
// var new2 = prompt("Enter color to add to the end:");
// colors.push(new2);
// console.log(colors);
 
// colors.unshift("Yellow", "Orange");
// console.log(colors);

// colors.shift();
// console.log(colors);
 
// colors.pop();
// console.log(colors);

// var indexStr = prompt("Enter index to add color:");
// var index = parseInt(indexStr); 
// var new3 = prompt("Enter color:");
// colors.splice(index, 0, new3);
// console.log(colors);

// var deleteIndex = prompt("Enter index to delete color(s):");
// var deleteCount = prompt("Enter number of colors to delete:");
// colors.splice(deleteIndex, deleteCount);
// console.log(colors);

// // Q10
// var scores = [320, 230, 480, 120];
// scores.sort();
// document.write("Scores of Students: " + scores.join(", ") + "<br>");
// document.write("Ordered Scores of Students: " + scores.join(", "));

// // Q11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(2, 4);
// document.write("Cities list: " + cities.join(", ") + "<br>");
// document.write("Selected cities list: " + selectedCities.join(", "));

// // Q12 
// var arr = ["This", "is", "my", "cat"];
// var stringResult = arr.join(" ");
// document.write("Array: " + arr.join(", ") + "<br>");
// document.write("String: " + stringResult);

// // Q13 
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("Devices:<br>");
// for (var i = 0; i < devices.length; i++) {
//     document.write("Out: " + devices[i] + "<br>");
// }

// // Q14

// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("Devices:<br>");
// for (var i = devices.length - 1; i >= 0; i--) {
//     document.write("Out: " + devices[i] + "<br>");
// }

// // Q15
// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for (var i = 0; i < phoneManufacturers.length; i++) {
//     document.write("<option>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>");


// // Chapter 17-20 pdf:
// // Q1
// var multiDimArray = [];

// // Q2 
// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// // Q3 
// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// //Q4 
// var tableNumber = parseInt(prompt("Enter the number for multiplication table:"));
// var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));
// for (var i = 1; i <= tableLength; i++) {
//     console.log(tableNumber + " * " + i + " = " + (tableNumber * i));
// }

// //Q5 
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // Q6 
 
// document.write("Counting: ");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }
// document.write("<br>");

 
// document.write("Reverse counting: ");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }
// document.write("<br>");


// document.write("Even: ");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }
// document.write("<br>");


// document.write("Odd: ");
// for (var i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
// }
// document.write("<br>");


// document.write("Series: ");
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }
// document.write("<br>");

// // Q7. 
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter item to search:");
// var found = false;
// for (var i = 0; i < A.length; i++) {
//     if (A[i] === userInput) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     alert("Item found in the list.");
// } else {
//     alert("Item not found in the list.");
// }

// // Q8.
// var numbers = [24, 53, 78, 91, 12];
// var largest = numbers[0];
// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }
// console.log("Largest number: " + largest);

// // Q9.
// var smallest = numbers[0];
// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] < smallest) {
//         smallest = numbers[i];
//     }
// }
// console.log("Smallest number: " + smallest);

// // Q10.
// document.write("Multiples of 5 ranging from 1 to 100: ");
// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i + ", ");
//     }
// }
// document.write("<br>");