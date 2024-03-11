let contact=document.getElementById("contact");
contact.onclick=openWin;
function openWin() {
    window.location.href="temp.html";
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