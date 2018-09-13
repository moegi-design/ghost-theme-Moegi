NProgress.start();

window.onscroll = function () {
    "use strict";
    var goTop = document.getElementById("go-to-top");
    if (goTop) {
        goTop.style.display = document.documentElement.scrollTop >= 200 || document.body.scrollTop >= 200 ? 'block' : 'none';
        goTop.onclick = function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };
    }
};

/* SEARCH 功能 */

$("#search-btn").click(function () {
    $(".top-nav #navigation").hide();
    $(".top-nav #input-div").fadeIn();
    $("#search-btn").hide()
    $('.top-nav input').focus();
});

$("#close-btn").click(function () {
    $(".top-nav #navigation").fadeIn();
    $(".top-nav #input-div").hide();
    $("#search-btn").fadeIn();
    $("#archives-list").hide();
    $("#articles").show();
    $("#search-input").val("");
});

$("#search-input").on('input propertychange', function () {
    $("#archives-list").html("");
    var str = $("#search-input").val()
    if (str.length >= 2) {
        $("#articles").hide();
        $("#archives-list").show();
        var amount = 0;
        $.get(ghost.url.api('posts', {
            limit: 'all',
            order: "published_at desc"
        })).done(function (data) {
            var posts = data.posts;
            var count = posts.length;
            for (var i = 0; i < count; i++) {
                if (posts[i].title.toLowerCase().indexOf(str.toLowerCase()) != -1) {
                    amount++;
                    var time = moment(posts[i].published_at);
                    var title = posts[i].title;
                    var url = posts[i].url;

                    var html = "<div class='search-item'><time>" + time.format("YYYY-MM-DD") + "</time><a href='" + url + "'>" + title + "</a></div>";
                    $(html).appendTo("#archives-list");
                }

            }
            if (amount == 0) {
                var html = "<div class='no-result'>没有结果</div>";
                $(html).appendTo("#archives-list");
            }
            $("#search-meta").text('搜索到' + amount + '篇文章');
        }).fail(function (err) {
            console.log(err);
        });
    } else {
        $("#articles").show();
        $("#archives-list").hide();
    }
});

$(window).on('load', function () {

    NProgress.done();
});