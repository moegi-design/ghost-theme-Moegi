<script>
  export let paginationData;
</script>

<style lang="scss">
  .pagination {
    display: flex;
    padding: 40px 0;
    margin-bottom: -40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    &:hover {
      .meta {
        opacity: 1;
      }
    }
  }
  .btn {
    display: inline-flex;
    height: 36px;
    line-height: 36px;
    color: var(--color-text-lighter);
    font-size: 0.9rem;
    padding: 0 12px;
    border-radius: 4px;
    &:hover {
      color: var(--color-text);
      background-color: var(--color-decoration-darker);
      transition: color,background-color 0.3s ease;
    }
  }
  .meta {
    flex: 1;
  }
</style>

{#if paginationData.prev || paginationData.next}
  <section class="pagination">
    {#if paginationData.prev}
      <a class="btn prev" href="/page/{paginationData.prev}">
        <span class="iconfont icon-left"></span>
        Prev
      </a>
    {/if}
    <div class="meta"></div>
    {#if paginationData.next}
      <a class="btn next" href="/page/{paginationData.next}">
        Next
        <span class="iconfont icon-right"></span>
      </a>
    {/if}
  </section>
{/if}
