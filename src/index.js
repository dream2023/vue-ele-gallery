import EleGallery from './EleGallery'

const Plugin = {}

Plugin.install = function (Vue) {
  Vue.component(EleGallery.name, EleGallery)
  Vue.mixin(EleGallery)
}

if (typeof window !== 'undefined' && window.Vue) {
  Plugin.install(window.Vue)
}

export default EleGallery
