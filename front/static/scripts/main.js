window.addEventListener('scroll', function() { //This function activates button to scroll up if it's possible
    let scrollUpButton = document.getElementById('scrollUp');
    if (window.pageYOffset !== 0) {
        if (window.innerWidth > 1500) {
            scrollUpButton.style.fontSize = "30px";
        }
        else {
            scrollUpButton.style.fontSize = "15px";
        }
    }
    else {
        scrollUpButton.style.fontSize = "0";
    }
})

function scrollUp() { //Pressing the "scroll up" button will call this function
    let scrollUpButton = document.getElementById('scrollUp');
    window.scrollBy(0, -window.pageYOffset);
    scrollUpButton.style.fontSize = "0";
}