   // alert("Bismillah")
      //   let x = 2;
      //   let y = 10;
      //   let name = "zubair";
      //   let age = 23;
      //   alert(name);
      //   alert(age)
   //   let name =  prompt("Please Enter your Name");
    
   //   console.log('name',name)
    //  console.log('age',age)
   //  console.log(x+y)
   //  console.log(x-y)
   //  console.log(x*y)
   //  console.log(x/y)
   //  console.log(x**y)
    
   //  let num1 = +prompt("Enter your first value");
   //  let num2 = +prompt("Enter your second value");

   //  document.getElementById("answer").innerHTML = num1 + num2;
 //    console.log(num1)
 //    console.log(num2)
   //  alert(num1 + num2)
 //    document.write("zubair shaikh")



function addTwoNumbers(){
   let num1 = +prompt("Enter your first value");
   let num2 = +prompt("Enter your second value");

   document.getElementById("answer").innerHTML = num1 + num2;
   console.log("Hi I am printing by function")
}


function welcomeUser(){
   let name = document.getElementById("name").value
   document.getElementById('answer').innerHTML = "Welcome" + name
   console.log(name)
}
// addTwoNumbers();

// console.log('zubair')
// ====================if else=========================
// let raining = true;

// if(raining == true){
//    console.log("I will not go to school")
// }else{
//    console.log("I will go to school")
// }
// let number = 16;

// if(number < 0){
//    console.log("Number is less than 0")
// }
// else if(number > 10 || number < 15){
// console.log("Number is greater than 10 but less than 15")
// }
// else{
//    console.log("Number is greater than 15")
// }


//age < 3  Your ticket is free
//age > 3 and  age < 8  You got 30% discount on ticket
//age === 8 or 8 >  your will charge a normal ticket price
// age > 60  you will get 30% old benefits

//loop;
// let number = 100;

// while (number > 1) {
//    console.log(number)
//    number--
// }

// for(let number=1; number < 100; number++){
//    console.log("i am zubair");
//    console.log(number)
// }

// array

// let student = ["Hashim","Taha","Arsalan","Mudassir","Talha","Mustufa","Talib","Faraz"];


// let number = 0;
// while(number < student.length){
//     console.log(number)
//     console.log(student[number])
//     if(student[number] === "Mudassir"){
//       alert("student Found")
//     }
//    number++
// }
// console.log("student length", student.length)



let stringToArray = "I am Zubair Shaikh";
let array = ["Shamim","Aflah","Zubair"];
// array.push("zubair")
// array.unshift("zubair")
// array.shift()
// array.pop()
let stringFromArray = array.join(" ")
let arrayFromString = stringToArray.split(" ")
console.log(array)
console.log(arrayFromString)
console.log(stringFromArray)

