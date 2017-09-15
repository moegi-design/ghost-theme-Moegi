## Configuration

In the Ghost admin page, navigate to the `Code Injection` section, create a script tag, and create a global object named `decentThemeConfig`. This object is needed as the third party serivce's configuration will define in this object.

```html
<script>
    var decentThemeConfig = {};
</script>
```

### Google Analytics service configuration

Add a `ga` key to the `decentThemeConfig` object, and set its value to your Google Analytics track id.

```html
<script>
    var decentThemeConfig = {
        ga: 'YOUR TRACK ID'
    };
</script>
```

### Duoshuo comment service configuration

Add a `duoshuo` key to the `decentThemeConfig` object, and set its value to your Duoshuo service's short name.

```html
<script>
    var decentThemeConfig = {
        duoshuo: 'YOUR DUOSHUO SHORT NAME'
    };
</script>
```

### Disqus comment service configuration

Add a `disqus` key to the `decentThemeConfig` object, and set its value to your disqus service's short name.

```html
<script>
    var decentThemeConfig = {
        disqus: 'YOUR DISQUS SHORT NAME'
    };
</script>
```


> #### What is my disqus short name?
> 
> When you're setting up your disqus account, it will ask you to create a unique Disqus URL, and this URL will also become your site's "shortname". For example, my Disqus URL is: `https://serenader.disqus.com`, so my shortname is 'serenader'.

### How to enable syntax highlighting

[decent](https://github.com/serenader2014/decent) use [Prism.js](http://prismjs.com/index.html) to support the syntax highlighting, it's easy to work with Ghost.

In your markdown content, you just need to specify your code block's language, like this:


    ```html
    <script>
        var decentThemeConfig = {
            ga: 'YOUR TRACK ID'
        };
    </script>
    ```

    ```javascript
    Array.prototype.uniq = function () {
        var map = {};
        return this.filter(function (item) {
            if (map[item]) {
                return false;
            } else {
                map[item] = true;
                return true;
            }
        });
    };
    ```

And it's done! 

Default supported languages are:

- Markup
- CSS
- C-like
- JavaScript
- Bash
- C
- C#
- C++
- CoffeeScript
- CSS Extras
- Docker
- Elixir
- Erlang
- Git
- Go
- Handlebars
- HTTP
- Jade
- JSON
- Less
- Makefile
- Markdown
- Nginx
- Objective-C
- Perl
- PHP
- PHP Extras
- Powershell
- Python
- React JSX
- Ruby
- Rust
- Sass(Sass/Scss)
- Swift
- TypeScript
- Vim

If you want to add more language support, follow these instructions:

1. Go to [Prism.js download page](http://prismjs.com/download.html), and select the language that you want to enable, and click download, then place the file in `Ghost/content/themes/decent/assets/js`.
2. Delete the old `bundle.min.js`.
3. In the decent theme folder, run `npm install`, and run `gulp js`.
4. It's done! Restart your Ghost and see the result.
