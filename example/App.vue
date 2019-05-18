<template>
  <div id="box">
    <h1>type三种类型</h1>
    <h3>图片类型(默认)</h3>
    <ele-gallery
      :thumb-style="{
        width: '400px'
      }"
      source="https://dream2023.github.io/vue-ele-gallery/example_1.jpg"
    ></ele-gallery>
    <h3>h5 视频类型</h3>
    <ele-gallery
      :source="{
        title: 'Sintel',
        src: 'https://archive.org/download/Sintel/sintel-2048-surround.mp4',
        thumb: 'https://i.imgur.com/MUSw4Zu.jpg'
      }"
      :thumb-style="{
        width: '400px'
      }"
      type="video"
    ></ele-gallery>
    <h3>iframe 类型</h3>
    <ele-gallery
      :source="{
        title: 'Last Moon',
        src: 'https://player.vimeo.com/video/73686146?color=ffffff',
        thumb: 'https://secure-a.vimeocdn.com/ts/448/835/448835699_960.jpg'
      }"
      :thumb-style="{
        width: '400px'
      }"
      type="iframe"
    ></ele-gallery>

    <h1>image属性的四种写法</h1>
    <h3>单张图片</h3>
    <ele-gallery source="https://dream2023.github.io/vue-ele-gallery/example_1.jpg"></ele-gallery>
    <h3>多张图片</h3>
    <ele-gallery
      :source="[
        'https://dream2023.github.io/vue-ele-gallery/example_1.jpg',
        'https://dream2023.github.io/vue-ele-gallery/example_2.jpg'
      ]"
    ></ele-gallery>
    <h3>单个对象</h3>
    <ele-gallery
      :source="{
        title: '秀丽山河',
        src: 'https://dream2023.github.io/vue-ele-gallery/example_1.jpg',
        thumb: 'https://dream2023.github.io/vue-ele-gallery/example_thumb_1.jpg'
      }"
    ></ele-gallery>
    <h3>数组对象</h3>
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
    ></ele-gallery>

    <h1>定制化缩略图</h1>
    <h3>样式自定义</h3>
    <ele-gallery
      :source="[
        'https://dream2023.github.io/vue-ele-gallery/example_1.jpg',
        'https://dream2023.github.io/vue-ele-gallery/example_2.jpg'
      ]"
      :thumb-style="{
        borderRadius: '3px',
        border: '5px solid black',
        width: '150px'
      }"
    ></ele-gallery>
    <h3>插槽</h3>
    <ele-gallery
      :source="[
        'https://dream2023.github.io/vue-ele-gallery/example_1.jpg',
        'https://dream2023.github.io/vue-ele-gallery/example_2.jpg'
      ]"
    >
      <template v-slot:default="{thumb}">
        <el-card
          :body-style="{ padding: '12px' }"
          style="margin-right: 20px;"
        >
          <img
            :src="thumb"
            style="width: 150px"
          >
        </el-card>
      </template>
    </ele-gallery>
    <h1>定制化轮播图属性</h1>
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
    ></ele-gallery>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#box {
  width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
