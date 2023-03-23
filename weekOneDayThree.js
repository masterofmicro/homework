//1.
function product(number1,number2){
    const result= (number1 * number2)
    return result

}

console.log(product(8,7))


//2.
function genGrade(score){
    
    switch(true){
        case score >= 90:
            console.log("A")
            break
        case score >= 80:
            console.log("B")
            break
        case score >= 70:
            console.log("C")
            break
        case score >= 60:
            console.log("D")
            break
        case score <= 59:
            console.log("F")
            break
        default: console.log("Enter your grade.")
    }
}

genGrade(82)
genGrade(75)
genGrade(55)
genGrade(92)

//3.
const starWarsCollectables=[
    "Obi Wan Kenobi",
    "Darth Vader",
    "Luke Skywalker",
    "Yoda",
    "Han Solo",
    "Chewbacca"
]

console.log(starWarsCollectables)

//4.

function itemOne(listItem1){
    return listItem1
}

console.log(itemOne(starWarsCollectables[0]))