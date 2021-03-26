window.onresize = function() { //Defines the correct display of the page
    let height = window.innerHeight;
    let content_body = document.getElementsByClassName('main-content__articles')[0];
    content_body.style.height = 'auto';
    if (content_body.scrollHeight <= height - 180) {
        content_body.style.height = height - 180 + 'px';
    }
}

window.onscroll = function() { //With scrolling the "Articles" page down new content will be "loaded" with packs of five (or less if count of hidden content is less than 5) articles
    let scroll_height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight,
                                document.body.offsetHeight, document.documentElement.offsetHeight,
                                document.body.clientHeight, document.documentElement.clientHeight)
    if (window.pageYOffset > scroll_height - window.innerHeight - 1) {
        let hidden_content = document.getElementsByClassName('main-content__article-hidden');
        let hidden_img = document.getElementsByClassName('article__img-hidden');
        let hidden_topic = document.getElementsByClassName('article__name-hidden');
        let hidden_description = document.getElementsByClassName('article__description-hidden');
        if (hidden_content.length < 5) {
            console.log(window.pageYOffset, scroll_height - window.innerHeight - 100);
            for (let i = 0; i < hidden_content.length; i++) {
                hidden_content[i].className = 'main-content__article';
                hidden_img[i].className = 'article__img';
                hidden_topic[i].className = 'article__name';
                hidden_description[i].className = 'article__description';
            }
        }
        else {
            for (let i = 0; i < 5; i++) {
                hidden_content[i].className = 'main-content__article';
                hidden_img[i].className = 'article__img';
                hidden_topic[i].className = 'article__name';
                hidden_description[i].className = 'article__description';
            }
        }
    }
}