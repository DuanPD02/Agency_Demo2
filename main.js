//function input(x,y){
  //  let x = document.getElementById("y").value;
//}
//bien de tuong tac voi form.
const contactForm = document.querySelector("col-md-6-bg-light p-3 my-3");
const name1 = document.querySelector("#Name");
// thay doi mau phone
const number1 = document.querySelector("#Number");
// thay doi mau message
const message1 = document.querySelector("#Message");
// thay doi mau email
const email1 = document.querySelector("#Email");
function validateForm(event){
    event.preventDefault();
const name = document.getElementById("Name").value;
const name_error = document.getElementById("Name_error");

if(!name){
    name_error.innerHTML="This field is require";
    name1.style.border = "2px solid red";
    return false;
}
else{
    name_error.innerHTML="";
    name1.style.border =" 2px solid #343a40";
}
const number = document.getElementById("Number").value;
const number_error = document.getElementById("Number_error");
if(!number){
    number_error.innerHTML="This field is require";
    number1.style.border = "2px solid red";
}else{
    number_error.innerHTML=" ";
    number1.style.border =" 2px solid #343a40";
}
const message = document.getElementById("Message").value;
const message_error = document.getElementById("Message_error");
if(!message){
    message_error.innerHTML="This field is require";
    message1.style.border = "2px solid red";
}else{
    message_error.innerHTML=" ";
    message1.style.border =" 2px solid #343a40";
}
const email = document.getElementById("Email").value;
const email_error = document.getElementById("Email_error");
const email_error2 = document.getElementById("Email_error2");
if(!email){
    email_error.innerHTML="This field is require";
    email1.style.border = "2px solid red";
}else{
    email_error.innerHTML=" "; 
    email1.style.border =" 2px solid #343a40";
}
const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
   if (!filter.test(email)) { 
    email_error2.innerHTML="Please enter a valid email address";
   }
   else{ 
    email_error2.innerHTML="";
   } 
}
//let x = document.getElementById("Submit").addEventListener("click", function(event){
 //   event.preventDefault();
//function assignValue(a,b,c){
   // let a = document.getElementById(b).value;
   // let c = document.getElementById(d);
//}

