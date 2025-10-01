document.getElementById("fo").addEventListener("submit",function(event){
event.preventDefault();  
let uname=document.getElementById("Username").value.trim()
let password=document.getElementById("Password").value.trim()
let Rpassword=document.getElementById("Rpassword").value.trim()

let unerror=document.getElementById("unameError")
let passwordError=document.getElementById("pError")
let RpasswordError=document.getElementById("RpError")

let condition;
let name=/^[A-Za-z]+ [A-Za-z]+$/;

if(uname ===""){
    unerror.innerText="*Name is Required"
    condition=false
}
else if(!name.test(uname)){
    unerror.innerText="*Please enter Fullname"
    condition=false
}
else if(name.test(uname)){
    unerror.innerText=""
    condition=true
}
if(password ===""){
    passwordError.innerText="*Password is Required"
    condition=false
}
else if(password.length<3||password.length>8){
      passwordError.innerText="*Password must between 3-8 characters"     
      condition=false
}
else if(password.length>3||password.length<8){
      passwordError.innerText=""   
      condition=true       
}

if(Rpassword ===""){
    RpasswordError.innerText="*Password is Required"
    condition=false
}
else if(Rpassword!==password){
    RpasswordError.innerText="*please Re-enter the same password" 
    condition=false
}
else if(!(Rpassword!==password)){
    RpasswordError.innerText="" 
    condition=true
}
if(condition){
    alert("Login Successfully")
}

})
