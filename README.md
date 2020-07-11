# Moegi 2
[![Ghost Version](https://img.shields.io/badge/Ghost-%3E%3D3.0-green.svg)](https://github.com/TryGhost/Ghost)
[![Build & Push & Deploy](https://github.com/moegi-design/ghost-theme-Moegi/workflows/Build%20&%20Push%20&%20Deploy/badge.svg)](https://github.com/moegi-design/ghost-theme-Moegi/actions)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/moegi-design/ghost-theme-Moegi)](https://github.com/moegi-design/ghost-theme-Moegi/releases)

![Moegi Theme](screenshot.png)

[中文文档](README_zh.md)

## Download

### Stable Build

The version with major updates. Go to [Releases](https://github.com/moegi-design/ghost-theme-Moegi/releases) to download stable version.

### Nightly Build

Every commit in this branch will be built and tested automatically by Github Actions. Go to [dist branch](https://github.com/moegi-design/ghost-theme-Moegi/tree/dist) or directly [download the newest zip](https://github.com/moegi-design/ghost-theme-Moegi/archive/dist.zip).

## Usage

* Download the theme and Upload to the Ghost Admin. (under `Design`)
* Add a custom integration under `Integrations`, then you can rec eive `Content API Key` and `API URL`.
* Go to `Code injection`, put codes below into `Site Header`:
  ```js
  <script>
  const config = {
    api: {
      url: 'Your API URL',
      contentKey: 'Your Content API Key',
    }
  }
  </script>
  ```
  The above is required content, if you need more custom configuration, please skip to [Configuration](#Configuration).
* Activate the theme.

### Configuration

The Moegi theme is configured by declaring a `config` object in `Site Header`, for example:
```js
<script>
const config = {
  api: {
    url: 'Your API URL',
    contentKey: 'Your Content API Key',
  },
  primaryColor: '#86B81B',
  feed: 'Pure',
  darkMode: 'auto',
}
</script>
```

| Name | Description |
| ------ | ------ |
| `api` | required |
| `primaryColor` | Optional. Custom theme color, default is '#86B81B' (* Only HEX format supported) |
| `feed` | Optional. Customize the style of the home page article list with optional values of 'Pure', 'Note'. default is 'Pure' |
| `darkMode` | Optional. Customize whether the dark mode follows the system or not, effective for all viewers. Optional values are 'light', 'dark', default value is 'auto' |
