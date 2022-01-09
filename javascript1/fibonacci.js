
// var number=prompt("enter the number of terms");
//  let n1=0, n2=1, nextTerm;

//  console.log('fibonacci number')
//  for (let i=1;i<=number;i++){
//      console.log(n1);
//      nextTerm=n1+n2;
//      n1=n2;
//      n2=nextTerm;
//  }
 
// 5.palindrome
// var num=1551;
// var originalNum=num;
// var reverse=0;
// while(num !=0){
//     reverse=(reverse*10)+(num%10);
//     num=parseInt(num/10);
// }
// if(originalNum ==reverse){
//     console.log(reverse+'palindrome number');

// }else{
//     console.log(reverse+'not a palindrome number')
// }

// var secondMax = function (){ 
//     var arr = [20, 120, 111, 215, 54, 78]; // use int arrays
//     var max = Math.max.apply(null, arr); // get the max of the array
//     arr.splice(arr.indexOf(max), 1); // remove max from the array
//     return Math.max.apply(null, arr); // get the 2nd max
// }; 
// console.log(secondMax)




// var food=(pizza,burger)=>{
//     console.log(pizza+burger);
// }
// food(30,40)

// program to find the factorial of a number

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}

