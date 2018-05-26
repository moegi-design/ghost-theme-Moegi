# Moegi「萌黄」 - 一个优雅的Ghost主题

[博客介绍页](https://blog.ddiu.site/ghost-theme-moegi/)

陆陆续续跟风玩过不少的博客= =...从 Wordpress 转到 Typecho 再到现在的 Ghost..
试过 Ghost 之后发现嗯，好，是我想要的，于是就这么留下来了...

Ghost 0.x版本默认的 Casper 十分好看，可惜1.0版本之后就改成 cms 样式了...
所以抽了点时间自己写了一套，起名为 Moegi。

## 设计风格

简约。单栏。
主色调为Moegi（萌黄）。

主题名称和主要颜色的来源取自[NIPPON COLORS - 日本の伝統色](http://nipponcolors.com)。这是一个相当文艺的取色网站，收录的几百种颜色全部是日本的传统颜色，十分耐看，同时名字也非常好听。比如一斥染、柳染、利休茶等等。强烈建议颜色方面没有灵感的话来这里看看~

~~主题的文字为[思源宋体](https://source.typekit.com/source-han-serif/cn/)。这是Adobe与Google联合发布的一套开源字体，个人感觉放在网页里真心好看😂~~（180523：思源宋体已从主题移除）

### 特性

* 标签云
* 归档页
* 文章目录
* 顶部进度条（待实现）
* 评论功能（待实现）

[Features Todo List](https://github.com/ddiu8081/ghost-theme-Moegi/issues/2)

### Screenshot & Demo

![index](http://ostfcwjy3.bkt.clouddn.com/18-5-24/82860263.jpg)
![article](http://ostfcwjy3.bkt.clouddn.com/18-5-24/61599666.jpg)

[Demo](https://blog.ddiu.site)

## 更新日志

* 2017.10.02 v1.0.0 Moegi主题完成
* 2018.02.16 v1.1.0 添加代码高亮（使用[prism.js](http://prismjs.com)）
* 2018.05.23 v1.2.0 使用[Typo.css](https://typo.sofi.sh/)重构了页面的行距等样式；代码高亮更换为[Highlight.js](https://highlightjs.org/)；背景改为#ffffff；超链接、强调色、引用等其他样式更改
* 2018.05.24 v1.3.0 添加归档页；细节优化
* 2018.05.24 v1.4.0 添加文章目录
* 2018.05.25 v1.4.1 标签云支持显示为独立页面
* 2018.05.26 v1.4.2 添加404页面

## 下载与使用

### 主题下载

在[Github](https://github.com/ddiu8081/ghost-theme-Moegi)下载zip后，上传到Ghost后台即可。

### 注意事项

1. 归档页的使用：在 Ghost 后台新建独立页面（勾选`Turn this post into a page`），标题随意（如`归档`），页面地址为`archives`，在设置中添加指向该地址的菜单即可。
2. 标签云的使用：默认显示在首页底部。如要做成单独页面方法同上，在 后台新建独立页面，页面地址为`tags`，最后修改菜单即可。
3. 主题免费使用，但请勿修改底部版权信息（虽然颜色已经调得快看不见了😂）。
4. 该主题仅适用于 Ghost 1.0 及以上版本，0.x版本不支持。
5. 欢迎 Fork 本项目并修改成自己喜欢的样子。欢迎提 issue。

## 其他

### 致谢

该主题在Casper基础上修改，并引用了如下代码及框架：

* [Typo.css](https://github.com/sofish/typo.css)：中文网页重设与排版，构建最适合中文阅读的网页排版。
* [Highlight.js](https://highlightjs.org/)：一个出色的代码高亮插件。
* [Moment.js](http://momentjs.cn/)：js时间处理插件，用于归档页面。
* [jQuery](https://jquery.com/)：最流行的JavaScript工具库。
* [@ldsun](https://ldsun.com/2016/07/23/ghost-archives/)：归档页实现灵感来源。
* [jquery.tocify.js](https://github.com/gfranko/jquery.tocify.js)：快速生成动态文章目录，并且有scrollspy功能。

### License

MIT
