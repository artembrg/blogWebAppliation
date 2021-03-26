window.onresize = function() { //Defines the correct display of the page
    let height = window.innerHeight;
    let main_content = document.getElementsByClassName('main-content')[0];
    main_content.style.height = 'auto';
    if (main_content.scrollHeight <= height - 150) {
        main_content.style.height = height - 150 + 'px';
    }
}