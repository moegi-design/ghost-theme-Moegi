<script>
  import dayjs from "dayjs";

  export let data, index;
</script>

<style lang="scss">
  @import "../css/variables";
  @import "../css/mixins";

  .feed-item-content {
    display: flex;
    min-height: 60px;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    padding: 10px 0;
    box-sizing: border-box;
    .date {
      font-size: 16px;
      width: 120px;
      color: #999999;
    }
    .title-wrap {
      flex: 1;
      h2.title {
        font-size: 18px;
        color: #303030;
        line-height: 24px;
        &:hover {
          color: var(--color-primary);
          transition: color 0.3s ease;
        }
      }
    }
    .tag-list {
      display: none;
      .tag-item {
        font-size: 14px;
        color: #999999;
        border: 1px solid #e6e6e6;
        border-radius: 4px;
        padding: 2px 6px;
        margin-right: 4px;
        &:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
          transition: color, border-color 0.3s ease;
        }
      }
      @include respond-to(sm) {
        display: block;
      }
    }
    .no {
      margin-left: 4px;
      color: #999999;
    }
  }
</style>

<template>
  <article class="feed-item">
    <div class="feed-item-content">
      <span class="date">
        <time>{dayjs(data.published_at).format('YYYY-MM-DD')}</time>
      </span>
      <a class="title-wrap" href={data.url}>
        <h2 class="title">{data.title}</h2>
      </a>
      <div class="tag-list">
        {#each data.tags as tag}
          <a class="tag-item" href={tag.url}>{tag.name}</a>
        {/each}
      </div>
      <span class="no">#{index}</span>
    </div>
  </article>
</template>
