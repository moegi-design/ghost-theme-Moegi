<script>
  import { onMount, createEventDispatcher } from "svelte";
  import dayjs from "dayjs";
  import inView from "in-view";
  import { postTitle } from "../stores.js";
  import PostContent from "../components/PostContent.svelte";

  export let params;

  const api = window.ghostAPI;
  const dispatch = createEventDispatcher();
  let data = {};

  onMount(async () => {
    let tempData = await api.posts.read({ slug: params.slug }).catch(() => {});
    if (!tempData) {
      tempData = await api.pages.read({ slug: params.slug }).catch(() => {});
    }
    if (tempData) {
      data = tempData;
    }
    console.log(data);
    if (data && data.title) {
      postTitle.set(data.title);
    }
    // if (data && data.feature_image) {
    //   dispatch("message", {
    //     func: "setBackground",
    //     data: {
    //       url: data.feature_image
    //     }
    //   });
    // }
    inView("#post-header-inview")
      .on("enter", () => {
        dispatch("message", {
          func: "setHeaderClass",
          data: {
            class: ""
          }
        });
      })
      .on("exit", () => {
        dispatch("message", {
          func: "setHeaderClass",
          data: {
            class: "fold"
          }
        });
      });
  });
</script>

<style lang="scss">
  @import "../css/variables";
  @import "../css/mixins";

  header {
    .gh-container.header-container {
      position: relative;
      padding-bottom: 0;
      padding-top: 80px;
      @include respond-to(sm) {
        padding-top: 40px;
      }
    }
    .gh-post-meta time {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.4);
      @include respond-to(sm) {
        font-size: 12px;
      }
    }
    h1 {
      font-size: 36px;
      margin: 8px 0 20px;
      line-height: 1.3;
      color: #000000;
      @include respond-to(sm) {
        font-size: 24px;
        line-height: 1.2;
      }
    }
    .gh-excerpt {
      font-size: 15px;
      color: rgba(0, 0, 0, 0.4);
      margin: 16px 0 20px;
      padding: 4px 12px;
      border-left: 4px solid rgba(0, 0, 0, 0.16);
      @include respond-to(sm) {
        font-size: 14px;
        padding: 0;
        border: none;
      }
    }
    img.gh-feature-image {
      width: calc(100% + 200px);
      min-height: 400px;
      margin: 16px -100px 0;
      border-radius: 8px;
      object-fit: cover;
      @include respond-to(sm) {
        width: 100%;
        margin: 0;
        min-height: unset;
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
  .placeholder {
    height: 80vh;
  }
</style>

<article class="gh-article">
  <header class="gh-header gh-canvas">
    <div
      class="gh-container header-container {data.feature_image ? '' : 'bg-white'}">
      <div id="post-header-inview">
        <span class="gh-post-meta">
          <time>{dayjs(data.published_at).format('YYYY-MM-DD')}</time>
        </span>
        <h1 class="gh-title">{data.title}</h1>

        {#if data.custom_excerpt}
          <p class="gh-excerpt">{data.custom_excerpt}</p>
        {/if}
      </div>

      {#if data.feature_image}
        <img
          class="gh-feature-image"
          src={data.feature_image}
          alt={data.title} />
      {:else}
        <hr />
      {/if}
    </div>
  </header>

  <div
    class="gh-content gh-container bg-white {data.feature_image ? 'with-feature' : ''}">
    <PostContent>
      {@html data.html}
    </PostContent>
  </div>

  <footer class="gh-footer gh-canvas" />
</article>
