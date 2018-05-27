/**
 * GhostBot: A Simple Common Search Engine based on Ghost API
 * author: Luna Shu
 * Git: https://github.com/LunaYJ/GhostBot.git
 * coding: https://git.coding.net/lunayj/GhostBot.git
 * https://luna.fancylog.net/
 *
 * Forked from https://github.com/wssgcg1213/ghostbot
 * Original Author: ZeroLing
 * Original Author Blog: http://www.zeroling.com/
 *
 */
function Ajax() {
  "use strict";
  var aja = {};
  aja.tarUrl = '';
  aja.postString = '';
  aja.createAjax = function() {
    var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    return xmlhttp;
  }
  aja.xhr = aja.createAjax();
  aja.processHandler = function() {
    if (aja.xhr.readyState == 4)
      if (aja.xhr.status == 200)
        aja.resultHandler(aja.xhr.responseText);
  }
  aja.get = function(tarUrl, callbackHandler) {
    aja.tarUrl = tarUrl;
    aja.resultHandler = callbackHandler;
    aja.xhr.onreadystatechange = aja.processHandler;
    aja.xhr.open('get', aja.tarUrl, true);
    aja.xhr.send();
  }
  return aja;
}
var GhostBot = function(options) {
  this.defaults = {
    result_template: "<a href='{{link}}' class='searchResult'>{{title}}</a>",
    info_template: "<h4>Find{{amount}}Articles.</h4>",
  }
  var opts = this.extend({}, this.defaults, options);
  if (opts.inputbox) this.init(opts);
}
GhostBot.prototype.extend = function() {
  var _arg = Array.prototype.slice.call(arguments);
  for (var i = _arg.length - 1; i > 0; i--) {
    var former = _arg[i - 1],
      latter = _arg[i];
    for (j in latter) former[j] = latter[j];
  }
  return _arg[0];
}
GhostBot.prototype.init = function(opts) {
  var that = this;
  this.result_template = opts.result_template;
  this.info_template = opts.info_template;
  this.target = opts.target;
  this.inputbox = opts.inputbox;
  this.blogData = [];
  this.ajax = new Ajax();
  this.loadAPI();
}
GhostBot.prototype.loadAPI = function(){
  if (this.inited) return false;
  var index = this.index;
  var that = this;
  var obj		= {limit: "all",  include: "tags"};
  var maxLength = 120;
  var blogData = [];
  this.ajax.get(ghost.url.api('posts',obj), function(data) {
    var searchData = JSON.parse(data).posts;
    searchData.forEach(function(arrayItem){
      var tag_arr = arrayItem.tags.map(function(v) {
        return v.name;
      })
      if(arrayItem.meta_description == null) { arrayItem.meta_description = '' };
      var category = tag_arr.join(", ");
      if (category.length < 1){
        category = "undefined";
      }
      var parsedData 	= {
        id 			: String(arrayItem.id),
        title 		: String(arrayItem.title),
        slug : String(arrayItem.slug),
        url: String(arrayItem.url),
        markdown 	: String(arrayItem.markdown),
        pubDate 	: String(arrayItem.created_at.split('T')[0]),
        tag 		: category,
        link 		: String(arrayItem.url),
        description	: String(arrayItem.markdown.substr(0, maxLength)),
        content : arrayItem.markdown
      };
      blogData.push(parsedData);
    });
    that.items = blogData;
    that.inited = true;
    that.listen();
  })
}
GhostBot.prototype.listen = function() {
  var that = this;
  this.inputbox.onkeyup = function() {
    var ele = that.inputbox;
    if (!ele.value) return that.target.innerHTML = '';
    var _r = that.search(ele.value); //[{}, {}]
    var info_parsed = that.format(that.info_template, {
      amount: _r.length
    });
    var _HTML = info_parsed;
    for (i in _r) _HTML += that.format(that.result_template, _r[i]);
    that.target.innerHTML = _HTML;
  }
}
GhostBot.prototype.format = function(text, obj) {
  return text.replace(/{{([^{}]*)}}/g, function(a, b) {
    var r = obj[b];
    return typeof r === "string" || typeof r === "number" ? r : a
  })
}
GhostBot.prototype.search = function(kw) {
  var that = this;
  var _result = [];
  var _reg = new RegExp(kw.toLowerCase());
  this.items.forEach(function(i) {
    var content = i.markdown;
    var title = i.title;
    var pubDate = i.pubDate,
      url = i.url,
      slug = i.slug,
      description	= i.description;
    if(_reg.test(title.toLowerCase() + content.toLowerCase() + url.toLowerCase())){
      var link = i.link;
      _result.push({
        title: title,
        link: link,
        content: content,
        pubData : i.pubDate,
        description : i.description
      })
    }
  });
  return _result;
}
