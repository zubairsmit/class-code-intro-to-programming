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

//  console.log(student[3])
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
// let stringFromArray = array.join(" ")
// let arrayFromString = stringToArray.split(" ")
// console.log(array)
// console.log(arrayFromString)
// console.log(stringFromArray)

// let palindromeWord = "zubair";

// let checkword = palindromeWord.split('').reverse().join('')

// if(checkword === palindromeWord){
//    alert("yes it is palindrome word")
// }else{
//    alert("It is not palindrome word")
// }
// console.log(checkword)

let companyName = "gul ahmed";
let companyKarachiBranch = [3,367];

let company = {
   name:"Suffah Tech",
   address1:['street 5','plot 235','karachi'],
   address2:['street 8','plot 290','lahore']
}

let car = {
   name:"Volvo",
   price:5000,
   availableColors: ['red','white','black']
}

let cars = [
   {
   name:"Volvo",
   price:5000,
   availableColors: ['red','white','black']
},
{
   name:"Fiat",
   price:10000,
   availableColors: ['red','white','black']
},{
   name:"Honda City",
   price:1000,
   availableColors: ['red','white','black']
},{
   name:"double cabin",
   price:11000,
   availableColors: ['black']
},
{
   name:"Civic",
   price:1000,
   availableColors: ['black','white']
},
{
   name:"corola",
   price:1000,
   availableColors: ['black','white']
},{
   item:"Brush"
}
]
let i = 0;
while(i<cars.length){
    
   document.getElementById('table').innerHTML += ` <tr>
            <td>name: ${cars[i].name}</td>
            <td>price: ${cars[i].price}</td>
        </tr>`
   console.log(cars[i].name)
   console.log(cars[i].price)
   console.log(cars[i].availableColors)
   i++;
}



// for(let i=0; i<cars.length; i++){
//    console.log(cars[i].name)
//    console.log(cars[i].price)
//    console.log(cars[i].availableColors)
// }

// console.log(cars[0].name)
// console.log(cars[1].name)
// console.log(cars[2].name)
// console.log(cars[0].price)
// console.log(cars[1].price)
// console.log(cars[2].price)




















// let a = [];
// for (let i = 0; i < 10000000; i++) {
//     a.push({ key: i }); // Each element is an object
// }
// console.log(a.length);  // 10,000,000

// console.log(cars)


// console.log(car.availableColors[2])




