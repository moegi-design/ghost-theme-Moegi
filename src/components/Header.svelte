<script>
  import { siteInfo } from "../stores.js";
  import { getContext } from "svelte";
  import { ROUTER } from "svelte-routing/src/contexts";
  var { activeRoute } = getContext(ROUTER);

  $: {
    console.log($activeRoute);
  }
</script>

<style lang="scss">
  .gh-head {
    display: flex;
    height: 200px;
    width: 100%;
    font-size: 1.6rem;
    align-items: center;
    a {
      color: inherit;
      text-decoration: none;
    }
  }
  .gh-head-brand {
    display: inline-block;
    margin: 0 auto;
    max-width: 300px;
    text-align: center;
    word-break: break-all;
    .logo {
      display: block;
      font-weight: 600;
      font-size: 2.2rem;
      line-height: 1.2em;
      img {
        max-height: 84px;
      }
    }
  }
</style>

{#if $activeRoute && $activeRoute.route.path == '/'}
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
  </header>
{/if}
