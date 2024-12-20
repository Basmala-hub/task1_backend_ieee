///////////////////even or odd////////////////////////////////
// const isEvenOdd =  (num) => (num % 2 === 0 ? "Even" : "Odd");

// console.log(isEvenOdd(4));
// console.log(isEvenOdd(7));
///////////////////////find all even//////////////////////////////////
// const arr=[1,2,3,4,5,6];
// const newArr=arr.filter((num)=>{
// if(num%2==0)return num;
// })
// console.log(newArr);
////////////////////////////////////square each number////////////////////
// const arr =[1,2,3,4];
// const newArr=arr.map((num)=>{
//     return num*num;
// });
// console.log(newArr);
///////////////////////////////////4create an array number////////////////////
// function generateArray(n){
//     var arr=[];
//     for(var i=0;i<=n;i++)
//      {arr.push(i);}
//     return arr;
// }
// console.log(generateArray(5));
///////////////////////////////////fizzbuzz//////////////////////
// const fizzBuzz=()=>{
//     for(var i=1;i<=100;i++){
//         if(i%3===0){console.log("Fizz");}
//         else if(i%5===0){console.log("BUZZ") ;}
//         else if(i%3===0&&i%5===0){console.log("FizzBuzz") ;}
//     }
// 
// fizzBuzz();
/////////////////////////////////student objects/////////////////////////
// const students =[
//     {name:"Alice",age:20,grades:{math:85,english:78,science:90}},
//     {name:"Devid",age:20,grades:{math:75,english:70,science:80}},
//     {name:"Alice",age:23,grades:{math:90,english:98,science:92}},];
// const avar=students.map((grade)=>{
// return (grade.grades.math+grade.grades.english+grade.grades.science)/3;
// })
// console.log(avar);
// const filteration=students.filter((student,index)=>{

//     return avar[index]>=80;
       

// })
// console.log(filteration);
// const findation=students.find(( student)=>{
//     return student.age>22&&student.grades.math>=90;

// })
// console.log(findation);