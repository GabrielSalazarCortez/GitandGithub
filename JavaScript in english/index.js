// A variable is a container for storing data
// A variable behaves as it was the value that it contains

// Two steps: 
// 1. Declaration (var, let, string)
// 2. Assingnment (=assignment operator)
/*
let fristName = "Gabo"; // String
let age = 32; // number
let student = false; //booleans

console.log("hello", fristName);
console.log("You are", age, "years old");
console.log("Enrolled", student);


document.getElementById("p1").innerHTML = "Hello " + fristName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled " + student;
*/

// how to accept user input


//EASY WAY  with a window prompt
 
// let username = window.prompt("What's your name?");
// console.log(username);


//DIFFICULT WAY HTML textbox

/* CODE HTML

    <label id="myLabel" >Enter you name</label><br>
    <input type="text" id="myText"><br>
    <button type="button" id="myButton">submit</button>


*/
let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " +  username;
}

 