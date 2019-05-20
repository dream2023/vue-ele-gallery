<template>
  <el-dialog
    :visible.sync="isShowPreview"
    append-to-body
    style="text-align: center"
  >
    <div slot="title">{{title}}</div>
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
    sources: Array,
    carouselAttrs: Object
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
      this.isShowPreview = true
      this.initialIndex = index
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

.ele-gallery-iframe.embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
}
.ele-gallery-iframe.embed-responsive .embed-responsive-item,
.ele-gallery-iframe.embed-responsive iframe,
.ele-gallery-iframe.embed-responsive embed,
.ele-gallery-iframe.embed-responsive object,
.ele-gallery-iframe.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.ele-gallery-iframe.embed-responsive-16by9 {
  padding-bottom: 56.25%;
}
.ele-gallery-iframe.embed-responsive-4by3 {
  padding-bottom: 75%;
}
</style>
