function Email() {
    var email = document.getElementById("Email").value
    let emailPattern = /^[_a-zA-Z0-9\\-]+(\.[_a-zA-Z0-9\\-]+)* @[a-zA-Z0-9\\-]+(\.[a-zA-Z0-9\\-]+)*(\.[a-z]{2,6})$/;

    /*var email = "president@gmail.com";*/

    
    if (emailPattern.test(email)) {
        result = true;
    } else {
        email.innerHTML = "Enter a valid email";
        /*alert("Enter valid email")*/
        result = false;
    }
}
document.addEventListener("submit", Email, false);




//function checkValidity() {
//    var fname = document.getElementbyId("Fname").required = true;
//    var Lname = document.getElementbyId("Fname").required;
//    var Age = document.getElementbyId("Age").required;
//    //if (fname === "" || Lname === "" || Age ==="") {
//    //    alert("Please fill out this field.");
//    //}
//    return false;
//}

//document.addEventListener("submit", checkValidity, false);


function Age() {
    var age = document.getElementById("Age");
    if (age.value < 18) {
        
        alert("Age can't be less than 18")
    }
}

document.addEventListener("submit", Age, false);

function Password() {
    var pass = document.getElementById("Pass");
    var passPattern = /^(?=.*[a-zA-Z0-9!])(?=.*\d){9,16}$/;
       /* /^(?=.*[0-9])[a-zA-Z0-9!]{6,16}$/;*/

    if (passPattern.test(pass)) {
        result = true;

    } else {
        
        alert("Enter a valid password")
        result = false;
    }

    

    var con = document.getElementById("Con");

    if (con.value !== Pass.value) {
        alert("Passward is not equal to confirm password");
    }   
}
document.addEventListener("submit", Password, false);



function PostalCode() {
    var poCode = document.getElementById("PoCode");
    var poPattern = /[a-zA-Z][0-9][a-zA-Z] [0-9][a-zA-Z][0-9]/;

    if (poPattern.test(poCode)) {
        result = true;
    }
    else {
        alert("Enter a valid postal code");
         result = false;
    }   
}
document.addEventListener("submit", PostalCode, false);
