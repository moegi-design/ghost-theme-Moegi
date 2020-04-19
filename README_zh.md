# Moegi 2
[![Ghost Version](https://img.shields.io/badge/Ghost-%3E%3D3.0-green.svg)](https://github.com/TryGhost/Ghost)
[![Build & Push & Deploy](https://github.com/moegi-design/ghost-theme-Moegi/workflows/Build%20&%20Push%20&%20Deploy/badge.svg)](https://github.com/moegi-design/ghost-theme-Moegi/actions)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/moegi-design/ghost-theme-Moegi)](https://github.com/moegi-design/ghost-theme-Moegi/releases)

## 下载

### 稳定版本

每隔几次提交会发布一个稳定版本。去往 [Releases](https://github.com/moegi-design/ghost-theme-Moegi/releases) 页面下载。

### 开发版本

本仓库的每次提交都会由 Github Actions 自动打包在 [dist 分支](https://github.com/moegi-design/ghost-theme-Moegi/tree/dist)。本渠道并不稳定，仅适合作为新功能体验。 [直接下载最新zip包](https://github.com/moegi-design/ghost-theme-Moegi/archive/dist.zip)。

## 使用

* 下载主题（zip文件）并上传到 Ghost 后台中。（位于 `Design` 下）
* 在 `Integrations` 下创建一个新的插件，名称随意，自己理解即可。完成后，可以看到 `Content API Key` 与 `API URL`。
* 进入 `Code injection`，在 `Site Header` 中插入如下代码并保存：
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
* 设置完成，启用主题