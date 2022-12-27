function unhide(){
    var nav = document.getElementById("nav");
    nav.style.display = "block"; 
    var menu = document.getElementById("menu");
    menu.style.display = "none";
    var close = document.getElementById("close");
    close.style.display = "block";
}
function hide(){
    var nav = document.getElementById("nav");
    nav.style.display = "none"; 
    var menu = document.getElementById("menu");
    menu.style.display = "block";
    var close = document.getElementById("close");
    close.style.display = "none";
}
