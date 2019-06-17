<template>
  <div id="box">
    <h2>type三种类型</h2>
    <h4>图片类型(默认)</h4>
    <ele-gallery
      :size="200"
      source="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      title="图片类型"
    ></ele-gallery>
    <h4>视频类型</h4>
    <ele-gallery
      source="https://s3.pstatp.com/aweme/resource/web/static/image/index/tvc-v2_30097df.mp4"
      type="video"
    ></ele-gallery>
    <h4>iframe</h4>
    <ele-gallery
      source="https://player.vimeo.com/video/73686146?color=ffffff"
      type="iframe"
    ></ele-gallery>

    <h2>source属性的四种写法</h2>
    <h4>单个(字符串)</h4>
    <ele-gallery source="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></ele-gallery>
    <h4>多个(数组)</h4>
    <ele-gallery
      :sliceSingle="true"
      :source="[
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
      ]"
    ></ele-gallery>
    <h4>单个(对象, 用于指定弹窗标题和缩略图)</h4>
    <ele-gallery
      :source="{
        title: '秀丽山河',
        src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        thumb: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }"
    ></ele-gallery>
    <h4>多个(对象, 用于指定弹窗标题和缩略图)</h4>
    <ele-gallery
      :source="[
        {
          title: '秀丽山河',
          src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          thumb: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          title: '秀丽山河2',
          src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          thumb: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        }
      ]"
    ></ele-gallery>

    <h2>定制化缩略图</h2>
    <h4>样式自定义</h4>
    <ele-gallery
      :height="180"
      :source="[
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
      ]"
      :thumb-style="{
        borderRadius: '3px'
      }"
      :width="300"
    ></ele-gallery>
    <h4>插槽</h4>
    <ele-gallery
      :source="[
        {
          title: '秀丽山河',
          src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          thumb: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          title: '秀丽山河2',
          src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          thumb: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        }
      ]"
    >
      <template v-slot:default="{index, source }">
        <el-card style="text-align: center">
          <img
            :src="source.thumb"
            style="width: 150px"
          >
          <div style="margin-top: 10px;">{{source.title}}</div>
        </el-card>
      </template>
    </ele-gallery>
    <h2>定制化轮播图属性</h2>
    <ele-gallery
      :carousel-attrs="{
        interval: 4000,
        type: 'card',
        height: '200px'
      }"
      :source="[
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg'
      ]"
    ></ele-gallery>
    <h2>其他</h2>
    <h4>删除</h4>
    <ele-gallery
      :remove-fn="handleRemove"
      source="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    ></ele-gallery>
    <h4>action 插槽</h4>
    <ele-gallery source="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
      <template v-slot:action="{index, source}">
        <span>
          <i class="el-icon-folder-opened"></i>
        </span>
        <span>
          <i class="el-icon-headset"></i>
        </span>
      </template>
    </ele-gallery>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleRemove (index) {
      console.log(index)
    }
  }
}
</script>

<style>
#box {
  width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
