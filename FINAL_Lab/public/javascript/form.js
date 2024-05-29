
document.addEventListener("DOMContentLoaded", function() {

window.onload=function(){
  let contact=document.getElementById("contact");
contact.onclick=openWin;
function openWin() {
    window.location.href="contact-us";
  }

 const login=document.querySelector("#login");
 




 home=document.querySelector(".home");
 form_container=document.querySelector(".form-container");
form_close=document.querySelector(".form-close");
 login_link=document.querySelector("#login-link");
 Signup_link=document.querySelector("#signup-link");
 ;
 pwShowHide=document.querySelectorAll(".pw");

 login.addEventListener("click",()=>home.classList.add("show"));
 
 

 form_close.addEventListener("click",()=>home.classList.remove("show"));

 Signup_link.addEventListener("click",(e)=>{
  e.preventDefault();
  form_container.classList.add("active");
 })
 login_link.addEventListener("click",(e)=>{
  e.preventDefault();
  form_container.classList.remove("active");
 })







}
var name= $('#exampleInputName').val();
email=$('#exampleInputEmail1').val();
message=$('#exampleInputMessage').val();

submit=document.querySelector("#Submit");
login.addEventListener("click",()=>{

 


  if(name==''){
    alert("please enter your Name");
  }else if(email==''){
    alert("please enter your Email");
  }else if(message==''){
    alert("please enter your Message");
  }else if(message.length<5 ){
    alert("message must be atleast 5 characters long")
  }else {
    console.log("Form is submitted");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
  }

});

 

  
  });



// js for bloodbank
function showForm() {
  var role = document.querySelector('input[name="role"]:checked').value;
 
  if (role === "donor") {
      document.getElementById("donorForm").style.display = "block";
      document.getElementById("receiverForm").style.display = "none";
  } else {
      document.getElementById("donorForm").style.display = "none";
      document.getElementById("receiverForm").style.display = "block";
  }
}



