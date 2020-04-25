<script>
  import { siteInfo, postTitle } from "../stores.js";
  import { getContext } from "svelte";

  export let customHeaderClass;
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
    padding: 0 40px;
    box-sizing: border-box;
    line-height: initial;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
    background-color: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(10px);
    transition: background-color 0.3s ease;
    @include respond-to(sm) {
      padding: 0 32px;
    }
    &.fold {
      .gh-head-brand {
        .logo {
          display: inline-block;
          @include respond-to(sm) {
            display: none;
          }
        }
        .home-icon {
          display: none;
          @include respond-to(sm) {
            display: inline-block;
          }
        }
      }
      .gh-title {
        transform: translateX(0);
        opacity: 1
      }
    }
  }
  .gh-head-brand {
    position: relative;
    display: inline-block;
    word-break: break-all;
    white-space: nowrap;
    z-index: 20;
    .logo {
      font-weight: 400;
      color: #212121;
      font-size: 1rem;
      img {
        max-height: 48px;
        @include respond-to(sm) {
          max-height: 36px;
        }
      }
    }
    .home-icon {
      color: #212121;
      display: none;
      position: relative;
      span {
        font-size: 20px;
      }
      &:before{
        content: '';
        position: absolute;
        top: -8px;
        right: -8px;
        bottom: -8px;
        left: -8px;
      }
    }
  }
  .gh-title {
    color: #686868;
    margin-left: 8px;
    font-size: 0.9rem;
    white-space: nowrap;
    transform: translateX(-1rem);
    transition: all .3s ease;
    opacity: 0;
    &:before {
      content: '/';
      color: #cccccc;
      margin-right: 8px;
      @include respond-to(sm) {
        content: '|';
      }
    }
  }
  .gh-blank {
    flex: 1;
  }
  .gh-navigation {
    display: block;
    @include respond-to(sm) {
      display: none;
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
<header id="gh-head" class="gh-head {customHeaderClass}">
  <div class="gh-head-brand">
    <a class="home-icon" href={$siteInfo.url}>
      <span class="iconfont icon-home"></span>
    </a>
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
