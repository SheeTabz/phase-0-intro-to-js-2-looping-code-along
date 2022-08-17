// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     // debugger;
  
  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); 


function writeCards(arr,name){
    const newArray =[]
     for(let i=0; i<arr.length; i++){ 
        const message = `Thank you, ${arr[i]}, for the wonderful ${name} gift!`
        newArray.push(message)
     }
     return newArray;
}
console.log(writeCards([" Guadalupe","Ollie", "Aki"], "surprise"));

function countDown(num){
    let count = num;
    while (count >= 0){
        console.log(count--);
    }

}
countDown(10)
// const gifts = ["Teddy bear", "drone", "doll"]
// function wrapGifts(gifts){
//    for (let i=0; i<gifts.length; i++){
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//    }

// }

// wrapGifts(gifts)
// function writeCards(arr, name){
//   const empty =[]
//   for(let i=0;i<arr.length; i++){
//     const card = `Thank you, ${arr[i]}, for the wonderful ${name} gift!`
//     empty.push(card)
//   }
//   return empty
// }

// console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))


// function countDown(num){
//   let count = num
//   while (count > 0){ 
//     console.log(count--)
// }
// }
// countDown(5)