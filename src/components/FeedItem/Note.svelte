<script>
  import dayjs from "dayjs";

  export let data;
</script>

<style lang="scss">
  @import "../../css/mixins";

  .feed-item:first-child {
    margin-top: -24px;
  }
  .feed-item-content {
    min-height: 60px;
    align-items: center;
    border-bottom: 1px solid var(--color-decoration-darker);
    padding: 48px 0;
    box-sizing: border-box;
    .title-wrap {
      h2.title {
        height: 36px;
        line-height: 36px;
        font-size: 22px;
        color: var(--color-text);
        margin-bottom: 12px;
        &:hover {
          color: var(--color-primary);
          transition: color 0.3s ease;
        }
      }
    }
    .content {
      font-size: 16px;
      color: var(--color-text-lighter);
      margin-bottom: 24px;
    }
    .date {
      display: inline;
      font-size: 14px;
      color: var(--color-text-lighter);
      margin-right: 8px;
    }
    .tag-list {
      display: inline;
      .tag-item {
        font-size: 14px;
        color: var(--color-text-lighter);
        border: 1px solid var(--color-text-solight);
        border-radius: 4px;
        padding: 2px 6px;
        margin-right: 4px;
        &:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
          transition: color, border-color 0.3s ease;
        }
      }
    }
  }
</style>

<template>
  <article class="feed-item">
    <div class="feed-item-content">
      <a class="title-wrap" href={data.url}>
        <h2 class="title">{data.title}</h2>
      </a>
      {#if data.custom_excerpt}
        <div class="content">{data.custom_excerpt}</div>
      {/if}
      <span class="date">
        <time>{dayjs(data.published_at).format('YYYY-MM-DD')}</time>
      </span>
      <div class="tag-list">
        {#each data.tags as tag}
          <a class="tag-item" href={tag.url}>{tag.name}</a>
        {/each}
      </div>
    </div>
  </article>
</template>
