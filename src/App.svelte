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

  body {
    font: 400 16px/1.8 PingFang SC, Lantinghei SC, Microsoft Yahei,
      Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
    margin: 0;
    padding: 0;
    background: var(--color-background);
    min-height: 100vh;
    border: 1px solid transparent;
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font-weight: normal;
    vertical-align: baseline;
  }

  .gh-viewport {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px 32px;
    background: #ffffff;
    box-sizing: border-box;

    @include respond-to(sm) {
      padding: 40px 100px 20px;
      margin: 50px auto 30px;
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
