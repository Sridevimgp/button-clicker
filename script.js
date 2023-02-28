console.log("page loaded...");

function login(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function hide(el) {
    el.remove();
}
