<script>
  import { onMount } from 'svelte';
  import { siteInfo } from "./stores.js";
  import router from "./router.js";
  // import { Router, Route, links } from "svelte-routing";
  // import Index from "./routes/Index.svelte";
  // import Post from "./routes/Post.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";

  const api = window.ghostAPI;
  let bgUrl = '';
  let customHeaderClass = '';

  onMount(async () => {
		const info = await api.settings.browse();
    siteInfo.set(info);
    console.log($siteInfo);
  });
  
  function handleMessage(event) {
    const eventDetail = event.detail
    switch (eventDetail.func) {
      case 'setBackground':
        bgUrl = eventDetail.data.url || ''
        break;
      case 'setHeaderClass':
        customHeaderClass = eventDetail.data.class || ''
        break;
      default:
        break;
    }
	}
</script>

<style lang="scss" global>
  @import "css/variables";
  @import "css/mixins";
  @import "css/iconfont";

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
    padding-top: 48px;
  }

  .gh-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 100px;
    box-sizing: border-box;
    border-radius: 8px;
    @include respond-to(sm) {
      padding: 20px 32px;
    }
  }

  .gh-feature-image-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 80vh;
    z-index: -1;
    background-image: linear-gradient(to bottom,rgba(255,255,255,0.88) 40%, var(--color-background)), var(--bg-url);
  }

</style>

<template>
  <!-- <Router {url}> -->
    <div class="gh-viewport">
      <!-- <div class="gh-feature-image-bg" style="--bg-url: url({bgUrl});" /> -->
      <Header {customHeaderClass} />
      <main>
        <!-- <Route path="/:slug"><Post/></Route>
        <Route path="/" component={Index} /> -->
        <svelte:component this={router.page} params={router.params} on:message={handleMessage} />
      </main>
      <Footer />
    </div>
  <!-- </Router> -->
</template>
