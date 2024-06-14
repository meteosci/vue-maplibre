---
title: Installation
lang: en-US
---

# Installation

## Compatibility ^(0.0.1)

Vue Maplibre can run on browsers that support last 2 versions.

If you really need to support outdated browsers, please add [Babel](https://babeljs.io/) and Polyfill yourself.

Since Vue 3 no longer supports IE11, Vue Maplibre does not support IE either.

| version | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) <br> Chrome | ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) <br> Edge | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) <br> Firefox | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) <br> Safari |
| ------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 0.0.1 + | Chrome ≥ 85                                                                                | Edge ≥ 85                                                                        | Firefox ≥ 79                                                                                   | Safari ≥ 14.1                                                                              |

### Version

Vue Maplibre is currently in a rapid development iteration.

[![VueMaplibre version badge](https://img.shields.io/npm/v/@meteosci/vue-maplibre.svg?style=flat-square)](https://www.npmjs.org/package/@meteosci/vue-maplibre)

## Using Package Manager

**We recommend using the package manager (NPM, [Yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/)) to install Vue Maplibre**,
so that you can utilize bundlers like [Vite](https://vitejs.dev) and
[webpack](https://webpack.js.org/).

```shell
# Choose a package manager you like.

# NPM
$ npm install @meteosci/vue-maplibre --save

# Yarn
$ yarn add @meteosci/vue-maplibre

# pnpm
$ pnpm install @meteosci/vue-maplibre
```

If your network environment is not good, it is recommended to use a mirror registry [cnpm](https://github.com/cnpm/cnpm) or [Alibaba](https://registry.npmmirror.com/).

## Import in Browser

Import Vue Maplibre through browser HTML tags directly, and use global variable `VueMaplibre`.

According to different CDN providers, there are different introduction methods.
Here we use [unpkg](https://unpkg.com) and [jsDelivr](https://jsdelivr.com) as example.
You can also use other CDN providers.

### unpkg

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/@meteosci/vue-maplibre/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/@meteosci/vue-maplibre"></script>
</head>
```

### jsDelivr

```html
<head>
  <!-- Import style -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/@meteosci/vue-maplibre/dist/index.css"
  />
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/@meteosci/vue-maplibre"></script>
</head>
```

:::tip

We recommend using CDN to import Vue Maplibre users to lock the version
on the link address, so as not to be affected by incompatible updates when Vue Maplibre
is upgraded in the future. Please check [unpkg.com](https://unpkg.com) for
the method to lock the version.

:::

## Hello World

With CDN, we can easily use Vue Maplibre to
write a Hello World page. [Online Demo](https://codepen.io/zouyaoji/pen/wvbPPNN)

<iframe height="469" style="width: 100%;" scrolling="no" title="wvbPPNN" src="https://codepen.io/zouyaoji/embed/wvbPPNN?height=469&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/zouyaoji/pen/wvbPPNN'>wvbPPNN</a> by zouyaoji
  (<a href='https://codepen.io/zouyaoji'>@zouyaoji</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

If you are installing via package manager and want to use it with
a packaging tool, please read the
next section: [Quick Start](/en-US/guide/quickstart).
