<script>
  import Prism from "prismjs";
  import { beforeUpdate, afterUpdate } from 'svelte';

  afterUpdate(() => {
		Prism.highlightAll();
	});
</script>

<style lang="scss" global>
  @import "../css/mixins";
  @import "../css/prism-theme";

  .post-content {
    color: var(--color-text);

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 2.4em 0 0.6em;
      line-height: 1.35;
    }
    h1 {
      font-size: 2em;
    }
    h2 {
      position: relative;
      margin-top: 2em;
      font-size: 1.8em;
      @include respond-to(sm) {
        font-size: 1.6em;
      }
      &:first-child {
        margin-top: 1em;
      }
      &:before {
        position: absolute;
        color: var(--color-primary);
        content: "# ";
        left: -1em;
        @include respond-to(sm) {
          position: initial;
        }
      }
    }
    h3 {
      font-size: 1.4em;
    }
    h4 {
      font-size: 1.2em;
    }
    h5,
    h6 {
      font-size: 1em;
    }

    p,
    pre,
    img,
    ul,
    ol,
    dl,
    form,
    hr,
    table,
    blockquote {
      margin-bottom: 1.2em;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    blockquote {
      position: relative;
      color: #999;
      font-weight: 400;
      border-left: 4px solid var(--color-primary);
      padding-left: 1em;
      margin: 1em 3em 1em 2em;
      @include respond-to(sm) {
        margin: 1em 0;
      }
    }

    acronym,
    abbr {
      border-bottom: 1px dotted;
      font-variant: normal;
      text-decoration: none;
    }

    abbr {
      cursor: help;
    }

    del {
      text-decoration: line-through;
    }

    address,
    caption,
    cite,
    code,
    dfn,
    em,
    th,
    var {
      font-style: normal;
      font-weight: 400;
    }

    caption,
    th {
      text-align: left;
    }

    q:before,
    q:after {
      content: "";
    }

    :root sub,
    :root sup {
      vertical-align: baseline; /* for ie9 and other modern browsers */
    }

    sup {
      top: -0.5em;
    }

    sub {
      bottom: -0.25em;
    }

    a {
      color: var(--color-primary);
      border-bottom: 1px solid var(--color-primary);
      strong {
        color: var(--color-primary);
      }
      &:hover {
        text-decoration: none;
      }
    }

    ul {
      margin-left: 1.3em;
      list-style: none;
      li {
        &:before {
          content: "\2022";
          color: var(--color-primary);
          font-size: 1em;
          display: inline-block;
          width: 1em;
          margin-left: -1.2em;
        }
      }
    }

    ol {
      list-style: decimal;
      margin-left: 1.9em;
    }

    li ul,
    li ol {
      margin-bottom: 0.8em;
      margin-left: 2em;
    }

    u {
      text-decoration: underline;
    }

    mark {
      background: #fffdd1;
      border-bottom: 1px solid #ffedce;
      padding: 2px;
      margin: 0 5px;
    }

    pre,
    code,
    pre tt {
      font-family: Courier, "Courier New", monospace;
    }

    code {
      background: var(--color-decoration);
      padding: 0.2em 0.4em;
      border: 1px solid var(--color-decoration-darker);
    }

    pre {
      background: var(--color-decoration);
      border: 1px solid var(--color-decoration-darker);
      padding: 1em 1.5em;
      display: block;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      code {
        background: transparent;
        padding: 0;
        border: 0;
      }
    }

    hr {
      border: none;
      border-bottom: 1px solid var(--color-text-lighter);
      margin-bottom: 0.8em;
      height: 10px;
    }

    small,
    figcaption {
      font-size: 0.9em;
      color: var(--color-text-lighter);
    }

    strong,
    b {
      font-weight: bold;
      color: var(--color-text-emphasize);
    }

    [draggable] {
      cursor: move;
    }

    table {
      th,
      td,
      caption {
        border: 1px solid var(--color-decoration-darker);
        padding: 0.5em 1em;
        color: #666;
      }
      th {
        background: var(--color-decoration-darker);
      }
      thead th {
        background: var(--color-decoration);
      }
      caption {
        border-bottom: none;
      }
    }

    legend,
    caption {
      color: #000;
      font-weight: inherit;
    }

    img {
      max-width: 100%;
    }
    figcaption {
      text-align: center;
      margin: -0.4em 1em 1.2em;
    }

    .kg-card.kg-image-card {
      text-align: center;
    }

    .kg-width {
      &-wide {
        width: calc(100% + 200px);
        margin: 0 -100px;
        @include respond-to(sm) {
          width: calc(100% + 64px);
          margin: 0 -32px;
        }
      }
      &-full {
        width: calc(100% + 400px);
        margin: 0 -200px;
        @include respond-to(sm) {
          width: calc(100% + 64px);
          margin: 0 -32px;
        }
      }
    }

    .kg-gallery {
      &-container {
        display: flex;
        flex-direction: column;
        max-width: calc(100% + 200px);
        margin-bottom: 1.4em;
        @include respond-to(sm) {
          max-width: calc(100% + 64px);
        }
      }
      &-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        &:not(:first-of-type) {
          margin: 4px 0 0 0;
        }
      }
      &-image {
        img {
          display: block;
          margin: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        &:not(:first-of-type) {
          margin: 0 0 0 4px;
        }
      }
    }

    .kg-bookmark {
      &-card {
        width: 100%;
      }
      &-container {
        display: flex;
        flex-direction: row;
        min-height: 148px;
        margin-bottom: 1.2em;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        text-decoration: none;
        border: 0;
        border-radius: 3px;
        color: var(--color-text);
        background: var(--color-decoration);
        box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.15),
          0 0 1px rgba(0, 0, 0, 0.09);
        &:hover {
          text-decoration: none;
          box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.15),
            0 0 1px rgba(0, 0, 0, 0.09);
        }
      }
      &-content {
        order: 0;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 20px;
      }
      &-title {
        font-size: 1rem;
        line-height: 1.5em;
        font-weight: 400;
        transition: color 0.2s ease-in-out;
      }
      &-description {
        display: -webkit-box;
        overflow-y: hidden;
        margin-top: 12px;
        max-height: 3em;
        color: #999999;
        font-size: 0.8em;
        line-height: 1.5em;
        font-weight: 300;

        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      &-metadata {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 16px;
        font-size: 0.8rem;
        font-weight: 400;
      }
      &-icon {
        margin-right: 8px;
        margin-bottom: 0;
        width: 18px;
        height: 18px;
      }
      &-author {
        line-height: 1.5em;
        &:after {
          content: "•";
          margin: 0 6px;
        }
      }
      &-publisher {
        overflow: hidden;
        max-width: 240px;
        line-height: 1.5em;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &-thumbnail {
        order: 0;
        min-height: 160px;
        width: auto;
        position: relative;
        min-width: 33%;
        min-height: 160px;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0 3px 3px 0;
          object-fit: cover;
        }
      }

      @include respond-to(sm) {
        &-container {
          flex-direction: column;
        }
        &-content {
          order: 2;
        }
        &-thumbnail {
          order: 1;
          max-height: 100%;
          width: 100%;
          img {
            border-radius: 3px 3px 0 0;
          }
        }
      }
    }
  }
</style>

<div class="post-content">
  <slot />
</div>
