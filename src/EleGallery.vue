<template>
  <div>
    <!-- 预览图 -->
    <div
      :key="index"
      @click="handlePreview(index)"
      class="ele-gallery-thumb-wrapper"
      v-for="(thumb, index) of thumbs"
    >
      <slot v-bind:thumb="thumb">
        <img
          :key="index"
          :src="thumb"
          :style="thumbStyle"
          class="ele-gallery-thumb-image"
        >
      </slot>
    </div>

    <ele-gallery-dialog
      :carouselAttrs="carouselAttrs"
      :images="computedImages"
      ref="dialog"
    />
  </div>
</template>

<script>
import EleGalleryDialog from './components/EleGalleryDialog'

export default {
  name: 'ele-gallery',
  props: {
    image: [String, Array, Object],
    // 缩略图样式
    thumbStyle: Object,
    // 轮播图属性
    carouselAttrs: Object
  },
  components: {
    EleGalleryDialog
  },
  computed: {
    // 缩略图
    thumbs () {
      return this.computedImages.map((item) => {
        return item.thumb
      })
    },
    computedImages () {
      const images = this.image
      if (typeof images === 'string') {
        // 传入参数为 string
        return [this.getStringImage(images)]
      } else if (images instanceof Array) {
        // 传入参数为 array, 数据里面既可以有string 又可以有 object
        const res = []
        images.forEach((item) => {
          if (item instanceof Object) {
            res.push(this.getObjectImage(item))
          } else if (typeof item === 'string') {
            res.push(this.getStringImage(item))
          } else {
            console.warn('数组元素错误', images, item)
          }
        })
        return res
      } else if (images instanceof Object) {
        // 传入参数为 object
        return [this.getObjectImage(images)]
      } else {
        return []
      }
    }
  },
  methods: {
    // 点击查看
    handlePreview (index) {
      this.$refs.dialog.startPreview(index)
    },
    // 获取字符串形式来源
    getStringImage (image) {
      return {
        src: image,
        thumb: image
      }
    },
    // 获取对象形式来源
    getObjectImage (image) {
      image.thumb = image.thumb || image.src
      return image
    }
  }
}
</script>

<style>
.ele-gallery-thumb-wrapper {
  display: inline-block;
}
.ele-gallery-thumb-image {
  cursor: pointer;
  height: auto;
  width: 100px;
  margin-right: 8px;
  border-radius: 5%;
}
</style>
