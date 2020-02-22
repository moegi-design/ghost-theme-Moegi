<script>
  import dayjs from "dayjs";

  export let slug;

  const api = window.ghostAPI;
  let data = {};

  const getPostsData = async () => {
    data = await api.posts.read({ slug });
    console.log(data);
  };
  getPostsData();
</script>

<style lang="scss">
  header {
    .gh-feature-image-bg {
      position: absolute;
      top: 0;
      width: 100vw;
      height: 400px;
    }
    .gh-container.header-container {
      position: relative;
      margin-top: 30px;
      padding-bottom: 0;
      &.with-feature {
        background-image: linear-gradient(to bottom, transparent 70%, #ffffff 70%);
      }
    }
    .gh-post-meta time {
      font-size: 16px;
      color: #999999;
    }
    h1 {
      font-size: 28px;
      color: #000000;
    }
    .gh-excerpt {
      font-size: 15px;
      color: #999999;
      margin: 16px 0 24px;
      padding: 0 12px;
      border-left: 4px solid #dddddd;
    }
    img.gh-feature-image {
      width: 100%;
      border-radius: 4px;
    }
  }
</style>

<article class="gh-article">
  <header class="gh-header gh-canvas">
    {#if data.feature_image}
      <div class="gh-feature-image-bg" style="background-image: linear-gradient(to bottom,rgba(255,255,255,0.84),var(--color-background)), url({data.feature_image})"></div>
    {/if}
    <div class="gh-container header-container {data.feature_image ? 'with-feature' : 'bg-white'}">
      <span class="gh-post-meta">
        <time>{dayjs(data.published_at).format('YYYY-MM-DD')}</time>
      </span>
      <h1 class="gh-title">{data.title}</h1>

      {#if data.custom_excerpt}
        <p class="gh-excerpt">{data.custom_excerpt}</p>
      {/if}

      {#if data.feature_image}
        <img class="gh-feature-image" src={data.feature_image} alt={data.title} />
      {/if}
    </div>
  </header>

  <div class="gh-content gh-container bg-white">
    {@html data.html}
  </div>

  <footer class="gh-footer gh-canvas" />
</article>
