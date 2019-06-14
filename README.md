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

## 在线示例

[https://codepen.io/dream2023/pen/vwZrgG](https://codepen.io/dream2023/pen/vwZrgG)

## 示例

### 基本使用方式

```html
<!-- 图片类型(默认) -->
<ele-gallery
  source="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
></ele-gallery>

<!-- 视频类型 -->
<ele-gallery
  source="https://s3.pstatp.com/aweme/resource/web/static/image/index/tvc-v2_30097df.mp4"
  type="video"
></ele-gallery>

<!-- iframe 类型 -->
<ele-gallery
  source="https://player.vimeo.com/video/73686146?color=ffffff"
  type="iframe"
></ele-gallery>
```

### source 的四种值

```html
<!-- 字符串(仅图片类型) -->
<ele-gallery
  source="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
></ele-gallery>

<!-- 字符数组 -->
<ele-gallery
  :source="[
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
  ]"
></ele-gallery>
<!-- 对象 -->
<ele-gallery
  :source="{
    title: '秀丽山河',
    src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    thumb: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
  }"
></ele-gallery>
<!-- 对象数组(所有类型) -->
<ele-gallery
  :source="[
    {
      title: '秀丽山河',
      src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      thumb: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    },
    {
      title: '秀丽山河2',
      src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      thumb: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
    }
  ]"
></ele-gallery>
```

### 定制化缩略图

```html
<!-- 定制化缩略图样式 -->
<ele-gallery
  :height="180"
  :source="[
      'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
    ]"
  :thumb-style="{
      borderRadius: '3px'
    }"
  :width="300"
></ele-gallery>

<!-- 插槽 -->
<ele-gallery
  :source="[
    {
      title: '秀丽山河',
      src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      thumb: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    },
    {
      title: '秀丽山河2',
      src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      thumb: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
    }
  ]"
>
  <template v-slot:default="{index, source }">
    <el-card style="text-align: center">
      <img :src="source.thumb" style="width: 150px" />
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

### 其他

```html
<!-- 删除 -->
<ele-gallery
  :remove-fn="handleRemove"
  source="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
></ele-gallery>

<!-- action 插槽 -->
<ele-gallery
  source="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
>
  <template v-slot:action="{index, source}">
    <span>
      <i class="el-icon-folder-opened"></i>
    </span>
    <span>
      <i class="el-icon-headset"></i>
    </span>
  </template>
</ele-gallery>
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
  // 缩略图大小, 宽 === 高时, 简略写法
  size: Number,
  // 缩略图宽度, 当给定width时, 会覆盖size的值
  // 图片时, 默认是: 150px, 另外两种是: 360px
  width: Number,
  // 缩略图高度, 当给定height时, 会覆盖size值
  // 图片时, 默认是: 150px, 另外两种是: auto
  height: Number,
  // 缩略图是否懒加载
  lazy: {
    type: Boolean,
    default: false
  },
  // 源
  source: [String, Array, Object],
  // 缩略图后缀
  // 当type为image时, 且未指定thumb, 可通过thumbSuffix设置缩略图
  thumbSuffix: String,
  // 缩略图样式
  thumbStyle: Object,
  // 轮播图属性
  carouselAttrs: Object,
  // 删除函数
  removeFn: Function
}
```

## 参考链接

- [element-ui carousel 组件](https://element.eleme.cn/#/zh-CN/component/carousel)
- [element-ui dialog 组件](https://element.eleme.cn/#/zh-CN/component/dialog)
- [blueimp/Gallery](https://github.com/blueimp/Gallery)
