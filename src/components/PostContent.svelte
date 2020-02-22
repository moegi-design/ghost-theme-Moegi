<style lang="scss" global>
  @import "../css/variables";
  @import "../css/mixins";

  .post-content {
    color: #333333;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 1.2em 0 0.6em;
      line-height: 1.35;
    }
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.8em;
    }
    h3 {
      font-size: 1.6em;
    }
    h4 {
      font-size: 1.4em;
    }
    h5,
    h6 {
      font-size: 1.2em;
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
      margin: 1em 0;
      @include respond-to(sm) {
        margin: 1em 3em 1em 2em;
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

    li ul {
      list-style: circle;
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

    pre {
      background: #f8f8f8;
      border: 1px solid #ddd;
      padding: 1em 1.5em;
      display: block;
      -webkit-overflow-scrolling: touch;
    }

    hr {
      border: none;
      border-bottom: 1px solid #cfcfcf;
      margin-bottom: 0.8em;
      height: 10px;
    }

    small,
    figcaption {
      font-size: 0.9em;
      color: #888;
    }

    strong,
    b {
      font-weight: bold;
      color: #000;
    }

    [draggable] {
      cursor: move;
    }

    table {
      th,
      td,
      caption {
        border: 1px solid #ddd;
        padding: 0.5em 1em;
        color: #666;
      }
      th {
        background: #fbfbfb;
      }
      thead th {
        background: #f1f1f1;
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
  }
</style>

<div class="post-content">
  <slot />
</div>
