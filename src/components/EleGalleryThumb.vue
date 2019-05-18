<template>
  <div>
    <img
      :key="index"
      :src="thumb"
      :style="thumbStyle"
      @click="handleThumbClick(index)"
      class="ele-gallery-thumb-image"
      v-for="(thumb, index) of images"
    >
  </div>
</template>

<script>
// 缩略图展示
export default {
  name: 'ele-gallery-thumb',
  props: {
    thumbStyle: Object,
    images: Array
  },
  methods: {
    // 点击缩略图
    handleThumbClick (index) {
      this.$emit('preview', index)
    }
  }
}
</script>

<style>
.ele-gallery-thumb-image {
  cursor: pointer;
  height: auto;
  width: 100px;
  margin-right: 8px;
  border-radius: 5%;
}
</style>
