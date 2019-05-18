<template>
  <el-dialog
    :visible.sync="isShowPreview"
    append-to-body
    style="text-align: center"
  >
    <div
      slot="title"
      style="height: 1em"
    >{{title}}</div>
    <!-- 单张图片 -->
    <img
      :src="sources[0].src"
      class="ele-gallery-image"
      v-if="sources.length === 1"
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
        v-for="(image, index) in sources"
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
  props: {
    sources: {
      type: Array
    },
    carouselAttrs: {
      type: Object
    }
  },
  name: 'EleGalleryDialog',
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
      this.title = this.sources[index].title
    },
    handleCarouselChange (index) {
      if (this.sources[index] && this.sources[index].title) {
        this.title = this.sources[index].title
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
