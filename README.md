# vue-ele-gallery | 利用 element ui 组件库形成的画廊组件

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg)](https://opensource.org/licenses/mit-license.php)
[![npm](https://img.shields.io/npm/v/vue-ele-gallery.svg)](https://www.npmjs.com/package/vue-ele-gallery)
[![size](https://img.shields.io/bundlephobia/minzip/vue-ele-gallery.svg)](https://www.npmjs.com/package/vue-ele-gallery)
[![download](https://img.shields.io/npm/dw/vue-ele-gallery.svg)](https://npmcharts.com/compare/vue-ele-gallery?minimal=true)

## 介绍

vue-ele-gallery 利用 element ui 组件库, 打造的画廊组件, 主要特点如下:

- 支持图片、h5 视频、iframe 类型
- 支持单个字符串、对象、数组
- 可以设置缩略图、标题等信息

## 效果图

![演示图](./public/example.gif)

## 文档和示例

[https://dream2023.github.io/vue-ele-gallery/](https://dream2023.github.io/vue-ele-gallery/)

## 安装

```bash
npm install vue-ele-gallery --save
```

## 使用

```js
// 全局引入
import EleGallery from 'vue-ele-gallery'
Vue.component(EleGallery.name, EleGallery)
```

```js
// 局部引入
import EleGallery from 'vue-ele-gallery'
export default {
  components: {
    EleGallery
  }
}
```

## 示例

### 基本使用方式

```html
<!-- 图片类型(默认) -->
<ele-gallery
  source="https://dream2023.github.io/vue-ele-gallery/example_1.jpg"
/>

<!-- h5 视频类型 -->
<ele-gallery
  type="video"
  :source="{
    title: 'Sintel',
    src: 'https://archive.org/download/Sintel/sintel-2048-surround.mp4',
    thumb: 'https://i.imgur.com/MUSw4Zu.jpg'
  }"
  :thumb-style="{
    width: '400px'
  }"
/>

<!-- iframe 类型 -->
<ele-gallery
  type="iframe"
  :source="{
    title: 'Last Moon',
    src: 'https://player.vimeo.com/video/73686146?color=ffffff',
    thumb: 'https://secure-a.vimeocdn.com/ts/448/835/448835699_960.jpg'
  }"
  :thumb-style="{
    width: '400px'
  }"
/>
```

### source 的四种值

> 这里需要注意的是, video 和 iframe 必须传递缩略图 或者 使用插槽

```html
<!-- 字符串(仅图片类型) -->
<ele-gallery
  source="https://dream2023.github.io/vue-ele-gallery/example_1.jpg"
/>

<!-- 字符数组(仅图片类型) -->
<ele-gallery
  :source="[
    'https://dream2023.github.io/vue-ele-gallery/example_1.jpg',
    'https://dream2023.github.io/vue-ele-gallery/example_2.jpg'
  ]"
/>

<!-- 对象(所有类型) -->
<ele-gallery
  :source="{
    title: '秀丽山河',
    src: 'https://dream2023.github.io/vue-ele-gallery/example_1.jpg',
    thumb: 'https://dream2023.github.io/vue-ele-gallery/example_thumb.jpg'
  }"
/>
<!-- 对象数组(所有类型) -->
<ele-gallery
  :source="[
    {
      title: '秀丽山河',
      src: 'https://dream2023.github.io/vue-ele-gallery/example_1.jpg',
      thumb: 'https://dream2023.github.io/vue-ele-gallery/example_thumb_1.jpg'
    },
    {
      title: '秀丽山河2',
      src: 'https://dream2023.github.io/vue-ele-gallery/example_2.jpg',
      thumb: 'https://dream2023.github.io/vue-ele-gallery/example_thumb_2.jpg'
    }
  ]"
/>
```

### 定制化缩略图

```html
<!-- 定制化缩略图样式 -->
<ele-gallery
  :source="[
    'https://dream2023.github.io/vue-ele-gallery/example_1.jpg',
    'https://dream2023.github.io/vue-ele-gallery/example_2.jpg'
  ]"
  :thumb-style="{
    borderRadius: '3px',
    border: '5px solid black',
    width: '200px'
  }"
/>

<!-- 插槽 -->
<ele-gallery
  :source="[
    {
      title: '秀丽山河',
      src: 'https://dream2023.github.io/vue-ele-gallery/example_1.jpg',
      thumb: 'https://dream2023.github.io/vue-ele-gallery/example_thumb_1.jpg'
    },
    {
      title: '秀丽山河2',
      src: 'https://dream2023.github.io/vue-ele-gallery/example_2.jpg',
      thumb: 'https://dream2023.github.io/vue-ele-gallery/example_thumb_2.jpg'
    }
  ]"
>
  <template v-slot:default="{thumb, index, source }">
    <!-- 如果使用插槽, 请注意font-size, 为了原间隙, 父节点设置了font-size: 0 -->
    <el-card
      :body-style="{ padding: '12px' }"
      style="margin-right: 20px;font-size: 16px;text-align: center"
    >
      <img :src="thumb" style="width: 150px" />
      <div style="margin-top: 10px;">{{source.title}}</div>
    </el-card>
  </template>
</ele-gallery>
```

### 定制化轮播图

```html
<!-- 定制化轮播图属性 -->
<ele-gallery
  :carousel-attrs="{
    interval: 4000,
    type: 'card',
    height: '200px'
  }"
  :source="[
    'https://dream2023.github.io/vue-ele-gallery/example_1.jpg',
    'https://dream2023.github.io/vue-ele-gallery/example_2.jpg',
    'https://dream2023.github.io/vue-ele-gallery/example_1.jpg',
    'https://dream2023.github.io/vue-ele-gallery/example_2.jpg',
    'https://dream2023.github.io/vue-ele-gallery/example_1.jpg',
    'https://dream2023.github.io/vue-ele-gallery/example_2.jpg'
  ]"
/>
```

## Props 参数

```js
props: {
  // 类型(支持图片, 视频, iframe)
  type: {
    type: String,
    default: 'image',
    validator (value) {
      return ['image', 'video', 'iframe'].includes(value)
    }
  },
  source: [String, Array, Object],
  // 缩略图样式
  thumbStyle: Object,
  // 轮播图属性
  carouselAttrs: Object
}
```

## 参考链接

- [element-ui carousel 组件](https://element.eleme.cn/#/zh-CN/component/carousel)
- [element-ui dialog 组件](https://element.eleme.cn/#/zh-CN/component/dialog)
- [blueimp/Gallery](https://github.com/blueimp/Gallery)
