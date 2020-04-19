# Moegi 2
[![Ghost Version](https://img.shields.io/badge/Ghost-%3E%3D3.0-green.svg)](https://github.com/TryGhost/Ghost)
[![Build & Push & Deploy](https://github.com/moegi-design/ghost-theme-Moegi/workflows/Build%20&%20Push%20&%20Deploy/badge.svg)](https://github.com/moegi-design/ghost-theme-Moegi/actions)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/moegi-design/ghost-theme-Moegi)](https://github.com/moegi-design/ghost-theme-Moegi/releases)

[中文🇨🇳](README_zh.md)

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
* Activate the theme.
