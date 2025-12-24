//slider code
var index = 0;
var direction = 1; 
var track = document.getElementById("track");
var slides = document.querySelectorAll(".slider-track img");

function slide() {
    if (index === slides.length - 1) {
        direction = -1;
    } else if (index === 0) {
        direction = 1;
    }
    index += direction;
    
    track.style.transform = "translateX(-" + (index * 100) + "%)";
}
setInterval(slide, 3000);

window.onload = function() {
    setTimeout(slide, 3000);
};

// redircting to details page 
function goToDetails(id) {
        localStorage.setItem('selectedCard', id);
        window.location.href = 'details.html';
}