# Moegi

[中文文档](README_zh.md)

[![Ghost Version](https://img.shields.io/badge/Ghost-3.x-green.svg)](https://github.com/TryGhost/Ghost)
[![Ghost Version](https://img.shields.io/badge/Ghost-4.x-green.svg)](https://github.com/TryGhost/Ghost)
[![Build & Push & Deploy](https://github.com/moegi-design/ghost-theme-Moegi/workflows/Build%20&%20Push%20&%20Deploy/badge.svg)](https://github.com/moegi-design/ghost-theme-Moegi/actions)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/moegi-design/ghost-theme-Moegi)](https://github.com/moegi-design/ghost-theme-Moegi/releases)

![Moegi Theme](screenshot.png)

## Download

### Stable Build

The version with major updates. Go to [Releases](https://github.com/moegi-design/ghost-theme-Moegi/releases) to download stable version.

### Nightly Build

Every commit in this branch will be built and tested automatically by Github Actions. Go to [dist branch](https://github.com/moegi-design/ghost-theme-Moegi/tree/dist) or directly [download the newest zip](https://github.com/moegi-design/ghost-theme-Moegi/archive/dist.zip).

## Development

Moegi theme is compiled with [Vite](https://github.com/vitejs/vite) + [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss). You'll need Node installed globally.

```shell
# Install dependencies
yarn install

# Run development server & watch for changes
yarn dev
```

This will create an HMR server. If you have a Ghost server running locally, modifying the template file will automatically update the page.

```shell
# Create dist file
yarn build
```