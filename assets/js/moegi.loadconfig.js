if (typeof main_color == 'undefined') {
    var main_color = '#86B81B';
}
document.body.style.setProperty('--main-color', main_color);

/* 配置项读取 */
/* INDEX SEARCH */
if (typeof show_search == 'undefined') {
    var show_search = true;
}
if (!show_search) {
    $("#search-btn").hide();
    $(".non-nav").hide();
}

/* AUTHOR-CARD */
if (typeof show_author == 'undefined') {
    var show_author = false;
}
if (!show_author) {
    $("#author-card").hide();
}

/* INDEX-TAG-CLOUD */
if (typeof show_index_tag == 'undefined') {
    var show_index_tag = true;
}
if (!show_index_tag) {
    $("#index-tag-cloud").hide();
}

/* FOOTER-TEXT */
if (typeof footer_text == 'undefined') {
    var footer_text = "";
}
if (footer_text) {
    $("#footer-text").text(" | " + footer_text);
} 