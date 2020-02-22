<script>
  import { siteInfo } from "./stores.js";
  import { Router, Route, links } from "svelte-routing";
  import Index from "./routes/Index.svelte";
  import Post from "./routes/Post.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";

  const api = window.ghostAPI;

  const getSiteInfo = async () => {
    const info = await api.settings.browse();
    siteInfo.set(info);
    console.log($siteInfo);
  };
  getSiteInfo();

  export let url = "";
</script>

<style lang="scss" global>
  @import "css/variables";
  @import "css/mixins";

  html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-rendering: optimizelegibility;
  }

  body {
    font: 400 16px/1.8 PingFang SC, Lantinghei SC, Microsoft Yahei,
      Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
    margin: 0;
    padding: 0;
    background: var(--color-background);
    min-height: 100vh;
    border: 1px solid transparent;
  }

  ins, a {
    text-decoration: none;
  }

  body, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td, hr, button, article, aside, details, figcaption, figure, footer, header, menu, nav, section {
    margin: 0;
    padding: 0;
    font-weight: normal;
    vertical-align: baseline;
  }

  ul, ol {
    list-style: none;
  }

  .bg-white {
    background: #ffffff;
  }

  .gh-viewport {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  .gh-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px 32px;
    @include respond-to(sm) {
      padding: 40px 100px;
    }
  }

  // TODO
  .kg-width {
    &-wide,
    &-full {
      display: none;
    }
  }
  .kg-gallery {
    &-container,
    &-row,
    &-image {
      display: none;
    }
  }
  .kg-bookmark {
    &-card,
    &-container,
    &-content,
    &-title,
    &-description,
    &-metadata,
    &-icon,
    &-author,
    &-publisher,
    &-thumbnail {
      display: none;
    }
  }
</style>

<template>
  <Router {url}>
    <div class="gh-viewport" use:links>
      <Header />
      <main>
        <Route path="/:slug" component={Post} />
        <Route path="/" component={Index} />
      </main>
      <Footer />
    </div>
  </Router>
</template>
