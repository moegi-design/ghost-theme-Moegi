<script>
  import { siteInfo, postTitle } from "../stores.js";
  import { getContext } from "svelte";
</script>

<style lang="scss">
  @import "../css/variables";
  @import "../css/mixins";

  .gh-head {
    position: fixed;
    top: 0;
    display: flex;
    height: 48px;
    width: 100%;
    align-items: center;
    z-index: 15;
    margin: 0 auto;
    padding: 0 32px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
    background: rgba(255, 255, 255, 0.88);
    backdrop-filter: blur(10px);
    @include respond-to(sm) {
      // height: 80px;
      padding: 0 40px;
      // margin: 16px auto 0;
    }
  }
  .gh-head-brand {
    position: relative;
    display: inline-block;
    word-break: break-all;
    z-index: 20;
    .logo {
      display: block;
      font-weight: 400;
      color: #212121;
      font-size: 1rem;
      img {
        max-height: 36px;
        @include respond-to(sm) {
          max-height: 48px;
        }
      }
    }
  }
  .gh-title {
    color: #686868;
    margin-left: 12px;
    font-size: 0.9rem;
    &:before {
      content: '/';
      color: #cccccc;
      margin-right: 8px;
    }
  }
  .gh-blank {
    flex: 1;
  }
  .gh-navigation {
    display: none;
    @include respond-to(sm) {
      display: block;
    }
    a {
      margin-left: 8px;
      font-size: 0.9rem;
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

{#if $siteInfo.title}
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
  {#if $postTitle}
  <div class="gh-title">{$postTitle}</div>
  {/if}
  <div class="gh-blank"></div>
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
{/if}
