function CheckBox() {
    var firstentry = document.getElementById("Fentry");
    var secondentry = document.getElementById("Sentry")
    var checkbox = document.getElementById("Check");

    if (checkbox.checked == true) {

        document.getElementById('Fname').addEventListener("click", moveContent);
    }
}
function moveContent() {
    document.getElementById('Fentry').textContent = document.getElementById('Sentry').textContent;
}



document.getElementById("Check").addEventListener("click", CheckBox, false);

function Validility() {
    var streetAdd = document.getElementById("StreetAdd").checkValidity();
    streetAdd.setCustomValidity("Please enter your address")
}

document.getElementById("StreetAdd").addEventListener("submit", Validility, false)

