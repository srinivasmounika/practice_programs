 let arr = [6,6,1,7,7,7,8,8,8,8]
arr.sort();

var count = 1;
 results =[];
for (let i = 0; i < arr.length; i++)
{
    if (arr[i] == arr[i+1])
    {
     count +=1;
    }
    else
    {
        results += arr[i] + ":" + count + " times \n" ;
        // count=1;
    }
}
console.log(results);


// var num=4;
// console.log(typeof num);

// var arr=[1,2,2,3,3,3,1]
//  result = [];
//  for(i=0; i<arr.length; i++){
//    result.push(i+1)
//  };
//  console.log(result);
    // arr.forEach((value,index)=>{
    //     result.push(index + 1)
    // });
    // console.log(result);

// var arr=[1,2,2,4,3,3,2]
// result = [];
// for(i=0;i<arr.length;i++){
// result.push(i+1);
// };
// console.log(result);