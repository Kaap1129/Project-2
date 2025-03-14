window.onresize = screen;
window.onload = screen;

function screen() {
width = window.innerWidth;
document.getElementById("size").innerHTML = "Width : " + width + " px"
}