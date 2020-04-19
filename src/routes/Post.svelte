<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import dayjs from "dayjs";
  import PostContent from "../components/PostContent.svelte";

  export let params;

  const api = window.ghostAPI;
  const dispatch = createEventDispatcher();
  let data = {};
  
  onMount(async () => {
    data = await api.posts.read({ slug: params.slug });
    console.log(data)
    if (data && data.feature_image) {
      dispatch('message', {
        func: 'setBackground',
        data: {
          title: data.title,
          url: data.feature_image
        }
      });
    }
  });
</script>

<style lang="scss">
  @import "../css/variables";
  @import "../css/mixins";

  header {
    .gh-container.header-container {
      position: relative;
      padding-bottom: 0;
      padding-top: 40px;
      @include respond-to(sm) {
        padding-top: 80px;
      }
    }
    .gh-post-meta time {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.4);
      @include respond-to(sm) {
        font-size: 14px;
      }
    }
    h1 {
      font-size: 24px;
      margin-top: 8px;
      line-height: 1.2;
      color: #000000;
      @include respond-to(sm) {
        font-size: 36px;
        line-height: 1.3;
      }
    }
    .gh-excerpt {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.4);
      margin: 16px 0 20px;
      @include respond-to(sm) {
        font-size: 15px;
        padding: 4px 12px;
        border-left: 4px solid rgba(0, 0, 0, 0.16);
      }
    }
    img.gh-feature-image {
      width: 100%;
      border-radius: 4px;
      object-fit: cover;
      @include respond-to(sm) {
        width: calc(100% + 200px);
        min-height: 400px;
        margin: 16px -100px 0;
        border-radius: 6px;
      }
    }
    hr {
      border: none;
      border-bottom: 1px solid #eeeeee;
      padding-bottom: 0.8em;
      height: 10px;
    }
  }
  .gh-content.gh-container {
    padding-top: 20px;
    &.with-feature {
      margin-top: -40px;
      padding-top: 60px;
    }
  }
</style>

<article class="gh-article">
  <header class="gh-header gh-canvas">
    <!-- {#if data.feature_image}
      <div
        class="gh-feature-image-bg"
        style="background-image: linear-gradient(to
        bottom,rgba(255,255,255,0.88) 40%,var(--color-background)), url({data.feature_image})" />
    {/if} -->
    <div
      class="gh-container header-container {data.feature_image ? '' : 'bg-white'}">
      <span class="gh-post-meta">
        <time>{dayjs(data.published_at).format('YYYY-MM-DD')}</time>
      </span>
      <h1 class="gh-title">{data.title}</h1>

      {#if data.custom_excerpt}
        <p class="gh-excerpt">{data.custom_excerpt}</p>
      {/if}

      {#if data.feature_image}
        <img
          class="gh-feature-image"
          src={data.feature_image}
          alt={data.title} />
      {:else}
        <hr>
      {/if}
    </div>
  </header>

  <div class="gh-content gh-container bg-white {data.feature_image ? 'with-feature' : ''}">
    <PostContent>
      {@html data.html}
    </PostContent>
  </div>

  <footer class="gh-footer gh-canvas" />
</article>
