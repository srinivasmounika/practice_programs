// // primitive data  types
// //number
// var num=20;
// console.log(num);
// console.log(typeof num);
// //string
// var string='akshara';
// console.log(string);
// console.log(typeof string);
// //numm
//  var t=null;
//  console.log(t);
//  console.log(typeof t);

//  //undefined
//  var abc;
//  console.log(abc);
//  console.log(typeof abc);

//  //boolean
// var b=false;
// console.log(b);
// console.log(typeof b);

// //bigInt

// var big=BigInt(45);
// console.log(big);
// console.log(typeof big);
// var hugeNum=12445n;
// console.log(hugeNum);
// console.log(typeof hugeNum);
// hugeNum=hugeNum+12445n;
// console.log(hugeNum);

// //symbol

// var hi=Symbol('m');
// var hi1=Symbol('m');
// if (hi==hi1)
// {
//     console.log(true);
// }
// else {
//     console.log(false);
// }
// console.log(typeof hi);

//non-primitive

var obj={
    fname:'narsimlu',
    lname:'lyatholla',
    age:37
}
console.log(obj);

// another way
// var obj1=new Object();
// obj1.car='vivo';
// console.log(obj1);
// console.log(obj1.car);

var obj1=new Object();
obj1.car='bmw';
console.log(obj1);
//Array

var arr=['apple','banana','pineapple','grapes'];
console.log(arr);
console.log(typeof arr);
console.log(arr[3]);

var arr=[20,'mouni',false,null,undefined];
console.log(arr[1]);
arr[1]='hello';
console.log(typeof arr);
console.log(arr);

//date

var date=new Date();
console.log(date);
var dateSai=new Date(1997,12,08,4,10,20,30);
console.log(dateSai);
var dateMilli=new Date(24698865);
console.log(dateMilli);
var dateOpt=new Date();
console.log(dateOpt.getDay()); 


var num=6;
console.log(typeof num);

var mammals = new Array("cat",20,false,null,undefined);
// var animalString = "";
for (var i = 0; i < mammals. length; i++) {
//    animalString += mammals[i] + " ";
}
// alert(animalString);
console.log(mammals);
console.log(typeof mammals);


var date=new Date('Sept 12 2020');
console.log(date);

