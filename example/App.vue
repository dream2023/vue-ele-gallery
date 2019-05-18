<template>
  <div>
    <!-- 传递单张图片 -->
    <ele-gallery image="https://dream2023.github.io/vue-ele-gallery/example_1.jpg"/>
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
        thumb: 'https://dream2023.github.io/vue-ele-gallery/example_thumb_1.jpg'
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

    <!-- 定制化缩略图样式 -->
    <ele-gallery :thumbStyle="{
      width: '200px'
    }"/>

    <!-- 定制化轮播图属性 -->
    <ele-gallery :carouselAttrs="{
      type: 'card'
    }"/>
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
