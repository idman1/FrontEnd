



let firstCard =  Math.random() * 11 +1
let secondCard =  Math.random() * 11+ 5

 let sum = firstCard + secondCard
// console.log(Math.abs(sum))
while (sum !== 21|| sum >! 21) {
    if (sum < 21) {
        console.log("DO you want to draw a new card ?")
    } else if (sum > 21) {
        console.log("You are out of the game!  ")
        break
    } else if ( sum === 21){
        console.log("Woo! you're got the BlackJack! ")
        break
    }
    sum++

}
let  age = Math.random() * 21

while ( age < 21 ){
    if (age < 21){
        console.log("You're not up to age to enter club")
    }
    else console.log("Welcome to wild life enjoy yourself as you wish it YOLO")
}


