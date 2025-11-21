---
title: 安装
lang: zh-CN
---

# 安装

## 兼容性 ^(0.0.1)

Vue Maplibre 支持最近两个版本的浏览器。

如果您需要支持旧版本的浏览器，请自行添加 [Babel](https://babeljs.io/) 和相应的 Polyfill 。

由于 Vue 3 不再支持 IE11，Vue Maplibre 也不再支持 IE 浏览器。

| 版本    | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) <br> Chrome | ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) <br> Edge | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) <br> Firefox | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) <br> Safari |
| ------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 0.0.1 + | Chrome ≥ 85                                                                                | Edge ≥ 85                                                                        | Firefox ≥ 79                                                                                   | Safari ≥ 14.1                                                                              |

### 版本

<!-- Vue Maplibre 目前还处于开发迭代中。 -->

[![VueMaplibre version badge](https://img.shields.io/npm/v/@meteosci/vue-maplibre.svg?style=flat-square)](https://www.npmjs.org/package/@meteosci/vue-maplibre)

## 使用包管理器

**我们建议您使用包管理器 (如 NPM、 [Yarn](https://classic.yarnpkg.com/lang/en/) 或 [pnpm](https://pnpm.io/)) 安装 Vue Maplibre**，
然后您就可以使用打包工具，例如 [Vite](https://vitejs.dev) 或 [webpack](https://webpack.js.org/)。

```shell
# 选择一个你喜欢的包管理器

# NPM
$ npm install @meteosci/vue-maplibre --save

# Yarn
$ yarn add @meteosci/vue-maplibre

# pnpm
$ pnpm install @meteosci/vue-maplibre
```

如果您的网络环境不好，建议使用相关镜像服务 [cnpm](https://github.com/cnpm/cnpm) 或 [中国NPM镜像](https://registry.npmmirror.com/).

## 浏览器直接引入

直接通过浏览器的 HTML 标签导入 Vue Maplibre，然后就可以使用全局变量 `VueMaplibre` 了。

根据不同的 CDN 提供商有不同的引入方式， 我们在这里以 [unpkg](https://unpkg.com) 和 [jsDelivr](https://jsdelivr.com) 举例。
您也可以使用其它的 CDN 供应商。

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
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@meteosci/vue-maplibre/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/@meteosci/vue-maplibre"></script>
</head>
```

:::tip

我们建议使用 CDN 引入 Vue Maplibre 的用户在链接地址上锁定版本，以免将来 Vue Maplibre 升级时受到非兼容性更新的影响。 锁定版本的方法请查看 [unpkg.com](https://unpkg.com)。

:::

## Hello World

通过 CDN 的方式我们可以很容易地使用 Vue Maplibre 写出一个 Hello world 页面。 [在线演示](https://codepen.io/zouyaoji/pen/wvbPPNN)

<iframe height="469" style="width: 100%;" scrolling="no" title="wvbPPNN" src="https://codepen.io/zouyaoji/embed/wvbPPNN?height=469&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/zouyaoji/pen/wvbPPNN'>wvbPPNN</a> by zouyaoji
  (<a href='https://codepen.io/zouyaoji'>@zouyaoji</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

如果是通过包管理器安装，并希望配合打包工具使用，请阅读下一节：[快速上手](/zh-CN/guide/quickstart).
