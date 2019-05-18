<template>
  <div>
    <h1>image属性的四种写法</h1>
    <h2>单张图片</h2>
    <ele-gallery image="https://dream2023.github.io/vue-ele-gallery/example_1.jpg"></ele-gallery>
    <h2>多张图片</h2>
    <ele-gallery
      :image="[
        'https://dream2023.github.io/vue-ele-gallery/example_1.jpg',
        'https://dream2023.github.io/vue-ele-gallery/example_2.jpg'
      ]"
    ></ele-gallery>
    <h2>单个对象</h2>
    <ele-gallery
      :image="{
        title: '秀丽山河',
        src: 'https://dream2023.github.io/vue-ele-gallery/example_1.jpg',
        thumb: 'https://dream2023.github.io/vue-ele-gallery/example_thumb_1.jpg'
      }"
    ></ele-gallery>
    <h2>数组对象</h2>
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
    ></ele-gallery>

    <h1>定制化缩略图</h1>
    <h3>样式自定义</h3>
    <ele-gallery
      :image="[
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
      :image="[
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
      :image="[
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
  name: 'App',
  data () {
    return {}
  },
  methods: {},
  mounted () {}
}
</script>

<style scoped>
</style>
