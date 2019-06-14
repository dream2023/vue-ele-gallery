<template>
  <div
    class="ele-gallery"
    v-if="source"
  >
    <!-- 预览图 -->
    <div class="el-upload-list el-upload-list--picture-card">
      <li
        :key="index"
        class="el-upload-list__item"
        v-for="(source, index) of computedSources"
      >
        <slot v-bind="{source: source, index: index}">
          <el-image
            :lazy="lazy"
            :src="source.thumb"
            :style="computedStyle"
            fit="cover"
            v-if="source.type === 'image'"
          />
          <video
            :src="source.thumb"
            :style="computedStyle"
            v-else-if="source.type === 'video'"
          ></video>
          <div
            :style="computedStyle"
            class="ele-gallery-iframe embed-responsive embed-responsive-16by9"
            v-else-if="source.type === 'iframe'"
          >
            <iframe
              :src="source.thumb"
              allowfullscreen="true"
              border="0"
              frameborder="no"
              framespacing="0"
              scrolling="no"
            ></iframe>
          </div>
        </slot>

        <span class="el-upload-list__item-actions">
          <span @click="handlePreview(index, source)">
            <i :class="viewClass"></i>
          </span>
          <span
            @click="handleRemove(index)"
            v-if="removeFn"
          >
            <i class="el-icon-delete"></i>
          </span>
          <slot
            name="action"
            v-bind="{source: source, index: index}"
          />
        </span>
      </li>
    </div>

    <ele-gallery-dialog
      :carouselAttrs="carouselAttrs"
      :sliceSingle="sliceSingle"
      :sources="computedSources"
      :title="title"
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
    // 缩略图大小, 宽 === 高时, 简略写法
    size: Number,
    // 缩略图宽度, 当给定width时, 会覆盖size的值
    width: Number,
    // 缩略图高度, 当给定height时, 会覆盖size值
    height: Number,
    // 缩略图是否懒加载
    lazy: {
      type: Boolean,
      default: false
    },
    // 源
    source: [String, Array, Object],
    // 缩略图后缀
    // 当type为image时, 且未指定thumb, 可通过thumbSuffix设置缩略图
    thumbSuffix: String,
    // 缩略图样式
    thumbStyle: Object,
    // 轮播图属性
    carouselAttrs: Object,
    // 删除函数
    removeFn: Function,
    // 统一的弹框标题
    title: String,
    // 强制多张图片按照单张显示
    sliceSingle: {
      type: Boolean,
      default: false
    }
  },
  components: {
    EleGalleryDialog
  },
  computed: {
    viewClass () {
      if (this.type === 'video' || this.type === 'iframe') {
        return 'el-icon-video-play'
      } else {
        return 'el-icon-zoom-in'
      }
    },
    computedStyle () {
      let width = this.width || this.size
      let height = this.height || this.size
      if (this.type === 'image') {
        width = width ? width + 'px' : '150px'
        height = height ? height + 'px' : '150px'
      } else if (this.type === 'video') {
        width = width ? width + 'px' : '360px'
        height = height ? height + 'px' : 'auto'
      } else if (this.type === 'iframe') {
        width = width ? width + 'px' : '360px'
        height = height ? height + 'px' : 'auto'
      }

      return Object.assign({}, { width, height, display: 'block' }, this.thumbStyle)
    },
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
    handleRemove (index) {
      this.removeFn(index)
    },
    // 获取字符串形式来源
    getStringSource (src) {
      let thumb = src
      if (this.type === 'image' && this.thumbSuffix) {
        thumb += this.thumbSuffix
      }
      return {
        type: this.type,
        src: src,
        thumb: thumb
      }
    },
    // 获取对象形式来源
    getObjectSource (source) {
      source.type = source.thumb ? 'image' : this.type
      source.thumb = source.thumb || source.src
      return source
    }
  }
}
</script>

<style>
.ele-gallery .el-upload-list__item {
  width: auto;
  height: auto;
}

.ele-gallery-image {
  max-width: 100%;
  max-height: 100%;
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
