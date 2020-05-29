const myButton = document.querySelector(".theButton");

const theMessage = document.querySelector(".theMessage");

const theName = document.querySelector(".theName");

const theDate = document.querySelector(".theDate");


myButton.addEventListener("click", function() {

const username = theName.value;
const currentDate = theDate.value;


theMessage.classList.remove("blue");
theMessage.classList.remove("green");
theMessage.classList.remove("orange");


const theCurrentColor = document.querySelector(".theColor:checked");

theMessage.classList.add(theCurrentColor.value);

if (username === "") {
theMessage.innerHTML = "Please enter a name"; 
} else {
let message = "Hi, " + username + " you pressed the button";

if (currentDate !== "") {
message += " on " + currentDate
}

theMessage.innerHTML = message;
}




});