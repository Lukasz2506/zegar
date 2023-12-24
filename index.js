// ---------------------------CREATING TIMER-----------------------------------

// get input from html
var timeSlot = document.querySelector("#clock");

function setTimeToDOM () {
    //create time variables
    var time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var humanSeconds = seconds;
    var humanMinutes = minutes;
    var humanHours = hour;

    //adding 0 in front if one of element is less than 10.
    if (seconds < 10) {
        humanSeconds = `0${seconds}`;
    }
    if (minutes < 10) {
        humanMinutes = `0${minutes}`;
    }
    if (hour < 10) {
        humanHours = `0${hour}`;
    }

    // create time variable which is human readable.
    var humanReadabletime = `${humanHours}:${humanMinutes}:${humanSeconds}`;
    timeSlot.value = humanReadabletime;
} 

// Adjust refreshing each 1 second.
setInterval(setTimeToDOM, 1000);


//---------------------------CREATE CURRENT DATE---------------------------

//new date variables
var time = new Date();
var day = time.getDate()
var month = time.getMonth();
var year = time.getFullYear();
var nameOfmonth = "";

//naming month of year
switch (month) {
  case 0:
    nameOfmonth = "January";
    break;
  case 1:
    nameOfmonth = "February";
    break;
  case 2:
    nameOfmonth = "March";
    break;
  case 3:
    nameOfmonth = "April";
    break;
  case 4:
    nameOfmonth = "May";
    break;
  case 5:
    nameOfmonth = "June";
    break;
  case 6:
    nameOfmonth = "July";
    break;
  case 7:
    nameOfmonth = "August";
    break;
  case 8:
    nameOfmonth = "September";
    break;
  case 9:
    nameOfmonth = "October";
    break;
  case 10:
    nameOfmonth = "November";
    break;
  case 11:
    nameOfmonth = "December";
    break;

  default:
    break;
}

//Put nameOfMonth and year into date html cell
var currentdate = document.querySelector("#date");
if (day==1 || day==21) {
  currentdate.value = `${day}st ${nameOfmonth} ${year}`;
} else if (day==2 || day==22) {
  currentdate.value = `${day}nd ${nameOfmonth} ${year}`;
} else if (day==3 || day==23) {
  currentdate.value = `${day}rd ${nameOfmonth} ${year}`;
} else {
  currentdate.value = `${day}th ${nameOfmonth} ${year}`;
}



//---------------------------CREATING BACKGROUND DEPENDING ON SEASON---------------------------

//Season photos lists
var winterList = ["winter-1", "winter-2", "winter-3", "winter-4"];
var autumList = ["autum-1", "autum-2", "autum-3", "autum-4"];
var springList = ["spring-1", "spring-2", "spring-3", "spring-4"];
var summerList = ["summer-1", "summer-2", "summer-3", "summer-4"];

//Creating random number from 1 to 4
var randomNumber = Math.floor((1+ Math.random() * 4));

//Get into the body
var body = document.querySelector(".background-image");

//Creating a lop which assign a random background image depending on the season

for (let i = 0; i < winterList.length; i++) {
  if (10 > month > 7) {
    body.style.backgroundImage = `url("./images/autum/autum-${randomNumber}.jpg")`;
  } else if (month > 10 || 2 > month >= 0) {
    body.style.backgroundImage = `url("./images/winter/winter-${randomNumber}.jpg")`;
  } else if (5 > month > 2) {
    body.style.backgroundImage = `url("./images/spring/spring-${randomNumber}.jpg")`;
  } else {
    body.style.backgroundImage = `url("./images/summer/summer-${randomNumber}.jpg")`;
  }
}
console.log(body);
console.log(body.style.backgroundImage);