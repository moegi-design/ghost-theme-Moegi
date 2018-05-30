# Moegi「萌黄」 - 一个优雅的Ghost主题

[博客介绍页](https://blog.ddiu.site/ghost-theme-moegi/)

陆陆续续跟风玩过不少的博客= =...从 Wordpress 转到 Typecho 再到现在的 Ghost..
试过 Ghost 之后发现嗯，好，是我想要的，于是就这么留下来了...

Ghost 0.x版本默认的 Casper 十分好看，可惜1.0版本之后就改成 cms 样式了...
所以抽了点时间自己写了一套，起名为 Moegi 。

### 特性

* 标签云
* 归档页
* 文章目录
* 评论功能
* 按标题搜索

[Features Todo List](https://github.com/ddiu8081/ghost-theme-Moegi/issues/2)

### Screenshot & Demo

![index](http://ostfcwjy3.bkt.clouddn.com/18-5-24/82860263.jpg)
![article](http://ostfcwjy3.bkt.clouddn.com/18-5-24/61599666.jpg)

> 本站准备了一篇主题样式测试的文章，展示了长文排版、文字样式等效果，欢迎访问
>  
> [主题样式测试](https://blog.ddiu.site/theme-test/)  
> [博客Demo](https://blog.ddiu.site)

## 更新日志

* 2017.10.02 v1.0.0 Moegi主题完成
* 2018.02.16 v1.1.0 添加代码高亮
* 2018.05.23 v1.2.0 使用[Typo.css](https://typo.sofi.sh/)重构了页面的行距等样式；代码高亮更换为[Highlight.js](https://highlightjs.org/)；背景改为#ffffff；超链接、强调色、引用等其他样式更改
* 2018.05.24 v1.3.0 添加归档页；细节优化
* 2018.05.24 v1.4.0 添加文章目录
* 2018.05.25 v1.4.1 标签云支持显示为独立页面
* 2018.05.26 v1.4.2 添加404页面
* 2018.05.26 v1.5.0 添加评论功能
* 2018.05.27 v1.5.1 修复在非https站下无法加载库文件的bug
* 2018.05.28 v1.6.0 添加文章搜索功能；新增多个配置项以控制功能的开启
* 2018.05.30 v1.7.0 支持显示作者信息，默认隐藏；完善作者页面

## 下载与使用

### 主题下载

在[Github](https://github.com/ddiu8081/ghost-theme-Moegi)下载zip后，上传到Ghost后台即可。

### 主题配置

#### 搜索、评论与目录功能

本主题使用 [Valine](https://valine.js.org/) 作为评论系统。要开启评论功能，请参照 [这篇教程](https://valine.js.org/quickstart/#appidappkey) 注册 LeanCloud 并获取 appId 和 appKey（注意配置好安全域名）。

然后进入 Ghost 后台 - Code injection，在`Blog Header`中插入以下代码：

```
<script>
    var show_search = true; //是否开启搜索功能，默认为true
    var show_toc = true; //是否开启文章目录，默认为true
    var show_valine = true; //是否开启评论功能，默认为true
    var show_author = false; //是否开启文章底部作者信息，默认为false
    
    //要开启评论功能需正确填写lc_appId与lc_appKey，并保证show_valine为true
    var lc_appId = '这里填上面获得的appid';
    var lc_appKey = '这里填上面获得的appkey';
</script>
```

搜索、评论、文章目录功能均可以通过修改上述配置项进行开启与关闭。

注：**搜索功能目前仅支持标题搜索**。

#### 归档页

在 Ghost 后台新建独立页面（勾选`Turn this post into a page`），标题随意（如`归档`），页面地址为`archives`，在设置中添加指向该地址的菜单即可。

#### 标签云

默认显示在首页底部。如要做成单独页面方法同上，在 后台新建独立页面，页面地址为`tags`，最后修改菜单即可。

### 注意事项

1. 该主题仅适用于 Ghost 1.0 及以上版本，0.x版本不支持。
2. 欢迎 Fork 本项目并修改成自己喜欢的样子。欢迎提 issue。

## 其他

### 致谢

该主题在Casper基础上修改，并引用了如下代码及框架：

* [Typo.css](https://github.com/sofish/typo.css)：中文网页重设与排版，构建最适合中文阅读的网页排版。
* [Highlight.js](https://highlightjs.org/)：一个出色的代码高亮插件。
* [Moment.js](http://momentjs.cn/)：js时间处理插件，用于归档页面。
* [jQuery](https://jquery.com/)：最流行的JavaScript工具库。
* [@ldsun](https://ldsun.com/2016/07/23/ghost-archives/)：归档页实现灵感来源。
* [jquery.tocify.js](https://github.com/gfranko/jquery.tocify.js)：快速生成动态文章目录，并且有scrollspy功能。
* [Valine](https://valine.js.org/)：一款快速、简洁且高效的无后端评论系统。

### License

MIT

