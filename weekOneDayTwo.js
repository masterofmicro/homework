// 1.
let animal = "Fox"

switch(animal){
    case "cow":
    console.log("Moo");
    break
    case "frog":
    console.log("Croak");
    break
    case "elepahant":
    console.log("Toot");
    break
    default:
     console.log("🎶WHAT DOES THE FOX SAY!!!!🎶")
}
//2.
function colorOfFruit() {
    let fruit = "grape";
    if (fruit === "apple") {
    console.log("These apples are Red!");
    } else if (fruit === "banana") {
    console.log("Bananas are Yellow!");
    } else if (fruit === "grape") {
    console.log("These grapes are Purple!");
    } else if (fruit === "blueberry") {
    console.log("Blueberries are Blue!");
    } else console.log("Please choose another fruit.")
}
colorOfFruit();



// 3.
function sum(number1,number2){
    const result= number1 + number2; 
    console.log(result);}

sum(256,128);