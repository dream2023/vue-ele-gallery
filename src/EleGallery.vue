<template>
  <div>
    <ele-gallery-thumb
      :thumbs="thumbs"
      :thumbStyle="thumbStyle"
      @preview="handlePreview"
    />
    <ele-gallery-dialog
      :carouselAttrs="carouselAttrs"
      :sources="computedImages"
      ref="dialog"
    />
  </div>
</template>

<script>
import EleGalleryThumb from './components/EleGalleryThumb'
import EleGalleryDialog from './components/EleGalleryDialog'

export default {
  name: 'EleGallery',
  props: {
    image: [String, Array, Object],
    // 缩略图样式
    thumbStyle: Object,
    // 轮播图属性
    carouselAttrs: Object
  },
  components: {
    EleGalleryThumb,
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
        // 例如: source: 'https://xxx.com/xx.jpg'
        return [this.getStringSource(images)]
      } else if (images instanceof Array) {
        // 传入参数为 array, 数据里面既可以有string 又可以有 object
        // 例如: source: [ { src: 'https://xxx.com/xx.jpg', title: 'xxx' }, 'https://xxx.com/xx.jpg' ]
        const res = []
        images.forEach((item) => {
          if (item instanceof Object) {
            res.push(this.getObjectSource(item))
          } else if (typeof item === 'string') {
            res.push(this.getStringSource(item))
          } else {
            console.warn('数组元素错误', images, item)
          }
        })
        return res
      } else if (images instanceof Object) {
        // 传入参数为 object
        // 例如: source: { src: 'https://xxx.com/xx.jpg', title: 'xxx' }
        return [this.getObjectSource(images)]
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
    getStringSource (source) {
      return {
        src: source,
        thumb: source
      }
    },
    // 获取对象形式来源
    getObjectSource (source) {
      source.thumb = source.thumb || source.src
      return source
    }
  }
}
</script>
