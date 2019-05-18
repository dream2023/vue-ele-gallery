# vue-ele-gallery | 利用 element ui 组件库形成的画廊组件

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg)](https://opensource.org/licenses/mit-license.php)
[![npm](https://img.shields.io/npm/v/vue-ele-gallery.svg)](https://www.npmjs.com/package/vue-ele-gallery)
[![size](https://img.shields.io/bundlephobia/minzip/vue-ele-gallery.svg)](https://www.npmjs.com/package/vue-ele-gallery)
[![download](https://img.shields.io/npm/dw/vue-ele-gallery.svg)](https://npmcharts.com/compare/vue-ele-gallery?minimal=true)

## 介绍

vue-ele-gallery 利用 element ui 组件库, 打造的画廊组件, 主要特点如下:

- 可以传递 字符串(单张图片)、数组(多张图片)、对象
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
<!-- 传递单张图片 -->
<ele-gallery
  image="https://dream2023.github.io/vue-ele-gallery/example_1.jpg"
/>
<!-- 传递多张图片 -->
<ele-gallery
  :image="[
    'https://dream2023.github.io/vue-ele-gallery/example_1.jpg',
    'https://dream2023.github.io/vue-ele-gallery/example_2.jpg'
  ]"
/>
<!-- 传递对象 -->
<ele-gallery
  :image="{
    title: '秀丽山河',
    src: 'https://dream2023.github.io/vue-ele-gallery/example_1.jpg',
    thumb: 'https://dream2023.github.io/vue-ele-gallery/example_thumb.jpg'
  }"
/>
<!-- 数组对象 -->
<ele-gallery
  :image="[
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
  :image="[
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
  :image="[
    'https://dream2023.github.io/vue-ele-gallery/example_1.jpg',
    'https://dream2023.github.io/vue-ele-gallery/example_2.jpg'
  ]"
>
  <template v-slot:default="{thumb}">
    <el-card :body-style="{ padding: '12px' }" style="margin-right: 20px;">
      <img :src="thumb" style="width: 150px" />
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
  :image="[
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
  image: [String, Array, Object],
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
