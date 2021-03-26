window.onresize = function() {//Defines the correct display of the page
    let height = window.innerHeight;
    let main_content = document.getElementsByClassName('main-content')[0];
    main_content.style.height = 'auto';
    let main_content_form = document.getElementById('add-article');
    if (main_content_form.scrollHeight <= height - 150) {
        main_content.style.height = height - 150 + 'px';
    }
}