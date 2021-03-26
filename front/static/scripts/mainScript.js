window.onresize = function() { //Defines the correct display of the page
    let height = window.innerHeight;
    let main_content = document.getElementsByClassName('main-content')[0];
    main_content.style.height = 'auto';
    let main_content_button = document.getElementsByClassName('main-content__go-further')[0];
    if (main_content_button.scrollHeight <= height - 150) {
        main_content.style.height = height - 150 + 'px';
    }
}

function changePic(ord) { //"Activates" the button
    let pic = document.getElementsByClassName('main-content__go-further-img')[Number(ord)];
    pic.src = "../static/images/hovered_template" + ord + ".png";
}

function changePicBack(ord) { //"Deactivates" the button
    let pic = document.getElementsByClassName('main-content__go-further-img')[Number(ord)];
    pic.src = "../static/images/template" + ord + ".png";
}