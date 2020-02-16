<script>
  import { siteInfo } from './stores.js'
  import { Router, Route, links } from 'svelte-routing'
  import Index from './routes/Index.svelte'
  import About from './routes/About.svelte'
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'

  const api = window.ghostAPI

  const getSiteInfo = async () => {
    const info = await api.settings.browse()
    siteInfo.set(info)
    console.log($siteInfo)
  }
  getSiteInfo()

  export let url = '';
</script>

<style lang="scss" global>
  @import "css/variables";
  @import "css/mixins";

  body {
    font: 300 16px/1.8 PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
    min-height: 100vh;
    border: 1px solid transparent;
  }

  a {
    text-decoration: none;
  }
    
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
    font-size: 100%;
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
      padding: 40px 100px;
      margin: 50px auto;
    }
  }

  // TODO
  .kg-width {
    &-wide, &-full {
      display: none;
    }
  }
  .kg-gallery {
    &-container, &-row, &-image {
      display: none;
    }
  }
  .kg-bookmark {
    &-card, &-container, &-content, &-title, &-description, &-metadata, &-icon, &-author, &-publisher, &-thumbnail {
      display: none;
    }
  }
</style>

<template>
  <div class="gh-viewport" use:links>
    <Header />
    <main>
      <Router {url}>
        <Route path="about" component={About} />
        <Route path="/" component={Index} />
      </Router>
    </main>
    <Footer />
  </div>
</template>
