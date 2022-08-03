console.log("HELLO")
function collectData(){
let first = document.getElementById("fname").value
console.log(first)
let last = document.getElementById("lname").value
let email = document.getElementById("email-text").value
let mobile = document.getElementById("phone-text").value
let message = document.forms["contact-sheet"]["message"]
let emailReg = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
let cellReg = /^\d{10}$/;

let error = ""
    if (first === ""){
        error = "Please Insert First Name"
    }
    if (last === ""){
        error = "Please Insert Last Name"
    }
    if (!emailReg.test(email) || email === ""){
         error = "Invalid Email"
    }
    if (!cellReg.test(mobile)){
        error = "Invalid Phone Number"
    }
    if (error === ""){
        error = "Your form has been submitted\n Please wait for an email back in 2-3 business days."
    }
    alert(error)
}