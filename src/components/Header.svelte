<script>
  import { siteInfo, postTitle } from "../stores.js";
  import { getContext } from "svelte";

  export let customHeaderClass;

  let isMobileMenuOpen = false;
</script>

<style lang="scss">
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
    border-bottom: 1px solid var(--color-decoration);
    background-color: var(--color-background-inner);
    backdrop-filter: saturate(180%) blur(20px);
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
      color: var(--color-text);
      font-size: 1rem;
      img {
        max-height: 48px;
        @include respond-to(sm) {
          max-height: 36px;
        }
      }
    }
    .home-icon {
      color: var(--color-text);
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
    color: var(--color-text-lighter);
    margin-left: 8px;
    font-size: 0.9rem;
    font-weight: bold;
    white-space: nowrap;
    transform: translateX(-1rem);
    transition: all .3s ease;
    opacity: 0;
    &:before {
      content: '/';
      color: var(--color-text-lighter);
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
      color: var(--color-text);
      padding: 4px 8px;
      border-radius: 4px;
      &:hover {
        background-color: var(--color-decoration-darker);
        transition: color,background-color 0.3s ease;
      }
    }
  }
  .gh-navigation-m {
    display: none;
    @include respond-to(sm) {
      display: block;
    }
    .home-icon {
      color: var(--color-text);
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
  .gh-navigation-mpanel {
    display: none;
    @include respond-to(sm) {
      display: block;
    }
    position: fixed;
    left: 0;
    right: 0;
    height: 0;
    overflow: hidden;
    top: 48px;
    bottom: 0;
    z-index: 15;
    user-select: none;
    &.show {
      height: auto;
      .container {
        transform: none;
      }
      .mask {
        background-color: var(--color-decoration-darker);
      }
    }
    &.hide {
      height: 0;
      overflow: hidden;
      .container {
        transform: translateY(-100%);
      }
      .mask {
        background-color: transparent;
      }
    }
    .container {
      position: relative;
      padding: 10px 32px;
      border-bottom: 1px solid var(--color-decoration);
      background-color: var(--color-background-inner);
      backdrop-filter: saturate(180%) blur(20px);
      z-index: 20;
      transition: transform 0.3s ease;
      a {
        display: block;
        font-size: 0.9rem;
        color: var(--color-text);
        height: 48px;
        line-height: 48px;
        border-bottom: 1px solid var(--color-decoration);
        &:last-child {
          border-bottom: none;
        }
        &:active {
          color: var(--color-primary);
          transition: color 0.3s ease;
        }
      }
    }
    .mask {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      transition: background-color 0.3s ease;
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
  {#if $siteInfo.navigation}
  <div class="gh-navigation-m" on:click={() => {isMobileMenuOpen = !isMobileMenuOpen}}>
    <div class="home-icon" href={$siteInfo.url}>
      <span class="iconfont {isMobileMenuOpen ? 'icon-close' : 'icon-menu'}"></span>
    </div>
  </div>
  <div class="gh-navigation">
    <nav>
      {#each $siteInfo.navigation as navItem, i}
        <a href={navItem.url}>{navItem.label}</a>
      {/each}
    </nav>
  </div>
  {/if}
</header>
<div class="gh-navigation-mpanel {isMobileMenuOpen ? 'show' : 'hide'}">
  <div class="container">
    {#if $siteInfo.navigation}
      <nav>
        {#each $siteInfo.navigation as navItem, i}
          <a href={navItem.url}>{navItem.label}</a>
        {/each}
      </nav>
    {/if}
  </div>
  <div class="mask" on:click={() => {isMobileMenuOpen = !isMobileMenuOpen}}></div>
</div>
{/if}
