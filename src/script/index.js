(function () {
    var content = document.querySelector('#html-wrapper');
    var title = document.querySelector('title');
    var goToTop = document.querySelector('.go-to-top');
    var html = document.querySelector('html');
    var body = document.body;
    var windowHeight = document.documentElement.clientHeight;
    var timeoutHandler;
    var requestList = [];
    var progress = new Progress();
    var scrollingStep = 100;
    var fadingStep = 0.05;
    var slice = [].slice;

    // make sure `decentThemeConfig` is exist.
    if (typeof decentThemeConfig === 'undefined') {
        window.decentThemeConfig = {};
    }

    function getStyle(element, prop) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(element).getPropertyValue(prop);
        } else if (element.currentStyle) {
            return element.currentStyle[prop];
        } else {
            return '';
        }
    }

    function match(element, selector) {
        var p = Element.prototype;
        var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
            return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
        };
        return f.call(element, selector);
    }

    function get(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                requestList.splice(requestList.indexOf(url), 1);
                if (!requestList.length) {
                    progress.end();
                }
                callback(xhr.responseText);
            }
        };
        requestList.push(url);
        if (progress.status !== 'loading') {
            progress.start();
        }
        xhr.open('GET', url, true);
        xhr.send(null);
    }

    function fadeOut(element, callback) {
        var currentOpacity = getStyle(element, 'opacity') || 1;
        var opacity = Number(currentOpacity) - fadingStep;
        element.style.opacity = opacity < 0 ? 0 : opacity;

        setTimeout(function () {
            if (opacity > 0) {
                fadeOut(element, callback);
            } else {
                element.style.display = 'none';
                typeof callback === 'function' && callback();
            }
        }, 10);
    }

    function fadeIn(element, callback) {
        var currentOpacity = getStyle(element, 'opacity') || 1;
        var display = getStyle(element, 'display');
        if (display === 'none') {
            element.style.display = 'block';
            currentOpacity = 0;
        }
        var opacity = Number(currentOpacity) + fadingStep;
        element.style.opacity = opacity > 1 ? 1 : opacity;
        setTimeout(function () {
            if (opacity < 1) {
                fadeIn(element, callback);
            } else {
                typeof callback === 'function' && callback();
            }
        }, 10);
    }

    function scrollToTop(animate, distance, callback) {
        var currentTop = body.scrollTop;
        var direction = currentTop > distance ? -1 : 1;
        if (!animate) {
            body.scrollTop = distance;
            html.scrollTop = distance;
            return;
        }
        setTimeout(function () {
            var top;

            if (direction === 1) {
                top = currentTop + scrollingStep;
                body.scrollTop = top > distance ? distance : top;
                html.scrollTop = top > distance ? distance : top;
            } else {
                top = currentTop - scrollingStep;
                body.scrollTop = top < distance ? distance : top;
                html.scrollTop = top < distance ? distance : top;
            }

            if ((direction === 1 && top > distance) || (direction === -1 && top < distance)) {
                typeof callback === 'function' && callback();
            } else {
                scrollToTop(animate, distance, callback);
            }
        }, 10);
    }

    // loading page using ajax
    function loadHTML(url) {
        fadeOut(content, function () {
            scrollToTop(false, 0);
            get(url, function (response) {
                var tmpElement = document.createElement('div');
                tmpElement.innerHTML = response;
                content.innerHTML = tmpElement.querySelector('#html').innerHTML;
                fadeIn(content, function () {
                    runScript(true);
                });

                var titleRegExp = /<title[^>]*>((.|[\n\r])*)<\/title>/im;
                var result = titleRegExp.exec(response);
                if (result.length && result[1]) {
                    title.innerText = result[1];
                }
                if (decentThemeConfig.ga) {
                    ga('send', 'pageview', url);
                }
            })
        })
    }

    // load comment
    function loadComment() {
        if (decentThemeConfig && decentThemeConfig.duoshuo) {
            document.querySelector('.ds-thread').style.display = 'block';
            window.duoshuoQuery = {short_name: decentThemeConfig.duoshuo};
            var ds = document.createElement('script');
            ds.type = 'text/javascript';ds.async = true;
            ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
            ds.charset = 'UTF-8';
            (document.head || document.body).appendChild(ds);
        }
        if (decentThemeConfig && decentThemeConfig.disqus) {
            document.querySelector('#disqus_thread').style.display = 'block';
            var disqus_config = function () {
                this.page.url = '{{post.url}}';
                this.page.identifier = '{{post.id}}';
            };
            var d = document, s = d.createElement('script');
            s.src = '//' + decentThemeConfig.disqus + '.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        }
    }

    // get image's real size
    function getImageRealSize(image, callback) {
        var src = image.getAttribute('src');
        var newImg = new Image();
        newImg.addEventListener('load', function () {
            // save all the image's original size, will use in photoswipe
            image.setAttribute('data-width', newImg.width);
            image.setAttribute('data-height', newImg.height);
            typeof callback === 'function' && callback({width: newImg.width, height: newImg.height});
        });
        newImg.src = src;
    }

    function fitVids() {
        if(!document.querySelector('#fit-vids-style')) {
            // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
            var head = document.head || document.getElementsByTagName('head')[0];
            var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
            var div = document.createElement('div');
            div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
            head.appendChild(div.childNodes[1]);
        }

        var selectors = [
            "iframe[src*='player.vimeo.com']",
            "iframe[src*='youtube.com']",
            "iframe[src*='youtube-nocookie.com']",
            "iframe[src*='kickstarter.com'][src*='video.html']",
            "object",
            "embed"
        ];

        var allVideos = slice.call(document.querySelectorAll(selectors.join(',')));

        allVideos.forEach(function(video){
            var tagName = video.tagName.toLowerCase();
            var h = video.getAttribute('height');
            var w = video.getAttribute('width');
            if (tagName === 'embed' && findParents(video, 'object') || findParents('.fluid-width-video-wrapper')) {
                return;
            }

            var height = (tagName === 'embed' || (h && !isNaN(parseInt(h, 10)))) ? parseInt(h, 10) : video.height;
            var width = !isNaN(parseInt(w, 10)) ? parseInt(w, 10) : video.width;
            var aspectRatio = height / width;

            if (video.getAttribute('id')) {
                var videoID = 'fitvid' + Math.floor(Math.random() * 9999999);
                video.setAttribute('id', videoID);
            }

            var wrapper = document.createElement('div');
            wrapper.classList.add('fluid-width-video-wrapper');
            video.parentNode.insertBefore(wrapper, video);
            video.parentNode.removeChild(video);
            wrapper.appendChild(video);
            wrapper.style.height = (aspectRatio * parseInt(getStyle(wrapper, 'width'), 10)) + 'px';
            video.removeAttribute('width');
            video.removeAttribute('height');
        });
    }

    // run scripts in every page
    function runScript(ajax) {
        var postContent = document.querySelector('.post-content');
        fitVids();

        if (!postContent) return;
        var images = slice.call(postContent.querySelectorAll('img'));
        images.forEach(function (item) {
            getImageRealSize(item);
        });

        if (ajax) {
            goToTop = document.querySelector('.go-to-top');
            Prism.highlightAll();
        }
    }

    // use ajax to loage webpage instead of a normal page request.
    function loadPageWithAjax() {
        // listen to the history change, load the target page
        window.addEventListener('popstate', function (e) {
            if (e.state && e.state.pathname) {
                loadHTML(e.state.pathname);
            }
        });

        window.history.pushState({ pathname: location.pathname }, location.pathname, location.pathname)

        // hook all the internal link, when user click the link,
        // perform an ajax request, and prevent the default behavior
        delegate(document, 'click', 'a', function (e) {
            if (this.hostname !== location.hostname) return;
            e.preventDefault();
            var pathname = this.pathname;
            window.history.pushState({ pathname: pathname }, pathname, pathname);
            loadHTML(pathname);
        })
    }

    function delegate(agent, type, selector, fn) {
        agent.addEventListener(type, function (e) {
            var target = e.target;
            if (match(target, selector)) {
                fn.call(target, e);
            }
        });
    }

    function findParents(element, selector) {
        if (!element.parentNode || element.parentNode == document) {
            return null;
        }
        if (match(element.parentNode, selector)) {
            return element.parentNode;
        } else {
            return findParents(element.parentNode, selector);
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        runScript();

        // enable the ajax load only if the browser support history and pushState
        if (window.history && window.history.pushState) {
            loadPageWithAjax();
        }
    });

    //  goToTop button
    document.addEventListener('scroll', function () {
        if (document.documentElement.clientWidth <= 500) {
            return;
        }
        var top = body.scrollTop;
        if (top > windowHeight/2 && getStyle(goToTop, 'display') !== 'block') {
            goToTop.classList.remove('hide');
            goToTop.classList.add('show');
        }
        if (top <= windowHeight/2 && getStyle(goToTop, 'display') === 'block') {
            goToTop.classList.remove('show');
            goToTop.classList.add('hide');
        }
        if (timeoutHandler) {
            clearTimeout(timeoutHandler);
        }

        goToTop.classList.remove('less-opacity');
        timeoutHandler = setTimeout(function () {
            goToTop.classList.add('less-opacity');
        }, 2000);
    });

    delegate(document, 'click', '.go-to-top', function () {
        scrollToTop(true, 0);
    })

    // album image slider
    delegate(document, 'click', '.album img', function () {
        var self = this;
        var album = findParents(this, '.album');
        var items = [];
        var imgList = slice.call(album.querySelectorAll('img'));
        var index;

        imgList.forEach(function (img, idx) {
            var src = img.getAttribute('src');
            var title = img.parentNode.querySelector('figcaption');
            var option = {
                src: src,
                w: img.getAttribute('data-width') || img.width,
                h: img.getAttribute('data-height') || img.height,
                index: idx,
            };
            if (title) {
                option.title = title.innerText;
            }
            items.push(option);
            if (img === self) {
                index = idx;
            }
        });

        var pswpElement = document.querySelector('.pswp');

        var options = {
            index: index,
            history: false,
        };

        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    });

    // post image slider
    delegate(document, 'click', '.post-content img', function () {
        var img = this;
        if (findParents(this, '.album')) {
            return;
        }
        var pswpElement = document.querySelector('.pswp');
        var options = {
            index: 0,
            history: false,
        };
        var items = [{
            src: img.getAttribute('src'),
            w: img.getAttribute('data-width') || img.width,
            h: img.getAttribute('data-height') || img.height,
        }];

        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    });

    // load comment
    delegate(document, 'click', '.load-comments button', function () {
        loadComment();
        this.style.display = 'none';
    });

    // GA
    if (decentThemeConfig.ga) {
        var trackId = decentThemeConfig.ga;
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', trackId, 'auto');
        ga('send', 'pageview');
    }
})();
