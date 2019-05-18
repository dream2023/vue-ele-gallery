<template>
  <div>
    <!-- 预览图 -->
    <div
      :class="'ele-gallery-thumb-wrapper_' + type"
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
        <div
          class="ele-gallery-thumb-icon"
          v-if="type !== 'image'"
        >
          <i class="el-icon-video-play"></i>
        </div>
      </slot>
    </div>

    <ele-gallery-dialog
      :carouselAttrs="carouselAttrs"
      :sources="computedSources"
      :type="type"
      ref="dialog"
    />
  </div>
</template>

<script>
import EleGalleryDialog from './components/EleGalleryDialog'

export default {
  name: 'ele-gallery',
  props: {
    // 类型(支持图片, 视频, iframe)
    type: {
      type: String,
      default: 'image',
      validator (value) {
        return ['image', 'video', 'iframe'].includes(value)
      }
    },
    source: [String, Array, Object],
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
      return this.computedSources.map((item) => {
        return item.thumb
      })
    },
    computedSources () {
      const sources = this.source
      if (typeof sources === 'string') {
        // 传入参数为 string
        return [this.getStringSource(sources)]
      } else if (sources instanceof Array) {
        // 传入参数为 array, 数据里面既可以有string 又可以有 object
        const res = []
        sources.forEach((item) => {
          if (item instanceof Object) {
            res.push(this.getObjectSource(item))
          } else if (typeof item === 'string') {
            res.push(this.getStringSource(item))
          } else {
            console.warn('数组元素错误', sources, item)
          }
        })
        return res
      } else if (sources instanceof Object) {
        // 传入参数为 object
        return [this.getObjectSource(sources)]
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
    getStringSource (image) {
      return {
        src: image,
        thumb: image
      }
    },
    // 获取对象形式来源
    getObjectSource (image) {
      image.thumb = image.thumb || image.src
      return image
    }
  }
}
</script>

<style>
.ele-gallery-thumb-wrapper {
  display: inline-block;
  position: relative;
  margin-right: 8px;
  font-size: 0;
}

.ele-gallery-thumb-icon {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  text-align: center;
  line-height: 100%;
  vertical-align: middle;
  font-size: 50px;
  transition: all 0.2s;
}
.ele-gallery-thumb-icon:hover {
  background: rgba(0, 0, 0, 0.3);
}

.ele-gallery-thumb-wrapper .el-icon-video-play {
  position: absolute;
  left: 50%;
  top: 50%;
  color: #cfcfcf;
  cursor: pointer;
  padding: 20px;
  transition: 0.3s;
  transform: translate(-50%, -50%);
}
.ele-gallery-thumb-wrapper .el-icon-video-play:hover {
  color: #ffffff;
}
.ele-gallery-thumb-wrapper_image .ele-gallery-thumb-image {
  border-radius: 5%;
}
.ele-gallery-thumb-image {
  cursor: pointer;
  height: auto;
  width: 100px;
}
</style>
