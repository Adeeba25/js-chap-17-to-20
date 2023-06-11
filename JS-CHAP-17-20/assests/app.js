// chap 17 to 20//

// Q1//

// var array=[[[[]]]];

// Q2//

// var array=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// console.log(array);



// Q3//

// for (var i=1; i<11; i++) {

// document.write ("<br>");
// document.write (i);
// }

// Q4//

// let number = parseInt(prompt("Enter the number for multiplication table: "));
// let length = parseInt(prompt("Enter the length of the multiplication table: "));

// console.log("Multiplication Table of", number);
// for (let i = 1; i <= length; i++) {
//   let product = number * i;
//   console.log(number + " x " + i + " = " + product);
// }

// Q5//


// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// document.write("Items in the array: <br>");
// for (let i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + "<br>");
// }

// Q6//

// a//

// document.write("Counting: <br>");
// for(let i=1; i<=15; i++){
//     document.write(",")
//     document.write(i)
// }

// b//

// document.write("Reverse: ");
// for(let i=10; i>=1; i--){
//     document.write(",")
//     document.write(i)
// }

// document.write("Reverse Counting: <br>");
//     for (let i = 10; i >= 1; i--) {
//       document.write(i + ", ");
//     }

// c//

// document.write("Even number: <br>");
// for(let a=0; a<=20; a++) {
//     if(i % 2 === 0){
//         document.write(a + "<br>")
//     }
// }

// d//

// document.write("Odd number: <br>");
//  for(let i=1; i<=19; i++) {
//         if(i % 2 !== 0){
//             document.write(i + "<br>")
//         }
    
//     }

// e//

  // document.write("Series: <br> ");
  // let i;
  // for(let i=2; i<=20; i++){
  //   if(i % 2==0) 
  //   {
  //   document.write(i +"k" +"<br>");
  //   }
  // }

  // Q7//

  // var bakeryItems = ["bread", "cake", "cookies", "muffins"];

  // function checkAvailability(item) {
  //   if (bakeryItems.includes(item)) {
  //     alert(item + " is available!");
  //   } else {
  //     alert(item + " is not available.");
  //   }
  // }
  
  
  // var userInput = prompt("Enter a bakery item:");
  
  
  // checkAvailability(userInput);



// Q8//

  // let A = [24, 53, 78, 91, 12];

  // function findLargestNumber(arr) {
  //   let largest = arr[0]; 
  // for (let i = 1; i < arr.length; i++) {
  //     if (arr[i] > largest) {
  //       largest = arr[i];
  //     }
  //   }
  // return largest;
  // }
  // let largestNumber = findLargestNumber(A);
  // console.log("The largest number in the array is: " + largestNumber);
  

  // Q9//

//   let A = [24, 53, 78, 91, 12];


// function findSmallestNumber(arr) {
//   let smallest = arr[0]; 
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }

//   return smallest;
// }
// let smallestNumber = findSmallestNumber(A);
// console.log("The smallest number in the array is: " + smallestNumber);


// Q10//

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

  
