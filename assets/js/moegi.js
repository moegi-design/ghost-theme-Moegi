window.onscroll = function () {
    var goTop = document.getElementById("go-to-top");
    if (goTop) {
        goTop.style.display = document.documentElement.scrollTop >= 200 || document.body.scrollTop >= 200 ? 'block' : 'none';
        goTop.onclick = function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };
    }
};
