var fName=prompt("PLease enter your first name");
var lName=prompt("Please enter your last name");
var age=prompt("what is your age?");
var height=prompt("How tall are you in centimeters");
var pet=prompt("What is the name of your pet");

alert("Thank you for the information");

var nameCond=null;
var ageCond=null;
var heightCond=null;
var petCond=null;

if(fName[0]===lName[0]){
  nameCond=true;
}
else {
  nameCond=false;
}

if(age>20&&age<30){
  ageCond=true;
}
else {
  ageCond=false;
}

if(height>=170){
  heightCond=true;
}
else {
  heightCond=false;
}

if (pet[pet.length -1]==='y') {
  petCond=true;
}
else {
  petCond=false;
}


if(nameCond && ageCond && heightCond && petCond){
  console.log("Welcome Comrade! You have cleared the spy test");
  }
  else {
    console.log("Sorry! nothing's here for you");
  }
