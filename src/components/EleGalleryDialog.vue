<template>
  <el-dialog
    :visible.sync="isShowPreview"
    append-to-body
    style="text-align: center"
  >
    <div slot="title">{{sourceTitle || title}}</div>
    <!-- 视频 -->
    <template v-if="type === 'video'">
      <video
        :src="sources[initialIndex].src"
        autoplay="autoplay"
        class="ele-gallery-video"
        controls="controls"
        v-if="isShowPreview"
        width="100%"
      ></video>
    </template>
    <!-- iframe -->
    <template v-else-if="type === 'iframe'">
      <div
        class="ele-gallery-iframe embed-responsive embed-responsive-16by9"
        v-if="isShowPreview"
      >
        <iframe
          :src="sources[initialIndex].src"
          allowfullscreen="true"
          border="0"
          frameborder="no"
          framespacing="0"
          scrolling="no"
        ></iframe>
      </div>
    </template>

    <!-- 图片 -->
    <template v-else-if="type === 'image'">
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
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'ele-gallery-dialog',
  props: {
    type: String,
    title: String,
    sources: Array,
    carouselAttrs: Object
  },
  data () {
    return {
      sourceTitle: '',
      initialIndex: 0,
      isShowPreview: false
    }
  },
  methods: {
    startPreview (index) {
      this.isShowPreview = true
      this.initialIndex = index
      this.sourceTitle = this.sources[index].title
    },
    handleCarouselChange (index) {
      if (this.sources[index] && this.sources[index].title) {
        this.sourceTitle = this.sources[index].title
      } else {
        this.sourceTitle = ''
      }
    }
  }
}
</script>
