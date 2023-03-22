// 1.
const animal = "Fox"

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
function colorOfFruit(apple,banana,grape,blueberry) {
    let fruit = blueberry;
    if (fruit === apple) {
    console.log("These apples are " + apple);
    } else if (fruit === banana) {
    console.log("Bananas are " + banana);
    } else if (fruit === grape) {
    console.log("These grapes are " + grape);
    } else if (fruit === blueberry) {
    console.log("Blueberries are " + blueberry);
    } else console.log("Please choose another fruit.")
}
colorOfFruit("red","yellow","purprle","blue"); 



// 3.
function sum(number1,number2){
    const result= number1 + number2; 
    console.log(result);}

sum(256,128);