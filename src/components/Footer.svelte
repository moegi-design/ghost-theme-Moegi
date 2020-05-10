<script>
  import { siteInfo } from "../stores.js";
</script>

<style lang="scss">
  .gh-foot {
    display: flex;
    height: 120px;
    width: 100%;
    align-items: center;
    justify-content: center;
    color: var(--color-text-solight);
    font-size: 14px;
    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        color: var(--color-primary);
        transition: color 0.3s ease;
      }
    }
  }
  .gh-foot-meta {
    display: inline-block;
  }
</style>

<footer class="gh-foot">
    <div class="gh-foot-meta">
      Published with
      <a href="https://ghost.org" target="_blank" rel="noopener">Ghost</a>
      &
      <a href="https://github.com/moegi-design/ghost-theme-Moegi" target="_blank" rel="noopener">Moegi</a>
    </div>
</footer>
