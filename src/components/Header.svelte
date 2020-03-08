<script>
  import { siteInfo } from "../stores.js";
  import { getContext } from "svelte";
</script>

<style lang="scss">
  @import "../css/variables";
  @import "../css/mixins";

  .gh-head {
    position: relative;
    display: flex;
    height: 80px;
    width: 100%;
    align-items: center;
    z-index: 1;
    margin: 0 auto;
    padding: 0 32px;
    box-sizing: border-box;
    @include respond-to(sm) {
      height: 80px;
      padding: 0 40px;
      margin: 16px auto 0;
    }
  }
  .gh-head-brand {
    flex: 1;
    display: inline-block;
    word-break: break-all;
    .logo {
      display: block;
      font-weight: 400;
      color: #212121;
      font-size: 1.2rem;
      img {
        max-height: 36px;
        @include respond-to(sm) {
          max-height: 48px;
        }
      }
      span {
        &::after {
          content: ' ';
          display: inline-block;
          width: 4px;
          height: 4px;
          margin-left: 2px;
          background: var(--color-primary);
        }
      }
    }
  }
  .gh-navigation {
    display: none;
    @include respond-to(sm) {
      display: block;
    }
    a {
      margin-left: 8px;
      color: #212121;
      padding: 4px 8px;
      border-radius: 4px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.06);
        transition: background-color 0.3s ease;
      }
    }
  }
</style>

<header id="gh-head" class="gh-head">
  <div class="gh-head-brand">
    <a class="logo" href={$siteInfo.url}>
      {#if $siteInfo.logo}
        <img src={$siteInfo.logo} alt={$siteInfo.title} />
      {:else}
        <span>{$siteInfo.title}</span>
      {/if}
    </a>
  </div>
  <div class="gh-navigation">
    {#if $siteInfo.navigation}
      <nav>
        {#each $siteInfo.navigation as navItem, i}
          <a href={navItem.url}>{navItem.label}</a>
        {/each}
      </nav>
    {/if}
  </div>
</header>
