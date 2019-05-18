<template>
  <div>
    <easy-github-pages
      :menus="menuList"
      author="zhangchaojie"
      githubUrl="https://github.com/dream2023/vue-ele-gallery/"
      title="vue-ele-gallery | 利用 element ui 组件库构成的画廊组件"
    >
      <section id="intro">
        <h2>介绍</h2>
        <p>vue-ele-gallery 利用 element ui 组件库, 打造的画廊组件, 主要特点如下:</p>
        <blockquote>
          <ul>
            <li>可以传递 字符串(单张图片)、数组(多张图片)、对象</li>
            <li>可以设置缩略图、标题等信息</li>
          </ul>
        </blockquote>
        <img
          :src="`${publicPath}example.gif`"
          alt="vue-ele-gallery"
        >
      </section>
      <section id="install">
        <h2>安装</h2>
        <blockquote>npm install vue-ele-gallery --save</blockquote>
      </section>
      <section id="usage">
        <h2>使用</h2>
        <blockquote>
          <pre class="language-js">
            <code class="language-js">
              // 全局引入
              import EleGallery from 'vue-ele-gallery'
              Vue.component(EleGallery.name, EleGallery)
            </code>
          </pre>
        </blockquote>
        <blockquote>
          <pre class="language-js">
            <code class="language-js">
              // 局部引入
              import EleGallery from 'vue-ele-gallery'
              export default {
                components: {
                  EleGallery
                }
              }
            </code>
          </pre>
        </blockquote>
      </section>
      <section id="example">
        <h2>示例</h2>
        <div>
          <h3>image属性的四种写法</h3>
          <iframe
            allowfullscreen="true"
            allowtransparency="true"
            frameborder="no"
            height="265"
            scrolling="no"
            src="//codepen.io/dream2023/embed/YbQaMj/?height=265&theme-id=dark&default-tab=html,result"
            style="width: 100%;"
            title="vue-ele-gallery"
          >
            See the Pen
            <a href="https://codepen.io/dream2023/pen/YbQaMj/">vue-ele-gallery</a> by 二当家的
            (
            <a href="https://codepen.io/dream2023">@dream2023</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
        <div>
          <h3>定制化缩略图</h3>
          <iframe
            allowfullscreen="true"
            allowtransparency="true"
            frameborder="no"
            height="265"
            scrolling="no"
            src="//codepen.io/dream2023/embed/vwZrgG/?height=265&theme-id=dark&default-tab=html,result"
            style="width: 100%;"
            title="vue-ele-gallery 缩略图属性"
          >
            See the Pen
            <a href="https://codepen.io/dream2023/pen/vwZrgG/">vue-ele-gallery 缩略图属性</a> by 二当家的
            (
            <a href="https://codepen.io/dream2023">@dream2023</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
        <div>
          <h3>定制化轮播图</h3>
          <iframe
            allowfullscreen="true"
            allowtransparency="true"
            frameborder="no"
            height="265"
            scrolling="no"
            src="//codepen.io/dream2023/embed/mYwKwO/?height=265&theme-id=dark&default-tab=html,result"
            style="width: 100%;"
            title="vue-ele-gallery 定制化轮播图属性"
          >
            See the Pen
            <a href="https://codepen.io/dream2023/pen/mYwKwO/">vue-ele-gallery 定制化轮播图属性</a> by 二当家的
            (
            <a href="https://codepen.io/dream2023">@dream2023</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
      </section>
      <section id="props">
        <h2>Props参数</h2>
        <blockquote>
          <pre class="language-js">
            <code class="language-js">
              props: {
                image: [String, Array, Object],
                // 缩略图样式
                thumbStyle: Object,
                // 轮播图属性
                carouselAttrs: Object
              }
            </code>
          </pre>
        </blockquote>
      </section>
      <section id="reference">
        <h2>参考链接</h2>
        <blockquote>
          <ul>
            <li>
              <a
                href="https://element.eleme.cn/#/zh-CN/component/carousel"
                target="_blank"
              >element-ui carousel 组件</a>
            </li>
            <li>
              <a
                href="https://element.eleme.cn/#/zh-CN/component/dialog"
                target="_blank"
              >element-ui dialog 组件</a>
            </li>
            <li>
              <a
                href="https://github.com/blueimp/Gallery"
                target="_blank"
              >blueimp/Gallery</a>
            </li>
          </ul>
        </blockquote>
      </section>
    </easy-github-pages>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      publicPath: process.env.BASE_URL,
      menuList: [
        {
          title: '介绍',
          href: 'intro'
        },
        {
          title: '安装',
          href: 'install'
        },
        {
          title: '使用',
          href: 'usage'
        },
        {
          title: '示例',
          href: 'example'
        },
        {
          title: 'Props参数',
          href: 'props'
        },
        {
          title: '参考链接',
          href: 'reference'
        }
      ]
    }
  },
  methods: {},
  mounted () {}
}
</script>
