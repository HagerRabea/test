//!Arrays Iteration Functions
/*
1- map 
2-filter
3-reduce
4-...
*/
/*
variables
loops
if conditions
object
switch
array
*/

// function odd(arr1){
//     let NewArr=[]
// for(let num of arr1){
//     if(num%2 !=0){
//        NewArr.push(num)
//     }
// }
// return NewArr;
// }

// let arr=[];
// let count=Number(prompt("Enter The number of items"));
// for (let i=0; i<count; i++){
//     arr[i]=Number(prompt("Enter Any Number "))
// }
// console.log(odd(arr))

//?In JavaScript, arrays provide several built-in iteration methods that allow you to manipulate and process the elements

//* map
 //Creates a new array by applying a function to each element.
 /*
it take value , index,array
 */

//?example
// function double (value){
//    return  value*2
// }

// let arr1=[1,2,3,4,5];
// let newArr=arr1.map(function (value){
//     return  value*2
// });
// let newArr=arr1.map( (value)=>{
//     return  value*2
// });
// console.log(newArr)


// let stus=[
//     {
//         name:"ali",
//         id:1,
//         age:19
   
//     },
//     {
//         name:"ahmed",
//         id:1,
//         age:20
//     },
//     {
//         name:"omar",
//         id:1,
//         age:22
//     },
// ]


//*filter
// Creates a new array with elements that pass a specified condition.
   /*
it take value , index,array
 */
//?example
//  function even (value){
   
//     return value%2==0
//  }
// let arr=[1,2,3,4,5];
// let newArr=arr.filter(even);
// console.log(newArr)



//*reduce
//Applies a function to accumulate array elements into a single value.
/*
it take
total, 
value ,
 index,
 array
 */


 //TODO >>>> When to Use Each
//?forEach: When you just want to iterate without returning anything.
//?map: When you need to transform or create a new array.
//?filter: To extract specific elements based on a condition.
//?reduce: To combine all elements into a single value (e.g., sum, average).
//?find/findIndex: To locate a single item based on a condition.
//?some/every: To check if some/all elements satisfy a condition.
//?sort: To order the elements in the array.






















// Example on handling this 

// let y={
//     name:"ali",
//     test: function () {
        
//          let test2=()=>{
//             return this
//         }
//         return test2()

//     }
// }
// console.log(y.test())



//!Anonymous Functions & Arrow Function
//?Anonymous Functions
/*
--> is a function that does not have a name. It is often used in places where you don't need to reuse the function later.
--> Usage Example :
     -->Anonymous functions are often used as arguments to higher-order functions like map, filter, or event listeners.
     Ex:const numbers = [1, 2, 3, 4];
        const doubled = numbers.map(function(num) {
            return num * 2;
        });
        console.log(doubled); 
     -->Event Listeners:
                document.querySelector("button").addEventListener("click", function() {
                console.log("Button clicked!");
                });
*/

//?Arrow Function
/*is a shorter syntax for writing anonymous functions introduced in ES6. Arrow functions are always anonymous.
   If the function body has a single expression, you can omit the braces and the return keyword.
*/


function test (){
  console.log("ay haga")
}

()=>console.log("ay haga")
