var modal = document.getElementById('contactmodal');

var btn = document.getElementById("contactbtn");

var span = document.getElementsByClassName("contactclose")[0];

btn.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}