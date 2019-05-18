<template>
  <el-dialog
    :visible.sync="isShowPreview"
    style="text-align: center"
  >
    <div slot="title">{{title}}</div>
    <!-- 单张图片 -->
    <img
      :src="images[0].src"
      class="ele-gallery-image"
      v-if="images.length === 1"
    >

    <!-- 多张图片 -->
    <el-carousel
      :initial-index="initialIndex"
      @change="handleCarouselChange"
      indicator-position="outside"
      v-bind="carouselAttrs"
      v-else
    >
      <el-carousel-item
        :key="index"
        v-for="(image, index) in images"
      >
        <img
          :src="image.src"
          class="ele-gallery-image"
        >
      </el-carousel-item>
    </el-carousel>
  </el-dialog>
</template>

<script>
export default {
  name: 'ele-gallery-dialog',
  props: {
    images: {
      type: Array
    },
    carouselAttrs: {
      type: Object
    }
  },
  data () {
    return {
      title: '',
      initialIndex: 0,
      isShowPreview: false
    }
  },
  methods: {
    startPreview (index) {
      this.initialIndex = index
      this.isShowPreview = true
      this.title = this.images[index].title
    },
    handleCarouselChange (index) {
      if (this.images[index] && this.images[index].title) {
        this.title = this.images[index].title
      } else {
        this.title = ''
      }
    }
  }
}
</script>

<style>
.ele-gallery-image {
  width: 100%;
}
</style>
