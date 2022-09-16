function CalculateBmi() {
    //var gender = document.getElementById("Female").value;
    var height = document.getElementById("Height").value;
    var weight = document.getElementById("Weight").value;
    var age = document.getElementById("Age").value;

    if (document.getElementById("Female").value == true) {
        
        var bmr = (655.0955 + (9.5634 * weight) + (1.8496 * height) - (4.6756 * age));            
        return(bmr);
        
    }

    else {
         var bmr = 66.4730 + (13.7516 * weight) + (5.0033 * height) - (6.7550 * age);
         return(bmr);
    }      
}

function SubmitInfo() {
    var age = document.getElementById("Age");
    var weight = document.getElementById("Weight");
    var height = document.getElementById("Height");

    (age.value && weight.value && height.value) ?
        alert(CalculateBmi()) : alert("Enter value");
}

document.getElementById("submit").addEventListener("click", SubmitInfo, false);


function CalculateBmiMetric() {
    //var gender = document.getElementById("Female").value;
    var inches = document.getElementById("Inches").value;
    var foot = document.getElementById("Foot").value
    var weight = document.getElementById("Weight").value;
    var age = document.getElementById("Age").value;

    if (document.getElementById("Female").value == true) {

        var bmr = 655 + (4.35 * weight) + (4.7 * inches * foot) - (4.7 * age);
        document.write(bmr);
    }

    else {
        var bmr = 66 + (6.2 * weight) + (12.7 * inches * foot) - (6.76 * age);
        document.write(bmr);
    }
}

//function SubmitInfoI() {
//    var age = document.getElementById("Age");
//    var weight = document.getElementById("Weight");
//    var inches = document.getElementById("Inches");
//    var foot = document.getElementById("Foot");

//    (age.value && weight.value && inches.value && foot.value) ?
//        alert(CalculateBmiMetric()) : alert("Enter value");
//}

//document.getElementById("submitI").addEventListener("click", SubmitInfoi, false);





